import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'favorite' | 'creamy' | 'spicy' | 'classic' | 'hearty' | 'vegetarian' | 'default';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantStyles = {
    favorite: 'bg-yolk-500/15 text-plum-900 border-yolk-500/40 font-medium',
    creamy: 'bg-cream-300/80 text-plum-800 border-cream-400 font-medium',
    spicy: 'bg-blush-300/40 text-rose-900 border-blush-400 font-medium',
    classic: 'bg-sage-200/50 text-emerald-900 border-sage-300 font-medium',
    hearty: 'bg-amber-100 text-amber-900 border-amber-300 font-medium',
    vegetarian: 'bg-emerald-100/60 text-emerald-800 border-emerald-300 font-medium',
    default: 'bg-lavender-200/50 text-plum-800 border-lavender-300 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};