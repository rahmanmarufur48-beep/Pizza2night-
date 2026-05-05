import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Filter, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, BUSINESS_INFO } from '../constants';
import { useCart } from 'react-use-cart';

export const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem } = useCart();

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(i => i.category === activeCategory);

  return (
    <section id="menu" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-6xl md:text-8xl font-display italic uppercase mb-8">Our Full Menu</h2>
           
           <div className="flex flex-wrap justify-center gap-3">
             {MENU_CATEGORIES.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-8 py-3 rounded-full font-bold uppercase transition-all ${
                   activeCategory === cat 
                   ? "bg-brand-red text-white scale-105" 
                   : "bg-zinc-900 text-zinc-500 hover:text-white"
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="bg-zinc-900/50 p-4 rounded-[2.5rem] flex gap-4 items-center group hover:bg-zinc-900 transition-colors border border-white/5"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                   <h4 className="font-bold text-lg leading-tight mb-1 uppercase italic tracking-tighter truncate">{item.name}</h4>
                   <p className="text-zinc-500 text-xs line-clamp-1 mb-2">{item.description}</p>
                   <div className="flex items-center justify-between">
                     <span className="font-display text-brand-yellow font-bold text-xl">${item.price.toFixed(2)}</span>
                     <button 
                       onClick={() => addItem(item)}
                       className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                     >
                       <Plus size={20} className="text-white" />
                     </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
           <button className="bg-transparent border-2 border-white/10 px-12 py-5 rounded-2xl font-bold uppercase tracking-widest hover:border-brand-red transition-all">
             View Printable PDF Menu
           </button>
        </div>
      </div>
    </section>
  );
};

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl font-display italic uppercase mb-8">Where to <br /><span className="text-brand-red">Find</span> Us</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-brand-red/20 p-3 rounded-2xl h-fit">
                  <MapPin className="text-brand-red" />
                </div>
                <div>
                   <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-500 mb-1">Our Store</h4>
                   <p className="text-xl font-bold">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-red/20 p-3 rounded-2xl h-fit">
                  <Phone className="text-brand-red" />
                </div>
                <div>
                   <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-500 mb-1">Call Us</h4>
                   <p className="text-xl font-bold group">
                     <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-red transition-colors">
                       {BUSINESS_INFO.phoneDisplay}
                     </a>
                   </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-red/20 p-3 rounded-2xl h-fit">
                  <Mail className="text-brand-red" />
                </div>
                <div>
                   <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-500 mb-1">Email Details</h4>
                   <p className="text-xl font-bold">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="pt-8 flex gap-6">
                 <a href="#" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center hover:bg-brand-red transition-all">
                   <Instagram size={24} />
                 </a>
                 <a href="#" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center hover:bg-brand-red transition-all">
                   <Facebook size={24} />
                 </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-[3rem] overflow-hidden grayscale invert border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.728954705191!2d150.8123282!3d-34.050302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f12959880001%3A0x6fb87c800c6d7a4b!2zMi81MCBRdWVlbiBTdCwgQ2FtcGJlbGx0b3duIE5TVyAyNTYwLCBBdXN0cmFsaWE!5e0!3m2!1sen!2sus!4v1714838400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
