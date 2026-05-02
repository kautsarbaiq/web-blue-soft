import React from 'react';
import MetalLiquid from '../components/MetalLiquid';

function Home() {
  return (
    <section id="home" className="flex-grow relative flex items-center justify-center pt-[100px] pb-3xl px-gutter overflow-hidden min-h-screen">
      {/* Metal Liquid WebGL Background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <MetalLiquid />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f] z-[1]"></div>
      </div>

      {/* Hero Content (Clean) */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
        <h1 className="font-h1 text-h1 text-on-surface mb-lg max-w-4xl mx-auto drop-shadow-lg">
          Empowering Business Through Intelligent Technology
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-2xl">
          We craft cutting-edge digital solutions that transform how companies operate and grow.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-md">
          <button className="btn-primary font-tech-label text-tech-label px-lg py-md rounded uppercase tracking-widest inline-flex items-center justify-center">
            Our Solutions
          </button>
          <button className="glass-panel border border-white/10 text-primary-container p-md rounded-full hover:bg-white/5 transition-colors flex items-center justify-center group">
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-sm opacity-60">
        <span className="font-tech-label text-tech-label text-xs text-on-surface-variant uppercase tracking-widest">Scroll</span>
        <span className="material-symbols-outlined text-primary-container animate-bounce">expand_more</span>
      </div>
    </section>
  );
}

export default Home;
