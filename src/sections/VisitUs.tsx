import React from 'react';
import { MapPin, Clock, Moon, Compass, Sparkles } from 'lucide-react';

export const VisitUs: React.FC = () => {
  return (
    <section id="visit" className="py-24 sm:py-32 bg-cream-200/50 border-t border-cream-300 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <p className="text-[11px] uppercase tracking-widest text-plum-500 font-semibold">
            FIND YOUR WAY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plum-900 font-normal">
            Visit Us
          </h2>
          <p className="text-xs sm:text-sm text-plum-600 font-light">
            Tucked deep into the winding passages of the Neon District, where the city traffic softens into a quiet murmur.
          </p>
        </div>

        {/* 2-Column Info & Etiquette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Col 1: Location & Transit Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-cream-50 border border-cream-300 shadow-warm-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-plum-800 text-cream-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yolk-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-plum-900 font-medium">Midnight Alley</h3>
                  <p className="text-xs text-plum-500">Neon District, Tokyo / Night Sanctuary</p>
                </div>
              </div>

              <div className="p-4 bg-cream-100 rounded-2xl border border-cream-300/80 space-y-2 text-xs text-plum-700">
                <div className="flex items-center gap-2 font-medium text-plum-900">
                  <Compass className="w-4 h-4 text-lavender-500" />
                  <span>How to Spot Our Entrance</span>
                </div>
                <p className="leading-relaxed font-light text-plum-600">
                  Look for the faint lavender lantern hanging above the wooden sliding door. There is no large neon sign — just the soft aroma of simmering miso dashi and roasted garlic.
                </p>
              </div>

              {/* Opening Hours List */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-plum-900 uppercase tracking-wider text-[11px] mb-2">
                  <Clock className="w-3.5 h-3.5 text-plum-700" />
                  <span>Hours of Operation</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-cream-200">
                  <span className="text-plum-600">Monday – Thursday</span>
                  <span className="font-medium text-plum-900">6:00 PM — 4:00 AM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-cream-200">
                  <span className="text-plum-600">Friday – Saturday</span>
                  <span className="font-medium text-plum-900">6:00 PM — 4:30 AM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-plum-600">Sunday</span>
                  <span className="font-medium text-plum-900">6:00 PM — 3:00 AM</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-plum-500">
              <span>Direct: hello@thelastbowl.com</span>
              <a href="#reservation" className="text-lavender-600 font-medium underline">
                Reserve Counter →
              </a>
            </div>
          </div>

          {/* Col 2: Late-Night Dining Etiquette */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-cream-50 border border-cream-300 shadow-warm-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-yolk-500" />
                <h3 className="font-serif text-xl text-plum-900 font-medium">
                  Late-Night Etiquette
                </h3>
              </div>
              <p className="text-xs text-plum-600 leading-relaxed font-light">
                To keep our sanctuary restful for everyone who arrives after dark, we honor a few tender traditions:
              </p>

              <ul className="space-y-3.5 text-xs text-plum-700 pt-2">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cream-200 text-plum-800 font-serif font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                    1
                  </span>
                  <div>
                    <strong className="text-plum-900 font-medium block">Whisper Tones</strong>
                    <span className="text-plum-600 font-light">Keep phone conversations outside. The silence of the night is part of the recipe.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cream-200 text-plum-800 font-serif font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                    2
                  </span>
                  <div>
                    <strong className="text-plum-900 font-medium block">Solo Diners Are Cherished</strong>
                    <span className="text-plum-600 font-light">More than half our counter seats are dedicated to solitary guests enjoying late hours with a book or their thoughts.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cream-200 text-plum-800 font-serif font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                    3
                  </span>
                  <div>
                    <strong className="text-plum-900 font-medium block">Slurp With Pride</strong>
                    <span className="text-plum-600 font-light">Slurping cools the noodles and aerates the broth, bringing the 12-hour aroma into full bloom.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cream-200 text-plum-800 font-serif font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                    4
                  </span>
                  <div>
                    <strong className="text-plum-900 font-medium block">Unhurried Departure</strong>
                    <span className="text-plum-600 font-light">No one will ever rush your seat. Finish your broth, sip your tea, and breathe.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-cream-200 text-[11px] text-plum-500 italic font-serif">
              "When I Fly Towards You — gentle, hopeful, a little dreamy."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};