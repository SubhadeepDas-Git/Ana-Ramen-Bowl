import React from 'react';
import { ChefHat, Sparkles, Moon } from 'lucide-react';

interface BuildYourBowlBannerProps {
  onOpenCustomizer: () => void;
}

export const BuildYourBowlBanner: React.FC<BuildYourBowlBannerProps> = ({
  onOpenCustomizer,
}) => {
  return (
    <section className="py-16 bg-gradient-to-r from-cream-200 via-cream-100 to-cream-200 border-y border-cream-300 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-lavender-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-cream-50/90 border border-cream-400 shadow-warm-lg flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-100 text-plum-900 text-[10px] uppercase tracking-widest font-semibold border border-lavender-300">
              <Sparkles className="w-3 h-3 text-yolk-500" />
              <span>Personalized Midnight Comfort</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-plum-900 font-normal">
              Build Your Own Midnight Bowl
            </h3>
            
            <p className="text-xs sm:text-sm text-plum-600 leading-relaxed font-light">
              Customize your slow-simmered broth, select noodle thickness, pick torch-glazed proteins, and curate an array of fresh toppings to match your midnight mood.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenCustomizer}
              className="px-8 py-4 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <ChefHat className="w-4 h-4 text-yolk-400" />
              <span>Launch Customizer</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};