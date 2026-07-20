"use client";

import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  cgpa?: string;
  type: string;
}

export default function Education() {
  const educationList: EducationItem[] = [
    {
      id: "mcom",
      year: "2025",
      degree: "Master of Commerce (M.Com) in Business Management",
      institution: "University of Mumbai",
      cgpa: "7.43 CGPA",
      type: "Post Graduation",
    },
    {
      id: "bms",
      year: "2021",
      degree: "Bachelor of Management Studies (BMS) in Marketing",
      institution: "University of Mumbai",
      cgpa: "6.91 CGPA",
      type: "Graduation",
    },
    {
      id: "hsc",
      year: "2018",
      degree: "Higher Secondary Certificate (HSC) in Commerce",
      institution: "Viva College",
      type: "Class XII",
    },
    {
      id: "ssc",
      year: "2016",
      degree: "Secondary School Certificate (SSC)",
      institution: "Rajguru H.M. Pandit Vidyalaya",
      type: "Class X",
    },
  ];

  return (
    <section id="education" className="relative w-full pt-16 pb-24 px-6 md:px-16 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Centered Minimal Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
            EDUCATION
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light whitespace-nowrap inline-block max-w-none">
            Academic background in commerce, marketing, and business management.
          </p>
        </div>

        {/* Minimalist Timeline List */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-6 md:pl-10 space-y-8">
          {educationList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 h-3.5 w-3.5 rounded-full bg-[#121212] border-2 border-purple-500 group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]" />

              {/* Desktop Year Label on Left */}
              <div className="hidden md:block absolute -left-36 top-5 text-right w-24 font-mono text-sm text-purple-300 font-bold">
                {item.year}
              </div>

              {/* Clean Minimalist Card */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="md:hidden font-mono text-xs text-purple-400 font-bold">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-purple-300 uppercase bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    {item.type}
                  </span>
                  {item.cgpa && (
                    <span className="font-mono text-xs font-bold text-white bg-white/10 px-3 py-0.5 rounded-full border border-white/10">
                      {item.cgpa}
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
