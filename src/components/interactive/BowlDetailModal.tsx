import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { MenuItem } from '../../types';
import { Flame, Clock, Sparkles, Plus, Minus, ShoppingBag } from 'lucide-react';

interface BowlDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, instructions: string) => void;
}

export const BowlDetailModal: React.FC<BowlDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity, notes);
    setQuantity(1);
    setNotes('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="space-y-6">
        {/* Visual Hero in Modal */}
        <div className="relative h-60 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 overflow-hidden rounded-t-2xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/80 via-plum-900/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-cream-100">
            <div>
              {item.japaneseName && (
                <span className="text-xs text-yolk-500 font-light tracking-widest block mb-1">
                  {item.japaneseName}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl font-serif">{item.name}</h2>
            </div>
            <div className="text-right">
              <span className="text-2xl font-serif text-yolk-400 font-semibold">${item.price}</span>
            </div>
          </div>
        </div>

        {/* Tags & Key Metrics */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Badge variant="favorite">{item.tag}</Badge>
          {item.spiceLevel > 0 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-medium bg-rose-100 text-rose-800 border border-rose-200">
              <Flame className="w-3 h-3 text-rose-600" />
              <span>Spice {item.spiceLevel}/3</span>
            </span>
          )}
          {item.prepTimeMinutes && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-cream-200 text-plum-700 border border-cream-300">
              <Clock className="w-3 h-3 text-plum-500" />
              <span>{item.prepTimeMinutes} mins prep</span>
            </span>
          )}
          {item.calories && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-cream-200 text-plum-700 border border-cream-300">
              <Sparkles className="w-3 h-3 text-yolk-500" />
              <span>{item.calories} kcal</span>
            </span>
          )}
        </div>

        {/* Narrative Description */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-plum-500 font-semibold mb-1.5">
            The Flavor Profile
          </h4>
          <p className="text-sm font-serif text-plum-800 italic leading-relaxed">
            "{item.description}"
          </p>
        </div>

        {/* Ingredients / Broth Component */}
        <div className="p-4 bg-cream-200/70 rounded-xl border border-cream-300 space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-plum-700 font-semibold">
            Artisanal Ingredients
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {item.ingredients.map((ing, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 bg-cream-50 border border-cream-300/80 rounded-md text-plum-800"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-xs font-medium text-plum-700 mb-1">
            Special Requests (e.g. extra scallions, soft noodles, less oil)
          </label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Let the chef know your late-night preference..."
            className="w-full px-3.5 py-2 text-xs bg-cream-100 border border-cream-300 rounded-lg text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
          />
        </div>

        {/* Quantity and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-cream-300">
          <div className="flex items-center space-x-3">
            <span className="text-xs text-plum-600 font-medium">Quantity:</span>
            <div className="flex items-center border border-cream-400 rounded-full bg-cream-100 px-2 py-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 hover:text-plum-950 text-plum-600"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3 text-xs font-semibold text-plum-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:text-plum-950 text-plum-600"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-sm hover:shadow-warm-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Order • ${(item.price * quantity).toFixed(2)}</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};