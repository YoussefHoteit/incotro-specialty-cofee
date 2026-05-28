"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  "Coffee",
  "Milk-Based Drinks",
  "Iced Drinks",
  "Tea & Non-Coffee",
  "Sweets"
];

const menuData = [
  { name: "Espresso", category: "Coffee", price: "12 RON", desc: "Double shot of our seasonal single origin." },
  { name: "Double Espresso", category: "Coffee", price: "14 RON", desc: "Two shots of pure energy and flavor." },
  { name: "Americano", category: "Coffee", price: "14 RON", desc: "Espresso with hot water for a smooth finish." },
  { name: "Cappuccino", category: "Milk-Based Drinks", price: "15 RON", desc: "The perfect balance of coffee, milk, and foam." },
  { name: "Flat White", category: "Milk-Based Drinks", price: "16 RON", desc: "Silky micro-foam over a rich double espresso." },
  { name: "Latte", category: "Milk-Based Drinks", price: "17 RON", desc: "Creamy milk with a gentle coffee touch." },
  { name: "Iced Latte", category: "Iced Drinks", price: "18 RON", desc: "Chilled milk and espresso over ice." },
  { name: "Cold Brew", category: "Iced Drinks", price: "17 RON", desc: "12-hour slow-steeped refreshing coffee." },
  { name: "Matcha Latte", category: "Tea & Non-Coffee", price: "19 RON", desc: "Premium ceremonial grade matcha with milk." },
  { name: "Hot Chocolate", category: "Tea & Non-Coffee", price: "16 RON", desc: "Rich, melted dark chocolate with silky milk." },
  { name: "Homemade Cookie", category: "Sweets", price: "10 RON", desc: "Dark chocolate and sea salt artisan cookie." },
  { name: "Daily Cake Slice", category: "Sweets", price: "18 RON", desc: "Freshly baked seasonal cake from our kitchen." }
];

const MenuGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee");

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-coffee-cream">
      <div className="container mx-auto px-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                activeCategory === cat 
                  ? 'bg-coffee-yellow border-coffee-yellow text-coffee-petrol shadow-lg scale-105' 
                  : 'bg-white border-coffee-blue/10 text-coffee-petrol/60 hover:border-coffee-yellow hover:text-coffee-petrol'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-[2rem] border border-coffee-blue/5 shadow-sm hover:shadow-xl hover:border-coffee-yellow/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-coffee-petrol group-hover:text-coffee-gold transition-colors">{item.name}</h3>
                  <span className="text-coffee-gold font-bold bg-coffee-yellow/10 px-3 py-1 rounded-full text-sm">{item.price}</span>
                </div>
                <p className="text-coffee-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                
                {/* Subtle Red Accent */}
                <div className="mt-6 w-8 h-[2px] bg-coffee-red/20 group-hover:bg-coffee-red transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuGrid;