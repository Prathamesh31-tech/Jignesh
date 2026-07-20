"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Building2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  badge: string;
  points: string[];
  gradient: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "break-the-code",
      company: "Break The Code",
      role: "Social Media Marketing Intern",
      duration: "October 2025 - Present",
      badge: "20+ BRANDS MANAGED",
      gradient: "from-purple-600/20 via-purple-600/5 to-transparent",
      points: [
        "Responsible for managing social media activities for 20+ brands across Instagram and Facebook, ensuring consistent brand presence.",
        "Led the planning and execution of monthly content calendars aligned with marketing goals.",
        "Handled moment marketing initiatives and oversaw daily posting on Instagram and Facebook.",
        "Prepared and analyzed monthly social media performance reports with actionable insights.",
        "Coordinated with clients and managed influencer collaborations to drive reach and engagement.",
      ],
    },
    {
      id: "creaators-hub",
      company: "Creaators Hub",
      role: "Junior Social Media Marketing Manager",
      duration: "May 2026 - Present",
      badge: "CONTENT & ANALYTICS MANAGER",
      gradient: "from-pink-600/20 via-pink-600/5 to-transparent",
      points: [
        "Manage all social media accounts.",
        "Plan and execute social media content strategy.",
        "Script writing for short-form content.",
        "Monitor performance and optimize content using analytics.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative w-full pt-12 pb-24 px-4 sm:px-6 md:px-16 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      {/* Centered Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-pink-900/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-3 sm:mb-4 leading-tight">
            WORK{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
              EXPERIENCE
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light max-w-xl mx-auto px-2">
            Professional background in social media marketing and brand management.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-2xl glass-card p-5 sm:p-6 md:p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Subtle top hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10 pb-5 sm:pb-6 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400 shrink-0">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400 font-medium ml-1">
                    <span className="text-purple-300 font-semibold">{exp.role}</span>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-gray-300">
                    <Calendar className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span>{exp.duration}</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    {exp.badge}
                  </span>
                </div>
              </div>

              {/* Achievements / Points List */}
              <div className="relative z-10 flex flex-col gap-3.5">
                {exp.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
