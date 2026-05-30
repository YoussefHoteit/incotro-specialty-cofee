"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
}

const MenuItem = ({ name, price, description }: MenuItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group mb-8"
  >
    <div className="flex items-baseline justify-between mb-1">
      <h3 className="text-xl font-serif text-coffee-petrol group-hover:text-coffee-gold transition-colors duration-300">
        {name}
      </h3>
      <div className="flex-grow mx-4 border-b border-dotted border-coffee-blue/20 group-hover:border-coffee-gold/40 transition-colors duration-300" />
      <span className="text-lg font-medium text-coffee-gold">{price}</span>
    </div>
    <p className="text-sm text-coffee-soft max-w-[85%] leading-relaxed">
      {description}
    </p>
  </motion.div>
);

interface MenuCategoryProps {
  title: string;
  number: string;
  items: MenuItemProps[];
}

const MenuCategory = ({ title, number, items }: MenuCategoryProps) => (
  <section className="mb-24">
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-3xl md:text-4xl font-serif text-coffee-petrol pr-8 whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-grow h-[1px] bg-coffee-blue/10" />
      <span className="text-sm font-medium text-coffee-gold pl-8 tracking-widest">
        {number}
      </span>
    </div>
    <div className="grid md:grid-cols-2 gap-x-16">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </section>
);

const Menu = () => {
  const menuData = [
    {
      title: "Espresso Bar",
      number: "01",
      items: [
        { name: "Espresso", price: "10 RON", description: "Double shot of our seasonal single origin." },
        { name: "Long Black", price: "12 RON", description: "Espresso over hot water." },
        { name: "Cortado", price: "13 RON", description: "Equal parts espresso and steamed milk." },
        { name: "Flat White", price: "15 RON", description: "Double shot with silky micro-foam." },
        { name: "Cappuccino", price: "15 RON", description: "Classic balance of espresso, milk, and foam." },
        { name: "Latte", price: "17 RON", description: "Double shot with plenty of steamed milk." },
      ]
    },
    {
      title: "Filter Coffee",
      number: "02",
      items: [
        { name: "V60 Pour Over", price: "18 RON", description: "Hand-brewed seasonal selection." },
        { name: "Batch Brew", price: "12 RON", description: "Quick, clean, and consistently delicious." },
        { name: "Cold Brew", price: "16 RON", description: "Steeped for 18 hours for a smooth finish." },
      ]
    },
    {
      title: "Non-Coffee & Seasonal",
      number: "03",
      items: [
        { name: "Hot Chocolate", price: "16 RON", description: "Single-origin 70% dark chocolate." },
        { name: "Matcha Latte", price: "18 RON", description: "Ceremonial grade Japanese matcha." },
        { name: "Loose Leaf Tea", price: "14 RON", description: "Selection of black, green, and herbal teas." },
        { name: "Fresh Lemonade", price: "15 RON", description: "With seasonal fruit infusions." },
      ]
    },
    {
      title: "Pastries & Bites",
      number: "04",
      items: [
        { name: "Butter Croissant", price: "9 RON", description: "Flaky, buttery, and freshly baked." },
        { name: "Pain au Chocolat", price: "11 RON", description: "Classic French pastry with dark chocolate." },
        { name: "Banana Bread", price: "14 RON", description: "Toasted with espresso butter." },
        { name: "Avocado Toast", price: "28 RON", description: "Sourdough, chili flakes, and lime." },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />
      
      <div className="pt-40 pb-24 container mx-auto px-6 max-w-5xl">
        {/* Hero / Intro */}
        <header className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <span className="text-coffee-gold font-bold text-xs tracking-[0.3em] uppercase">00</span>
            <div className="w-12 h-[1px] bg-coffee-yellow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-coffee-petrol mb-6">Menu</h1>
          <p className="text-lg md:text-xl text-coffee-soft max-w-2xl leading-relaxed">
            Crafted coffee, seasonal drinks, and small bites served with care. 
            Each cup tells a story of origin and craftsmanship.
          </p>
        </header>

        {/* Menu Categories */}
        {menuData.map((category, index) => (
          <MenuCategory key={index} {...category} />
        ))}

        {/* Allergy Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 rounded-[2rem] bg-coffee-blue/5 border border-coffee-blue/10 text-center"
        >
          <p className="text-coffee-petrol/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Please inform our staff of any allergies or dietary requirements. 
            Oat and almond milk alternatives are available for all milk-based drinks.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default Menu;