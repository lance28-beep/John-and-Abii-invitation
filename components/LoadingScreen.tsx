import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Stretch the experience into the 10–13s range for a calmer entry.
    const timeline = [
      { delay: 800, action: () => setStage(1) }, // Reveal Monogram
      { delay: 2000, action: () => setStage(2) }, // Reveal Text
      { delay: 3200, action: () => setStage(3) }, // Reveal Date
      { delay: 10200, action: () => setIsExiting(true) }, // Start Exit (+5s)
      { delay: 12200, action: onComplete } // Complete (+5s)
    ];

    const timeouts = timeline.map(({ delay, action }) => setTimeout(action, delay));

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f2e4e4] text-winter-brown transition-opacity duration-1000 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none paper-texture" />

      {/* Subtle Background Animation */}
      <div className={`absolute pointer-events-none transition-opacity duration-2000 ${stage >= 1 ? 'opacity-[0.08]' : 'opacity-0'}`}>
         <svg className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] animate-spin-slow text-winter-brown" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
           <circle cx="50" cy="50" r="48" strokeDasharray="1 3" />
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.1" />
           <path d="M50 2 L50 98 M2 50 L98 50" strokeOpacity="0.3" />
         </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        {/* Monogram Crest - Reveal First */}
        <div className={`transition-all duration-1000 ease-out transform ${stage >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
           {/* 
              NOTE: Ensure 'monogram.png' is in your public folder. 
              mix-blend-multiply makes the white background of the image transparent against the cream bg.
           */}
          <img 
            src="/images/Monogram-removebg.png" 
             alt="John & Abii Monogram" 
             className="w-44 h-auto md:w-64 mix-blend-multiply opacity-90"
           />
        </div>

        {/* Text Details - Reveal Second */}
        <div className={`transition-all duration-1000 delay-200 ease-out transform ${stage >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'}`}>
          <p className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-winter-brown/60 mb-2">
            The Wedding Celebration Of
          </p>
          <h1 className="font-script text-6xl md:text-8xl text-winter-red leading-none drop-shadow-sm">
            John & Abii
          </h1>
        </div>

        {/* Date - Reveal Third */}
        <div className={`flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ease-out transform ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
           <div className="w-12 h-[1px] bg-winter-brown/40 my-2"></div>
           <p className="font-elegant text-xl md:text-2xl italic text-winter-brown tracking-widest">
             2028
           </p>
        </div>

      </div>
    </div>
  );
};