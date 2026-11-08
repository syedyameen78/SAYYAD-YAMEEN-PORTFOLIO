import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Sparkles, 
  Binary, 
  LineChart, 
  Code2, 
  Layers, 
  Lightbulb, 
  Compass 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const interestIcons = {
  BrainCircuit,
  Sparkles,
  Binary,
  LineChart,
  Code2,
  Layers,
  Lightbulb,
  Compass,
};

export default function Interests() {
  const { interests, profile } = portfolioData;

  return (
    <section id="interests" className="py-32 relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Photo 4: Cinematic Background with subtle luxury gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={profile.images.sunset}
          alt="Sunset Summit Horizon"
          className="w-full h-full object-cover object-center filter brightness-[0.2] saturate-[0.8]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.1] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 block mb-2">
              07 &bull; Intellectual Drivers
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-white">
              WHAT <span className="font-light text-zinc-400">INSPIRES ME</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-sm">
            Frontier technologies, algorithmic problem solving, and human-centered innovation.
          </p>
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((item, idx) => {
            const Icon = interestIcons[item.icon] || Sparkles;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-black/60 border border-white/[0.08] hover:border-white/[0.2] backdrop-blur-xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white mb-4">
                  <Icon className="w-4 h-4" />
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  {item.category}
                </span>

                <h3 className="font-display font-medium text-sm text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
