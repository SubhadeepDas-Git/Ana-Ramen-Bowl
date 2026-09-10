import React from 'react';
import { useRestaurantStatus } from '../../hooks/useRestaurantStatus';

interface LiveStatusPillProps {
  showDetails?: boolean;
}

export const LiveStatusPill: React.FC<LiveStatusPillProps> = ({ showDetails = false }) => {
  const { isOpen, statusText, subText } = useRestaurantStatus();

  return (
    <div className="inline-flex flex-col items-start">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs tracking-wider font-medium bg-cream-100/90 border-cream-300 text-plum-800 shadow-warm-sm backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          {isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isOpen ? 'bg-emerald-500' : 'bg-amber-400'
            }`}
          ></span>
        </span>
        <span className="text-[11px] uppercase font-semibold">{statusText}</span>
      </div>
      {showDetails && (
        <p className="text-[11px] text-plum-500 mt-1 pl-1 font-light italic">
          {subText}
        </p>
      )}
    </div>
  );
};