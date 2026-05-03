import React, { useState, useRef } from 'react';

function AICarouselSection() {
  const cards = [
    { id: 1, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", alt: "Halftone face portrait" },
    { id: 2, src: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=600", alt: "Matte-black tactical helmet" },
    { id: 3, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600", alt: "Geometric light tunnel" },
    { id: 4, src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600", alt: "Modern futuristic motorcycle" },
    { id: 5, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", alt: "Cybernetic portrait with large visor" },
  ];

  // State untuk menyimpan total rotasi panggung (scene)
  const [rotationAngle, setRotationAngle] = useState(0);
  const dragStartX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Fungsi untuk merespons scroll mouse/trackpad
  const handleWheel = (event) => {
    // Mencegah scroll default halaman saat berada di atas carousel
    event.preventDefault();
    // Math.sign menghasilkan 1 (scroll turun/kanan) atau -1 (scroll naik/kiri)
    const direction = Math.sign(event.deltaY !== 0 ? event.deltaY : event.deltaX);
    if (direction !== 0) {
      // 72 derajat didapat dari 360 derajat dibagi 5 kartu
      setRotationAngle((prev) => prev - direction * 72);
    }
  };

  // Support untuk drag/swipe agar mobile friendly
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
    const deltaX = clientX - dragStartX.current;
    
    // Jika digeser cukup jauh, lakukan rotasi 72 derajat
    if (Math.abs(deltaX) > 50) {
      const direction = Math.sign(deltaX);
      setRotationAngle((prev) => prev + direction * 72);
    }
  };

  return (
    <section className="relative w-full min-h-screen py-3xl bg-black overflow-hidden flex flex-col items-center justify-center select-none">
      
      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 mb-16 pointer-events-none">
        <h2 className="font-h1 text-h2 md:text-[3.5rem] leading-tight text-white mb-6 tracking-tight">
          Create Stunning Images<br/>with Just a Prompt
        </h2>
        <p className="font-body-lg text-body-lg text-slate-500 mb-8 max-w-xl mx-auto">
          Turn your ideas into high-quality visuals in seconds, no design skills needed.
        </p>
      </div>

      {/* Container utama: Menetapkan jarak pandang kamera (perspective) */}
      <div 
        className="relative w-full h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        style={{ perspective: '1200px' }}
        onWheel={handleWheel}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        {/* Panggung Carousel: Menggunakan preserve-3d agar elemen anak tidak menjadi datar */}
        <div 
          className="relative w-[300px] h-[450px] transition-transform duration-700 ease-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationAngle}deg)` 
          }}
        >
          {cards.map((item, index) => {
            // Kalkulasi posisi masing-masing kartu
            const cardAngle = index * 72;
            
            // Logika untuk menentukan opacity dan kecerahan berdasarkan sudut saat ini
            // Sudut absolut di layar (0 = di tengah depan)
            const absoluteAngle = Math.abs((rotationAngle + cardAngle) % 360);
            const normalizedAngle = absoluteAngle > 180 ? 360 - absoluteAngle : absoluteAngle;
            const isActive = normalizedAngle < 36; // ±36 derajat = aktif (tengah)
            
            return (
              <div
                key={item.id}
                className="absolute inset-0 flex items-center justify-center rounded-[24px] overflow-hidden pointer-events-none transition-all duration-700"
                style={{
                  // Mendorong kartu ke luar dari titik tengah
                  transform: `rotateY(${cardAngle}deg) translateZ(400px)`,
                  // Estetika glassmorphism bersih
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  border: isActive ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: isActive ? '0 0 100px rgba(255,255,255,0.1), inset 0 0 40px rgba(255,255,255,0.05)' : '0 20px 50px rgba(0,0,0,0.9)',
                  opacity: normalizedAngle > 100 ? 0 : 1, // Sembunyikan yang membelakangi kamera
                }}
              >
                {/* Strictly monochromatic, high-contrast grayscale image */}
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className={`w-full h-full object-cover grayscale transition-all duration-700 ${isActive ? 'scale-105 brightness-110 contrast-125' : 'scale-100 brightness-40 contrast-100'}`} 
                />
                
                {/* Inner Volumetric Lighting Gradient overlay */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'opacity-40' : 'opacity-80'}`} style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 50%), linear-gradient(to bottom, transparent 60%, black 100%)'
                }}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Minimalist Button */}
      <div className="relative z-20 mt-16">
        <button className="bg-white text-black px-12 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>

    </section>
  );
}

export default AICarouselSection;
