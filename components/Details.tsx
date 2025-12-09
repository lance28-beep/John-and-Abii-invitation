import React from 'react';
import { FadeIn } from './FadeIn';
import { Countdown } from './Countdown';

interface DetailsProps {
  visible: boolean;
}

export const Details: React.FC<DetailsProps> = ({ visible }) => {
  return (
    <div className={`absolute inset-0 z-20 overflow-y-auto min-h-screen bg-winter-cream transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Background Texture & Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-60 paper-texture" />
      
      <div className="min-h-screen w-full flex items-center justify-center p-3 py-8 md:p-8 relative">
        
        {/* Main Card */}
        <div className="w-full max-w-4xl bg-[#FFFAFA] shadow-[0_20px_50px_rgba(64,47,29,0.15)] relative overflow-hidden my-2 md:my-4">
          
          {/* Card Texture Overlay */}
          <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

          {/* Double Border Frame - Responsive Insets */}
          <div className="absolute inset-3 md:inset-6 border border-winter-brown/20 pointer-events-none" />
          <div className="absolute inset-4 md:inset-7 border-2 border-winter-brown/40 pointer-events-none" />

          {/* Corner Ornaments (SVG) - Responsive Size & Position */}
          <div className="absolute top-4 left-4 w-10 h-10 md:top-6 md:left-6 md:w-16 md:h-16 pointer-events-none text-winter-brown/30">
             <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5,50 Q5,5 50,5 M5,50 Q5,95 50,95 M50,5 L95,5" strokeDasharray="2,2"/></svg>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 md:top-6 md:right-6 md:w-16 md:h-16 pointer-events-none text-winter-brown/30 transform rotate-90">
             <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5,50 Q5,5 50,5 M5,50 Q5,95 50,95 M50,5 L95,5" strokeDasharray="2,2"/></svg>
          </div>
          <div className="absolute bottom-4 left-4 w-10 h-10 md:bottom-6 md:left-6 md:w-16 md:h-16 pointer-events-none text-winter-brown/30 transform -rotate-90">
             <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5,50 Q5,5 50,5 M5,50 Q5,95 50,95 M50,5 L95,5" strokeDasharray="2,2"/></svg>
          </div>
          <div className="absolute bottom-4 right-4 w-10 h-10 md:bottom-6 md:right-6 md:w-16 md:h-16 pointer-events-none text-winter-brown/30 transform rotate-180">
             <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5,50 Q5,5 50,5 M5,50 Q5,95 50,95 M50,5 L95,5" strokeDasharray="2,2"/></svg>
          </div>

          {/* Content Wrapper - Responsive Padding */}
          <div className="relative z-20 flex flex-col items-center text-center px-5 py-12 md:px-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
            
            {/* Header with Monogram */}
            <FadeIn show={visible} delay={200} className="w-full flex flex-col items-center">
              {/* Monogram Image */}
              <div className="mb-6 md:mb-8">
                <img 
                  src="/images/Monogram-removebg.png" 
                  alt="Monogram Crest" 
                  className="w-40 md:w-64 h-auto mix-blend-multiply opacity-90"
                />
              </div>

              <div className="flex flex-col items-center gap-2 md:gap-4">
                 <p className="font-serif text-[0.65rem] md:text-sm tracking-[0.25em] md:tracking-[0.4em] text-winter-brown/60 uppercase">
                   We are tying the Knot
                 </p>
                 <h2 className="font-serif text-4xl md:text-6xl text-winter-brown font-medium tracking-tight mt-1 md:mt-2">
                   John & Abii
                 </h2>
                 
                 {/* Stylized Date */}
                 <div className="flex items-center gap-4 md:gap-6 mt-2 md:mt-4">
                   <span className="h-[1px] w-8 md:w-12 bg-winter-brown/30"></span>
                   <div className="flex flex-col items-center leading-none text-winter-red font-serif">
                      <span className="text-[0.6rem] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 text-winter-brown">November</span>
                      <span className="text-2xl md:text-4xl">02</span>
                      <span className="text-[0.6rem] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mt-1 text-winter-brown">2028</span>
                   </div>
                   <span className="h-[1px] w-8 md:w-12 bg-winter-brown/30"></span>
                 </div>
              </div>
            </FadeIn>

            {/* Body Text - Refined Typography for Mobile */}
            <div className="space-y-8 md:space-y-10 font-elegant text-winter-brown text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto px-1 md:px-0">
              
              <FadeIn show={visible} delay={400}>
                <p>
                  Before anything else is announced, we wanted to share something with you that means the world to us. It may feel a little early, but keeping this from you felt impossible.
                </p>
              </FadeIn>

              <FadeIn show={visible} delay={600}>
                <div className="relative py-2">
                   <span className="absolute top-0 left-0 text-4xl md:text-6xl text-winter-brown/10 font-serif -translate-x-2 -translate-y-2 md:-translate-x-4 md:-translate-y-4">“</span>
                   <p className="font-elegant text-winter-red text-xl md:text-3xl italic font-medium px-2 md:px-4 relative z-10">
                     When we imagine that day, we picture your warmth beside us. Your presence, your support, and your love. You’re a part of the picture our hearts keep returning to.
                   </p>
                   <span className="absolute bottom-0 right-0 text-4xl md:text-6xl text-winter-brown/10 font-serif translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4">”</span>
                </div>
              </FadeIn>

              {/* Entourage Box - Enhanced Mobile Padding */}
              <FadeIn show={visible} delay={800}>
                <div className="relative p-6 md:p-8 border border-double border-winter-brown/20 bg-winter-brown/[0.03] mx-0 rounded-sm">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFAFA] px-3 md:px-4">
                    <span className="font-serif text-[0.6rem] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-winter-brown font-bold">The Question</span>
                  </div>
                  <p className="font-elegant text-xl md:text-3xl leading-relaxed text-winter-dark">
                    If your heart says <span className="text-winter-red italic font-bold">YES</span>, it would mean everything to us to have you by our side as part of our <span className="font-serif text-base md:text-lg tracking-widest uppercase border-b border-winter-brown/30 pb-1 mx-1">Entourage</span>.
                  </p>
                </div>
              </FadeIn>

              <FadeIn show={visible} delay={1000}>
                <p className="font-sans text-[0.6rem] md:text-xs text-winter-brown/40 uppercase tracking-[0.25em] mt-4 md:mt-8">
                  Formal invitation to follow
                </p>
              </FadeIn>
            </div>

            {/* Signature Section - Enhanced */}
            <FadeIn show={visible} delay={1200} className="w-full pt-6 md:pt-10 border-t border-winter-brown/10 mt-2 md:mt-4">
               <div className="flex flex-col items-center">
                 <div className="transform -rotate-2 mb-6 md:mb-8">
                   <p className="font-hand text-3xl md:text-5xl text-winter-red font-bold">
                      See you in Almaty,<br/>
                      Kazakhstan!!
                   </p>
                 </div>
                 
                 <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="font-elegant italic text-lg md:text-xl text-winter-brown">With all our love,</p>
                    {/* Reusing Script Font for Signatures */}
                    <p className="font-script text-5xl md:text-6xl text-winter-brown mt-1 md:mt-2">John & Abii</p>
                 </div>
               </div>
            </FadeIn>

            {/* Countdown Timer */}
            <FadeIn show={visible} delay={1400} className="w-full">
               <Countdown />
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  );
};
