import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, X, GraduationCap, Code2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const { profile, educationTimeline, projects } = portfolioData;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-28 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 block mb-2">
              08 &bull; Verified Credentials
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-white">
              MY <span className="font-light text-zinc-400">RESUME</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-sm">
            Complete curriculum vitae documenting academic milestones, technical toolkit, and projects.
          </p>
        </div>

        {/* Minimalist Editorial Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950/70 border border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-white">
                {profile.name}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                AI &bull; Data Science &bull; UI/UX Design &bull; Python
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="btn-luxury-outline px-5 py-2.5 rounded-full text-xs font-medium tracking-tight flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-zinc-400" />
                <span>View Full CV</span>
              </button>

              <a
                href={profile.resumeUrl}
                download="sayyad-yameen-resume.pdf"
                className="btn-luxury px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight flex items-center gap-2 shadow-lg"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Actual PDF</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-white/[0.08]">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>Academic Record</span>
              </h4>
              <div className="space-y-3">
                {educationTimeline.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-sm font-medium text-white">{edu.degree}</div>
                    <div className="text-xs text-zinc-400 font-light mt-0.5">{edu.focus}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-white" />
                <span>Core Toolset</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-zinc-400 font-mono">Languages</span>
                  <span className="text-white font-medium">Python, Java, C</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-zinc-400 font-mono">Intelligence</span>
                  <span className="text-white font-medium">AI, Machine Learning, Data Science</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-zinc-400 font-mono">Design & Web</span>
                  <span className="text-white font-medium">Figma, UI/UX, React, Responsive Web</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400">
            <span>Verified Document: public/resume/sayyad-yameen-resume.pdf</span>
            <span>Standard PDF Format &bull; 100% Functional Download</span>
          </div>
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/[0.12] p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] text-zinc-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6 pb-6 border-b border-white/[0.08]">
                <h3 className="font-display font-medium text-2xl text-white">{profile.name}</h3>
                <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                  AI & ML Developer &bull; Data Science Student &bull; UI/UX Designer
                </p>
                <p className="text-xs text-zinc-300 font-light mt-2 leading-relaxed">
                  "{profile.heroIntro}"
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Education</h4>
                  {educationTimeline.map((edu, idx) => (
                    <div key={idx} className="mb-2 text-xs">
                      <div className="font-medium text-white">{edu.degree}</div>
                      <div className="text-zinc-400 font-light">{edu.description}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Featured Projects</h4>
                  {projects.map((p, idx) => (
                    <div key={idx} className="mb-2 text-xs">
                      <div className="font-medium text-white">{p.title}</div>
                      <div className="text-zinc-400 font-light">{p.shortDescription}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/[0.08]">
                <a
                  href={profile.resumeUrl}
                  download="sayyad-yameen-resume.pdf"
                  className="btn-luxury px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Document</span>
                </a>

                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="px-4 py-2 rounded-full text-xs text-zinc-400 hover:text-white"
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
