import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="flex-grow pt-[120px] pb-3xl w-full flex flex-col relative z-10 min-h-screen">
      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto px-margin mb-xl md:mb-3xl flex flex-col md:flex-row justify-between items-end gap-md">
        <div className="max-w-2xl">
          <span className="font-tech-label text-tech-label text-primary-container uppercase mb-xs block">Architecting The Future</span>
          <h1 className="font-h1 text-h1 text-on-background">Featured Projects</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">A selection of high-performance technical solutions delivering measurable impact across enterprise ecosystems.</p>
        </div>
        
        {/* Carousel Navigation Arrows */}
        <div className="flex gap-sm">
          <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface hover:glow-border-cyan hover:text-primary-container transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface hover:glow-border-cyan hover:text-primary-container transition-all">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      
      {/* Horizontal Carousel */}
      <div className="w-full overflow-x-auto no-scrollbar pb-xl pl-margin md:pl-[max(2rem,calc((100vw-80rem)/2))]">
        <div className="flex gap-gutter w-max pr-margin">
          {/* Project Card 1 */}
          <div className="glass-panel w-[320px] md:w-[480px] rounded-xl overflow-hidden relative group flex flex-col">
            <div className="noise-overlay rounded-xl"></div>
            <div className="h-[200px] md:h-[280px] w-full relative overflow-hidden bg-[#12121a]">
              <img className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="A high-tech digital visualization of a complex cloud server architecture. Glowing blue and cyan data streams flow between abstract server nodes in a vast, dark void. The scene is illuminated by intense neon accents, representing high-speed data migration. The aesthetic is futuristic, sleek, and highly conceptual, fitting a premium IT corporate portfolio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEAuH3IhpnerfiztcbgDpuwjodzK3qKbxb4Unl8GzxI-M1_tmVyba9cMwQX57Gi5QPjPmPHHQ3eQkA6G1aBUR9DT6n_mNcD0SVMfRn482JSGuzEX98-iqelysBKNtQgClYh3rXUrRE4j9DJPmcomQxRL2jAb4lbcFfTGDCQA5K4gC62kH2tBOB_6rOUnrNJnpQhd2FJrS65-eXlIUHzZ6Bco7dc3bV3SfeibJtZv9qK_iX7v-geI7NsHegbMfmAd3kPzxZ3kvwobnp"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-90"></div>
              <div className="absolute top-md right-md bg-secondary-container/80 backdrop-blur-sm px-3 py-1 rounded font-tech-label text-code text-primary-fixed-dim border border-primary-container/30">
                  ↑300% conversion
              </div>
            </div>
            <div className="p-lg flex-grow flex flex-col">
              <span className="font-tech-label text-code text-on-surface-variant mb-xs">Client: OmniLogistics Corp</span>
              <h3 className="font-h3 text-h4 md:text-h3 text-on-background mb-md">Nexus Cloud Migration</h3>
              <div className="flex flex-wrap gap-xs mb-lg mt-auto">
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">AWS</span>
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">Kubernetes</span>
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">React</span>
              </div>
              <button className="font-tech-label text-tech-label text-on-background flex items-center gap-xs hover:text-primary-container transition-colors uppercase mt-auto">
                  View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="glass-panel w-[320px] md:w-[480px] rounded-xl overflow-hidden relative group flex flex-col glow-border-cyan">
            <div className="noise-overlay rounded-xl"></div>
            <div className="h-[200px] md:h-[280px] w-full relative overflow-hidden bg-[#12121a]">
              <img className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="An abstract representation of artificial intelligence optimizing logistics. A dark, moody scene featuring a glowing grid overlay on a stylised map or motherboard. Points of light pulse along defined paths in vivid magenta and cyan. The visual style is deep, glassmorphic, and highly technical, reflecting precision engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Q7KZnaugW4FEPecSo7CH5dmZqAq2HgIVW92AJDeXzC9UM_Zk_zjbnds4zHe243nG9Qb_p0U0L7f-pbxsbxICKLpOpx04HJRgM_MCc-LI9NSJTh_P544qcLU3d2vhm_L5WAN-jGRhVi-xlpMnTrSEWmjm0ou5mdQI55cq15snYIxA3mS3s4A6ElN_WNfMUHW1disc0vG571h4qzP3l0OjTYssey01icFyZs8dLDuNJTgunQBBeGj5g_d2xa0s5YLUovC_k3MgD1ed"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-90"></div>
              <div className="absolute top-md right-md bg-secondary-container/80 backdrop-blur-sm px-3 py-1 rounded font-tech-label text-code text-primary-fixed-dim border border-primary-container/30">
                  ↓50% load time
              </div>
            </div>
            <div className="p-lg flex-grow flex flex-col">
              <span className="font-tech-label text-code text-on-surface-variant mb-xs">Client: Global Freight Solutions</span>
              <h3 className="font-h3 text-h4 md:text-h3 text-on-background mb-md">AI Logistics Optimizer</h3>
              <div className="flex flex-wrap gap-xs mb-lg mt-auto">
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">Python</span>
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">TensorFlow</span>
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">Node.js</span>
              </div>
              <button className="font-tech-label text-tech-label text-primary-container flex items-center gap-xs hover:text-white transition-colors uppercase mt-auto">
                  View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="glass-panel w-[320px] md:w-[480px] rounded-xl overflow-hidden relative group flex flex-col">
            <div className="noise-overlay rounded-xl"></div>
            <div className="h-[200px] md:h-[280px] w-full relative overflow-hidden bg-[#12121a]">
              <img className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="A futuristic dashboard interface displayed on a sleek, dark glass monitor. The UI features complex data visualisations, neon charts, and metrics in a high-contrast dark mode setting. The ambient light casts a soft, technical glow over the workspace. The scene projects absolute data mastery and modern enterprise software design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1cqZ1ONxhfJUVohHlSJPPR1rpIMSGngUhoB-_BM5dj_FZsm12ZPpDm03O2_1WHJ84Ujk2nUahboy8SCWCSvWPRnAGnAdvG-MqDTT_uRc-aF--18GDPGWEG0aANELdKWQ9PVk78mBjQfExSysFHnF_CLagObUuRhHoHXYzpX7emkrZ5I-K1-2DyrmsYI_bzgRXBC8BRgWajwZxapX4D-SeBEIKbAdsdriL7DagcMd2WgbhVSIgfNGQuvgx9n1Mje2vObz8Okr3J7uT"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-90"></div>
              <div className="absolute top-md right-md bg-secondary-container/80 backdrop-blur-sm px-3 py-1 rounded font-tech-label text-code text-primary-fixed-dim border border-primary-container/30">
                  99.99% Uptime
              </div>
            </div>
            <div className="p-lg flex-grow flex flex-col">
              <span className="font-tech-label text-code text-on-surface-variant mb-xs">Client: FinTech Horizon</span>
              <h3 className="font-h3 text-h4 md:text-h3 text-on-background mb-md">Secure Core Banking API</h3>
              <div className="flex flex-wrap gap-xs mb-lg mt-auto">
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">Go</span>
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">PostgreSQL</span>
                <span className="bg-[#12121a] border border-white/10 px-2 py-1 rounded font-tech-label text-code text-primary">Docker</span>
              </div>
              <button className="font-tech-label text-tech-label text-on-background flex items-center gap-xs hover:text-primary-container transition-colors uppercase mt-auto">
                  View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
