import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { SectionFooter } from '../components/BackToTop';

export default function Skills() {
  const { skillsData } = portfolioData;

  return (
    <section id="skills" className="py-28 sm:py-36 border-t border-stone-200/80 dark:border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-stone-200/80 dark:border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-ultra uppercase text-stone-600 dark:text-stone-300 block mb-2">
              04 &bull; COMPETENCIES
            </span>
            <h2 className="headline-editorial text-5xl sm:text-7xl text-stone-900 dark:text-stone-100">
              TOOLS &amp; <span className="subheadline-editorial text-stone-600 dark:text-stone-300">EXPERTISE.</span>
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
            MINIMAL TYPOGRAPHIC INDEX
          </span>
        </div>

        {/* Minimal Typographic Skill Layout (Editorial Rows) */}
        <div className="divide-y divide-stone-200/80 dark:divide-white/[0.08] border-b border-stone-200/80 dark:border-white/[0.08]">
          {skillsData.map((category, idx) => (
            <div 
              key={idx}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-stone-100/40 dark:hover:bg-white/[0.015] px-2 sm:px-4 rounded-2xl transition-colors duration-300"
            >
              {/* Category Column */}
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="text-[11px] font-mono tracking-widest text-stone-600 dark:text-stone-300">
                  0{idx + 1}
                </span>
                <h3 className="text-xs font-mono uppercase tracking-ultra text-stone-900 dark:text-stone-100 font-semibold">
                  {category.category}
                </h3>
              </div>

              {/* Skills Typography Column */}
              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 font-light hover:italic hover:text-stone-600 dark:hover:text-stone-300 transition-all cursor-default"
                    >
                      {skill}
                      {sIdx < category.skills.length - 1 && (
                        <span className="font-sans text-stone-300 dark:text-stone-700 ml-4 font-extralight select-none">
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-3 text-left lg:text-right">
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                  {category.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Section Footer on Skills slide */}
        <SectionFooter index="04 / 07" label="TOOLS &bull; EXPERTISE" />

      </div>
    </section>
  );
}
