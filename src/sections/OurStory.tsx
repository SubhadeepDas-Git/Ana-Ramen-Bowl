import React from 'react';
import { Heart, Moon } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden">
      {/* Soft atmospheric gradient */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-blush-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <p className="text-[11px] uppercase tracking-widest text-lavender-600 font-semibold">
            A LITTLE BOWL, A BIG DREAM
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-plum-900">
            Our Story
          </h2>
          <p className="text-xs uppercase tracking-widest text-plum-500 font-medium pt-1">
            RAMEN & WARM NIGHTS
          </p>
          <div className="w-12 h-px bg-cream-400 mx-auto mt-4" />
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photo Composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg border border-cream-300 aspect-[3/4]">
                <img
                  src="https://static.wixstatic.com/media/a46dc5_405cdb72f99640af807208e8e739f5e9~mv2.jpg"
                  alt="Cozy late-night ramen kitchen and counter"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating quote badge */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-cream-50 p-4 sm:p-5 rounded-2xl border border-cream-300 shadow-warm-md max-w-[220px]">
                <Moon className="w-4 h-4 text-yolk-500 mb-1.5" />
                <p className="text-xs font-serif italic text-plum-800 leading-snug">
                  "Steam curling up in an empty kitchen at 1:00 AM."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The exact story text from reference */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <p className="text-sm sm:text-base text-plum-800 leading-relaxed font-light">
              It began, quite literally, with a late night bowl — steam curling up in an empty kitchen, the kind of hour when the world goes quiet and a single bowl of ramen feels like the only thing that makes sense. That small, cozy moment became the name, and slowly, the whole idea of the restaurant: a place for the in-between hours, for people who find comfort at midnight.
            </p>

            <p className="text-sm sm:text-base text-plum-800 leading-relaxed font-light">
              The soul of it, though, came from somewhere else entirely — from watching <em className="font-serif italic text-plum-950 font-medium">When I Fly Towards You</em>, and falling completely into its quiet, tender world. There was something about the warmth between its characters, the patience, the soft glow of scenes lit like this very page, that felt like it belonged in a bowl of something homemade. I wanted to bottle that feeling — gentle, hopeful, a little dreamy — and serve it, one steaming bowl at a time.
            </p>

            <p className="text-sm sm:text-base text-plum-800 leading-relaxed font-light">
              So <strong className="font-medium text-plum-950">Late Night Bowl</strong> isn't just a ramen place. It's a little universe stitched together from a drama that moved me and a bowl of noodles that once kept me company at 1AM — made for anyone chasing warmth after dark.
            </p>

            {/* Handwritten style closing signature */}
            <div className="pt-6 space-y-1">
              <p className="font-serif italic text-lg sm:text-xl text-plum-800">
                with warmth, always
              </p>
              <p className="font-serif text-sm tracking-wide text-lavender-600 font-medium">
                — late night bowl
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};