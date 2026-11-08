import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-75 ease-out shadow-sm shadow-cyan-400/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
