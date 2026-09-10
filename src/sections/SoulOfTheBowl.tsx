import React from 'react';
import { Moon, Sparkles } from 'lucide-react';

export const SoulOfTheBowl: React.FC = () => {
  return (
    <section id="soul" className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-lavender-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with authentic reference imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative delicate border frame */}
              <div className="absolute -inset-3 rounded-3xl border border-cream-400/70 translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg bg-cream-200 aspect-[4/5] border border-cream-300">
                <img
                  src="https://static.wixstatic.com/media/a46dc5_2e4aad2ab9bf4ec7a607207a62d67415~mv2.jpg"
                  alt="Steaming bowl of ramen in midnight ambiance"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating aesthetic stamp */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-cream-50/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-cream-300 shadow-warm-md max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Moon className="w-3.5 h-3.5 text-lavender-500 fill-lavender-500" />
                  <span className="text-[10px] uppercase tracking-widest text-plum-800 font-bold">12-Hour Simmer</span>
                </div>
                <p className="text-[11px] text-plum-600 font-serif italic leading-tight">
                  "Every bowl carries the patience of the night."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (Source Text from Reference) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-lavender-400" />
              <span className="text-[11px] uppercase tracking-widest text-plum-600 font-semibold">
                Philosophy & Atmosphere
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-plum-900 leading-tight">
              The Soul of the Bowl
            </h2>

            <blockquote className="font-serif italic text-lg sm:text-xl text-plum-800 border-l-2 border-lavender-400 pl-4 py-1 leading-relaxed">
              "We believe that comfort food should be as comforting as the night itself."
            </blockquote>

            <p className="text-sm sm:text-base text-plum-700 leading-relaxed font-light">
              At <strong className="font-medium text-plum-900">The Last Bowl</strong>, we've crafted a sanctuary for those who find their rhythm in the neon glow of the Midnight Alley. Our ramen is a nostalgic blend of tradition and modernity, served with a whimsical touch that makes every midnight meal feel like a cozy retreat.
            </p>

            <p className="text-sm sm:text-base text-plum-700 leading-relaxed font-light">
              Here, there are no rushed seatings and no fluorescent glare. Only soft wooden counter seats, the quiet bubbling of seasoned dashi, and steaming bowls designed to ground you when the city sleeps.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-plum-600">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yolk-500" />
                <span>Artisanal Broths Made Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-lavender-500" />
                <span>Open Until 4:00 AM Every Night</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};