import React, { useState } from 'react';
import { Moon, Heart, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-cream-200/80 border-t border-cream-300 text-plum-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream-300/80">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-plum-800 text-cream-100 flex items-center justify-center">
                <Moon className="w-4 h-4 text-yolk-500 fill-yolk-500" />
              </div>
              <span className="font-serif text-2xl tracking-wide font-semibold text-plum-900">
                THE LAST BOWL
              </span>
            </div>
            <p className="font-serif italic text-sm text-plum-600 leading-relaxed">
              "A little warmth after dark."
            </p>
            <p className="text-xs text-plum-500 leading-relaxed">
              A quiet sanctuary for night owls, dreamers, and seekers of slow comfort. Made for anyone chasing warmth after midnight.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-plum-900 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-plum-600">
              <li>
                <a href="#hero" className="hover:text-plum-900 transition-colors">Home</a>
              </li>
              <li>
                <a href="#soul" className="hover:text-plum-900 transition-colors">The Soul of the Bowl</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-plum-900 transition-colors">Signature Bowls</a>
              </li>
              <li>
                <a href="#story" className="hover:text-plum-900 transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-plum-900 transition-colors">Midnight Ritual</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-plum-900 transition-colors">Book a Table</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-plum-900 font-semibold">
              Retreat Hours
            </h4>
            <div className="text-xs text-plum-600 space-y-1.5">
              <p className="font-medium text-plum-800">Monday — Sunday</p>
              <p>6:00 PM — 4:00 AM (Dawn)</p>
              <div className="pt-2">
                <p className="font-medium text-plum-800">Sanctuary Address</p>
                <p>Midnight Alley, Neon District</p>
                <p className="text-plum-500 text-[11px]">Under the soft lavender lantern</p>
              </div>
              <div className="pt-1">
                <p className="font-medium text-plum-800">Direct Inquiries</p>
                <p>hello@thelastbowl.com</p>
              </div>
            </div>
          </div>

          {/* Col 4: Midnight Letters (Newsletter) */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-plum-900 font-semibold">
              Midnight Letters
            </h4>
            <p className="text-xs text-plum-600 leading-relaxed">
              Receive quiet midnight thoughts, secret seasonal broth announcements, and private dining invites.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-800 text-xs">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>You're on the midnight guest list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@midnight.com"
                    required
                    className="w-full px-3.5 py-2 text-xs bg-cream-100 border border-cream-400 rounded-lg text-plum-900 placeholder:text-plum-400 focus:outline-none focus:ring-1 focus:ring-plum-800"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to midnight letters"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-plum-800 hover:bg-plum-900 text-cream-100 rounded-md text-xs transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] text-plum-400 italic">
                  We promise quiet correspondence only.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-plum-500">
          <p>© 2026 The Last Bowl. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-blush-400 fill-blush-400 inline" />
            <span>for anyone who finds comfort at midnight.</span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <a href="#hero" className="hover:text-plum-800 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-plum-800 transition-colors">Etiquette</a>
            <span>•</span>
            <a href="#hero" className="hover:text-plum-800 transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};