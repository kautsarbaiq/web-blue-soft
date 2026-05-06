import React, { useState, useEffect } from 'react';
import MetalLiquid from '../components/MetalLiquid';
import LightLiquidBackground from '../components/LightLiquidBackground';
import SplineScene from '../components/SplineScene';

function Home({ theme }) {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [line4, setLine4] = useState('');

  const fullLine1 = theme === 'light' ? "DIGITAL WORLD" : "BUILD";
  const fullLine2 = theme === 'light' ? "" : "THE DIGITAL";
  const fullLine3 = theme === 'light' ? "" : "FUTURE";
  const fullLine4 = "";

  useEffect(() => {
    setLine1(''); setLine2(''); setLine3(''); setLine4('');

    let i = 0, j = 0, k = 0, l = 0;

    const type = () => {
      if (i < fullLine1.length) {
        setLine1(fullLine1.slice(0, i + 1));
        i++;
        setTimeout(type, 100);
      } else if (j < fullLine2.length) {
        setLine2(fullLine2.slice(0, j + 1));
        j++;
        setTimeout(type, 80);
      } else if (k < fullLine3.length) {
        setLine3(fullLine3.slice(0, k + 1));
        k++;
        setTimeout(type, 100);
      } else if (l < fullLine4.length) {
        setLine4(fullLine4.slice(0, l + 1));
        l++;
        setTimeout(type, 100);
      }
    };

    const timeoutId = setTimeout(type, 100);
    return () => clearTimeout(timeoutId);
  }, [theme, fullLine1, fullLine2, fullLine3, fullLine4]);

  return (
    <div className="w-full flex flex-col">
      <section id="home" className="relative flex items-center justify-center pt-[100px] pb-3xl overflow-hidden min-h-screen">
        {/* Metal Liquid WebGL Background */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            {theme === 'dark' ? <MetalLiquid /> : <LightLiquidBackground />}
          </div>
          {/* Overlay to ensure text readability */}
          <div className={`absolute inset-0 z-[1] hero-overlay ${theme === 'dark'
            ? 'bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]'
            : 'bg-transparent'
            }`}></div>
        </div>

        {/* 3D Spline Asset Layer */}
        <div className="absolute inset-0 z-[5] pointer-events-auto">
          <SplineScene
            scene="https://prod.spline.design/dZtpoNz-ZoSka1OE/scene.splinecode"
            style={{
              transform: theme === 'dark'
                ? 'scale(1.5) translateY(12%) translateX(-25%)'
                : 'scale(1.5) translateY(12%)',
              transformOrigin: 'center center'
            }}
          />
        </div>

        {/* Massive Typography Hero Content */}
        <div className={`z-10 w-full relative flex flex-col justify-center min-h-screen ${theme === 'light' ? '-translate-y-32 items-center text-center px-6' : '-mt-20 items-end pr-6 md:pr-10'} pointer-events-none`}>
          <div className={`relative inline-block ${theme === 'light' ? 'w-full' : 'text-left'}`}>
            {/* Ghost text to maintain stable container size */}
            <h1 className={`invisible font-normal uppercase m-0 p-0 break-words pointer-events-none ${theme === 'light'
              ? 'text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] flex flex-col items-center tracking-[0.05em] text-black'
              : 'text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.85] flex flex-col tracking-[-0.1em] text-white'
              }`}>
              {theme === 'light' ? (
                <span className="block whitespace-nowrap">{fullLine1}</span>
              ) : (
                <>
                  <span className="block -ml-[1.5rem] md:-ml-[5rem] lg:-ml-[8rem]">{fullLine1}</span>
                  <span className="block pl-4 md:pl-8 lg:pl-12">{fullLine2}</span>
                  <span className="block text-right">{fullLine3}</span>
                </>
              )}
            </h1>

            {/* Actual animated text layer */}
            <h1 className={`absolute top-0 left-0 w-full h-full font-normal uppercase m-0 p-0 break-words ${theme === 'light'
              ? 'text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] flex flex-col items-center tracking-[0.05em] text-black/90'
              : 'text-[4.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.85] flex flex-col tracking-[-0.1em] text-white'
              }`}>
              {theme === 'light' ? (
                /* Light Mode: Single Line, Wide Spacing, Black Text */
                <div className="flex flex-col items-center w-full">
                  <span className="block whitespace-nowrap">
                    {line1}
                    <span className={line1.length < fullLine1.length ? "animate-pulse border-r-4 border-black ml-1" : ""}></span>
                  </span>
                </div>
              ) : (
                /* Dark Mode: Original multi-line style */
                <>
                  <span className="block -ml-[1.5rem] md:-ml-[5rem] lg:-ml-[8rem]">
                    {line1}
                    <span className={line1.length < fullLine1.length ? "animate-pulse border-r-4 border-white ml-1" : ""}></span>
                  </span>
                  <span className="block pl-4 md:pl-8 lg:pl-12">
                    {line2}
                    <span className={line1.length === fullLine1.length && line2.length < fullLine2.length ? "animate-pulse border-r-4 border-white ml-1" : ""}></span>
                  </span>
                  <div className="relative inline-block self-end">
                    <span className="block text-right">
                      {line3}
                      <span className={line2.length === fullLine2.length && line3.length < fullLine3.length ? "animate-pulse border-r-4 border-white ml-1" : ""}></span>
                    </span>
                  </div>
                </>
              )}
            </h1>
          </div>

          {/* Description Text Box */}
          <div className={`absolute ${theme === 'light' ? 'bottom-24 left-1/2 -translate-x-1/2 -ml-2 text-center' : 'bottom-10 right-6 md:right-10 lg:right-20 text-left'} max-w-[200px] md:max-w-[300px] pointer-events-none`}>
            <p className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[10px] md:text-sm leading-relaxed font-normal opacity-90 tracking-normal normal-case`}>
              Blue Soft is the technology<br />
              partner designed to radically<br />
              improve enterprise operations<br />
              and cultivate innovation through<br />
              the power of software.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-sm opacity-60">
          <span className={`font-tech-label text-tech-label text-xs ${theme === 'light' ? 'text-black' : 'text-on-surface-variant'} uppercase tracking-widest`}>Scroll</span>
          <span className={`material-symbols-outlined ${theme === 'light' ? 'text-black' : 'text-primary-container'} animate-bounce`}>expand_more</span>
        </div>
      </section>
    </div>
  );
}

export default Home;

