import React, { useState, useEffect } from 'react';

function Layout({ children }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClass = (sectionId) => {
    const baseClass = "transition-all duration-300 px-3 py-1 cursor-pointer ";
    return activeSection === sectionId 
      ? baseClass + "text-cyan-400 border-b-2 border-cyan-400 pb-1"
      : baseClass + "text-slate-400 hover:text-white hover:bg-white/10 rounded-md";
  };

  return (
    <>
      <div className="noise-bg"></div>
      
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-12 mt-6 w-full pointer-events-none">
        {/* Logo Island */}
        <div className="px-6 py-2 pointer-events-auto">
          <a href="#home" className="text-2xl font-black tracking-tighter text-cyan-400">Blue Soft</a>
        </div>

        {/* Navigation Island */}
        <nav className="hidden md:flex gap-2 items-center px-4 py-2 bg-white/10 backdrop-blur-2xl saturate-150 rounded-full border border-white/20 border-t-white/40 shadow-[0_0_30px_rgba(0,212,255,0.15)] pointer-events-auto">
          <a href="#home" className={getNavClass('home')}>Home</a>
          <a href="#about" className={getNavClass('about')}>About</a>
          <a href="#services" className={getNavClass('services')}>Services</a>
          <a href="#portfolio" className={getNavClass('portfolio')}>Portfolio</a>
          <a href="#contact" className={getNavClass('contact')}>Contact</a>
        </nav>

        {/* CTA Island */}
        <div className="px-4 py-2 pointer-events-auto">
          <a href="#contact" className="bg-primary-container text-on-primary-container hover:text-cyan-400 hover:bg-[#001f27] font-sans text-sm font-medium tracking-wide px-6 py-2 rounded-full transition-all duration-300 inline-block scale-95 active:scale-90 border border-primary-container shadow-[0_0_15px_rgba(0,212,255,0.3)]">
            Get Started
          </a>
        </div>
      </header>

      {/* Page Content */}
      <div className="w-full">
        {children}
      </div>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto full-width border-t border-white/10 bg-[#0a0a0f] relative z-20">
        <div className="text-xl font-bold text-white">Blue Soft</div>
        <div className="font-mono text-xs uppercase tracking-widest text-slate-500">© 2024 Blue Soft. Architects of the Future.</div>
        <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-slate-500">
          <a className="hover:text-cyan-300 transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-cyan-300 transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-cyan-300 transition-colors" href="#">Cookie Policy</a>
        </div>
      </footer>
    </>
  );
}

export default Layout;
