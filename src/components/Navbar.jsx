import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Design', href: '#design' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'work', 'skills', 'design', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 sm:py-6 px-4 pointer-events-none transition-all duration-300">
      
      {/* Minimal Luxury Floating Navbar */}
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-5 sm:px-7 py-3 rounded-full transition-all duration-500 max-w-5xl w-full border ${
          isScrolled
            ? 'bg-[#fbfaf7]/80 dark:bg-[#0a0a0c]/80 backdrop-blur-2xl border-stone-200/90 dark:border-white/[0.1] shadow-lg shadow-black/[0.04] dark:shadow-black/50'
            : 'bg-[#fbfaf7]/40 dark:bg-[#0a0a0c]/40 backdrop-blur-md border-stone-200/60 dark:border-white/[0.06]'
        }`}
      >
        {/* Left: Brand Monogram */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="font-serif text-lg tracking-tight font-medium text-stone-900 dark:text-stone-100 group-hover:opacity-75 transition-opacity">
            SY.
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300 border-l border-stone-300 dark:border-white/10 pl-2.5">
            SAYYAD YAMEEN
          </span>
        </a>

        {/* Center: Clean Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 ${
                  isActive
                    ? 'text-stone-950 dark:text-white font-medium'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-200'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-900 dark:bg-stone-200" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Theme Toggle & Contact */}
        <div className="flex items-center gap-3">
          
          {/* Functional Light / Dark Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-200 border border-stone-200 dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/20 transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Quick Contact Link */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition-colors shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-full text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-[#fbfaf7]/98 dark:bg-[#0a0a0c]/98 backdrop-blur-2xl border border-stone-200 dark:border-white/[0.1] rounded-3xl p-6 shadow-2xl z-50 md:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-mono uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'bg-stone-200/60 dark:bg-white/[0.08] text-stone-900 dark:text-white font-semibold'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-200" />}
                </a>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-stone-200 dark:border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Theme</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs font-mono text-stone-800 dark:text-stone-200"
              >
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
