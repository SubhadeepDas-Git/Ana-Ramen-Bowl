import React from 'react';
import { BowlIcon, MoonIcon, SparkleIcon } from './CustomIcons';
import { UtensilsCrossed, Moon, Clock } from 'lucide-react';

export const Benefits: React.FC = () => {
  const experiences = [
    {
      title: 'SIGNATURE BOWLS',
      sublabel: 'Crafted Broth & Heritage',
      description: 'Handcrafted ramen with artisanal ingredients and a perfect balance of flavors to satisfy your midnight cravings.',
      icon: UtensilsCrossed,
      accent: 'border-yolk-500/30 bg-yolk-500/5',
      iconColor: 'text-yolk-600',
    },
    {
      title: 'COZY AMBIANCE',
      sublabel: 'A Quiet Midnight Sanctuary',
      description: 'Our intimate setting is designed for those who value a quiet retreat after the city lights have dimmed.',
      icon: Moon,
      accent: 'border-lavender-400/30 bg-lavender-400/5',
      iconColor: 'text-lavender-600',
    },
    {
      title: 'MIDNIGHT RITUAL',
      sublabel: 'Comfort When The World Slows',
      description: 'Experience the perfect blend of nostalgia and comfort. We serve our most beloved dishes at the hour when the world slows down.',
      icon: Clock,
      accent: 'border-sage-400/30 bg-sage-400/5',
      iconColor: 'text-sage-600',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream-200/50 border-y border-cream-300/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-[11px] uppercase tracking-widest text-plum-500 font-semibold">
            THE LAST BOWL BENEFITS
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-plum-900 font-normal">
            More Than Food — It's a Ritual
          </h2>
          <p className="text-xs sm:text-sm text-plum-600 leading-relaxed font-light">
            We've curated a cozy retreat for those who crave comfort after midnight. Discover why our bowl is a quiet sanctuary.
          </p>
        </div>

        {/* 3 Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-cream-50 border border-cream-300 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative group overflow-hidden`}
              >
                {/* Subtle corner highlight */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${exp.accent} pointer-events-none transition-opacity group-hover:opacity-100 opacity-60`} />

                <div>
                  <div className={`w-12 h-12 rounded-xl bg-cream-200/80 border border-cream-300 flex items-center justify-center mb-6 ${exp.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-[10px] uppercase tracking-widest text-plum-500 font-semibold block mb-1">
                    {exp.sublabel}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-plum-900 font-medium mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-plum-600 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-cream-200/80 flex items-center justify-between text-xs text-plum-700">
                  <span className="font-serif italic text-plum-500">Experience 0{idx + 1}</span>
                  <span className="text-plum-400 group-hover:text-plum-900 transition-colors">✦</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};