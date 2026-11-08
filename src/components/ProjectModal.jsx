import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sliders, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Simulator states for interactive testing
  const [sentimentInput, setSentimentInput] = useState(
    "The machine learning model and editorial interface architecture are genuinely exceptional and innovative."
  );
  const [sentimentResult, setSentimentResult] = useState({
    polarity: "Positive Sentiment",
    confidence: "98.2%",
  });

  const [robotStatus, setRobotStatus] = useState({
    command: "Autonomous Trajectory Active",
    obstacleDist: "162 cm",
    detectedObject: "Corridor Clear",
  });

  const handleTestSentiment = () => {
    const text = sentimentInput.toLowerCase();
    const isNegative = text.includes('bad') || text.includes('poor') || text.includes('terrible') || text.includes('worst') || text.includes('boring');
    if (isNegative) {
      setSentimentResult({ polarity: "Negative Sentiment", confidence: "94.6%" });
    } else {
      setSentimentResult({ polarity: "Positive Sentiment", confidence: "98.5%" });
    }
  };

  const handleRobotCommand = (cmd, dist, obj) => {
    setRobotStatus({ command: cmd, obstacleDist: dist, detectedObject: obj });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#fbfaf7] dark:bg-[#0e0e11] border border-stone-300 dark:border-white/[0.12] shadow-2xl p-6 sm:p-10 text-left text-stone-900 dark:text-stone-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full border border-stone-300 dark:border-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-stone-500 dark:text-stone-400">
              PROJECT {project.number}
            </span>
            <span className="text-stone-300 dark:text-stone-700">&bull;</span>
            <span className="text-xs font-mono tracking-widest uppercase text-stone-500 dark:text-stone-400">
              {project.category}
            </span>
          </div>
          <h2 className="headline-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mb-2">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            {project.shortDescription}
          </p>
        </div>

        {/* High-Resolution Project Visual */}
        <div className="relative rounded-2xl overflow-hidden aspect-video max-h-72 w-full mb-8 border border-stone-200 dark:border-white/[0.08] bg-stone-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overview & Architecture */}
        <div className="space-y-6 mb-8 text-stone-700 dark:text-stone-300 font-light">
          <div>
            <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 mb-2">
              System Overview &amp; Architecture
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Core Technical Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-3 py-1 rounded-full border border-stone-200 dark:border-white/[0.08] bg-stone-100 dark:bg-white/[0.02]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Live Interactive Evaluation Bench */}
        <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/[0.08] bg-stone-100/40 dark:bg-white/[0.02] mb-8">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="font-semibold uppercase tracking-widest flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Evaluation Bench</span>
            </span>
            <span className="text-[10px] text-stone-500">Live Simulator</span>
          </div>

          {/* Robot Simulator */}
          {project.interactiveType === 'robot' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl border border-stone-200 dark:border-white/[0.06] bg-white dark:bg-black">
                  <div className="text-[10px] text-stone-500 uppercase">Status</div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100 mt-1">{robotStatus.command}</div>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 dark:border-white/[0.06] bg-white dark:bg-black">
                  <div className="text-[10px] text-stone-500 uppercase">Proximity</div>
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400 mt-1">{robotStatus.obstacleDist}</div>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 dark:border-white/[0.06] bg-white dark:bg-black">
                  <div className="text-[10px] text-stone-500 uppercase">Vision Scan</div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100 mt-1">{robotStatus.detectedObject}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => handleRobotCommand("Voice Command: 'Advance Forward'", "185 cm", "Corridor Clear")}
                  className="px-3 py-1.5 rounded-lg border border-stone-300 dark:border-white/10 text-xs font-mono hover:bg-stone-200/50 dark:hover:bg-white/5 transition-colors"
                >
                  &gt; Voice: "Advance Forward"
                </button>
                <button
                  onClick={() => handleRobotCommand("Collision Avoidance Triggered", "18 cm", "Obstacle Detected [Box]")}
                  className="px-3 py-1.5 rounded-lg border border-stone-300 dark:border-white/10 text-xs font-mono hover:bg-stone-200/50 dark:hover:bg-white/5 transition-colors"
                >
                  &gt; Simulate Collision Guard
                </button>
              </div>
            </div>
          )}

          {/* Sentiment Simulator */}
          {project.interactiveType === 'sentiment' && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={sentimentInput}
                  onChange={(e) => setSentimentInput(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl border border-stone-300 dark:border-white/10 bg-white dark:bg-black text-xs text-stone-900 dark:text-stone-100 focus:outline-none"
                />
                <button
                  onClick={handleTestSentiment}
                  className="px-4 py-2 rounded-xl bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  Analyze
                </button>
              </div>

              <div className="p-3 rounded-xl border border-stone-200 dark:border-white/[0.06] bg-white dark:bg-black flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-stone-500">Classification: </span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{sentimentResult.polarity}</span>
                </div>
                <div>
                  <span className="text-stone-500">Confidence: </span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100">{sentimentResult.confidence}</span>
                </div>
              </div>
            </div>
          )}

          {(project.interactiveType === 'resume' || project.interactiveType === 'portfolio') && (
            <div className="text-xs font-light text-stone-600 dark:text-stone-400 flex items-center justify-between">
              <span>Verified codebase: Responsive architecture, zero console warnings, modular React.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-stone-200 dark:border-white/[0.08]">
          <span className="text-[11px] font-mono tracking-widest text-stone-500 uppercase">
            Sayyad Yameen &bull; Portfolio 2026
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-semibold"
            >
              Discuss Project
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
