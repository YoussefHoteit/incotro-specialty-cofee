"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import MenuHero from '@/components/MenuHero';
import MenuGrid from '@/components/MenuGrid';
import SpecialtyHighlight from '@/components/SpecialtyHighlight';
import Craftsmanship from '@/components/Craftsmanship';
import MenuCTA from '@/components/MenuCTA';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Menu = () => {
  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />
      <MenuHero />
      <MenuGrid />
      <SpecialtyHighlight />
      <Craftsmanship />
      <MenuCTA />
      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default Menu;