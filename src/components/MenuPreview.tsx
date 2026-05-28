"use client";

import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { name: "Espresso", price: "12 RON", desc: "Double shot of our seasonal single origin." },
  { name: "Flat White", price: "16 RON", desc: "Silky micro-foam over a rich double espresso." },
  { name: "Cappuccino", price: "15 RON", desc: "The perfect balance of coffee, milk, and foam." },
  { name: "Artisan Cookie", price: "10 RON", desc: "Handcrafted daily with dark chocolate and sea salt." }
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-24 bg-coffee-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-red font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Favorites</span>
          <h2 className="text-4xl font-bold text-coffee-petrol">Crafted with Precision</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-coffee-blue/5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-coffee-petrol">{item.name}</h3>
                <span className="text-coffee-gold font-bold">{item.price}</span>
              </div>
              <p className="text-coffee-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-4 group">
            <span className="text-coffee-petrol font-bold text-lg border-b-2 border-coffee-yellow pb-1 group-hover:border-coffee-petrol transition-colors">
              Explore Full Menu
            </span>
            <div className="w-10 h-10 rounded-full bg-coffee-yellow flex items-center justify-center group-hover:bg-coffee-petrol group-hover:text-coffee-yellow transition-all">
              →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;