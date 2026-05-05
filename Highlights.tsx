import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Flame, Clock, Truck, MapPin } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO, REVIEWS } from '../constants';
import { cn } from '../lib/utils';
import { useCart } from 'react-use-cart';

export const BestSellers = () => {
  const sellers = MENU_ITEMS.filter(item => item.popular);
  const { addItem } = useCart();

  return (
    <section id="best-sellers" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
             <h2 className="text-5xl md:text-7xl font-display italic uppercase leading-none tracking-tight mb-4 text-white">
               Our <span className="text-brand-red">Best</span> Sellers
             </h2>
             <p className="text-zinc-400 text-lg max-w-lg">
               Tried, tested, and loved by the late-night crowd in Campbelltown.
             </p>
          </div>
          <a href="#menu" className="text-brand-yellow font-bold uppercase tracking-widest border-b-2 border-brand-yellow pb-1 hover:text-white hover:border-white transition-colors">
            View Full Menu
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sellers.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-red px-3 py-1 rounded-full font-bold text-sm text-white">
                  ${item.price}
                </div>
              </div>
              <div className="p-8 text-white">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                  <span className="text-xs font-bold ml-1 text-zinc-500">(150+)</span>
                </div>
                <h3 className="text-2xl font-display uppercase italic mb-2">{item.name}</h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{item.description}</p>
                <button 
                  onClick={() => addItem(item)}
                  className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-brand-red group-hover:text-white transition-all transform active:scale-95"
                >
                  ADD TO ORDER
                  <ShoppingCart size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SpecialOffers = () => {
  return (
    <section id="offers" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-red opacity-10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white text-black p-12 rounded-[3rem] relative overflow-hidden"
            >
              <div className="relative z-10">
                 <span className="bg-brand-red text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-tighter mb-4 inline-block">Flash Deal</span>
                 <h3 className="text-6xl font-display uppercase italic leading-none mb-4">Buy 1 Get 1 <br /><span className="text-brand-red underline">FREE!</span></h3>
                 <p className="text-zinc-600 font-medium text-lg mb-8">Valid on all classic pizzas. Ends in:</p>
                 
                 <div className="flex gap-4 mb-8">
                   {[
                     { label: 'HRS', val: '02' },
                     { label: 'MIN', val: '45' },
                     { label: 'SEC', val: '12' },
                   ].map(t => (
                     <div key={t.label} className="bg-black text-white w-20 h-20 rounded-2xl flex flex-col items-center justify-center">
                       <span className="text-3xl font-mono font-bold leading-none">{t.val}</span>
                       <span className="text-[10px] font-bold opacity-50">{t.label}</span>
                     </div>
                   ))}
                 </div>

                 <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold w-full uppercase tracking-widest text-xl hover:bg-zinc-800 transition-colors">
                   Redeem Now
                 </button>
              </div>
              <Flame className="absolute -bottom-10 -right-10 text-brand-red/10 w-96 h-96 rotate-12" />
            </motion.div>

            <div className="bg-brand-yellow text-black p-12 rounded-[3rem]">
               <h3 className="text-4xl font-display uppercase italic leading-none mb-4">Midnight <br />Delight</h3>
               <p className="text-black/70 font-medium mb-8">Large Pizza + Sides for just $29.90 after 10PM.</p>
               <button className="border-2 border-black/20 w-full py-4 rounded-2xl font-bold uppercase">Unlock Deal</button>
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="text-6xl md:text-8xl font-display italic uppercase leading-[0.85] mb-12">
              Exclusive <br />
              <span className="text-brand-red">Night</span> Deals
            </h2>
            <div className="space-y-6">
              {[
                { icon: Truck, title: "Free Delivery", desc: "For orders over $50 inside Campbelltown." },
                { icon: Clock, title: "15 Min Pickup", desc: "Order online and grab it in minutes." },
                { icon: Flame, title: "Hot Guarantee", desc: "Stone-baked freshness every single time." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-zinc-900 rounded-3xl border border-white/5">
                  <div className="bg-zinc-800 p-4 rounded-2xl h-fit">
                    <item.icon className="text-brand-red" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 uppercase tracking-tighter italic">{item.title}</h4>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
