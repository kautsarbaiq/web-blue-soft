import React from 'react';
import MetalLiquid from '../components/MetalLiquid';
import AICarouselSection from '../components/AICarouselSection';

function Home() {
  return (
    <div className="w-full flex flex-col">
      <section id="home" className="relative flex items-center justify-end pt-[100px] pb-3xl overflow-hidden min-h-screen">
        {/* Metal Liquid WebGL Background */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <MetalLiquid />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f] z-[1]"></div>
        </div>

        {/* Massive Typography Hero Content */}
        <div className="text-white text-center z-10 w-full relative flex flex-col justify-center items-end -mt-20 pr-6 md:pr-10">
          <h1 className="text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.85] tracking-[-0.1em] font-normal uppercase m-0 p-0 text-white break-words text-left inline-block relative">
            <span className="block -ml-[1.5rem] md:-ml-[5rem] lg:-ml-[8rem]">BUILD</span>
            <span className="block pl-4 md:pl-8 lg:pl-12">THE DIGITAL</span>
            <span className="block text-right">FUTURE</span>
            
            {/* Description Text Box positioned relative to the heading */}
            <div className="absolute bottom-0 left-0 transform -translate-x-[60%] md:-translate-x-[120%] -translate-y-[20%] text-left max-w-[200px] md:max-w-[300px]">
              <p className="text-white text-[10px] md:text-sm leading-relaxed font-normal opacity-90 tracking-normal normal-case">
                Blue Soft is the technology<br/>
                partner designed to radically<br/>
                improve enterprise operations<br/>
                and cultivate innovation through<br/>
                the power of software.
              </p>
            </div>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-sm opacity-60">
          <span className="font-tech-label text-tech-label text-xs text-on-surface-variant uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined text-primary-container animate-bounce">expand_more</span>
        </div>
      </section>

      {/* AI Carousel Section */}
      <AICarouselSection />
    </div>
  );
}

export default Home;

