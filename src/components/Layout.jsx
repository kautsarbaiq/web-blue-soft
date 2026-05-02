import React, { useState, useEffect } from 'react';

function Layout({ children }) {
  const [activeSection, setActiveSection] = useState('home');

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    const baseClass = "transition-all duration-300 px-3 py-1 cursor-pointer whitespace-nowrap ";
    return activeSection === sectionId
      ? baseClass + "text-cyan-400"
      : baseClass + "text-slate-400 hover:text-white";
  };

  return (
    <>
      <div className="noise-bg"></div>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 mt-6 flex justify-center pointer-events-none">
        <div 
          className={`backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto ${
            isScrolled 
              ? 'max-w-[480px] px-6 py-2 rounded-full justify-center' 
              : 'max-w-7xl w-full px-8 py-4 rounded-2xl'
          }`}
        >
          {/* Logo Container - Collapses Width */}
          <div 
            className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center overflow-hidden whitespace-nowrap ${
              isScrolled ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'
            }`}
          >
            <a href="#home" className="text-2xl font-black tracking-tighter text-cyan-400 mr-8">Blue Soft</a>
          </div>

          {/* Spacer to push Nav to the right when large */}
          <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled ? 'flex-grow-0 w-0' : 'flex-grow'}`}></div>

          {/* Navigation Group */}
          <nav 
            className={`flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              isScrolled ? 'gap-2' : 'gap-8'
            }`}
          >
            <a href="#home" className={getNavClass('home')}>Home</a>
            <a href="#about" className={getNavClass('about')}>About</a>
            <a href="#services" className={getNavClass('services')}>Services</a>
            <a href="#portfolio" className={getNavClass('portfolio')}>Portfolio</a>
            <a href="#contact" className={getNavClass('contact')}>Contact</a>
          </nav>

          {/* CTA Container - Collapses Width */}
          <div 
            className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden whitespace-nowrap ${
              isScrolled ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-12'
            }`}
          >
            <a href="#contact" className="bg-primary-container text-on-primary-container hover:text-cyan-400 hover:bg-[#001f27] font-sans text-sm font-medium tracking-wide px-6 py-2 rounded-xl transition-all duration-300 inline-block border border-primary-container shadow-[0_5px_15px_rgba(0,212,255,0.2)]">
              Get Started
            </a>
          </div>
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
