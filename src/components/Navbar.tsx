"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  navItems?: { label: string; href: string }[];
}

export default function Navbar({ navItems = [] }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);

      setTimeout(() => {
        if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const targetEl = document.querySelector(href);
        if (targetEl) {
          const navHeight = 70;
          const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = Math.max(0, elementPosition - navHeight);
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 80);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
          : "bg-[#0a0a0a]/40 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-12 flex items-center justify-between py-3.5 md:py-5">
        {/* Brand Name / Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="text-white font-bold text-base md:text-lg tracking-tight hover:text-purple-400 transition-colors"
        >
          Jignesh Mhatre
        </a>

        {/* Navigation Links & Action Button */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
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

          {/* CTA Pill Button (Hidden on Mobile, shown on tablet/desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-white text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            LET&apos;S COLLABORATE
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none rounded-lg active:bg-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10 max-h-[calc(100vh-65px)] overflow-y-auto shadow-2xl"
          >
            <div className="px-5 py-6 flex flex-col gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-white transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-purple-400 text-xs">→</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-4 w-full text-center bg-white text-black font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-lg"
              >
                LET&apos;S COLLABORATE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
