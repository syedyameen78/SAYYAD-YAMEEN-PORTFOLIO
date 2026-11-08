import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Subtle Apple-style Radial Spotlights */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-sky-500/[0.07] via-indigo-500/[0.04] to-transparent rounded-full blur-[120px]" />
      
      <div className="absolute top-[45%] -left-[10%] w-[650px] h-[650px] bg-gradient-to-tr from-sky-500/[0.03] to-transparent rounded-full blur-[140px]" />

      <div className="absolute top-[75%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-bl from-indigo-500/[0.03] to-transparent rounded-full blur-[140px]" />

      {/* Ultra-subtle linear architectural dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
