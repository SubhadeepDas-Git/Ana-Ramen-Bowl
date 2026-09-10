import React from 'react';
import { NightSkyCanvas } from '../components/visuals/NightSkyCanvas';
import { SteamEffect } from '../components/visuals/SteamEffect';
import { Moon, Sparkles, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomizer }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-0 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-200/60">
      {/* Night Sky Canvas & Ambient elements */}
      <NightSkyCanvas />

      {/* Subtle Moon & Cloud Background Motif */}
      <div className="absolute top-16 right-[12%] w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-yolk-400/20 via-lavender-200/20 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute top-28 left-[10%] w-72 h-72 rounded-full bg-gradient-to-tr from-blush-200/25 via-cream-200/30 to-transparent blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto pt-8 pb-12">
        {/* Subtle Decorative Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200/90 border border-cream-400/80 shadow-warm-sm mb-6 backdrop-blur-sm animate-pulse-subtle">
          <Moon className="w-3.5 h-3.5 text-lavender-500 fill-lavender-500" />
          <span className="text-[11px] uppercase tracking-widest text-plum-800 font-semibold">
            MIDNIGHT RETREAT • NEON DISTRICT
          </span>
          <Sparkles className="w-3 h-3 text-yolk-500" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-plum-900 tracking-tight leading-[1.1] mb-6">
          THE LAST BOWL
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-plum-700 max-w-2xl mx-auto mb-4 leading-relaxed font-light">
          "A Cozy Ramen Retreat After Dark"
        </p>

        {/* Subtext description */}
        <p className="text-xs sm:text-sm text-plum-600 max-w-lg mx-auto mb-10 leading-relaxed font-light">
          When the world falls quiet and midnight settles in, find solace in a steaming bowl of handcrafted noodles, twelve-hour broth, and gentle amber light.
        </p>

        {/* Dual Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#reservation"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5 text-center"
          >
            Book Your Bowl
          </a>
          <a
            href="#signature"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cream-100/90 hover:bg-cream-200 text-plum-900 border border-cream-400 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-sm hover:-translate-y-0.5 text-center"
          >
            Explore the Menu
          </a>
        </div>

        {/* Custom bowl prompt badge */}
        <div className="mt-8">
          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-1.5 text-xs text-lavender-600 hover:text-plum-900 font-medium transition-colors border-b border-lavender-300 pb-0.5"
          >
            <span>Prefer to design your own broth & noodles?</span>
            <span className="font-semibold underline">Build Your Bowl →</span>
          </button>
        </div>

        {/* Ambient Steam Element */}
        <div className="mt-8 flex justify-center">
          <SteamEffect />
        </div>
      </div>

      {/* Marquee Running Ticker Banner (Faithful to Reference Site) */}
      <div className="relative w-full overflow-hidden bg-plum-800 text-cream-100 py-3 border-y border-plum-900 shadow-inner z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-6 mx-4 text-xs font-medium tracking-widest uppercase">
              <span>OPEN UNTIL DAWN</span>
              <span className="text-yolk-500">•</span>
              <span>A COZY RAMEN RETREAT AFTER DARK</span>
              <span className="text-lavender-400">•</span>
              <span>STEAM RISING AT 1 AM</span>
              <span className="text-yolk-500">•</span>
              <span>THE SOUL OF THE BOWL</span>
              <span className="text-lavender-400">•</span>
              <span>HANDCRAFTED BROTH & NOSTALGIA</span>
              <span className="text-yolk-500">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};