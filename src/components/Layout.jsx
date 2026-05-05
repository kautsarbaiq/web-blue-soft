import React, { useState, useEffect } from 'react';

function Layout({ children, theme, toggleTheme }) {
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
          className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center pointer-events-auto ${
            isScrolled 
              ? 'backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] max-w-[480px] px-6 py-2 rounded-full justify-center' 
              : 'bg-transparent border-none shadow-none max-w-7xl w-full px-8 py-4 justify-between'
          }`}
        >
          {/* Logo Container - Left Aligned */}
          <div 
            className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center overflow-hidden whitespace-nowrap ${
              isScrolled ? 'max-w-0 opacity-0' : 'flex-1 opacity-100 -ml-4 md:-ml-8 lg:-ml-12'
            }`}
          >
            <a href="#home" className="text-xl font-black tracking-tighter text-black bg-cyan-400 px-1 py-1 rounded-none">Blue Soft</a>
          </div>

          {/* Navigation Group - Centered when unscrolled */}
          <nav 
            className={`flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              isScrolled ? 'gap-2 justify-center' : 'gap-8 flex-1 justify-center'
            }`}
          >
            <a href="#home" className={getNavClass('home')}>Home</a>
            <a href="#about" className={getNavClass('about')}>About</a>
            <a href="#services" className={getNavClass('services')}>Services</a>
            <a href="#portfolio" className={getNavClass('portfolio')}>Portfolio</a>
            <a href="#contact" className={getNavClass('contact')}>Contact</a>
            
            {/* Premium Theme Switch Button */}
            <button 
              onClick={toggleTheme}
              className="ml-4 relative group"
              aria-label="Toggle Theme"
            >
              <div className="relative w-14 h-7 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 flex items-center px-1">
                {/* Sliding Thumb */}
                <div 
                  className={`absolute w-5 h-5 rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.3)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'translate-x-7 bg-gradient-to-tr from-cyan-600 to-cyan-400' 
                      : 'translate-x-0 bg-gradient-to-tr from-orange-500 to-yellow-400'
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Moon Icon */}
                    <svg 
                      className={`absolute w-3 h-3 text-black transition-all duration-500 ${
                        theme === 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
                      }`} 
                      fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    {/* Sun Icon */}
                    <svg 
                      className={`absolute w-3 h-3 text-white transition-all duration-500 ${
                        theme === 'light' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
                      }`} 
                      fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                    </svg>
                  </div>
                </div>
                
                {/* Static Background Icons for visual hint */}
                <div className="flex justify-between w-full px-1 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                </div>
              </div>
            </button>
          </nav>

          {/* CTA Container - Right Aligned */}
          <div 
            className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden whitespace-nowrap flex justify-end ${
              isScrolled ? 'max-w-0 opacity-0' : 'flex-1 opacity-100 -mr-4 md:-mr-8 lg:-mr-12'
            }`}
          >
            <a href="#contact" className="bg-primary-container text-on-primary-container hover:text-cyan-400 hover:bg-[#001f27] font-sans text-sm font-medium tracking-wide px-6 py-2 rounded-tl-xl rounded-tr-none rounded-br-xl rounded-bl-none transition-all duration-300 inline-block border border-primary-container shadow-[0_5px_15px_rgba(0,212,255,0.2)]">
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
