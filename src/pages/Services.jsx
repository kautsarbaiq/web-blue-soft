import React from 'react';

function Services() {
  return (
    <section id="services" className="flex-grow pt-[120px] pb-3xl px-lg relative z-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-3xl">
          <h1 className="font-h2 text-h2 text-on-surface mb-md">What We Do Best</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Comprehensive IT solutions tailored for you</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {/* Card 1: Cloud */}
          <div className="group relative bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl p-xl flex flex-col gap-lg transition-all duration-300 hover:border-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform duration-300 z-10">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>cloud</span>
            </div>
            <div className="z-10 flex-grow">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Cloud Infrastructure</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Scalable and secure cloud architectures designed to optimize your operations and reduce overhead costs significantly.</p>
            </div>
            <a className="z-10 font-tech-label text-tech-label text-primary-container uppercase tracking-widest flex items-center gap-sm hover:text-white transition-colors w-fit" href="#">
              Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Card 2: AI */}
          <div className="group relative bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl p-xl flex flex-col gap-lg transition-all duration-300 hover:border-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform duration-300 z-10">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>smart_toy</span>
            </div>
            <div className="z-10 flex-grow">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Artificial Intelligence</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Integrate advanced machine learning models to automate complex processes and unlock predictive business insights.</p>
            </div>
            <a className="z-10 font-tech-label text-tech-label text-primary-container uppercase tracking-widest flex items-center gap-sm hover:text-white transition-colors w-fit" href="#">
              Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Card 3: Mobile */}
          <div className="group relative bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl p-xl flex flex-col gap-lg transition-all duration-300 hover:border-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform duration-300 z-10">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>smartphone</span>
            </div>
            <div className="z-10 flex-grow">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Mobile Development</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">High-performance native and cross-platform mobile applications engineered for exceptional user experiences.</p>
            </div>
            <a className="z-10 font-tech-label text-tech-label text-primary-container uppercase tracking-widest flex items-center gap-sm hover:text-white transition-colors w-fit" href="#">
              Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Card 4: Security */}
          <div className="group relative bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl p-xl flex flex-col gap-lg transition-all duration-300 hover:border-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform duration-300 z-10">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>security</span>
            </div>
            <div className="z-10 flex-grow">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Cybersecurity</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Enterprise-grade security frameworks protecting your digital assets against evolving sophisticated threat vectors.</p>
            </div>
            <a className="z-10 font-tech-label text-tech-label text-primary-container uppercase tracking-widest flex items-center gap-sm hover:text-white transition-colors w-fit" href="#">
              Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Card 5: Data */}
          <div className="group relative bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl p-xl flex flex-col gap-lg transition-all duration-300 hover:border-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform duration-300 z-10">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>database</span>
            </div>
            <div className="z-10 flex-grow">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Data Analytics</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Transform raw data streams into actionable intelligence with robust pipelines and real-time visualization dashboards.</p>
            </div>
            <a className="z-10 font-tech-label text-tech-label text-primary-container uppercase tracking-widest flex items-center gap-sm hover:text-white transition-colors w-fit" href="#">
              Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Card 6: Consulting */}
          <div className="group relative bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl p-xl flex flex-col gap-lg transition-all duration-300 hover:border-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform duration-300 z-10">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>support_agent</span>
            </div>
            <div className="z-10 flex-grow">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">IT Consulting</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Strategic guidance from industry veterans to align your technology infrastructure with long-term business objectives.</p>
            </div>
            <a className="z-10 font-tech-label text-tech-label text-primary-container uppercase tracking-widest flex items-center gap-sm hover:text-white transition-colors w-fit" href="#">
              Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
