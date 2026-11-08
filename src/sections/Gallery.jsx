import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ImageLightbox from '../components/ImageLightbox';
import { SectionFooter } from '../components/BackToTop';

export default function Gallery() {
  const { galleryImages } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-28 sm:py-36 border-t border-stone-200/80 dark:border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-stone-200/80 dark:border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-ultra uppercase text-stone-600 dark:text-stone-300 block mb-2">
              06 &bull; VISUAL JOURNAL
            </span>
            <h2 className="headline-editorial text-5xl sm:text-7xl text-stone-900 dark:text-stone-100">
              BEYOND <span className="subheadline-editorial text-stone-600 dark:text-stone-300">THE CODE.</span>
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
            MOUNTAIN TRAILS &amp; HORIZONS
          </span>
        </div>

        {/* Asymmetrical Exhibition Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Plate I: Cinematic Sunset (Large 8 Columns) */}
          <div 
            onClick={() => setSelectedImage(galleryImages[0])}
            className="md:col-span-8 cursor-pointer group"
          >
            <div className="editorial-image-frame rounded-3xl border border-stone-200/90 dark:border-white/[0.08] shadow-2xl aspect-[16/10] w-full overflow-hidden">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].title}
                className="w-full h-full object-cover object-center filter contrast-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/80 text-white border border-white/10 backdrop-blur-md">
                  {galleryImages[0].plate}
                </span>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-4 flex items-center justify-between text-xs">
              <div>
                <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                  {galleryImages[0].title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5">
                  {galleryImages[0].caption}
                </p>
              </div>
              <span className="font-mono text-[11px] text-stone-500 uppercase tracking-wider shrink-0">
                {galleryImages[0].location}
              </span>
            </div>
          </div>

          {/* Plate II: Mountain Horizon (4 Columns) */}
          <div 
            onClick={() => setSelectedImage(galleryImages[1])}
            className="md:col-span-4 cursor-pointer group"
          >
            <div className="editorial-image-frame rounded-3xl border border-stone-200/90 dark:border-white/[0.08] shadow-2xl aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].title}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/80 text-white border border-white/10 backdrop-blur-md">
                  {galleryImages[1].plate}
                </span>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-4 flex items-center justify-between text-xs">
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                  {galleryImages[1].title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5">
                  {galleryImages[1].caption}
                </p>
              </div>
              <span className="font-mono text-[11px] text-stone-500 uppercase tracking-wider shrink-0">
                {galleryImages[1].location}
              </span>
            </div>
          </div>

          {/* Plate III: Above Clouds (6 Columns) */}
          <div 
            onClick={() => setSelectedImage(galleryImages[2])}
            className="md:col-span-6 cursor-pointer group"
          >
            <div className="editorial-image-frame rounded-3xl border border-stone-200/90 dark:border-white/[0.08] shadow-2xl aspect-[16/11] w-full overflow-hidden">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].title}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/80 text-white border border-white/10 backdrop-blur-md">
                  {galleryImages[2].plate}
                </span>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-4 flex items-center justify-between text-xs">
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                  {galleryImages[2].title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5">
                  {galleryImages[2].caption}
                </p>
              </div>
              <span className="font-mono text-[11px] text-stone-500 uppercase tracking-wider shrink-0">
                {galleryImages[2].location}
              </span>
            </div>
          </div>

          {/* Plate IV: Morning Mist (6 Columns) */}
          <div 
            onClick={() => setSelectedImage(galleryImages[3])}
            className="md:col-span-6 cursor-pointer group"
          >
            <div className="editorial-image-frame rounded-3xl border border-stone-200/90 dark:border-white/[0.08] shadow-2xl aspect-[16/11] w-full overflow-hidden">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].title}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/80 text-white border border-white/10 backdrop-blur-md">
                  {galleryImages[3].plate}
                </span>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-4 flex items-center justify-between text-xs">
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                  {galleryImages[3].title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light mt-0.5">
                  {galleryImages[3].caption}
                </p>
              </div>
              <span className="font-mono text-[11px] text-stone-500 uppercase tracking-wider shrink-0">
                {galleryImages[3].location}
              </span>
            </div>
          </div>

        </div>

        {/* Back to Top Section Footer on Gallery slide */}
        <SectionFooter index="06 / 07" label="VISUAL JOURNAL &bull; GALLERY" />

      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageLightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
