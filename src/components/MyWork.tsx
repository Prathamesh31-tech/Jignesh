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
      subtitle: "High-impact static post designs, unique story creatives, and visual branding assets.",
      coverImage: "https://res.cloudinary.com/ddfwegroq/image/upload/v1784525893/1783682294077_2_1_p8ma3z.jpg",
      itemCount: "11 Static Assets",
      tags: ["Static Posts", "Unique Stories", "Branding"],
      items: [
        {
          id: "s1",
          type: "image",
          title: "Creative Story Banner 1",
          badge: "Story Ad",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1784525893/1783682294077_2_1_p8ma3z.jpg",
          heightClass: "h-96",
        },
        {
          id: "s2",
          type: "image",
          title: "Branding Visual Poster",
          badge: "Branding",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1784525896/file_00000000b8a471faa264ad99c08f3cd0_ffrmtl.png",
          heightClass: "h-80",
        },
        {
          id: "s3",
          type: "image",
          title: "Product Feature Banner",
          badge: "Feature Ad",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1784525895/file_0000000089e871fabe77246b2ac41168_bcacpd.png",
          heightClass: "h-80",
        },
        {
          id: "s4",
          type: "image",
          title: "Social Media Story Creative",
          badge: "Story Design",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1784525894/file_000000007e1881fb9319bf71ebea4bbd_ejej88.png",
          heightClass: "h-96",
        },
        {
          id: "s5",
          type: "image",
          title: "T&D Sketch Creative",
          badge: "Sketch Art",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525422/T_D_Sketch_trend_2.jpg_zkos8m.jpg",
          heightClass: "h-64",
        },
        {
          id: "s6",
          type: "image",
          title: "Crave Co Product Post 1",
          badge: "Product Ad",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525467/craveco_2.jpg_xv8lbe.jpg",
          heightClass: "h-80",
        },
        {
          id: "s7",
          type: "image",
          title: "Crave Co Product Post 2",
          badge: "Product Ad",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525471/craveco_1.jpg_ov5pqv.jpg",
          heightClass: "h-80",
        },
        {
          id: "s8",
          type: "image",
          title: "Mitwa Unique Story Design 1",
          badge: "Unique Story",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525496/MITWA_US2_cgwds1.png",
          heightClass: "h-96",
        },
        {
          id: "s9",
          type: "image",
          title: "Mitwa Unique Story Design 2",
          badge: "Unique Story",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525524/MITWA_US10_n8cbpw.png",
          heightClass: "h-96",
        },
        {
          id: "s10",
          type: "image",
          title: "T&D Unique Story Creative 1",
          badge: "Unique Story",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525548/T_D_US1.jpg_m28f2f.jpg",
          heightClass: "h-80",
        },
        {
          id: "s11",
          type: "image",
          title: "T&D Unique Story Creative 2",
          badge: "Unique Story",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525573/T_D_US2.jpg_tsw2zs.jpg",
          heightClass: "h-80",
        },
      ],
    },
    {
      id: "grid-carousel-layouts",
      title: "Grid & Carousels",
      subtitle: "Interactive multi-slide carousels, cohesive grid themes, and seamless puzzle layout designs.",
      coverImage: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525452/PY_9PGrid.jpg_ieem3d.jpg",
      itemCount: "2 Grid Layouts",
      tags: ["Carousel", "Grid Theme", "Puzzle Grid"],
      items: [
        {
          id: "g1",
          type: "image",
          title: "PY 9-Post Instagram Grid",
          badge: "9-Post Grid",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525452/PY_9PGrid.jpg_ieem3d.jpg",
          heightClass: "h-96",
        },
        {
          id: "g2",
          type: "image",
          title: "Mitwa 6-Post Theme Grid Layout",
          badge: "6-Post Grid",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525428/mitva6_post_grid.jpg_wqj9dq.jpg",
          heightClass: "h-96",
        },
      ],
    },
    {
      id: "moment-marketing-campaigns",
      title: "Moment Marketing",
      subtitle: "Trendjacking graphics, rapid-response social designs, and witty real-time brand campaigns.",
      coverImage: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525528/crave_co_trend_post.jpg_tklgbe.jpg",
      itemCount: "11 Topical Assets",
      tags: ["Trendjacking", "Witty Ads", "Real-Time"],
      items: [
        {
          id: "m1",
          type: "image",
          title: "Crave Co Trendjacking Post",
          badge: "Trendjacking",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525528/crave_co_trend_post.jpg_tklgbe.jpg",
          heightClass: "h-80",
        },
        {
          id: "m2",
          type: "image",
          title: "Raze-In Moment Marketing Poster",
          badge: "Topical Ad",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525503/Raze-In_pl6lun.png",
          heightClass: "h-80",
        },
        {
          id: "m3",
          type: "image",
          title: "Mitwa Trend Banner",
          badge: "Real-Time Ad",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525496/Mitva_gx43sn.png",
          heightClass: "h-80",
        },
        {
          id: "m4",
          type: "image",
          title: "Raze-In Cricket World Cup Story",
          badge: "Cricket Special",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525491/Raze-InCricketStory_cmm7jq.png",
          heightClass: "h-96",
        },
        {
          id: "m5",
          type: "image",
          title: "Crave Co Cricket Match Story",
          badge: "Cricket Special",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525480/CraveCoCricketStory_nt7yi8.png",
          heightClass: "h-96",
        },
        {
          id: "m6",
          type: "image",
          title: "Bare Essence Brand Story",
          badge: "Topical Story",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525461/be_story_ll5unm.png",
          heightClass: "h-96",
        },
        {
          id: "m7",
          type: "image",
          title: "Mitwa Special Trend Creative",
          badge: "Trend Concept",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525451/Mitva_2_tzziqf.png",
          heightClass: "h-80",
        },
        {
          id: "m8",
          type: "image",
          title: "Crave Co IND vs ENG Match Creative",
          badge: "Match Special",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525449/CRAVE_CO_IND_VS_ENG_mbqgsg.png",
          heightClass: "h-80",
        },
        {
          id: "m9",
          type: "image",
          title: "Mosheek Sketch Trend Concept",
          badge: "Sketch Trend",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525424/Mosheek_sketch_trend.jpg_vmz3vt.jpg",
          heightClass: "h-80",
        },
        {
          id: "m10",
          type: "image",
          title: "T&D Sketch Trend 1",
          badge: "Sketch Trend",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525423/T_D_Sketch_trend_1.jpg_xnge5q.jpg",
          heightClass: "h-80",
        },
        {
          id: "m11",
          type: "image",
          title: "T&D Sketch Trend 2",
          badge: "Sketch Trend",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525422/T_D_Sketch_trend_2.jpg_zkos8m.jpg",
          heightClass: "h-80",
        },
      ],
    },
    {
      id: "festival-campaigns",
      title: "Festival Campaigns",
      subtitle: "Photo album collage of festive post designs, holiday graphics, and themed celebration banners.",
      coverImage: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525422/Neuve_festive_wd_zqazvg.png",
      itemCount: "9 Festival Assets",
      tags: ["Festive", "Women's Day", "Eid", "Gudi Padwa"],
      items: [
        {
          id: "f1",
          type: "image",
          title: "Neuve Festive Women's Day Poster",
          badge: "Women's Day",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525422/Neuve_festive_wd_zqazvg.png",
          heightClass: "h-80",
        },
        {
          id: "f2",
          type: "image",
          title: "Mitwa Women's Day Celebration",
          badge: "Women's Day",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525423/MITWA_WD_mnumie.png",
          heightClass: "h-80",
        },
        {
          id: "f3",
          type: "image",
          title: "Bare Essence Father's Day Special",
          badge: "Father's Day",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525428/Bare_Essence_FD_q8ivtf.png",
          heightClass: "h-80",
        },
        {
          id: "f4",
          type: "image",
          title: "Crave Co Women's Day Creative",
          badge: "Women's Day",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525428/CRAVE_CO_-_WOMENS_DAY_zoviwa.png",
          heightClass: "h-80",
        },
        {
          id: "f5",
          type: "image",
          title: "Blue Shell Festive Eid Story",
          badge: "Eid Special",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525448/blueshell_eid_story.jpg_lxoobs.jpg",
          heightClass: "h-96",
        },
        {
          id: "f6",
          type: "image",
          title: "Crave Co Gudi Padwa Festive Creative",
          badge: "Gudi Padwa",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525455/crave_co_-_gudi_padwa_eojnda.png",
          heightClass: "h-80",
        },
        {
          id: "f7",
          type: "image",
          title: "Mitwa Festive Celebration Post",
          badge: "Festive Post",
          src: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525491/Mitva_festive.jpg_qic9fa.jpg",
          heightClass: "h-80",
        },
        {
          id: "f8",
          type: "video",
          title: "Festive Eid Video Reel",
          badge: "Eid Reel",
          src: "https://res.cloudinary.com/ddfwegroq/video/upload/v1781525685/festive_eid_reel__2_bwapqb.mp4",
          views: "195K",
          likes: "28.4K",
          audio: "Festive Audio",
        },
        {
          id: "f9",
          type: "video",
          title: "Raze-In Festive Promotion Reel",
          badge: "Festive Reel",
          src: "https://res.cloudinary.com/ddfwegroq/video/upload/v1781525733/raze_in_reel__07_haglaf.mp4",
          views: "210K",
          likes: "31.8K",
          audio: "Trending Festive Track",
        },
      ],
    },
    {
      id: "ugc-reels-content",
      title: "UGC & Video Reels",
      subtitle: "High-converting user-generated video content, 9:16 mobile reels, and scripted brand stories.",
      coverImage: "https://res.cloudinary.com/ddfwegroq/image/upload/v1781525528/crave_co_trend_post.jpg_tklgbe.jpg",
      itemCount: "4 Video Reels",
      tags: ["UGC Videos", "Short Reels", "Voiceover"],
      items: [
        {
          id: "u1",
          type: "video",
          title: "UGC Brand Campaign Reel 1",
          badge: "UGC Reel",
          src: "https://res.cloudinary.com/ddfwegroq/video/upload/v1781526110/ujc_1_cyunav.mp4",
          views: "280K",
          likes: "38.5K",
          audio: "UGC Voiceover - Jignesh",
        },
        {
          id: "u2",
          type: "video",
          title: "Crave Co Product Spotlight UGC Reel",
          badge: "Spotlight Reel",
          src: "https://res.cloudinary.com/ddfwegroq/video/upload/v1781525820/Crave_co_UGC_reel_new_hu0tzb.mp4",
          views: "340K",
          likes: "45.2K",
          audio: "Crave Co Audio",
        },
        {
          id: "u3",
          type: "video",
          title: "Raze-In Hook Story Reel",
          badge: "Viral Hook",
          src: "https://res.cloudinary.com/ddfwegroq/video/upload/v1781525733/raze_in_reel__07_haglaf.mp4",
          views: "215K",
          likes: "29.7K",
          audio: "Trending Track",
        },
        {
          id: "u4",
          type: "video",
          title: "Festive Special UGC Video Reel",
          badge: "Festive Reel",
          src: "https://res.cloudinary.com/ddfwegroq/video/upload/v1781525685/festive_eid_reel__2_bwapqb.mp4",
          views: "190K",
          likes: "26.1K",
          audio: "Eid Celebration Audio",
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
                              <video
                                src={reel.src}
                                muted
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 pointer-events-none"
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
                {currentItems[lightboxIndex].type === "video" ? (
                  <video
                    src={currentItems[lightboxIndex].src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full max-h-[70vh] sm:max-h-[65vh] object-contain rounded-xl"
                  />
                ) : (
                  <img
                    src={currentItems[lightboxIndex].src}
                    alt={currentItems[lightboxIndex].title}
                    className="w-full max-h-[70vh] sm:max-h-[65vh] object-contain"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
