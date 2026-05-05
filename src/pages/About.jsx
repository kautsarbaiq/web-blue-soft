import React, { useState, useRef, useEffect } from 'react';
import BlackHoleBackground from '../components/BlackHoleBackground';

const InteractiveCard = ({ children, className, style }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });
  const currentRotationOnStart = useRef({ x: 0, y: 0 });

  const getInitialZ = () => {
    const transform = style?.transform || '';
    const match = transform.match(/rotate\(([-\d.]+)deg\)/);
    return match ? parseFloat(match[1]) : 0;
  };
  const initialZ = useRef(getInitialZ());

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    if (isDragging) {
      const deltaX = e.clientX - startPos.current.x;
      const deltaY = e.clientY - startPos.current.y;

      // Aggressive rotation on drag but with a cap
      const factor = 0.3;
      const maxDrag = 45;

      const nextX = Math.min(Math.max(currentRotationOnStart.current.x - deltaY * factor, -maxDrag), maxDrag);
      const nextY = Math.min(Math.max(currentRotationOnStart.current.y + deltaX * factor, -maxDrag), maxDrag);

      setRotation({ x: nextX, y: nextY });
    } else {
      // Subtle tilt on hover
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const maxHover = 15;
      const rotateX = ((y - centerY) / centerY) * -maxHover;
      const rotateY = ((x - centerX) / centerX) * maxHover;

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    currentRotationOnStart.current = rotation;
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setRotation({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      return () => window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging]);

  const transformStyle = `perspective(1000px) rotateZ(${initialZ.current}deg) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      className={`${className} cursor-grab active:cursor-grabbing`}
      style={{
        ...style,
        transform: transformStyle,
        transition: isDragging ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d', pointerEvents: 'none' }}>
        {children}
      </div>
    </div>
  );
};

function About() {
  return (
    <section id="about" className="relative min-h-[120vh] w-full flex items-center justify-center overflow-hidden py-20">
      {/* Black Hole Background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <BlackHoleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-transparent to-[#0a0a0f] z-[1]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-[1400px] h-[800px] flex items-center justify-center">
        {/* Background Heading */}
        <h1 className="absolute text-[6.5rem] md:text-[11rem] leading-[0.85] tracking-[-0.05em] font-normal uppercase text-center text-white z-0 mt-[-400px]" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          INOVATIF<br />DIGITAL
        </h1>

        {/* Cards Container */}
        <div className="relative w-full h-full mx-auto">
          {/* Card 1: Beyond Aesthetics */}
          <InteractiveCard className="glass-card-new w-80 h-[440px] hover:z-[50]" style={{ left: '2%', top: '50px', transform: 'rotate(-10deg)' }}>
            <div className="flex flex-row items-center gap-4">
              <div className="icon-circle-new !mb-0 shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight mb-1 text-white text-left">Beyond<br />Aesthetics</h2>
                <p className="text-gray-300 text-sm text-left">Function follows feeling</p>
              </div>
            </div>
          </InteractiveCard>

          {/* Card 2: Logic with Emotion */}
          <InteractiveCard className="glass-card-new w-80 h-[440px] z-[12] hover:z-[50]" style={{ left: '18%', bottom: '0px', transform: 'rotate(-5deg)' }}>
            <div className="flex flex-row items-center gap-4">
              <div className="icon-circle-new !mb-0 shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight mb-1 text-white text-left">Logic with<br />Emotion</h2>
                <p className="text-gray-300 text-sm text-left">Where clarity meets connection</p>
              </div>
            </div>
          </InteractiveCard>


          {/* Card 4: Invisible Clarity */}
          <InteractiveCard className="glass-card-new w-80 h-[440px] z-[11] hover:z-[50] items-end text-right" style={{ right: '18%', bottom: '0px', transform: 'rotate(6.5deg)' }}>
            <div className="flex flex-row items-center gap-4">
              <div className="icon-circle-new !mb-0 !ml-0 shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight mb-1 text-white text-left">Invisible<br />Clarity</h2>
                <p className="text-gray-300 text-sm text-left">Sense guides the experience</p>
              </div>
            </div>
          </InteractiveCard>

          {/* Card 5: Meaning in Every Detail */}
          <InteractiveCard className="glass-card-new w-80 h-[480px] z-[10] hover:z-[50] items-end text-right" style={{ right: '2%', top: '50px', transform: 'rotate(10deg)' }}>
            <div className="flex flex-row items-center gap-4">
              <div className="icon-circle-new !mb-0 !ml-0 shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight mb-1 text-white text-left">Meaning in<br />Every Detail</h2>
                <p className="text-gray-300 text-sm text-left">Thoughtful, usable, resonant</p>
              </div>
            </div>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
}

export default About;
