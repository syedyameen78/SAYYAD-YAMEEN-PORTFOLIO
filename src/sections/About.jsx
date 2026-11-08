import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionFooter } from '../components/BackToTop';

export default function About() {
  const { profile, educationTimeline } = portfolioData;
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <section id="about" className="py-28 sm:py-36 border-t border-stone-200/80 dark:border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-stone-200/80 dark:border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-ultra uppercase text-stone-600 dark:text-stone-300 block mb-2">
              02 &bull; BIOGRAPHY
            </span>
            <h2 className="headline-editorial text-5xl sm:text-7xl text-stone-900 dark:text-stone-100">
              A LITTLE <span className="subheadline-editorial text-stone-600 dark:text-stone-300">ABOUT ME.</span>
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
            DISCIPLINE &amp; IDENTITY
          </span>
        </div>

        {/* Editorial Layout: Large Portrait & Text Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photo 2 (Sayyad Yameen with sunglasses & mountain view) */}
          <div className="lg:col-span-6">
            <div className="editorial-image-frame rounded-3xl border border-stone-200/90 dark:border-white/[0.08] shadow-2xl aspect-[16/10] w-full overflow-hidden">
              <img
                src={profile.images.about}
                alt="SAYYAD YAMEEN — Editorial Biography"
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-white/90">
                <span>PLATE 02 &bull; BIOGRAPHY</span>
                <span>MOUNTAIN HORIZON</span>
              </div>
            </div>

            {/* Tagline Footnote */}
            <div className="mt-4 p-5 rounded-2xl border border-stone-200 dark:border-white/[0.06] bg-stone-100/50 dark:bg-white/[0.02]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 block mb-1">
                Personal Tagline
              </span>
              <p className="font-serif text-xl text-stone-900 dark:text-stone-100 tracking-wide font-medium">
                "{profile.tagline}"
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Academic Credentials */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            {/* The 3 Core Editorial Paragraphs */}
            <div className="space-y-6 text-stone-800 dark:text-stone-200 font-light text-base sm:text-lg leading-relaxed mb-10">
              <p className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
                "I am a technology enthusiast pursuing my journey from Artificial Intelligence and Machine Learning into Data Science."
              </p>

              <p className="text-stone-700 dark:text-stone-300">
                I enjoy combining programming, problem-solving and creative design to build meaningful digital experiences.
              </p>

              <p className="text-stone-700 dark:text-stone-300">
                Beyond coding, I am interested in exploring new technologies, visual design and innovative ideas.
              </p>
            </div>

            {/* Educational Milestones */}
            <div className="space-y-4 mb-8 pb-8 border-b border-stone-200/80 dark:border-white/[0.08]">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 block">
                Academic Background
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationTimeline.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl border border-stone-200/80 dark:border-white/[0.08] bg-stone-100/40 dark:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
                        {edu.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                      {edu.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Principles Modal Trigger */}
            <div>
              <button
                onClick={() => setIsDetailOpen(true)}
                className="editorial-link text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-2 cursor-pointer"
              >
                <span>Read Philosophy &amp; Engineering Principles</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Back to Top Section Footer on About slide */}
        <SectionFooter index="02 / 07" label="ABOUT &bull; BIOGRAPHY" />

      </div>

      {/* Editorial Principles Modal */}
      <AnimatePresence>
        {isDetailOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#fbfaf7] dark:bg-[#0e0e11] border border-stone-300 dark:border-white/[0.12] p-8 sm:p-10 shadow-2xl text-left"
            >
              <button
                onClick={() => setIsDetailOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full border border-stone-300 dark:border-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono uppercase tracking-ultra text-stone-500 block mb-2">
                ETHOS &bull; SAYYAD YAMEEN
              </span>
              <h3 className="headline-editorial text-4xl text-stone-900 dark:text-stone-100 mb-6">
                Engineering &amp; Design Philosophy
              </h3>

              <div className="space-y-6">
                {profile.detailedAbout.map((item, idx) => (
                  <div key={idx} className="pb-4 border-b border-stone-200 dark:border-white/[0.06] last:border-0">
                    <h4 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200 dark:border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
