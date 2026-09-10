import React from 'react';
import { SIGNATURE_BOWLS } from '../data/menuData';
import { MenuItem } from '../types';
import { Badge } from '../components/common/Badge';
import { Plus, Eye } from 'lucide-react';

interface SignatureBowlsProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
}

export const SignatureBowls: React.FC<SignatureBowlsProps> = ({
  onSelectItem,
  onAddToCart,
}) => {
  return (
    <section id="signature" className="py-24 sm:py-32 bg-cream-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <p className="text-[11px] uppercase tracking-widest text-lavender-600 font-semibold">
            SERVED WARM, AFTER DARK
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-plum-900">
            Signature Bowls
          </h2>
          <p className="text-xs uppercase tracking-widest text-plum-500 font-medium pt-1">
            LATE NIGHT BOWL • RAMEN MENU
          </p>
          <div className="w-12 h-px bg-cream-400 mx-auto mt-4" />
        </div>

        {/* Editorial Menu List Layout (Not a generic SaaS grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-12">
          {SIGNATURE_BOWLS.map((bowl) => (
            <article
              key={bowl.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-cream-50 border border-cream-300/90 hover:border-cream-400 shadow-warm-sm hover:shadow-warm-md transition-all duration-300"
            >
              <div>
                {/* Header: Name, Dotted Line, Price */}
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3
                    onClick={() => onSelectItem(bowl)}
                    className="font-serif text-xl sm:text-2xl text-plum-900 font-medium group-hover:text-plum-950 cursor-pointer transition-colors"
                  >
                    {bowl.name}
                  </h3>
                  <div className="flex-1 border-b border-dotted border-cream-400 mx-2 min-w-[20px]" />
                  <span className="font-serif text-xl sm:text-2xl text-plum-900 font-semibold">
                    ${bowl.price}
                  </span>
                </div>

                {/* Tag pill */}
                <div className="mb-3">
                  <Badge variant={
                    bowl.tag === 'HOUSE FAVORITE' ? 'favorite' :
                    bowl.tag === 'RICH & CREAMY' ? 'creamy' :
                    bowl.tag === 'SPICY' ? 'spicy' :
                    bowl.tag === 'LIGHT & CLASSIC' ? 'classic' :
                    bowl.tag === 'HEARTY' ? 'hearty' :
                    bowl.tag === 'VEGETARIAN' ? 'vegetarian' : 'default'
                  }>
                    {bowl.tag}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-plum-600 leading-relaxed font-light mb-4">
                  {bowl.description}
                </p>
              </div>

              {/* Card Footer: Quick Actions */}
              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectItem(bowl)}
                  className="inline-flex items-center gap-1.5 text-xs text-plum-600 hover:text-plum-900 transition-colors font-medium"
                  aria-label={`View details for ${bowl.name}`}
                >
                  <Eye className="w-3.5 h-3.5 text-lavender-500" />
                  <span>View Details & Ingredients</span>
                </button>

                <button
                  onClick={() => onAddToCart(bowl)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream-200 hover:bg-plum-800 hover:text-cream-100 text-plum-800 text-xs font-medium transition-all"
                  aria-label={`Add ${bowl.name} to order`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Order</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom invitation note */}
        <div className="text-center mt-16 text-xs text-plum-500 italic font-serif">
          All bowls are accompanied by house-made spring water broth and seasoned to order.
        </div>

      </div>
    </section>
  );
};