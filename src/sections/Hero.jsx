import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionFooter } from '../components/BackToTop';

export default function Hero() {
  const { profile } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [profile.roles.length]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 sm:pt-40 pb-16 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center">
        
        {/* Top Minimal Label & Status */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-200/80 dark:border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-ultra uppercase text-stone-600 dark:text-stone-300">
              {profile.labelYear}
            </span>
            <span className="text-stone-300 dark:text-stone-700">&bull;</span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
              AI &bull; DATA SCIENCE &bull; DESIGN
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-stone-600 dark:text-stone-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPEN FOR COLLABORATIONS</span>
          </div>
        </div>

        {/* Editorial Typography Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="headline-editorial text-6xl sm:text-8xl lg:text-9xl text-stone-900 dark:text-stone-100 select-none leading-none mb-4"
            >
              <span>SAYYAD</span>
              <br />
              <span className="subheadline-editorial text-stone-600 dark:text-stone-300">
                YAMEEN.
              </span>
            </motion.h1>

            {/* Dynamic Role Line */}
            <div className="h-7 flex items-center">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 mr-2">
                FOCUS:
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold text-stone-950 dark:text-stone-100"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="font-serif text-xl sm:text-2xl text-stone-800 dark:text-stone-200 font-light leading-snug mb-4">
              "Building intelligent things.
              <br />
              <span className="italic">Designing meaningful experiences."</span>
            </p>
            <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
              {profile.heroIntro}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-5 text-xs font-mono tracking-widest uppercase">
              <button
                onClick={() => scrollTo('work')}
                className="editorial-link text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <a
                href={profile.resumeUrl}
                download="sayyad-yameen-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white flex items-center gap-1.5"
              >
                <span>CV</span>
                <Download className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="editorial-link text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* The First Picture Displayed PROPERLY & UNOBSTRUCTED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full rounded-3xl overflow-hidden border border-stone-200/90 dark:border-white/[0.1] bg-stone-100 dark:bg-stone-900 shadow-2xl"
        >
          {/* Natural wide panoramic framing revealing Sayyad Yameen and the mountains */}
          <div className="relative aspect-[2.1/1] sm:aspect-[2.2/1] w-full overflow-hidden">
            <img
              src={profile.images.hero}
              alt="SAYYAD YAMEEN — Primary Portrait above the clouds"
              className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.99] transition-transform duration-1000 hover:scale-[1.015]"
              loading="eager"
            />
            {/* Subtle luxury vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* Museum Footnote Bar below the picture */}
          <div className="px-5 py-3.5 bg-[#fbfaf7]/90 dark:bg-[#0a0a0c]/90 backdrop-blur-md border-t border-stone-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-ultra text-stone-500 uppercase">
                PLATE 01 &bull; PRIMARY PORTRAIT
              </span>
              <span className="text-stone-300 dark:text-stone-700">&bull;</span>
              <span className="text-stone-800 dark:text-stone-200 font-medium">
                SAYYAD YAMEEN &bull; ABOVE THE CLOUDS
              </span>
            </div>

            <div className="text-[10px] tracking-widest text-stone-600 dark:text-stone-300 uppercase">
              1024 &times; 460 &bull; PANORAMIC COMPOSITION
            </div>
          </div>
        </motion.div>

        {/* Back to Top Section Footer on Hero */}
        <SectionFooter index="01 / 07" label="HERO &bull; OVERVIEW" />

      </div>
    </section>
  );
}
