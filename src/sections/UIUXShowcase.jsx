import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import UIUXModal from '../components/UIUXModal';
import { SectionFooter } from '../components/BackToTop';

export default function UIUXShowcase() {
  const { designStudies } = portfolioData;
  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <section id="design" className="py-28 sm:py-36 border-t border-stone-200/80 dark:border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-stone-200/80 dark:border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-ultra uppercase text-stone-600 dark:text-stone-300 block mb-2">
              05 &bull; PRODUCT &amp; INTERFACE
            </span>
            <h2 className="headline-editorial text-5xl sm:text-7xl text-stone-900 dark:text-stone-100">
              DESIGN <span className="subheadline-editorial text-stone-600 dark:text-stone-300">STUDIES.</span>
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
            FIGMA SYSTEMS &amp; USER FLOWS
          </span>
        </div>

        {/* Design Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designStudies.map((study, idx) => (
            <div
              key={study.id}
              className="p-8 sm:p-10 rounded-3xl border border-stone-200/80 dark:border-white/[0.08] bg-stone-100/30 dark:bg-white/[0.015] hover:border-stone-400 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200/60 dark:border-white/[0.06]">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300 font-semibold">
                    {study.number}
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
                    {study.category}
                  </span>
                </div>

                <h3 className="headline-editorial text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-light leading-relaxed mb-6">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {study.deliverables.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-stone-200 dark:border-white/[0.06] text-stone-700 dark:text-stone-300"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedStudy(study)}
                className="w-full py-3 rounded-full border border-stone-300 dark:border-white/10 hover:bg-stone-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900 text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Examine Design Study</span>
              </button>
            </div>
          ))}
        </div>

        {/* Back to Top Section Footer on Design slide */}
        <SectionFooter index="05 / 07" label="DESIGN STUDIES &bull; UI/UX" />

      </div>

      <AnimatePresence>
        {selectedStudy && (
          <UIUXModal
            item={selectedStudy}
            onClose={() => setSelectedStudy(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
