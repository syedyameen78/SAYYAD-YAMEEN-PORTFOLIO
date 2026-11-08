import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getCurrentYear, getWhatsAppUrl, getMailtoUrl } from '../utils/helpers';

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Design', href: '#design' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-stone-200/80 dark:border-white/[0.08] pt-20 pb-16 bg-[#f5f3ee]/50 dark:bg-[#070709] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-200/80 dark:border-white/[0.08]">
          
          {/* Brand Manifesto */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl font-medium tracking-tight text-stone-900 dark:text-stone-100 block mb-2">
                SAYYAD YAMEEN.
              </span>
              <p className="text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-4">
                AI &amp; ML Developer &bull; Data Science Student &bull; UI/UX Designer
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light max-w-sm mb-4 leading-relaxed">
                "I enjoy exploring artificial intelligence, machine learning, web development and UI/UX design. My goal is to transform ideas into useful and meaningful digital experiences."
              </p>
              <p className="text-xs font-serif italic text-stone-800 dark:text-stone-200">
                "{profile.tagline}"
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono tracking-widest uppercase mt-8 text-stone-600 dark:text-stone-400">
              <a
                href={profile.contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={getWhatsAppUrl(profile.contactInfo.phone)}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={getMailtoUrl(profile.contactInfo.email)}
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Directory */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-mono uppercase tracking-ultra text-stone-600 dark:text-stone-400 mb-6">
              INDEX DIRECTORY
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Colophon & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-ultra text-stone-600 dark:text-stone-400 mb-2">
                COLOPHON
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                Designed with restraint. Built with Three.js, React &amp; Tailwind CSS.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Dynamic Year & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-widest text-stone-600 dark:text-stone-400 gap-4 uppercase">
          <p>
            &copy; {getCurrentYear()} SAYYAD YAMEEN &bull; ALL RIGHTS RESERVED
          </p>
          <p>
            MINIMAL LUXURY INTERACTIVE PORTFOLIO
          </p>
        </div>

      </div>
    </footer>
  );
}
