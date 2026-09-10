import React, { useState } from 'react';
import { ALL_MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { Badge } from '../components/common/Badge';
import { Search, Flame, Plus, Eye, Sparkles } from 'lucide-react';

interface MenuExplorerProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuExplorer: React.FC<MenuExplorerProps> = ({
  onSelectItem,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'HOUSE FAVORITE', label: 'House Favorites' },
    { id: 'RICH & CREAMY', label: 'Rich & Creamy' },
    { id: 'SPICY', label: 'Spicy' },
    { id: 'LIGHT & CLASSIC', label: 'Classic' },
    { id: 'HEARTY', label: 'Hearty' },
    { id: 'VEGETARIAN', label: 'Vegetarian' },
    { id: 'side', label: 'Midnight Bites' },
  ];

  const filteredItems = ALL_MENU_ITEMS.filter((item) => {
    // Category match
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'side'
        ? item.category === 'side' || item.category === 'dessert' || item.category === 'drink'
        : item.tag === selectedCategory;

    // Search query match
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

    // Dietary filter
    const matchesDietary =
      dietaryFilter === 'all' || item.dietary.includes(dietaryFilter as any);

    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-cream-200/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-[11px] uppercase tracking-widest text-lavender-600 font-semibold">
            EXPLORE THE NIGHT KITCHEN
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plum-900 font-normal">
            Interactive Menu
          </h2>
          <p className="text-xs sm:text-sm text-plum-600 font-light">
            Filter by broth density, dietary profile, or spice intensity. Every item is prepared fresh upon order.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mb-10 space-y-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-plum-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ingredient, broth, or dish name..."
              className="w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-300 rounded-full text-xs text-plum-900 placeholder:text-plum-400 focus:outline-none focus:ring-1 focus:ring-plum-800 shadow-warm-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-plum-800 text-cream-100 shadow-warm-sm'
                    : 'bg-cream-100 text-plum-700 hover:bg-cream-200 border border-cream-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Sub-filters */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-plum-500 pt-1">
            <span>Dietary preference:</span>
            {['all', 'Vegetarian', 'Vegan', 'Dairy-Free'].map((d) => (
              <button
                key={d}
                onClick={() => setDietaryFilter(d)}
                className={`px-2.5 py-0.5 rounded-md transition-colors ${
                  dietaryFilter === d
                    ? 'bg-cream-300 text-plum-900 font-semibold'
                    : 'hover:text-plum-800'
                }`}
              >
                {d === 'all' ? 'Any' : d}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-cream-50 rounded-2xl border border-cream-300 p-8">
            <p className="font-serif text-lg text-plum-800 mb-1">No midnight dishes found.</p>
            <p className="text-xs text-plum-500">Try adjusting your search terms or category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 text-xs font-medium text-lavender-600 underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-cream-50 border border-cream-300 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Item Image with click trigger */}
                  <div
                    onClick={() => onSelectItem(item)}
                    className="relative h-48 overflow-hidden cursor-pointer bg-cream-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent" />
                    
                    {/* Floating pill in photo */}
                    <div className="absolute top-3 left-3">
                      <Badge variant={
                        item.tag === 'HOUSE FAVORITE' ? 'favorite' :
                        item.tag === 'RICH & CREAMY' ? 'creamy' :
                        item.tag === 'SPICY' ? 'spicy' :
                        item.tag === 'LIGHT & CLASSIC' ? 'classic' :
                        item.tag === 'HEARTY' ? 'hearty' :
                        item.tag === 'VEGETARIAN' ? 'vegetarian' : 'default'
                      }>
                        {item.tag}
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-cream-100">
                      <span className="font-serif text-lg font-medium drop-shadow-sm">
                        {item.name}
                      </span>
                      <span className="font-serif text-lg font-bold text-yolk-400">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2.5">
                    {item.japaneseName && (
                      <p className="text-[11px] text-plum-500 font-light italic">
                        {item.japaneseName}
                      </p>
                    )}
                    <p className="text-xs text-plum-600 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {item.spiceLevel > 0 && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] text-rose-700 font-medium bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          <Flame className="w-2.5 h-2.5 text-rose-500" />
                          <span>Spicy</span>
                        </span>
                      )}
                      {item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-cream-200/80 mt-2">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="inline-flex items-center gap-1 text-xs text-plum-600 hover:text-plum-900 font-medium transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-lavender-500" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream-200 hover:bg-plum-800 hover:text-cream-100 text-plum-900 text-xs font-medium transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};