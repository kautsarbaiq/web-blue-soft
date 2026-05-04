import React, { useState, useEffect } from 'react';
import MetalLiquid from '../components/MetalLiquid';

function Home() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');

  const fullLine1 = "BUILD";
  const fullLine2 = "THE DIGITAL";
  const fullLine3 = "FUTURE";

  useEffect(() => {
    let currentLine1 = "";
    let currentLine2 = "";
    let currentLine3 = "";
    let i = 0;
    let j = 0;
    let k = 0;

    const typeLine1 = setInterval(() => {
      if (i < fullLine1.length) {
        currentLine1 += fullLine1[i];
        setLine1(currentLine1);
        i++;
      } else {
        clearInterval(typeLine1);
        const typeLine2 = setInterval(() => {
          if (j < fullLine2.length) {
            currentLine2 += fullLine2[j];
            setLine2(currentLine2);
            j++;
          } else {
            clearInterval(typeLine2);
            const typeLine3 = setInterval(() => {
              if (k < fullLine3.length) {
                currentLine3 += fullLine3[k];
                setLine3(currentLine3);
                k++;
              } else {
                clearInterval(typeLine3);
              }
            }, 100);
          }
        }, 80);
      }
    }, 100);

    return () => {
      clearInterval(typeLine1);
    };
  }, []);

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
          <div className="relative inline-block text-left">
            {/* Ghost text to maintain stable container size */}
            <h1 className="invisible text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.85] tracking-[-0.1em] font-normal uppercase m-0 p-0 break-words pointer-events-none">
              <span className="block -ml-[1.5rem] md:-ml-[5rem] lg:-ml-[8rem]">BUILD</span>
              <span className="block pl-4 md:pl-8 lg:pl-12">THE DIGITAL</span>
              <span className="block text-right">FUTURE</span>
            </h1>

            {/* Actual animated text layer */}
            <h1 className="absolute top-0 left-0 w-full h-full text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.85] tracking-[-0.1em] font-normal uppercase m-0 p-0 text-white break-words">
              <span className="block -ml-[1.5rem] md:-ml-[5rem] lg:-ml-[8rem]">
                {line1}
                <span className={line1.length < fullLine1.length ? "animate-pulse border-r-4 border-white ml-1" : ""}></span>
              </span>
              <span className="block pl-4 md:pl-8 lg:pl-12">
                {line2}
                <span className={line1.length === fullLine1.length && line2.length < fullLine2.length ? "animate-pulse border-r-4 border-white ml-1" : ""}></span>
              </span>
              <span className="block text-right">
                {line3}
                <span className={line2.length === fullLine2.length && line3.length < fullLine3.length ? "animate-pulse border-r-4 border-white ml-1" : ""}></span>
              </span>
            </h1>
            
            {/* Description Text Box - Now anchored to a stable container size */}
            <div className="absolute bottom-0 left-0 transform -translate-x-[60%] md:-translate-x-[120%] -translate-y-[20%] text-left max-w-[200px] md:max-w-[300px]">
              <p className="text-white text-[10px] md:text-sm leading-relaxed font-normal opacity-90 tracking-normal normal-case">
                Blue Soft is the technology<br/>
                partner designed to radically<br/>
                improve enterprise operations<br/>
                and cultivate innovation through<br/>
                the power of software.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-sm opacity-60">
          <span className="font-tech-label text-tech-label text-xs text-on-surface-variant uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined text-primary-container animate-bounce">expand_more</span>
        </div>
      </section>

    </div>
  );
}

export default Home;

