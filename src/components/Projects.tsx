"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  points: string[];
  gradient: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const researchProjects: ProjectItem[] = [
    {
      id: "celebrity-advertising",
      number: "01",
      title: "Research Project on Role Of Celebrity In Advertising",
      category: "Consumer Behavior & Advertising",
      badge: "CONSUMER PSYCHOLOGY",
      gradient: "from-purple-600/20 via-purple-600/5 to-transparent",
      icon: <TrendingUp className="h-5 w-5 text-purple-400" />,
      points: [
        "Studied consumer reactions to celebrity endorsements.",
        "Gained experience in research and data presentation.",
      ],
    },
    {
      id: "quiet-luxury",
      number: "02",
      title: "Research Project on Challenges and Opportunity in Quiet Luxury",
      category: "Market Trends & Strategy",
      badge: "LUXURY MARKET TRENDS",
      gradient: "from-pink-600/20 via-pink-600/5 to-transparent",
      icon: <Sparkles className="h-5 w-5 text-pink-400" />,
      points: [
        "Explored customer behavior and market trends.",
        "Developed skills in compiling structured reports.",
      ],
    },
  ];

  return (
    <section id="projects" className="relative w-full pt-12 pb-24 px-4 sm:px-6 md:px-16 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      {/* Centered Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-900/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-3 sm:mb-4 leading-tight">
            RESEARCH &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
              PROJECTS
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light max-w-xl mx-auto px-2">
            In-depth market research, consumer psychology, and strategic analysis.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {researchProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-2xl glass-card p-5 sm:p-6 md:p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-300 min-h-[260px] sm:min-h-[280px]"
            >
              {/* Subtle top hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between mb-5 sm:mb-6 relative z-10 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-colors shrink-0">
                      {proj.icon}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-purple-500/20 truncate max-w-[150px] sm:max-w-none">
                      {proj.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-gray-500 group-hover:text-purple-400 transition-colors">
                    {proj.number}
                  </span>
                </div>

                {/* Title */}
                <div className="relative z-10 mb-5 sm:mb-6">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-purple-300 uppercase block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <div className="relative z-10 flex flex-col gap-2.5 sm:gap-3">
                  {proj.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="relative z-10 mt-6 sm:mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                <span>Academic Research</span>
                <span className="text-purple-400 font-mono font-semibold">Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
