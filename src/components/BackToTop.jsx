import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

// Floating persistent Back to Top button
export default function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-40 px-3.5 py-2 rounded-full border border-stone-300 dark:border-white/20 bg-[#fbfaf7]/90 dark:bg-[#0a0a0c]/90 backdrop-blur-xl text-stone-800 dark:text-stone-200 text-xs font-mono uppercase tracking-widest shadow-lg hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center gap-1.5 cursor-pointer group"
    >
      <span>Top</span>
      <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}

// Minimal luxury Section Footer placed at the bottom of every section / slide
export function SectionFooter({ index = "01 / 07", label = "OVERVIEW" }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-10 mt-16 sm:mt-24 border-t border-stone-200/80 dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono tracking-widest text-stone-500 uppercase select-none">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-stone-700 dark:text-stone-300">{index}</span>
        <span className="text-stone-300 dark:text-stone-700">&bull;</span>
        <span>{label}</span>
      </div>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer group"
        aria-label={`Back to top from ${label}`}
      >
        <span>BACK TO TOP</span>
        <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-stone-900 dark:text-stone-100" />
      </button>
    </div>
  );
}
