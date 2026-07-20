"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  Play,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  badge: string;
  src: string;
  heightClass?: string;
  views?: string;
  likes?: string;
  audio?: string;
}

interface Album {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  itemCount: string;
  tags: string[];
  items: MediaItem[];
}

export default function MyWork() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const albums: Album[] = [
    {
      id: "static-creative-showcase",
      title: "Static Creatives",
      subtitle: "High-impact static post designs, single-image ad banners, and visual branding assets.",
      coverImage: "/assets/static_cover.png",
      itemCount: "4 Static Assets",
      tags: ["Static Posts", "Ad Banners", "Branding"],
      items: [
        {
          id: "s1",
          type: "image",
          title: "Minimalist Product Launch Poster",
          badge: "Brand Ad",
          src: "/assets/static_cover.png",
          heightClass: "h-96",
        },
        {
          id: "s2",
          type: "image",
          title: "Sleek Tech Feature Showcase Banner",
          badge: "Feature Banner",
          src: "/assets/festival_cover.png",
          heightClass: "h-64",
        },
        {
          id: "s3",
          type: "image",
          title: "E-commerce Seasonal Sale Creative",
          badge: "Sale Banner",
          src: "/assets/ugc_cover.png",
          heightClass: "h-80",
        },
        {
          id: "s4",
          type: "image",
          title: "Corporate Event Keynote Invitation",
          badge: "Event Banner",
          src: "/assets/festival_tall.png",
          heightClass: "h-96",
        },
      ],
    },
    {
      id: "grid-carousel-layouts",
      title: "Grid & Carousels",
      subtitle: "Interactive multi-slide carousels, cohesive grid themes, and seamless puzzle layout designs.",
      coverImage: "/assets/grid_cover.png",
      itemCount: "4 Grid Layouts",
      tags: ["Carousel", "Grid Theme", "Puzzle Grid"],
      items: [
        {
          id: "g1",
          type: "image",
          title: "Seamless Instagram Carousel Outline",
          badge: "Carousel",
          src: "/assets/grid_cover.png",
          heightClass: "h-80",
        },
        {
          id: "g2",
          type: "image",
          title: "Symmetrical Branding Grid Mockup",
          badge: "Grid Theme",
          src: "/assets/festival_cover.png",
          heightClass: "h-64",
        },
        {
          id: "g3",
          type: "image",
          title: "Instagram Puzzle Design Grid Layout",
          badge: "Puzzle Grid",
          src: "/assets/ugc_cover.png",
          heightClass: "h-96",
        },
        {
          id: "g4",
          type: "image",
          title: "Visual Portfolio Showcase Grid",
          badge: "Layout Design",
          src: "/assets/festival_tall.png",
          heightClass: "h-80",
        },
      ],
    },
    {
      id: "moment-marketing-campaigns",
      title: "Moment Marketing",
      subtitle: "Trendjacking graphics, rapid-response social designs, and witty real-time brand campaigns.",
      coverImage: "/assets/moment_cover.png",
      itemCount: "4 Topical Assets",
      tags: ["Trendjacking", "Witty Ads", "Real-Time"],
      items: [
        {
          id: "m1",
          type: "image",
          title: "Smart Trendjacking Post Concept",
          badge: "Trendjacking",
          src: "/assets/moment_cover.png",
          heightClass: "h-96",
        },
        {
          id: "m2",
          type: "image",
          title: "Witty Real-Time Topical Ad Banner",
          badge: "Topical Ad",
          src: "/assets/festival_cover.png",
          heightClass: "h-64",
        },
        {
          id: "m3",
          type: "image",
          title: "Rapid-Response Brand Meme Graphic",
          badge: "Brand Meme",
          src: "/assets/ugc_cover.png",
          heightClass: "h-80",
        },
        {
          id: "m4",
          type: "image",
          title: "Viral Pop-Culture Campaign Poster",
          badge: "Pop Culture",
          src: "/assets/festival_tall.png",
          heightClass: "h-96",
        },
      ],
    },
    {
      id: "festival-campaigns",
      title: "Festival Campaigns",
      subtitle: "Photo album collage of festive post designs, holiday graphics, and themed celebration banners.",
      coverImage: "/assets/festival_cover.png",
      itemCount: "4 Festival Assets",
      tags: ["Diwali", "Holi", "New Year"],
      items: [
        {
          id: "f1",
          type: "image",
          title: "Diwali Festive Campaign Story Poster",
          badge: "Diwali Special",
          src: "/assets/festival_tall.png",
          heightClass: "h-96",
        },
        {
          id: "f2",
          type: "image",
          title: "New Year Countdown Banner",
          badge: "New Year 2026",
          src: "/assets/festival_cover.png",
          heightClass: "h-64",
        },
        {
          id: "f3",
          type: "image",
          title: "Holi Color Splash Graphic",
          badge: "Holi Festival",
          src: "/assets/festival_cover.png",
          heightClass: "h-80",
        },
        {
          id: "f4",
          type: "image",
          title: "Independence Day Pride Creative",
          badge: "Independence Day",
          src: "/assets/festival_tall.png",
          heightClass: "h-96",
        },
      ],
    },
    {
      id: "ugc-reels-content",
      title: "UGC & Video Reels",
      subtitle: "High-converting user-generated video content, 9:16 mobile reels, and scripted brand stories.",
      coverImage: "/assets/ugc_cover.png",
      itemCount: "5 Video Reels",
      tags: ["UGC Videos", "Short Reels", "Voiceover"],
      items: [
        {
          id: "u1",
          type: "image",
          title: "UGC Product Showcase Banner",
          badge: "Product Spotlight",
          src: "/assets/ugc_cover.png",
          heightClass: "h-72",
        },
        {
          id: "u2",
          type: "image",
          title: "UGC Campaign Performance Infographic",
          badge: "Analytics Proof",
          src: "/assets/reel_vertical.png",
          heightClass: "h-96",
        },
        {
          id: "u3",
          type: "video",
          title: "Product Unboxing & Honest Review UGC",
          badge: "Top UGC Reel",
          src: "/assets/reel_vertical.png",
          views: "245K",
          likes: "34.2K",
          audio: "UGC Voiceover - Jignesh",
        },
        {
          id: "u4",
          type: "video",
          title: "15-Second Hook Brand Story Reel",
          badge: "Viral Hook",
          src: "/assets/reel_vertical.png",
          views: "180K",
          likes: "22.8K",
          audio: "Trending Brand Audio",
        },
        {
          id: "u5",
          type: "video",
          title: "Lifestyle Influencer Collab Reel",
          badge: "Collab Reel",
          src: "/assets/reel_vertical.png",
          views: "310K",
          likes: "45.1K",
          audio: "Lifestyle Trending Track",
        },
      ],
    },
  ];

  const currentItems = selectedAlbum ? selectedAlbum.items : [];

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null && currentItems.length > 0) {
      setLightboxIndex((prev) => (prev! === 0 ? currentItems.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, currentItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null && currentItems.length > 0) {
      setLightboxIndex((prev) => (prev! === currentItems.length - 1 ? 0 : prev! + 1));
    }
  }, [lightboxIndex, currentItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setLightboxIndex(null);
      } else if (selectedAlbum !== null && e.key === "Escape") {
        setSelectedAlbum(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, selectedAlbum, handleNext, handlePrev]);

  useEffect(() => {
    if (selectedAlbum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAlbum]);

  return (
    <section id="my-work" className="relative w-full pt-16 pb-24 px-4 sm:px-6 md:px-16 bg-[#0d0d0d] border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-900/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-3 sm:mb-4 leading-tight">
            MY{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
              WORK
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto px-2">
            Curated album showcase of static designs, grid layouts, moment marketing, festival campaigns &amp; UGC reels.
          </p>
        </div>

        {/* Albums Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {albums.map((album, idx) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedAlbum(album)}
              className="group relative flex flex-col justify-between rounded-xl glass-card overflow-hidden cursor-pointer border border-white/5 hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="relative w-full h-40 overflow-hidden bg-black/40">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
              </div>

              <div className="p-4 md:p-5 flex flex-col justify-between flex-1 relative z-10 bg-[#0d0d0d]/80">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors mb-1.5 leading-snug">
                    {album.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-400 font-light leading-relaxed mb-4">
                    {album.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-purple-300 group-hover:text-purple-400 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Folder className="h-3.5 w-3.5" />
                    <span>Open Album</span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================
         POPUP ALBUM MODAL (With Cross X Button)
         ======================================================== */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAlbum(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-y-auto flex flex-col shadow-2xl"
            >
              {/* Ambient Background Glow */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

              {/* Sticky Header Top Bar with ONLY CROSS (X) Close Button */}
              <div className="sticky top-0 z-50 w-full px-4 sm:px-6 py-3.5 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">{selectedAlbum.title}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{selectedAlbum.itemCount}</span>
                </div>
                {/* PROMINENT CROSS (X) BUTTON */}
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-purple-600 text-white border border-white/20 transition-all shadow-xl hover:scale-110 active:scale-95 flex items-center justify-center gap-2 group"
                  title="Close Album (Esc)"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Modal Content Area: Only Images and Videos Grid */}
              <div className="w-full px-4 sm:px-8 py-6 sm:py-8 space-y-8 sm:space-y-12 relative z-10">
                {/* 1. PHOTO ALBUM SCRAPBOOK SECTION */}
                {selectedAlbum.items.filter((i) => i.type === "image").length > 0 && (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {selectedAlbum.items
                      .filter((i) => i.type === "image")
                      .map((img) => {
                        const itemIdx = selectedAlbum.items.findIndex((item) => item.id === img.id);
                        return (
                          <div
                            key={img.id}
                            onClick={() => setLightboxIndex(itemIdx)}
                            className="group relative break-inside-avoid rounded-xl overflow-hidden glass-card border border-white/10 cursor-pointer hover:border-purple-500/50 transition-all duration-500 shadow-xl"
                          >
                            <div className={`relative w-full ${img.heightClass || "h-64"} overflow-hidden bg-black`}>
                              <img
                                src={img.src}
                                alt=""
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}

                {/* 2. INSTAGRAM SHORT-FORM REELS SECTION */}
                {selectedAlbum.items.filter((i) => i.type === "video").length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {selectedAlbum.items
                      .filter((i) => i.type === "video")
                      .map((reel) => {
                        const itemIdx = selectedAlbum.items.findIndex((item) => item.id === reel.id);
                        return (
                          <div
                            key={reel.id}
                            onClick={() => setLightboxIndex(itemIdx)}
                            className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer hover:border-pink-500/60 transition-all duration-500 shadow-2xl max-w-xs sm:max-w-none mx-auto w-full"
                          >
                            <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                              <img
                                src={reel.src}
                                alt=""
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                              />

                              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                <div className="p-3 rounded-full bg-pink-600/90 text-white backdrop-blur-md group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                                  <Play className="h-6 w-6 fill-white translate-x-0.5" />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
         LIGHTBOX VIEWER WITH NEXT & PREVIOUS BUTTONS
         ======================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-2xl cursor-pointer"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10"
              title="Close Preview (Esc)"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* PREVIOUS BUTTON (<) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-4 rounded-full bg-white/10 hover:bg-purple-600 text-white border border-white/20 transition-all shadow-2xl hover:scale-110 active:scale-95"
              title="Previous Item (Left Arrow)"
            >
              <ChevronLeft className="h-5 w-5 sm:h-8 sm:w-8" />
            </button>

            {/* NEXT BUTTON (>) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-4 rounded-full bg-white/10 hover:bg-purple-600 text-white border border-white/20 transition-all shadow-2xl hover:scale-110 active:scale-95"
              title="Next Item (Right Arrow)"
            >
              <ChevronRight className="h-5 w-5 sm:h-8 sm:w-8" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full flex flex-col items-center cursor-default px-2 sm:px-12"
            >
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black mb-4 flex items-center justify-center min-h-[280px] sm:min-h-[350px]">
                <img
                  src={currentItems[lightboxIndex].src}
                  alt={currentItems[lightboxIndex].title}
                  className="w-full max-h-[70vh] sm:max-h-[65vh] object-contain"
                />

                {currentItems[lightboxIndex].type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                    <div className="p-3 sm:p-4 rounded-full bg-pink-600/90 text-white shadow-[0_0_30px_rgba(236,72,153,0.6)]">
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-white translate-x-0.5" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
