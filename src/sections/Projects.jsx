import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import { SectionFooter } from '../components/BackToTop';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-28 sm:py-36 border-t border-stone-200/80 dark:border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-20 border-b border-stone-200/80 dark:border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-ultra uppercase text-stone-600 dark:text-stone-300 block mb-2">
              03 &bull; SELECTED WORK
            </span>
            <h2 className="headline-editorial text-5xl sm:text-7xl text-stone-900 dark:text-stone-100">
              SELECTED <span className="subheadline-editorial text-stone-600 dark:text-stone-300">PROJECTS.</span>
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
            ENGINEERING &amp; INTELLIGENCE
          </span>
        </div>

        {/* Large Editorial Project Showcases (Asymmetrical Layouts) */}
        <div className="space-y-24 sm:space-y-36">
          {projects.map((proj, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Preview Side (Large 7 Columns) */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div 
                    onClick={() => setSelectedProject(proj)}
                    className="editorial-image-frame rounded-3xl border border-stone-200/90 dark:border-white/[0.08] shadow-2xl aspect-[16/10] w-full cursor-pointer group"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center filter contrast-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Minimal Number Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full bg-stone-950/80 text-white border border-white/10 backdrop-blur-md">
                        {proj.number}
                      </span>
                    </div>

                    {/* Hover Inspect Indicator */}
                    <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-stone-950/80 text-white text-[11px] font-mono tracking-wider uppercase border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 backdrop-blur-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Typography Details Side (5 Columns) */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300 block mb-2">
                    {proj.category}
                  </span>

                  <h3 className="headline-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mb-4">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-stone-700 dark:text-stone-300 font-light leading-relaxed mb-6">
                    {proj.shortDescription}
                  </p>

                  {/* Core Features */}
                  <div className="space-y-2 mb-6 text-xs text-stone-600 dark:text-stone-400 font-light">
                    {proj.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border border-stone-200 dark:border-white/[0.08] text-stone-700 dark:text-stone-300 bg-stone-100/50 dark:bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div>
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="editorial-link text-xs font-mono tracking-widest uppercase font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2 cursor-pointer"
                    >
                      <span>View Project &amp; Simulator</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Back to Top Section Footer on Projects slide */}
        <SectionFooter index="03 / 07" label="SELECTED WORK &bull; PROJECTS" />

      </div>

      {/* Project Details & Simulator Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
