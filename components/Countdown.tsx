import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Target Date: November 2, 2028
    const difference = +new Date('2028-11-02T00:00:00') - +new Date();
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-winter-cream/50 relative group transition-all duration-300">
      <div className="font-serif text-3xl md:text-5xl lg:text-6xl text-winter-red font-medium mb-2 tabular-nums leading-none">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="font-serif text-[0.65rem] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-winter-brown/70 font-medium">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center mt-12 md:mt-16">
      
      {/* Header with decorative lines */}
      <div className="flex items-center gap-4 mb-8 w-full max-w-lg justify-center">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-winter-brown/30 to-transparent"></div>
        <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-winter-brown font-medium text-center px-2 tracking-wide">
          Until We Say "I Do"
        </h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-winter-brown/30 to-transparent"></div>
      </div>
      
      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-6 w-full max-w-3xl px-2">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

    </div>
  );
};