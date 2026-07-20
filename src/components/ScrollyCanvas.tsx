"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 105;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  
  // Array to cache preloaded Image objects
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  // useScroll to map the entire 500vh scroll range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame indexes (0 to 104)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Load all images on mount
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedCount++;
      setImagesLoaded(loadedCount);
      if (loadedCount === TOTAL_FRAMES) {
        imagesRef.current = loadedImages;
        setIsPreloaded(true);
        // Draw initial frame
        drawFrame(0);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Format index as 3 digits (001, 002, ..., 105)
      const frameNum = String(i).padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameNum}.png`;
      img.onload = handleImageLoad;
      img.onerror = () => {
        console.error(`Error loading frame ${frameNum}`);
        // Increment anyway so we don't block the site completely if one image fails
        handleImageLoad();
      };
      loadedImages.push(img);
    }
  }, []);

  // Helper to draw a single frame to the canvas with "object-fit: cover"
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length < TOTAL_FRAMES) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img) return;

    // Set canvas dimensions based on client size and device pixel ratio for maximum crispness
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw image
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    
    // Save the drawn frame index to ref
    currentFrameRef.current = index;
  };

  // Re-draw when frameIndex changes from scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const roundedIndex = Math.round(latest);
    if (roundedIndex !== currentFrameRef.current) {
      requestAnimationFrame(() => drawFrame(roundedIndex));
    }
  });

  // Re-draw on window resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isPreloaded]);

  const percentLoaded = Math.min(Math.round((imagesLoaded / TOTAL_FRAMES) * 100), 100);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Cinematic Loading Overlay */}
      <AnimatePresence>
        {!isPreloaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]"
          >
            <div className="relative flex flex-col items-center">
              {/* Outer pulsing neon ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-36 w-36 rounded-full border border-purple-500/20 blur-md"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-32 w-32 rounded-full border border-purple-500/40"
              />
              
              {/* Central text display */}
              <div className="z-10 flex flex-col items-center">
                <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase mb-2">Preloading Canvas</span>
                <span className="text-4xl font-extrabold tracking-tighter text-white font-sans text-glow">
                  {percentLoaded}%
                </span>
              </div>
            </div>
            
            {/* Elegant tiny status bar */}
            <div className="mt-8 w-48 h-[1px] bg-white/10 overflow-hidden relative rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                style={{ width: `${percentLoaded}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Canvas Container - full viewport, seamless under navbar */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover block"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Shadow overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/30 via-transparent to-[#121212]/30 pointer-events-none" />

        {/* Narrative Parallax Overlays */}
        {isPreloaded && <Overlay scrollYProgress={scrollYProgress} />}
      </div>
    </div>
  );
}
