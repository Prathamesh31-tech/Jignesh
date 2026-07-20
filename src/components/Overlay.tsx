"use client";

import React, { useState } from "react";
import { motion, MotionValue, useMotionValueEvent, AnimatePresence } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

interface SectionData {
  id: number;
  position: "center" | "left" | "right";
  badge: string;
  badgeColor?: "purple" | "pink" | "default";
  titleLine1: string;
  titleGradient: string;
  description: string;
  isSingleLine?: boolean;
}

const SECTIONS: SectionData[] = [
  {
    id: 0,
    position: "center",
    badge: "DIGITAL MARKETING & CONTENT STRATEGIST",
    badgeColor: "default",
    titleLine1: "JIGNESH",
    titleGradient: "MHATRE",
    description: "Marketing Graduate & Social Media Specialist Driving Brand Presence & Measurable Engagement",
    isSingleLine: true,
  },
  {
    id: 1,
    position: "left",
    badge: "◄ SOCIAL MEDIA EXPERTISE",
    badgeColor: "purple",
    titleLine1: "Managing 20+ Brands",
    titleGradient: "& Content Strategy",
    description: "Proven track record in monthly content calendar execution, moment marketing, and high-impact influencer collaborations.",
    isSingleLine: false,
  },
  {
    id: 2,
    position: "right",
    badge: "CAMPAIGN & ANALYTICS ►",
    badgeColor: "pink",
    titleLine1: "Performance Analytics",
    titleGradient: "& Script Writing",
    description: "Crafting short-form content scripts, tracking performance metrics, and optimizing reach across Instagram & Facebook.",
    isSingleLine: false,
  },
  {
    id: 3,
    position: "center",
    badge: "READY TO BUILD BRAND PRESENCE",
    badgeColor: "default",
    titleLine1: "DRIVING MEASURABLE",
    titleGradient: "ENGAGEMENT",
    description: "Specializing in digital marketing campaigns, audience analytics, and strategic brand management.",
    isSingleLine: true,
  },
];

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const [activeId, setActiveId] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.22) {
      setActiveId(0);
    } else if (latest >= 0.22 && latest < 0.52) {
      setActiveId(1);
    } else if (latest >= 0.52 && latest < 0.80) {
      setActiveId(2);
    } else {
      setActiveId(3);
    }
  });

  const current = SECTIONS[activeId];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 font-sans overflow-hidden">
      {/* Ambient background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Single Active Text Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{
            opacity: 0,
            y: 20,
            x: current.position === "left" ? -40 : current.position === "right" ? 40 : 0,
          }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{
            opacity: 0,
            y: -20,
            x: current.position === "left" ? -40 : current.position === "right" ? 40 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute inset-0 flex flex-col justify-center pt-16 sm:pt-20 pb-8 px-4 sm:px-8 md:px-16 w-full ${
            current.position === "center"
              ? "items-center text-center max-w-7xl mx-auto"
              : current.position === "left"
              ? "items-center text-center max-w-xl mx-auto md:items-start md:text-left md:max-w-xl md:mx-0 md:ml-8 lg:ml-20"
              : "items-center text-center max-w-xl mx-auto md:items-end md:text-right md:max-w-xl md:mx-0 md:ml-auto md:mr-8 lg:mr-20"
          }`}
        >
          {/* Badge / Subheading above title */}
          {current.badgeColor === "purple" ? (
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[9px] sm:text-[11px] font-mono tracking-wider mb-2.5 sm:mb-4 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping shrink-0" />
              <span>{current.badge}</span>
            </div>
          ) : current.badgeColor === "pink" ? (
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-[9px] sm:text-[11px] font-mono tracking-wider mb-2.5 sm:mb-4 max-w-full">
              <span>{current.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping shrink-0" />
            </div>
          ) : current.id === 3 ? (
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[9px] sm:text-[11px] font-mono tracking-wider mb-2.5 sm:mb-4 max-w-full">
              <span>{current.badge}</span>
            </div>
          ) : (
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.35em] text-purple-400 font-semibold mb-2 sm:mb-4 block max-w-xs sm:max-w-none text-center leading-normal">
              {current.badge}
            </span>
          )}

          {/* Main Heading */}
          {current.isSingleLine ? (
            <h1
              className={`flex flex-row whitespace-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-4 font-black tracking-tight text-white mb-3 sm:mb-6 uppercase text-glow leading-none w-full max-w-full overflow-hidden ${
                current.id === 3
                  ? "text-[clamp(1.1rem,4vw,3.2rem)]"
                  : "text-[clamp(1.4rem,7vw,4.8rem)]"
              }`}
            >
              <span className="whitespace-nowrap">{current.titleLine1}</span>
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
                {current.titleGradient}
              </span>
            </h1>
          ) : (
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase mb-3 sm:mb-6 text-glow">
              {current.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
                {current.titleGradient}
              </span>
            </h2>
          )}

          {/* Subtitle / Description */}
          <p
            className={`text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-full ${
              current.position === "center" ? "max-w-xl mx-auto text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em]" : "max-w-md"
            }`}
          >
            {current.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
