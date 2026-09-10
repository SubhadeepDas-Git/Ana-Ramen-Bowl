import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { SoulOfTheBowl } from './sections/SoulOfTheBowl';
import { Benefits } from './sections/Benefits';
import { SignatureBowls } from './sections/SignatureBowls';
import { MenuExplorer } from './sections/MenuExplorer';
import { BuildYourBowlBanner } from './sections/BuildYourBowlBanner';
import { OurStory } from './sections/OurStory';
import { Ambiance } from './sections/Ambiance';
import { MidnightRitual } from './sections/MidnightRitual';
import { Reservation } from './sections/Reservation';
import { VisitUs } from './sections/VisitUs';

import { CartDrawer } from './components/interactive/CartDrawer';
import { BowlDetailModal } from './components/interactive/BowlDetailModal';
import { BuildYourBowlModal } from './components/interactive/BuildYourBowlModal';

import { useCart } from './hooks/useCart';
import { useSoundEffects } from './hooks/useSoundEffects';
import { MenuItem, CustomBowl } from './types';

export function App() {
  const {
    items,
    isDrawerOpen,
    setIsDrawerOpen,
    addMenuItem,
    addCustomBowl,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    tax,
    total,
    itemCount,
  } = useCart();

  const { playChime, toggleAmbient, isAmbientPlaying } = useSoundEffects();

  // Detail Modal State
  const [detailItem, setDetailItem] = useState<MenuItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Custom Bowl Builder State
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Handlers
  const handleOpenDetail = (item: MenuItem) => {
    setDetailItem(item);
    setIsDetailOpen(true);
    playChime();
  };

  const handleQuickAddToCart = (item: MenuItem) => {
    addMenuItem(item, 1);
    playChime();
  };

  const handleCustomAddToCart = (bowl: CustomBowl) => {
    addCustomBowl(bowl, 1);
    playChime();
  };

  return (
    <div className="min-h-screen bg-cream-100 text-plum-800 font-sans flex flex-col selection:bg-lavender-200 selection:text-plum-900">
      {/* Persistent Navigation */}
      <Navbar
        cartItemCount={itemCount}
        onOpenCart={() => setIsDrawerOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        isAmbientPlaying={isAmbientPlaying}
        onToggleAmbient={toggleAmbient}
      />

      {/* Page Sections */}
      <main className="flex-1">
        <Hero onOpenCustomizer={() => setIsCustomizerOpen(true)} />
        <SoulOfTheBowl />
        <Benefits />
        <SignatureBowls
          onSelectItem={handleOpenDetail}
          onAddToCart={handleQuickAddToCart}
        />
        <MenuExplorer
          onSelectItem={handleOpenDetail}
          onAddToCart={handleQuickAddToCart}
        />
        <BuildYourBowlBanner
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
        <OurStory />
        <Ambiance
          isAmbientPlaying={isAmbientPlaying}
          onToggleAmbient={toggleAmbient}
        />
        <MidnightRitual
          onSelectItem={handleOpenDetail}
          onAddToCart={handleQuickAddToCart}
        />
        <Reservation />
        <VisitUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals and Drawer */}
      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
        subtotal={subtotal}
        tax={tax}
        total={total}
        onOpenCustomizer={() => {
          setIsDrawerOpen(false);
          setIsCustomizerOpen(true);
        }}
      />

      <BowlDetailModal
        item={detailItem}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onAddToCart={(item, qty, instructions) => {
          addMenuItem(item, qty, instructions);
          playChime();
        }}
      />

      <BuildYourBowlModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onAddCustomBowl={handleCustomAddToCart}
      />
    </div>
  );
}

export default App;