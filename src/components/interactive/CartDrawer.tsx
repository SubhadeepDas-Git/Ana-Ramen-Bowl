import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Moon, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  subtotal: number;
  tax: number;
  total: number;
  onOpenCustomizer: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  subtotal,
  tax,
  total,
  onOpenCustomizer,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [deliveryType, setDeliveryType] = useState<'Dine-In' | 'Late Pickup'>('Dine-In');
  const [customerName, setCustomerName] = useState('');
  const [tableOrPhone, setTableOrPhone] = useState('');

  if (!isOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `TLB-ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderPlaced(true);
    onClearCart();
  };

  const handleReset = () => {
    setOrderPlaced(false);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-plum-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 border-l border-cream-400 shadow-warm-lg flex flex-col">
          {/* Drawer Header */}
          <div className="p-6 border-b border-cream-300 bg-cream-100/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-plum-800" />
              <h2 className="text-xl font-serif font-medium text-plum-900">Your Midnight Order</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart drawer"
              className="p-1.5 rounded-full hover:bg-cream-200 text-plum-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderPlaced ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-plum-900">Broth Is Simmering</h3>
                <p className="text-xs text-plum-600 max-w-xs mx-auto leading-relaxed">
                  Your midnight order has been received by our kitchen master. Steam will greet you shortly.
                </p>
                <div className="p-4 bg-cream-200/80 rounded-xl border border-cream-300 inline-block text-left text-xs space-y-1">
                  <p className="font-semibold text-plum-900">Order ID: <span className="text-lavender-600">{orderId}</span></p>
                  <p className="text-plum-600">Type: {deliveryType}</p>
                  <p className="text-plum-600">Estimated prep: 12-15 minutes</p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-plum-800 text-cream-100 text-xs uppercase tracking-widest font-medium hover:bg-plum-900 transition-colors"
                  >
                    Done & Return
                  </button>
                </div>
              </div>
            ) : isCheckingOut ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="pb-2 border-b border-cream-300">
                  <h3 className="font-serif text-lg text-plum-900">Finalize Details</h3>
                  <p className="text-xs text-plum-500">Provide pickup or dining table information</p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-plum-700 mb-1">Order Mode</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('Dine-In')}
                      className={`py-2 text-xs rounded-lg border font-medium transition-colors ${
                        deliveryType === 'Dine-In'
                          ? 'bg-plum-800 text-cream-100 border-plum-800'
                          : 'bg-cream-100 text-plum-700 border-cream-300'
                      }`}
                    >
                      Dine-In (At Retreat)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('Late Pickup')}
                      className={`py-2 text-xs rounded-lg border font-medium transition-colors ${
                        deliveryType === 'Late Pickup'
                          ? 'bg-plum-800 text-cream-100 border-plum-800'
                          : 'bg-cream-100 text-plum-700 border-cream-300'
                      }`}
                    >
                      Late Night Takeout
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-plum-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Kai or Aoi"
                    className="w-full px-3 py-2 text-xs bg-cream-100 border border-cream-300 rounded-lg text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-plum-700 mb-1">
                    {deliveryType === 'Dine-In' ? 'Table / Counter Number (if seated)' : 'Contact Phone'}
                  </label>
                  <input
                    type="text"
                    required
                    value={tableOrPhone}
                    onChange={(e) => setTableOrPhone(e.target.value)}
                    placeholder={deliveryType === 'Dine-In' ? 'e.g. Counter 4 or Tatami 2' : 'e.g. 555-0192'}
                    className="w-full px-3 py-2 text-xs bg-cream-100 border border-cream-300 rounded-lg text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                  />
                </div>

                <div className="p-3 bg-cream-200 rounded-xl border border-cream-300 text-xs space-y-1">
                  <div className="flex justify-between font-medium text-plum-900">
                    <span>Total Due</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-plum-500">Pay upon service or contact-free at counter</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-1/2 py-2.5 rounded-full border border-cream-400 text-plum-700 text-xs font-medium hover:bg-cream-200"
                  >
                    Back to Items
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 rounded-full bg-plum-800 text-cream-100 text-xs uppercase tracking-widest font-medium hover:bg-plum-900 transition-colors shadow-warm-sm"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-cream-200 text-plum-400 flex items-center justify-center">
                  <Moon className="w-6 h-6" />
                </div>
                <p className="font-serif text-lg text-plum-800">Your bowl is currently empty.</p>
                <p className="text-xs text-plum-500 max-w-xs mx-auto">
                  Explore our signature broths or craft your own personalized midnight bowl.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomizer();
                    }}
                    className="inline-flex items-center text-xs text-lavender-500 hover:text-plum-900 font-medium underline underline-offset-4"
                  >
                    ✦ Open Bowl Customizer
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 bg-cream-100 border border-cream-300 rounded-xl shadow-warm-sm flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        {item.itemType === 'menu' && item.menuItem && (
                          <>
                            <h4 className="font-serif text-base text-plum-900 font-medium leading-tight">
                              {item.menuItem.name}
                            </h4>
                            <span className="text-[10px] uppercase tracking-wider text-plum-500">
                              {item.menuItem.tag}
                            </span>
                          </>
                        )}
                        {item.itemType === 'custom' && item.customBowl && (
                          <>
                            <h4 className="font-serif text-base text-plum-900 font-medium leading-tight">
                              Custom Midnight Bowl
                            </h4>
                            <div className="text-[11px] text-plum-600 space-y-0.5 mt-1">
                              <p>• Broth: {item.customBowl.broth}</p>
                              <p>• Noodles: {item.customBowl.noodles}</p>
                              <p>• Protein: {item.customBowl.protein}</p>
                              {item.customBowl.toppings.length > 0 && (
                                <p>• Toppings: {item.customBowl.toppings.map((t) => t.name).join(', ')}</p>
                              )}
                              {item.customBowl.extras.length > 0 && (
                                <p>• Extras: {item.customBowl.extras.map((e) => e.name).join(', ')}</p>
                              )}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="text-right">
                        <span className="font-serif text-sm font-semibold text-plum-900">
                          ${item.totalPrice.toFixed(2)}
                        </span>
                        <p className="text-[10px] text-plum-500">${item.unitPrice.toFixed(2)} ea</p>
                      </div>
                    </div>

                    {item.specialInstructions && (
                      <p className="text-[10px] italic text-plum-500 bg-cream-200/60 px-2 py-1 rounded">
                        Note: {item.specialInstructions}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-1 border-t border-cream-200/80">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-6 h-6 rounded-full border border-cream-300 flex items-center justify-center text-plum-600 hover:bg-cream-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium text-plum-900 min-w-[16px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-6 h-6 rounded-full border border-cream-300 flex items-center justify-center text-plum-600 hover:bg-cream-200"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.cartItemId)}
                        className="text-plum-400 hover:text-rose-600 p-1 transition-colors"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer / Totals */}
          {items.length > 0 && !orderPlaced && !isCheckingOut && (
            <div className="p-6 border-t border-cream-300 bg-cream-100/90 space-y-3">
              <div className="space-y-1.5 text-xs text-plum-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[11px] text-plum-500">
                  <span>Tax (8.25%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-plum-900 pt-1 border-t border-cream-300">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-sm hover:shadow-warm-md flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <span>•</span>
                  <span>${total.toFixed(2)}</span>
                </button>
              </div>

              <div className="flex justify-between items-center text-[10px] text-plum-400 pt-1">
                <span>Free midnight dining packaging</span>
                <button
                  onClick={onClearCart}
                  className="hover:text-rose-600 underline"
                >
                  Clear Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};