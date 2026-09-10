export interface OptionItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tag?: string;
  isPopular?: boolean;
}

export const BROTH_OPTIONS: OptionItem[] = [
  { id: 'miso', name: 'Moonlit Miso', description: 'Deep, savory fermented bean paste with charred dashi warmth', price: 11.00, tag: 'Favorite', isPopular: true },
  { id: 'shoyu', name: 'Starlit Shoyu', description: 'Delicate, clear aged soy tare with refined golden chicken undertones', price: 11.00, tag: 'Classic' },
  { id: 'tonkotsu', name: 'Velvet Tonkotsu', description: '12-hour rich pork marrow broth with velvety collagen mouthfeel', price: 12.50, tag: 'Rich', isPopular: true },
  { id: 'curry', name: 'Midnight Curry', description: 'Comforting, aromatic Japanese spiced curry broth simmered with root vegetables', price: 12.00, tag: 'Warm & Spiced' },
  { id: 'yuzu-veg', name: 'Yuzu Vegetable', description: 'Fragrant citrus-bright shiitake, kombu, and root vegetable infusion', price: 11.00, tag: 'Plant-Based' },
];

export const NOODLE_OPTIONS: OptionItem[] = [
  { id: 'thin', name: 'Thin Hakata Noodles', description: 'Firm, straight, perfect for clinging to rich broths', price: 0 },
  { id: 'medium', name: 'Medium Tokyo Waves', description: 'Balanced chew, wavy texture that catches broth pockets', price: 0, isPopular: true },
  { id: 'thick', name: 'Thick Hand-Cut Noodles', description: 'Robust, hearty bite with rich wheat aroma', price: 0 },
];

export const PROTEIN_OPTIONS: OptionItem[] = [
  { id: 'chashu', name: 'Braised Pork Chashu', description: 'Tender, melt-in-mouth flame-torched pork belly (2 slices)', price: 2.50, isPopular: true },
  { id: 'chicken', name: 'Sous-Vide Chicken Breast', description: 'Moist and tender with ginger-shoyu glaze', price: 2.00 },
  { id: 'tofu', name: 'Flash-Crisp Silken Tofu', description: 'Golden on outside, silky custard within (Vegan)', price: 1.50 },
  { id: 'egg-protein', name: 'Double Marinated Ajitama Eggs', description: 'Golden jammy yolk soaked in mirin soy tare', price: 1.50 },
  { id: 'none', name: 'No Protein (Broth & Veg Focus)', description: 'Skip protein and enjoy a lighter bowl', price: 0 },
];

export const TOPPING_OPTIONS: OptionItem[] = [
  { id: 'ajitama', name: 'Marinated Ajitama Egg', description: 'Jammy soft-boiled egg with sweet mirin dashi soak', price: 1.50, isPopular: true },
  { id: 'corn', name: 'Charred Sweet Corn', description: 'Caramelized in sea salt and butter', price: 1.00 },
  { id: 'bamboo', name: 'Menma Bamboo Shoots', description: 'Crisp seasoned shoots with savory umami crunch', price: 1.00 },
  { id: 'scallions', name: 'Ribbon Cut Scallions', description: 'Fresh, sharp contrast cut paper-thin', price: 0.75, isPopular: true },
  { id: 'mushrooms', name: 'Sautéed Shiitake & Enoki', description: 'Earthy woodland mushrooms simmered in sake', price: 1.25 },
  { id: 'woodear', name: 'Wood Ear Mushroom (Kikurage)', description: 'Delicate mineral crunch indispensable for tonkotsu', price: 1.00 },
  { id: 'nori', name: 'Toasted Ariake Nori (2 sheets)', description: 'Crisp Japanese seaweed sheets', price: 0.75 },
  { id: 'chili-oil', name: 'House Smoked Chili Rayu', description: 'Slow-infused with toasted sesame and garlic', price: 0.75 },
];

export const EXTRA_OPTIONS: OptionItem[] = [
  { id: 'extra-noodles', name: 'Kaidama (Extra Noodle Refill)', description: 'Freshly dropped portion of noodles', price: 2.50 },
  { id: 'extra-egg', name: 'Extra Ajitama Egg', description: 'Another golden egg for midnight indulgence', price: 2.00 },
  { id: 'extra-protein', name: 'Extra Protein Portion', description: 'Double slice of your chosen protein', price: 3.50 },
  { id: 'extra-broth', name: 'Extra Broth Cup', description: 'Piping hot broth refill', price: 2.00 },
];