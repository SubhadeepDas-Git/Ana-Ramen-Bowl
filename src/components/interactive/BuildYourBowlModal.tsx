import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { CustomBowl } from '../../types';
import {
  BROTH_OPTIONS,
  NOODLE_OPTIONS,
  PROTEIN_OPTIONS,
  TOPPING_OPTIONS,
  EXTRA_OPTIONS,
  OptionItem,
} from '../../data/customizationData';
import { Check, Flame, Sparkles, ChefHat } from 'lucide-react';

interface BuildYourBowlModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomBowl: (bowl: CustomBowl) => void;
}

export const BuildYourBowlModal: React.FC<BuildYourBowlModalProps> = ({
  isOpen,
  onClose,
  onAddCustomBowl,
}) => {
  const [selectedBroth, setSelectedBroth] = useState<OptionItem>(BROTH_OPTIONS[0]);
  const [selectedNoodles, setSelectedNoodles] = useState<'Thin' | 'Medium' | 'Thick'>('Medium');
  const [selectedProtein, setSelectedProtein] = useState<OptionItem>(PROTEIN_OPTIONS[0]);
  const [selectedToppings, setSelectedToppings] = useState<OptionItem[]>([
    TOPPING_OPTIONS[0], // Ajitama
    TOPPING_OPTIONS[3], // Scallions
  ]);
  const [selectedExtras, setSelectedExtras] = useState<OptionItem[]>([]);
  const [spiceLevel, setSpiceLevel] = useState<number>(1);
  const [specialNotes, setSpecialNotes] = useState('');

  // Calculate live prices
  const basePrice = selectedBroth.price;
  const proteinPrice = selectedProtein.price;
  const toppingsPrice = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const extrasPrice = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const additionsPrice = proteinPrice + toppingsPrice + extrasPrice;
  const totalPrice = basePrice + additionsPrice;

  const toggleTopping = (item: OptionItem) => {
    setSelectedToppings((prev) =>
      prev.some((t) => t.id === item.id)
        ? prev.filter((t) => t.id !== item.id)
        : [...prev, item]
    );
  };

  const toggleExtra = (item: OptionItem) => {
    setSelectedExtras((prev) =>
      prev.some((e) => e.id === item.id)
        ? prev.filter((e) => e.id !== item.id)
        : [...prev, item]
    );
  };

  const handleSubmit = () => {
    const customBowl: CustomBowl = {
      id: `custom-bowl-${Date.now()}`,
      broth: selectedBroth.name,
      brothPrice: selectedBroth.price,
      noodles: selectedNoodles,
      protein: selectedProtein.name,
      proteinPrice: selectedProtein.price,
      toppings: selectedToppings.map((t) => ({ name: t.name, price: t.price })),
      extras: selectedExtras.map((e) => ({ name: e.name, price: e.price })),
      spiceLevel,
      specialNotes,
      basePrice,
      additionsPrice,
      totalPrice,
    };
    onAddCustomBowl(customBowl);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Build Your Bowl"
      subtitle="Craft Your Midnight Recipe"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-8">
        {/* Step 1: Broth */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-plum-900">
              1. Choose Your Broth Base
            </h4>
            <span className="text-xs text-lavender-600 font-medium">Step 1 of 5</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {BROTH_OPTIONS.map((broth) => {
              const isSelected = selectedBroth.id === broth.id;
              return (
                <button
                  type="button"
                  key={broth.id}
                  onClick={() => setSelectedBroth(broth)}
                  className={`p-3.5 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'border-plum-800 bg-cream-200/90 shadow-warm-sm'
                      : 'border-cream-300 bg-cream-100 hover:border-cream-400'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-serif text-base font-semibold text-plum-900">
                      {broth.name}
                    </span>
                    <span className="text-xs font-serif font-bold text-plum-800">
                      ${broth.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-[11px] text-plum-600 mt-1 line-clamp-2 leading-relaxed">
                    {broth.description}
                  </p>
                  {isSelected && (
                    <div className="absolute top-2.5 right-2 w-4 h-4 rounded-full bg-plum-800 text-cream-100 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Noodles */}
        <section className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-plum-900">
            2. Choose Your Noodle Texture
          </h4>
          <div className="grid grid-cols-3 gap-2.5">
            {NOODLE_OPTIONS.map((noodle) => {
              const type = noodle.id === 'thin' ? 'Thin' : noodle.id === 'medium' ? 'Medium' : 'Thick';
              const isSelected = selectedNoodles === type;
              return (
                <button
                  type="button"
                  key={noodle.id}
                  onClick={() => setSelectedNoodles(type)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'border-plum-800 bg-cream-200 shadow-warm-sm font-semibold text-plum-900'
                      : 'border-cream-300 bg-cream-100 text-plum-700 hover:border-cream-400'
                  }`}
                >
                  <div className="font-serif text-sm">{type}</div>
                  <div className="text-[10px] text-plum-500 mt-0.5">Included</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 3: Protein */}
        <section className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-plum-900">
            3. Select Core Protein
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {PROTEIN_OPTIONS.map((protein) => {
              const isSelected = selectedProtein.id === protein.id;
              return (
                <button
                  type="button"
                  key={protein.id}
                  onClick={() => setSelectedProtein(protein)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-plum-800 bg-cream-200/90 shadow-warm-sm'
                      : 'border-cream-300 bg-cream-100 hover:border-cream-400'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-sm font-medium text-plum-900">
                      {protein.name}
                    </span>
                    <span className="text-xs text-plum-700">
                      {protein.price > 0 ? `+$${protein.price.toFixed(2)}` : 'Free'}
                    </span>
                  </div>
                  <p className="text-[10px] text-plum-500 mt-0.5">{protein.description}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 4: Toppings (Multi-select) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-plum-900">
              4. Curate Your Toppings
            </h4>
            <span className="text-[11px] text-plum-500">Pick any combination</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TOPPING_OPTIONS.map((topping) => {
              const isSelected = selectedToppings.some((t) => t.id === topping.id);
              return (
                <button
                  type="button"
                  key={topping.id}
                  onClick={() => toggleTopping(topping)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-plum-800 bg-cream-200 text-plum-900 font-medium'
                      : 'border-cream-300 bg-cream-100 text-plum-600 hover:border-cream-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="truncate">{topping.name}</span>
                  </div>
                  <span className="text-[10px] text-plum-500 mt-0.5 block">
                    +${topping.price.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 5: Extras & Spice */}
        <section className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-plum-900">
            5. Extras & Desired Heat
          </h4>

          {/* Spice Selector */}
          <div className="p-3 bg-cream-100 border border-cream-300 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-plum-800 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-rose-500" />
                Spice Level:
              </span>
              <span className="text-xs font-semibold text-rose-800">
                {spiceLevel === 0 && 'Mild & Gentle'}
                {spiceLevel === 1 && 'Whisper of Warmth (Level 1)'}
                {spiceLevel === 2 && 'Midnight Glow (Level 2)'}
                {spiceLevel === 3 && 'Dream Chaser Fire (Level 3)'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="1"
              value={spiceLevel}
              onChange={(e) => setSpiceLevel(Number(e.target.value))}
              className="w-full accent-plum-800 cursor-pointer"
            />
          </div>

          {/* Extras */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {EXTRA_OPTIONS.map((extra) => {
              const isSelected = selectedExtras.some((e) => e.id === extra.id);
              return (
                <button
                  type="button"
                  key={extra.id}
                  onClick={() => toggleExtra(extra)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-plum-800 bg-cream-200 text-plum-900 font-medium'
                      : 'border-cream-300 bg-cream-100 text-plum-600 hover:border-cream-400'
                  }`}
                >
                  <span className="text-xs block truncate">{extra.name}</span>
                  <span className="text-[10px] text-plum-500 mt-0.5 block">
                    +${extra.price.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Live Bill Breakdown & Action */}
        <div className="p-5 bg-cream-200/90 rounded-2xl border border-cream-400/80 space-y-3 shadow-warm-sm">
          <div className="flex items-center justify-between text-xs text-plum-700">
            <span>Base Broth ({selectedBroth.name})</span>
            <span>${basePrice.toFixed(2)}</span>
          </div>
          {additionsPrice > 0 && (
            <div className="flex items-center justify-between text-xs text-plum-600">
              <span>Selected Additions ({selectedToppings.length + selectedExtras.length + (selectedProtein.price > 0 ? 1 : 0)} items)</span>
              <span>+${additionsPrice.toFixed(2)}</span>
            </div>
          )}
          <div className="pt-2 border-t border-cream-300 flex items-center justify-between font-serif text-xl font-bold text-plum-900">
            <span>Total Crafted Price</span>
            <span className="text-2xl">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="pt-2">
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-sm hover:shadow-warm-md flex items-center justify-center gap-2"
            >
              <ChefHat className="w-4 h-4" />
              <span>Add Custom Bowl to Midnight Order</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};