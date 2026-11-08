import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import FloatingBackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import UIUXShowcase from './sections/UIUXShowcase';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#fbfaf7] dark:bg-[#0a0a0c] text-stone-900 dark:text-stone-100 transition-colors duration-500 selection:bg-stone-900 selection:text-stone-100 dark:selection:bg-stone-100 dark:selection:text-stone-900">
        
        {/* Minimal Luxury Floating Navbar */}
        <Navbar />

        {/* Global Floating Back To Top Button */}
        <FloatingBackToTop />

        {/* Main Sections */}
        <main className="relative z-10 flex flex-col">
          {/* 01. Hero — Editorial Introduction with Unobstructed First Picture & Section Footer */}
          <Hero />

          {/* 02. About Me — Editorial Biography with Section Footer */}
          <About />

          {/* 03. Selected Work — Projects with Section Footer */}
          <Projects />

          {/* 04. Tools & Expertise — Minimal Typographic Skills with Section Footer */}
          <Skills />

          {/* 05. Design Studies — UI/UX Showcase with Section Footer */}
          <UIUXShowcase />

          {/* 06. Beyond The Code — Personal Photography Exhibition with Section Footer */}
          <Gallery />

          {/* 07. Have An Idea? Let's Talk — Minimal Contact with Section Footer */}
          <Contact />
        </main>

        {/* Minimalist Colophon Footer */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}
