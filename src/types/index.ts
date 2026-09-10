export type DietaryType = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free' | 'Halal-Friendly' | 'Pork-Free';

export interface MenuItem {
  id: string;
  name: string;
  japaneseName?: string;
  tag: string; // e.g. "HOUSE FAVORITE", "RICH & CREAMY", "SPICY", "LIGHT & CLASSIC", "HEARTY", "VEGETARIAN"
  price: number;
  description: string;
  category: 'ramen' | 'side' | 'dessert' | 'drink';
  spiceLevel: 0 | 1 | 2 | 3;
  dietary: DietaryType[];
  ingredients: string[];
  brothType?: string;
  image: string;
  prepTimeMinutes?: number;
  calories?: number;
  isSignature?: boolean;
}

export interface CustomBowl {
  id: string;
  broth: string;
  brothPrice: number;
  noodles: 'Thin' | 'Medium' | 'Thick';
  protein: string;
  proteinPrice: number;
  toppings: Array<{ name: string; price: number }>;
  extras: Array<{ name: string; price: number }>;
  spiceLevel: number;
  specialNotes?: string;
  basePrice: number;
  additionsPrice: number;
  totalPrice: number;
}

export interface CartItem {
  cartItemId: string;
  itemType: 'menu' | 'custom';
  menuItem?: MenuItem;
  customBowl?: CustomBowl;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  specialInstructions?: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'Counter Bar' | 'Window Lantern' | 'Tatami Booth' | 'Quiet Corner';
  specialRequest?: string;
  createdAt: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface MoodRecommendation {
  id: 'COZY' | 'ADVENTUROUS' | 'QUIET' | 'SPICY' | 'DREAMY';
  label: string;
  dishId: string;
  vibe: string;
  quote: string;
  atmosphereColor: string;
}