import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display italic uppercase tracking-tighter mb-4">
            Loved by <span className="text-brand-red text-glow">Campbelltown</span>
          </h2>
          <p className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here is what 1000+ happy night owls have to say about our pizzas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-brand-red/30 transition-colors"
            >
              <Quote className="absolute top-6 right-8 text-white/5 w-12 h-12 group-hover:text-brand-red/10 transition-colors" />
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              <p className="text-white text-lg font-medium italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-brand-red">
                  {review.name.charAt(0)}
                </div>
                <span className="font-display uppercase italic tracking-widest text-sm">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
