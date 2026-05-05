import React from 'react';
import { useCart } from 'react-use-cart';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const CartSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  const checkoutMessage = items
    .map(item => `${item.quantity}x ${item.name}`)
    .join('%0A');
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}?text=Hi Pizza2night, I would like to order:%0A${checkoutMessage}%0A%0ATotal: $${cartTotal.toFixed(2)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-zinc-950 border-l border-white/10 flex flex-col h-full shadow-2xl"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-brand-red" />
                <h2 className="font-display text-2xl uppercase italic tracking-tighter">Your Order</h2>
                <span className="bg-zinc-800 text-xs px-2 py-0.5 rounded-full text-zinc-400">{totalUniqueItems}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {isEmpty ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="text-xl font-display uppercase italic">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-brand-red font-bold text-sm uppercase tracking-widest underline"
                  >
                    Start Ordering
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-lg leading-none truncate uppercase italic tracking-tighter">{item.name}</h4>
                        <span className="font-mono text-brand-yellow font-bold">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                      </div>
                      <p className="text-zinc-500 text-xs line-clamp-1 mb-3">${item.price?.toFixed(2)} each</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-zinc-900 rounded-xl p-1 border border-white/5">
                          <button 
                            onClick={() => updateItemQuantity(item.id, (item.quantity || 1) - 1)}
                            className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateItemQuantity(item.id, (item.quantity || 1) + 1)}
                            className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-zinc-600 hover:text-brand-red transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {!isEmpty && (
              <div className="p-6 border-t border-white/5 bg-zinc-900/30 space-y-4">
                <div className="flex justify-between text-xl font-display uppercase italic tracking-tighter">
                  <span>Subtotal</span>
                  <span className="text-brand-yellow">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-zinc-500 text-xs italic">* Delivery charges may apply based on location.</p>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center gap-2 bg-zinc-800 py-4 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-zinc-700 transition-colors"
                  >
                    <Phone size={16} /> Call to Order
                  </a>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
                <button 
                  onClick={() => emptyCart()}
                  className="w-full text-zinc-600 text-[10px] uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
