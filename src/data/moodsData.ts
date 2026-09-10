import { MoodRecommendation } from '../types';

export const MOODS: MoodRecommendation[] = [
  {
    id: 'COZY',
    label: 'Cozy',
    dishId: 'velvet-tonkotsu',
    vibe: 'Warm blanket, quiet rain, soothing company',
    quote: 'When you need to sink into something deep, rich, and grounding after a long day.',
    atmosphereColor: 'from-amber-100/60 to-orange-50/40',
  },
  {
    id: 'DREAMY',
    label: 'Dreamy',
    dishId: 'moonlit-miso',
    vibe: 'Golden lamplight, nostalgic melodies, wandering thoughts',
    quote: 'For wandering minds who find magic in quiet midnight hours and warm buttery comforts.',
    atmosphereColor: 'from-lavender-100/60 to-purple-50/40',
  },
  {
    id: 'QUIET',
    label: 'Quiet',
    dishId: 'starlit-shoyu',
    vibe: 'Gentle stars, solo contemplation, clean clarity',
    quote: 'Clear, gentle, and unhurried. Perfect when the outside noise has finally ceased.',
    atmosphereColor: 'from-sage-100/60 to-teal-50/40',
  },
  {
    id: 'SPICY',
    label: 'Spicy',
    dishId: 'dream-chaser-spicy',
    vibe: 'Spark of energy, electric night, craving excitement',
    quote: 'For those chasing a spirited kick of chili and charred garlic to awaken the soul.',
    atmosphereColor: 'from-blush-100/60 to-rose-50/40',
  },
  {
    id: 'ADVENTUROUS',
    label: 'Adventurous',
    dishId: 'midnight-curry',
    vibe: 'Midnight exploration, bold spices, hearty comfort',
    quote: 'Japanese curry woven into rich ramen noodles for a journey through warmth and spice.',
    atmosphereColor: 'from-amber-200/50 to-yellow-100/40',
  },
];