/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar, Hero } from './components/Navigation';
import { BestSellers, SpecialOffers } from './components/Highlights';
import { FullMenu, LocationSection } from './components/MenuLocation';
import { StickyActions, ExitPopup, Features } from './components/Conversion';
import { Testimonials } from './components/Testimonials';
import { Footer, ContactCTA } from './components/FooterCTA';
import { CartProvider } from 'react-use-cart';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          <Features />
          <BestSellers />
          <SpecialOffers />
          <FullMenu />
          <Testimonials />
          <ContactCTA />
          <LocationSection />
        </main>

        <Footer />

        {/* Floating Elements */}
        <StickyActions />
        <ExitPopup />
        
        {/* Dynamic Cursor or noise overlay optional, keeping it simple for now */}
        <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.03] z-[999]" />
      </div>
    </CartProvider>
  );
}
