import React, { useState } from 'react';
import { Moon, Sparkles, Volume2, VolumeX, Eye, Flame } from 'lucide-react';

interface AmbianceProps {
  isAmbientPlaying: boolean;
  onToggleAmbient: () => void;
}

export const Ambiance: React.FC<AmbianceProps> = ({
  isAmbientPlaying,
  onToggleAmbient,
}) => {
  const [lanternGlow, setLanternGlow] = useState(70);
  const [showSteam, setShowSteam] = useState(true);

  return (
    <section className="py-24 sm:py-32 bg-cream-200/60 border-y border-cream-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <p className="text-[11px] uppercase tracking-widest text-plum-500 font-semibold">
            VIRTUAL RETREAT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plum-900 font-normal">
            Cozy Ambiance
          </h2>
          <p className="text-xs sm:text-sm text-plum-600 font-light">
            Adjust the light and soundscape to experience the atmosphere of our midnight counter.
          </p>
        </div>

        {/* Interactive Ambiance Stage */}
        <div className="relative rounded-3xl overflow-hidden border border-cream-400 bg-plum-900 text-cream-100 shadow-warm-lg p-8 sm:p-14 min-h-[420px] flex flex-col justify-between">
          
          {/* Dynamic Lantern Light Layer */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 40%, rgba(244, 211, 94, ${lanternGlow / 350}) 0%, rgba(178, 164, 255, ${lanternGlow / 700}) 40%, rgba(35, 27, 23, 0.95) 90%)`,
            }}
          />

          {/* Top Bar with Live Indicator */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-cream-100/15 pb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yolk-500 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-mono text-cream-300">
                Counter 04 • Midnight Alley
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onToggleAmbient}
                className="px-4 py-2 rounded-full bg-cream-100/10 hover:bg-cream-100/20 border border-cream-100/20 text-xs flex items-center gap-2 transition-colors"
              >
                {isAmbientPlaying ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-lavender-300 animate-pulse" />
                    <span>Ambient Sound: Playing</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-cream-400" />
                    <span>Ambient Sound: Muted</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Center Stage Quote & Vision */}
          <div className="relative z-10 my-auto py-10 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-cream-100/10 flex items-center justify-center border border-cream-100/20">
              <Moon className="w-6 h-6 text-yolk-400" />
            </div>

            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-cream-100 font-light leading-relaxed">
              "Imagine walking into a tiny ramen shop at 1:00 AM. The city outside is quiet. There is warm light. Steam rises from your bowl. You finally slow down."
            </p>

            <p className="text-xs text-cream-300 font-light tracking-wider uppercase">
              The Philosophy of the In-Between Hours
            </p>
          </div>

          {/* Bottom Interactive Controls */}
          <div className="relative z-10 pt-6 border-t border-cream-100/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-cream-300 whitespace-nowrap">Lantern Dimmer:</span>
              <input
                type="range"
                min="20"
                max="100"
                value={lanternGlow}
                onChange={(e) => setLanternGlow(Number(e.target.value))}
                className="w-32 accent-yolk-400 cursor-pointer"
              />
              <span className="text-cream-400 font-mono text-[11px]">{lanternGlow}%</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSteam(!showSteam)}
                className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                  showSteam
                    ? 'bg-cream-100/20 border-cream-100/40 text-cream-100'
                    : 'bg-transparent border-cream-100/10 text-cream-400'
                }`}
              >
                {showSteam ? '✦ Simmering Broth Visible' : '✧ Steam Concealed'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};