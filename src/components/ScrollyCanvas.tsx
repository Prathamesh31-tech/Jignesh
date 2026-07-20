"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 105;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        if (i === 1) {
          requestAnimationFrame(() => drawFrame(0));
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;

    // Draw initial frame if cached
    drawFrame(0);
  }, []);

  // Helper to draw a single frame to the canvas with "object-fit: cover"
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    // Set canvas dimensions based on client size and device pixel ratio for maximum crispness
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (width === 0 || height === 0) return;

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
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
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
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
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
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
