import React, { useState } from 'react';
import { MOODS } from '../data/moodsData';
import { SIGNATURE_BOWLS } from '../data/menuData';
import { MenuItem, MoodRecommendation } from '../types';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

interface MidnightRitualProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
}

export const MidnightRitual: React.FC<MidnightRitualProps> = ({
  onSelectItem,
  onAddToCart,
}) => {
  const [selectedMood, setSelectedMood] = useState<MoodRecommendation>(MOODS[0]);

  // Find corresponding bowl
  const recommendedBowl =
    SIGNATURE_BOWLS.find((b) => b.id === selectedMood.dishId) || SIGNATURE_BOWLS[0];

  return (
    <section id="ritual" className="py-24 sm:py-32 bg-cream-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <p className="text-[11px] uppercase tracking-widest text-lavender-600 font-semibold">
            CHOOSE YOUR STATE OF MIND
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plum-900 font-normal">
            Your Midnight Ritual
          </h2>
          <p className="text-xs sm:text-sm text-plum-600 font-light">
            Select how the late-night hour feels to you, and we will pair you with your companion bowl.
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {MOODS.map((mood) => {
            const isSelected = selectedMood.id === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                  isSelected
                    ? 'bg-plum-800 text-cream-100 shadow-warm-md scale-105'
                    : 'bg-cream-200/90 text-plum-700 hover:bg-cream-300 border border-cream-300'
                }`}
              >
                {mood.label}
              </button>
            );
          })}
        </div>

        {/* Recommendation Reveal Card */}
        <div className="rounded-3xl bg-cream-50 border border-cream-300 shadow-warm-lg overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            
            {/* Left: Dish Preview */}
            <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
              <img
                src={recommendedBowl.image}
                alt={recommendedBowl.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-cream-100">
                <span className="text-[10px] uppercase tracking-widest text-yolk-400 block mb-1">
                  Ritual Pairing
                </span>
                <p className="font-serif text-2xl font-medium">{recommendedBowl.name}</p>
                <p className="font-serif text-lg text-yolk-400 font-semibold">${recommendedBowl.price}</p>
              </div>
            </div>

            {/* Right: Narrative Match */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-lavender-600 font-semibold">
                    Mood: {selectedMood.label}
                  </span>
                  <span className="text-xs text-plum-400 font-serif italic">
                    {selectedMood.vibe}
                  </span>
                </div>

                <blockquote className="font-serif italic text-lg sm:text-xl text-plum-900 border-l-2 border-lavender-400 pl-4 py-1 leading-relaxed">
                  "{selectedMood.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-plum-600 leading-relaxed font-light">
                  {recommendedBowl.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onAddToCart(recommendedBowl)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-sm hover:shadow-warm-md text-center"
                >
                  Order This Ritual • ${recommendedBowl.price}
                </button>

                <button
                  onClick={() => onSelectItem(recommendedBowl)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-cream-100 hover:bg-cream-200 text-plum-800 border border-cream-300 text-xs uppercase tracking-widest font-medium transition-colors text-center"
                >
                  View Broth Details
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};