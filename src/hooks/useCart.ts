import { useState, useEffect } from 'react';
import { CartItem, MenuItem, CustomBowl } from '../types';

const CART_STORAGE_KEY = 'the_last_bowl_cart_v1';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const addMenuItem = (menuItem: MenuItem, quantity = 1, specialInstructions?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.itemType === 'menu' && i.menuItem?.id === menuItem.id && i.specialInstructions === (specialInstructions || '')
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        const current = updated[existingIndex];
        const newQty = current.quantity + quantity;
        updated[existingIndex] = {
          ...current,
          quantity: newQty,
          totalPrice: newQty * current.unitPrice,
        };
        return updated;
      }

      const newItem: CartItem = {
        cartItemId: `menu-${menuItem.id}-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        itemType: 'menu',
        menuItem,
        quantity,
        unitPrice: menuItem.price,
        totalPrice: menuItem.price * quantity,
        specialInstructions: specialInstructions || '',
      };
      return [...prev, newItem];
    });
    setIsDrawerOpen(true);
  };

  const addCustomBowl = (customBowl: CustomBowl, quantity = 1) => {
    const newItem: CartItem = {
      cartItemId: `custom-${customBowl.id}-${Date.now()}`,
      itemType: 'custom',
      customBowl,
      quantity,
      unitPrice: customBowl.totalPrice,
      totalPrice: customBowl.totalPrice * quantity,
      specialInstructions: customBowl.specialNotes || '',
    };
    setItems((prev) => [...prev, newItem]);
    setIsDrawerOpen(true);
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: item.unitPrice * newQuantity,
            }
          : item
      )
    );
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.0825; // 8.25% sales tax
  const total = subtotal + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
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
  };
}