import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowUpRight } from 'lucide-react';

export default function UIUXModal({ item, onClose }) {
  if (!item) return null;

  const [activeTab, setActiveTab] = useState('SPEC');

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
              {item.number}
            </span>
            <span className="text-stone-300 dark:text-stone-700">&bull;</span>
            <span className="text-xs font-mono tracking-widest uppercase text-stone-500 dark:text-stone-400">
              {item.category}
            </span>
          </div>
          <h2 className="headline-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mb-2">
            {item.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
            {item.description}
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('SPEC')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
              activeTab === 'SPEC'
                ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-semibold'
                : 'border border-stone-300 dark:border-white/10 text-stone-600 dark:text-stone-400'
            }`}
          >
            Design Tokens &amp; Spec
          </button>
          <button
            onClick={() => setActiveTab('UX')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
              activeTab === 'UX'
                ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-semibold'
                : 'border border-stone-300 dark:border-white/10 text-stone-600 dark:text-stone-400'
            }`}
          >
            User Architecture
          </button>
        </div>

        {/* Content Box */}
        <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/[0.08] bg-stone-100/40 dark:bg-white/[0.02] mb-8">
          {activeTab === 'SPEC' ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl border border-stone-200 dark:border-white/[0.06] bg-white dark:bg-black">
                  <span className="text-[10px] text-stone-500 uppercase block">Scale</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100 mt-1 block">12-Screen Flows</span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 dark:border-white/[0.06] bg-white dark:bg-black">
                  <span className="text-[10px] text-stone-500 uppercase block">Grid System</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100 mt-1 block">8pt Fluid Spatial</span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 dark:border-white/[0.06] bg-white dark:bg-black">
                  <span className="text-[10px] text-stone-500 uppercase block">Typography</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100 mt-1 block">Swiss Neutral + Mono</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block mb-2">
                  Delivered Components:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.deliverables.map((deliv, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-stone-200 dark:border-white/[0.08] bg-white dark:bg-black text-stone-700 dark:text-stone-300 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100" />
                      <span>{deliv}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-xs font-light text-stone-700 dark:text-stone-300">
              <p>&bull; Structured information architecture mapped to reduce mental friction and task completion time.</p>
              <p>&bull; Component states designed for interactive responsiveness (hover, focus, disabled, active, error).</p>
              <p>&bull; Prototyped in Figma with autolayout 5.0, variables, and design tokens.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-stone-200 dark:border-white/[0.08] text-xs font-mono">
          <div className="flex items-center gap-2 text-stone-500">
            <span>Tools:</span>
            <span className="text-stone-800 dark:text-stone-200">{item.tools.join(', ')}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-stone-300 dark:border-white/10 uppercase tracking-widest text-[11px]"
          >
            Close
          </button>
        </div>

      </motion.div>
    </div>
  );
}
