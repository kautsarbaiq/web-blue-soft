import React from 'react';

function About() {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="bg-glow-new"></div>
      <div className="bottom-glow-new"></div>
      <div className="absolute top-24 left-4 text-gray-500 text-sm tracking-wide z-20">wow-marafon</div>
      <div className="absolute top-24 right-4 text-gray-500 text-sm tracking-wide z-20">figma</div>
      <div className="absolute bottom-4 left-4 text-gray-400 text-sm tracking-wide z-20">day 2</div>
      <div className="absolute bottom-4 right-4 text-gray-400 text-sm tracking-wide z-20">anna kravchenko</div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center mt-20">
        {/* Background Heading */}
        <h1 className="absolute text-[6rem] md:text-[8rem] font-extrabold leading-[0.9] text-center tracking-tighter text-white z-0 mt-[-100px]" style={{textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>
          Design<br/>with Sense
        </h1>
        
        {/* Cards Container */}
        <div className="relative w-full h-full max-w-[1000px] mx-auto">
          {/* Card 1: Beyond Aesthetics */}
          <div className="glass-card-new w-64 h-[340px]" style={{left: 0, top: '100px', transform: 'rotate(-12deg)'}}>
            <div className="icon-circle-new">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight mb-2 text-white">Beyond<br/>Aesthetics</h2>
              <p className="text-gray-300 text-sm">Function follows feeling</p>
            </div>
          </div>

          {/* Card 2: Logic with Emotion */}
          <div className="glass-card-new w-64 h-[340px] z-[12]" style={{left: '18%', bottom: '-50px', transform: 'rotate(-5deg)'}}>
            <div className="icon-circle-new">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight mb-2 text-white">Logic with<br/>Emotion</h2>
              <p className="text-gray-300 text-sm">Where clarity meets connection</p>
            </div>
          </div>

          {/* Card 3: Intentional & Intuitive */}
          <div className="glass-card-new w-64 h-[360px] z-[15]" style={{left: '50%', transform: 'translateX(-50%)', top: '120px'}}>
            <div className="icon-circle-new">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight mb-2 text-white">Intentional<br/>& Intuitive</h2>
              <p className="text-gray-300 text-sm">Purposeful and people-centric</p>
            </div>
          </div>

          {/* Card 4: Invisible Clarity */}
          <div className="glass-card-new w-64 h-[340px] z-[11]" style={{right: '18%', bottom: '-80px', transform: 'rotate(10deg)'}}>
            <div className="icon-circle-new">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight mb-2 text-white">Invisible<br/>Clarity</h2>
              <p className="text-gray-300 text-sm">Sense guides the experience</p>
            </div>
          </div>

          {/* Card 5: Meaning in Every Detail */}
          <div className="glass-card-new w-64 h-[380px] z-[10]" style={{right: 0, top: '80px', transform: 'rotate(8deg)'}}>
            <div className="icon-circle-new">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight mb-2 text-white">Meaning in<br/>Every Detail</h2>
              <p className="text-gray-300 text-sm">Thoughtful, usable, resonant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
