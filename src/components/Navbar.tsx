"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  navItems?: { label: string; href: string }[];
}

export default function Navbar({ navItems = [] }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-[#0a0a0a]/40 backdrop-blur-sm border-b border-white/5 py-5"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        {/* Brand Name / Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="text-white font-bold text-base md:text-lg tracking-tight hover:text-purple-400 transition-colors"
        >
          Jignesh Mhatre
        </a>

        {/* Navigation Links & Action Button */}
        <div className="flex items-center gap-6 md:gap-8">
          {navItems.length > 0 && (
            <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-wider text-gray-300">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* CTA Pill Button matching reference image */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            LET&apos;S COLLABORATE
          </a>
        </div>
      </div>
    </header>
  );
}
