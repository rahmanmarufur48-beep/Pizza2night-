import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pizza, Phone, Menu, X, ShoppingBag, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { cn } from '../lib/utils';
import { useCart } from 'react-use-cart';
import { CartSidebar } from './Cart';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalUniqueItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Best Sellers', href: '#best-sellers' },
    { name: 'Menu', href: '#menu' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Offers', href: '#offers' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-brand-red/20 py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Pizza className="text-white w-6 h-6" />
          </div>
          <span className="font-display text-2xl tracking-tighter uppercase italic text-white">
            Pizza<span className="text-brand-red">2</span>night
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-white hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white hover:text-brand-red transition-colors"
          >
            <ShoppingBag size={24} />
            {totalUniqueItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {totalUniqueItems}
              </span>
            )}
          </button>

          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 bg-brand-red px-5 py-2 rounded-full text-sm font-bold text-white animate-pulse"
          >
            <Phone size={16} />
            ORDER NOW
          </a>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white"
          >
            <ShoppingBag size={24} />
            {totalUniqueItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalUniqueItems}
              </span>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(true)} className="text-white">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="font-display text-3xl italic">MENU</span>
               <button onClick={() => setIsMenuOpen(false)} className="p-2 border border-white/20 rounded-full">
                 <X size={28} />
               </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display uppercase italic hover:text-brand-red transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-3 bg-brand-red w-full py-5 rounded-2xl text-xl font-bold text-white shadow-lg shadow-brand-red/20"
              >
                <Phone size={24} />
                CALL NOW
              </a>
              <p className="text-center text-zinc-500 font-mono text-[10px] tracking-tighter uppercase">
                {BUSINESS_INFO.address}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-20">
      {/* Background with Video-like feel using motion and images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Hot Pizza"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-brand-red uppercase">Open Late Tonight</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-tighter italic uppercase mb-8"
          >
            Hot & Fresh <br />
            <span className="text-brand-red text-glow">Pizza</span> <br />
            Delivered.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 font-medium mb-10"
          >
            Late Night? We've Got You Covered 🍕🔥 <br />
            Best Pizza in Campbelltown.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a 
              href="#menu"
              className="group bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1"
            >
              ORDER NOW
              <ShoppingBag size={24} />
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-zinc-900 border-2 border-white/10 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
            >
              CALL {BUSINESS_INFO.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div className="text-sm font-mono tracking-tight">
              <span className="block text-brand-yellow font-bold">1000+ Happy Customers</span>
              <span className="text-zinc-400">Join the pizza revolution</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
