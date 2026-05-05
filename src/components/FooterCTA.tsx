import React from 'react';
import { Pizza, Instagram, Facebook, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <Pizza className="text-white w-6 h-6" />
              </div>
              <span className="font-display text-3xl tracking-tighter uppercase italic">
                Pizza<span className="text-brand-red">2</span>night
              </span>
            </a>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
              Campbelltown's favorite late-night pizza spot. Fresh ingredients, stone-baked crust, and fast delivery to your door.
            </p>
            <div className="flex gap-4">
               <a href={`https://instagram.com/${BUSINESS_INFO.instagram}`} target="_blank" className="p-3 bg-zinc-900 rounded-xl hover:bg-brand-red transition-colors">
                 <Instagram size={20} />
               </a>
               <a href={`https://facebook.com/${BUSINESS_INFO.facebook}`} target="_blank" className="p-3 bg-zinc-900 rounded-xl hover:bg-brand-red transition-colors">
                 <Facebook size={20} />
               </a>
            </div>
          </div>

          <div>
             <h4 className="font-display text-xl uppercase italic tracking-tighter mb-8">Quick Links</h4>
             <ul className="space-y-4 text-zinc-500 font-medium">
               <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
               <li><a href="#menu" className="hover:text-brand-red transition-colors">Full Menu</a></li>
               <li><a href="#best-sellers" className="hover:text-brand-red transition-colors">Best Sellers</a></li>
               <li><a href="#offers" className="hover:text-brand-red transition-colors">Offers</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-display text-xl uppercase italic tracking-tighter mb-8">Opening Hours</h4>
             <ul className="space-y-4 text-zinc-500 font-medium">
               <li className="flex justify-between"><span>Mon - Thu:</span> <span className="text-white">4PM - 12AM</span></li>
               <li className="flex justify-between"><span>Fri - Sat:</span> <span className="text-white">4PM - 2AM</span></li>
               <li className="flex justify-between"><span>Sunday:</span> <span className="text-white">4PM - 10PM</span></li>
               <li className="text-brand-yellow font-bold pt-4 italic">Open All Holidays!</li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-zinc-600 text-sm font-mono tracking-tight">
             © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
           </p>
           <div className="flex gap-6 text-zinc-600 text-xs font-bold uppercase tracking-widest">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export const ContactCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
         <div className="bg-brand-red rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
            <div className="relative z-10">
               <h2 className="text-6xl md:text-9xl font-display uppercase italic leading-none mb-12 tracking-tighter text-glow group-hover:scale-105 transition-transform duration-500">
                 Order Your <br />Pizza Now
               </h2>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a 
                   href={`tel:${BUSINESS_INFO.phone}`}
                   className="bg-black text-white px-12 py-6 rounded-2xl text-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-900 transition-colors"
                 >
                   <Phone size={32} />
                   {BUSINESS_INFO.phoneDisplay}
                 </a>
                 <a 
                   href="#menu"
                   className="bg-white text-black px-12 py-6 rounded-2xl text-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-100 transition-colors"
                 >
                   VIEW MENU
                 </a>
               </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 blur-[100px] rounded-full" />
         </div>
      </div>
    </section>
  );
};
