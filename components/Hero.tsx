import React from 'react';
import { FadeIn } from './FadeIn';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

// Simple Snow Particle Component
const SnowParticle: React.FC<{ delay: string; left: string; duration: string }> = ({ delay, left, duration }) => (
  <div 
    className="absolute top-0 w-2 h-2 bg-white rounded-full opacity-0 animate-snow pointer-events-none"
    style={{ 
      left: left, 
      animationDelay: delay, 
      animationDuration: duration 
    }} 
  />
);

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  return (
    <div className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      
      {/* Background Image: Snowy Path/Trees */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2000&auto=format&fit=crop" 
          alt="Winter Snow Landscape" 
          className="w-full h-full object-cover opacity-90 scale-105"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-winter-cream/70 via-winter-cream/45 to-winter-cream/70" />
        <div className="absolute inset-0 bg-white/18 backdrop-blur-[0.5px]" />
      </div>

      {/* Snowfall Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <SnowParticle 
            key={i} 
            delay={`${Math.random() * 5}s`} 
            left={`${Math.random() * 100}%`} 
            duration={`${10 + Math.random() * 10}s`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-6 w-full max-w-lg mx-auto h-full">
        
        {/* Top Text: "Just for YOU !!" */}
        <FadeIn show={visible} delay={300} className="mb-6">
           <div className="relative transform -rotate-1">
            <h2 className="font-script text-5xl md:text-7xl text-winter-brown drop-shadow-sm leading-none">
               Just for
             </h2>
            <span className="font-script text-6xl md:text-8xl text-winter-red block -mt-1 md:-mt-2">
               You!!
             </span>
             {/* Decorative sketch lines */}
             <svg className="absolute -top-4 -right-4 w-12 h-12 text-winter-brown/40 animate-pulse-slow" viewBox="0 0 100 100">
                <path d="M10,50 Q50,10 90,50 T10,50" fill="none" stroke="currentColor" strokeWidth="2" />
             </svg>
           </div>
        </FadeIn>

        {/* Calendar Widget based on Sketch */}
        <FadeIn show={visible} delay={600} className="w-full max-w-xs sm:max-w-sm mb-8">
          <div className="relative bg-winter-cream/90 backdrop-blur-sm shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out p-1">
            {/* Hand-drawn border simulation via CSS */}
            <div className="border-4 border-winter-brown p-4 relative">
              
              <div className="flex justify-between items-end border-b-2 border-winter-brown pb-2 mb-2">
                 <span className="font-script text-3xl md:text-4xl text-winter-brown">January 2029</span>
                 {/* Little heart sketch */}
                 <svg className="w-6 h-6 text-winter-red mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              
              <div className="grid grid-cols-3 text-center">
                <div className="font-script text-xl md:text-2xl text-winter-brown py-2 border-r-2 border-winter-brown">Fri</div>
                <div className="font-script text-xl md:text-2xl text-winter-brown py-2 border-r-2 border-winter-brown">Sat</div>
                <div className="font-script text-xl md:text-2xl text-winter-brown py-2">Sun</div>
                
                {/* Horizontal Line */}
                <div className="col-span-3 h-0.5 bg-winter-brown mb-2"></div>

                {/* Dates */}
                <div className="font-script text-5xl md:text-5xl text-winter-brown/70 py-4 border-r-2 border-winter-brown flex items-center justify-center">19</div>
                
                {/* Jan 20 - Circled */}
                 <div className="relative flex items-center justify-center border-r-2 border-winter-brown py-4">
                    {/* Sketch Circle */}
                    <svg className="absolute w-20 h-20 md:w-24 md:h-24 text-winter-red animate-pulse-slow transform -rotate-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="12 6" opacity="0.85" />
                      <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                    </svg>
                   <div className="font-script text-6xl md:text-6xl text-winter-red relative z-10">20</div>
                </div>
                
                <div className="font-script text-5xl md:text-5xl text-winter-brown/70 py-4 flex items-center justify-center">21</div>
              </div>
            </div>
            
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-yellow-100/40 rotate-1 shadow-sm backdrop-blur-sm"></div>
          </div>
        </FadeIn>

        {/* Bottom Text */}
        <FadeIn show={visible} delay={900}>
          <div className="mb-10 transform -rotate-1 text-center">
            <p className="font-script text-3xl md:text-5xl text-winter-brown leading-tight">
              We are tying the
            </p>
            <p className="font-script text-5xl md:text-7xl text-winter-red leading-tight mt-1">
              Knot!!
            </p>
          </div>
        </FadeIn>

        <FadeIn show={visible} delay={1200}>
          <button 
            onClick={onOpen}
            className="group relative px-8 md:px-10 py-3 bg-transparent border-2 border-winter-brown text-winter-brown font-serif text-sm md:text-lg tracking-[0.2em] uppercase transition-all duration-300 hover:bg-winter-brown hover:text-white overflow-hidden"
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 inline-block">Open Invitation</span>
          </button>
        </FadeIn>
      </div>
    </div>
  );
};