import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ShoppingBag, X, Phone, Heart, Zap, Shield, DollarSign } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const StickyActions = () => {
  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-[45] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle size={32} className="text-white fill-white" />
      </a>

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-zinc-900 border-t border-white/10 p-4 flex gap-4">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 bg-zinc-800 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm"
        >
          <Phone size={18} /> Call
        </a>
        <a 
          href="#menu"
          className="flex-[2] bg-brand-red py-4 rounded-2xl flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm text-glow"
        >
          <ShoppingBag size={18} /> Order Online
        </a>
      </div>
    </>
  );
};

export const ExitPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('popupShown')) {
        setShow(true);
        localStorage.setItem('popupShown', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white text-black p-12 rounded-[3.5rem] max-w-lg w-full overflow-hidden"
          >
            <button onClick={() => setShow(false)} className="absolute top-6 right-6 p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <X size={24} />
            </button>
            
            <div className="text-center relative z-10">
               <span className="text-brand-red font-black text-6xl block mb-2 leading-none uppercase font-display italic">Wait!</span>
               <h3 className="text-4xl font-display uppercase italic tracking-tighter mb-4">Don't Leave Hungry</h3>
               <p className="text-zinc-600 font-medium mb-8">Get <span className="text-brand-red font-bold">10% OFF</span> your first midnight pizza order. Use code:</p>
               <div className="bg-zinc-100 p-6 rounded-3xl border-2 border-dashed border-zinc-300 font-mono text-3xl font-bold tracking-widest mb-10">
                 FIRST10
               </div>
               <button className="bg-brand-red text-white w-full py-5 rounded-2xl font-bold text-xl uppercase tracking-widest hover:bg-black transition-colors">
                 Order My Pizza
               </button>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Features = () => {
  const items = [
    { icon: Zap, title: "Fast Delivery", text: "Pipes of hot pizza at your door in under 30 mins." },
    { icon: Heart, title: "Fresh Dough", text: "Made daily in-house with premium Australian flour." },
    { icon: DollarSign, title: "Best Value", text: "Huge portions, small prices. Perfect for students." },
    { icon: Shield, title: "Quality Check", text: "Every pizza is inspected for perfection before delivery." },
  ];

  return (
    <section className="py-24 border-y border-white/5">
       <div className="max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                 <div className="inline-flex bg-zinc-900 p-6 rounded-[2rem] mb-6 group-hover:bg-brand-red transition-colors">
                   <item.icon size={40} className="text-brand-yellow" />
                 </div>
                 <h4 className="text-2xl font-display uppercase italic tracking-tighter mb-2">{item.title}</h4>
                 <p className="text-zinc-500 text-sm">{item.text}</p>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};
