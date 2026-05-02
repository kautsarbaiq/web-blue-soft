import React from 'react';

function About() {
  return (
    <section id="about" className="flex-grow pt-[120px] pb-3xl px-gutter md:px-xl max-w-[1440px] mx-auto w-full flex flex-col justify-center relative z-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl lg:gap-3xl items-center mt-xl">
        {/* Left Column: Mission & Narrative */}
        <div className="flex flex-col gap-lg max-w-2xl">
          <div className="inline-flex items-center gap-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-[16px] w-fit">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
            <span className="font-tech-label text-tech-label text-primary tracking-widest uppercase">The Architect of the Future</span>
          </div>
          <h1 className="font-h1 text-h1 text-on-background">
            Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital</span> Transformation.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            At Blue Soft, we engineer high-performance systems for a complex world. We are not just developers; we are architects of digital resilience. By fusing intelligent technology with deep analytical precision, we build the foundations upon which modern enterprises thrive.
          </p>
          <div className="flex gap-md mt-sm">
            <button className="bg-primary text-on-primary font-tech-label text-tech-label px-6 py-3 rounded hover:shadow-[0_0_15px_rgba(168,232,255,0.5)] transition-shadow">
              Explore Capabilities
            </button>
            <button className="bg-white/5 border border-white/10 text-primary font-tech-label text-tech-label px-6 py-3 rounded backdrop-blur-[16px] hover:bg-white/10 transition-colors">
              Read Our Manifesto
            </button>
          </div>
        </div>

        {/* Right Column: Animated Statistics Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md relative">
          {/* Background Glow Effect for Depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none z-[-1]"></div>

          {/* Stat Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-xl backdrop-blur-[16px] relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
            </div>
            <div className="font-tech-label text-tech-label text-on-surface-variant uppercase tracking-widest mb-sm">Projects Delivered</div>
            <div className="font-h2 text-h2 text-on-background">500<span className="text-primary">+</span></div>
            <div className="w-full h-1 bg-surface-container-highest mt-md rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%] rounded-full shadow-[0_0_10px_rgba(168,232,255,0.5)]"></div>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-xl backdrop-blur-[16px] relative overflow-hidden sm:mt-xl group hover:border-secondary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
            </div>
            <div className="font-tech-label text-tech-label text-on-surface-variant uppercase tracking-widest mb-sm">System Uptime</div>
            <div className="font-h2 text-h2 text-on-background">99.9<span className="text-secondary">%</span></div>
            <div className="w-full h-1 bg-surface-container-highest mt-md rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-primary w-[99%] rounded-full shadow-[0_0_10px_rgba(201,191,255,0.5)]"></div>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-xl backdrop-blur-[16px] relative overflow-hidden sm:-mt-xl group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            </div>
            <div className="font-tech-label text-tech-label text-on-surface-variant uppercase tracking-widest mb-sm">Years Experience</div>
            <div className="font-h2 text-h2 text-on-background">15<span className="text-primary">+</span></div>
            <div className="w-full h-1 bg-surface-container-highest mt-md rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary w-[100%] rounded-full shadow-[0_0_10px_rgba(168,232,255,0.5)]"></div>
            </div>
          </div>

          {/* Empty Glass Card for Asymmetry/Balance */}
          <div className="hidden sm:flex bg-surface-container-low border border-outline-variant/30 rounded-xl p-xl items-center justify-center relative overflow-hidden group">
            <span className="material-symbols-outlined text-4xl text-outline-variant/50 group-hover:text-primary/30 transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
