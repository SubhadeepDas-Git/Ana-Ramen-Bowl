import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Volume2, VolumeX, Moon } from 'lucide-react';
import { useRestaurantStatus } from '../../hooks/useRestaurantStatus';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenCustomizer: () => void;
  isAmbientPlaying: boolean;
  onToggleAmbient: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenCustomizer,
  isAmbientPlaying,
  onToggleAmbient,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { statusText, isOpen } = useRestaurantStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Soul', href: '#soul' },
    { name: 'Signature Bowls', href: '#signature' },
    { name: 'Menu Explorer', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Midnight Ritual', href: '#ritual' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/90 backdrop-blur-md py-3.5 border-b border-cream-300 shadow-warm-sm'
            : 'bg-cream-100/60 backdrop-blur-sm py-5 border-b border-cream-300/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="The Last Bowl Home"
            >
              <div className="w-8 h-8 rounded-full bg-plum-800 text-cream-100 flex items-center justify-center transition-transform group-hover:scale-105">
                <Moon className="w-4 h-4 text-yolk-500 fill-yolk-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-wide text-plum-900 font-semibold leading-none">
                  THE LAST BOWL
                </span>
                <span className="text-[9px] uppercase tracking-widest text-plum-500 font-medium mt-0.5">
                  Midnight Ramen Retreat
                </span>
              </div>
            </a>

            {/* Live Late-Night Status Pill (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 text-xs">
              <span className="relative flex h-2 w-2">
                {isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isOpen ? 'bg-emerald-500' : 'bg-amber-400'
                  }`}
                ></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-plum-700">
                {statusText}
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 text-sm tracking-wide">
              {navLinks.slice(0, 5).map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-plum-700 hover:text-plum-950 font-medium transition-colors cursor-pointer text-xs uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Ambient Late-Night Sound Toggle */}
              <button
                onClick={onToggleAmbient}
                title={isAmbientPlaying ? 'Mute late-night ambient hum' : 'Play cozy midnight rain & hum'}
                aria-label={isAmbientPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
                className="p-2 rounded-full border border-cream-300 hover:bg-cream-200 text-plum-700 transition-colors focus:outline-none"
              >
                {isAmbientPlaying ? (
                  <Volume2 className="w-4 h-4 text-lavender-500 animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-plum-400" />
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                aria-label={`Open shopping cart with ${cartItemCount} items`}
                className="relative p-2 rounded-full border border-cream-300 hover:bg-cream-200 text-plum-800 transition-colors focus:outline-none"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-plum-800 text-cream-100 text-[10px] font-bold rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Primary CTA: Book Your Bowl */}
              <a
                href="#reservation"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-sm hover:shadow-warm-md"
              >
                Book Your Bowl
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 rounded-lg text-plum-800 hover:bg-cream-200 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-cream-100 p-6">
          <div className="flex items-center justify-between pb-6 border-b border-cream-300">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-yolk-500" />
              <span className="font-serif text-xl text-plum-900 font-semibold">THE LAST BOWL</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-plum-700 hover:bg-cream-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-xs mb-4">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-plum-800">{statusText}</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-4 py-4 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-left text-lg font-serif text-plum-900 hover:text-lavender-500 py-2 border-b border-cream-200"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="text-left text-lg font-serif text-lavender-500 py-2 border-b border-cream-200"
            >
              ✦ Build Your Custom Bowl
            </button>
          </nav>

          <div className="pt-4 border-t border-cream-300 space-y-3">
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-plum-800 text-cream-100 text-xs uppercase tracking-widest font-medium text-center"
            >
              Book Your Bowl
            </a>
            <p className="text-center text-xs text-plum-500 font-light">
              Midnight Alley, Neon District • Open 6 PM – 4 AM
            </p>
          </div>
        </div>
      )}
    </>
  );
};