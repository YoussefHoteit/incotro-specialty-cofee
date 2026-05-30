"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const MenuPreviewItem = ({ name, price, desc }: { name: string, price: string, desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group mb-10"
  >
    <div className="flex items-baseline justify-between mb-2">
      <h3 className="text-xl font-serif text-coffee-petrol group-hover:text-coffee-gold transition-colors duration-300">
        {name}
      </h3>
      <div className="flex-grow mx-4 border-b border-dotted border-coffee-blue/20 group-hover:border-coffee-gold/40 transition-colors duration-300" />
      <span className="text-lg font-bold text-coffee-gold">{price}</span>
    </div>
    <p className="text-sm text-coffee-soft max-w-[90%] leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

const MenuPreview = () => {
  const { t } = useLanguage();

  const menuItems = [
    { name: "Espresso", price: "12", desc: t.menu.espressoDesc },
    { name: "Flat White", price: "16", desc: t.menu.flatWhiteDesc },
    { name: "Cappuccino", price: "15", desc: t.menu.cappuccinoDesc },
    { name: "V60 Pour Over", price: "18", desc: t.menu.v60Desc },
    { name: "Artisan Cookie", price: "10", desc: t.menu.croissantDesc },
    { name: "Banana Bread", price: "14", desc: t.menu.bananaBreadDesc }
  ];

  return (
    <section id="menu" className="py-24 bg-coffee-cream">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-16">
          <div className="flex flex-col">
            <span className="text-coffee-yellow font-bold text-xs uppercase tracking-[0.3em] mb-2">{t.menuPreview.favorites}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-petrol">{t.menuPreview.crafted}</h2>
          </div>
          <div className="hidden md:block flex-grow h-[1px] bg-coffee-blue/10 mx-12" />
          <span className="hidden md:block text-sm font-medium text-coffee-gold tracking-widest">
            01
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 mb-16">
          {menuItems.map((item, index) => (
            <MenuPreviewItem key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/menu" className="inline-flex items-center space-x-4 group">
            <span className="text-coffee-petrol font-bold text-lg border-b-2 border-coffee-yellow pb-1 group-hover:border-coffee-petrol transition-colors">
              {t.menuPreview.explore}
            </span>
            <div className="w-12 h-12 rounded-full bg-coffee-yellow flex items-center justify-center group-hover:bg-coffee-petrol group-hover:text-coffee-yellow transition-all shadow-sm">
              <span className="text-xl">→</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;