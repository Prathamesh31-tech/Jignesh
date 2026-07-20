"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Share2,
  Calendar,
  Users,
  BarChart3,
  Wrench,
  Video,
} from "lucide-react";

interface SkillItem {
  id: string;
  number: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  accentGradient: string;
}

export default function Skills() {
  const exactSkills: SkillItem[] = [
    {
      id: "social-media",
      number: "01",
      name: "Social Media Management (Instagram & Facebook)",
      category: "Brand Management",
      icon: <Share2 className="h-6 w-6 text-purple-400" />,
      accentGradient: "from-purple-600/20 to-purple-900/5",
    },
    {
      id: "content-strategy",
      number: "02",
      name: "Content Strategy & Content Calendar Planning",
      category: "Strategy & Planning",
      icon: <Calendar className="h-6 w-6 text-indigo-400" />,
      accentGradient: "from-indigo-600/20 to-indigo-900/5",
    },
    {
      id: "influencer-marketing",
      number: "03",
      name: "Influencer Marketing & Campaign Management",
      category: "Campaigns & Outreach",
      icon: <Users className="h-6 w-6 text-pink-400" />,
      accentGradient: "from-pink-600/20 to-pink-900/5",
    },
    {
      id: "analytics-reporting",
      number: "04",
      name: "Social Media Analytics & Reporting",
      category: "Data & Insights",
      icon: <BarChart3 className="h-6 w-6 text-cyan-400" />,
      accentGradient: "from-cyan-600/20 to-cyan-900/5",
    },
    {
      id: "ugc-creation",
      number: "05",
      name: "UGC Content Creation",
      category: "Creative Content",
      icon: <Video className="h-6 w-6 text-rose-400" />,
      accentGradient: "from-rose-600/20 to-rose-900/5",
    },
    {
      id: "tools-suite",
      number: "06",
      name: "MS Excel, Google Docs & Sheets, Canva",
      category: "Tools & Software",
      icon: <Wrench className="h-6 w-6 text-emerald-400" />,
      accentGradient: "from-emerald-600/20 to-emerald-900/5",
    },
  ];

  return (
    <section id="skills" className="relative w-full pt-12 pb-24 px-6 md:px-16 bg-[#0d0d0d] overflow-hidden">
      {/* Centered Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-4 leading-tight">
            SKILLS &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
              EXPERTISE
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            A targeted suite of social media strategy, content creation, analytics, and campaign management skills.
          </p>
        </div>

        {/* Centered Grid of 6 Exact Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exactSkills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-2xl glass-card p-6 md:p-8 min-h-[220px] overflow-hidden cursor-default hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Subtle hover gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-500 group-hover:text-purple-400 transition-colors">
                  {skill.number}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <span className="text-[11px] font-mono tracking-widest text-purple-400/80 uppercase block mb-2">
                  {skill.category}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-purple-200 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Subtle bottom indicator line */}
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
