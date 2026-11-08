import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { educationTimeline } = portfolioData;

  return (
    <section id="education" className="py-28 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 block mb-2">
              05 &bull; Academic Formations
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-white">
              EDUCATIONAL <span className="font-light text-zinc-400">JOURNEY</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-sm">
            Formal technical degrees and academic rigor in Data Science and Artificial Intelligence.
          </p>
        </div>

        {/* Minimalist Editorial Timeline */}
        <div className="space-y-6">
          {educationTimeline.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-950/70 border border-white/[0.08] backdrop-blur-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.06] gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg sm:text-xl text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {edu.badge}
                    </span>
                  </div>
                </div>

                {edu.current && (
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 w-fit">
                    Active Curriculum
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                {edu.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {edu.keyAreas.map((area, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2 text-xs text-zinc-400 font-light">
                    <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
