import React, { Suspense, lazy } from 'react';

// Lazy load the Spline component to avoid blocking the main thread during initial load
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineScene({ scene, className, style }) {
  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Optional: Add a subtle loading spinner or pulse here if desired */}
          </div>
        }
      >
        <Spline 
          scene={scene} 
          style={{ width: '100%', height: '100%', ...style }}
        />
      </Suspense>
    </div>
  );
}
