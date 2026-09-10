import React from 'react';

export const SteamEffect: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none flex justify-center items-end ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-20 text-cream-400/40 fill-none stroke-current"
        style={{ filter: 'blur(1px)' }}
      >
        <path
          d="M30,80 Q20,50 35,30 T25,10"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-steam-rise"
          style={{ animationDuration: '3.6s', animationDelay: '0s' }}
        />
        <path
          d="M50,80 Q65,55 50,35 T58,12"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-steam-rise"
          style={{ animationDuration: '4.2s', animationDelay: '0.9s' }}
        />
        <path
          d="M70,80 Q60,50 72,30 T66,15"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-steam-rise"
          style={{ animationDuration: '3.8s', animationDelay: '1.7s' }}
        />
      </svg>
    </div>
  );
};