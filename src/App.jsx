import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Particles from './components/Particles';

export default function App() {
  const handleGenerate = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-[#06080f] text-white">
      {/* Ambient particle field behind all content */}
      <div className="fixed inset-0 z-0">
        <Particles className="h-full w-full opacity-70" density={90} />
      </div>

      {/* Main page content sits above the particle canvas */}
      <div className="relative z-10">
        <Hero onGenerate={handleGenerate} />

        <div id="how-it-works">
          <HowItWorks />
        </div>

        <Features />
        <Testimonials />
        <FinalCTA />

        <footer className="border-t border-white/10 bg-[#06080f] py-10 text-center text-xs text-cyan-100/60">
          © {new Date().getFullYear()} AI Fridge Gene. The AI that cooks with you.
        </footer>
      </div>
    </div>
  );
}
