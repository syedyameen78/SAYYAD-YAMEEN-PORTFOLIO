import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

export default function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative max-w-5xl w-full flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full border border-white/10 text-white/70 hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black max-h-[75vh] w-full flex items-center justify-center">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full max-h-[75vh] object-contain"
          />
        </div>

        <div className="w-full mt-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0e0e11] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-stone-400 mb-1">
              {image.plate} &bull; EXHIBITION
            </div>
            <h3 className="font-serif text-xl text-white">
              {image.title}
            </h3>
            <p className="text-stone-400 font-light mt-0.5 max-w-xl">
              {image.caption}
            </p>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-stone-300 shrink-0 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>{image.location}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
