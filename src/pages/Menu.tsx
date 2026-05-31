"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bean, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  <section className="mb-24 relative z-10">
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
  const { t } = useLanguage();

  const menuData = [
    {
      title: t.menu.espressoBar,
      number: "01",
      items: [
        { name: "Espresso", price: "10 RON", description: t.menu.espressoDesc },
        { name: "Long Black", price: "12 RON", description: t.menu.longBlackDesc },
        { name: "Cortado", price: "13 RON", description: t.menu.cortadoDesc },
        { name: "Flat White", price: "15 RON", description: t.menu.flatWhiteDesc },
        { name: "Cappuccino", price: "15 RON", description: t.menu.cappuccinoDesc },
        { name: "Latte", price: "17 RON", description: t.menu.latteDesc },
      ]
    },
    {
      title: t.menu.filterCoffee,
      number: "02",
      items: [
        { name: "V60 Pour Over", price: "18 RON", description: t.menu.v60Desc },
        { name: "Batch Brew", price: "12 RON", description: t.menu.batchDesc },
        { name: "Cold Brew", price: "16 RON", description: t.menu.coldBrewDesc },
      ]
    },
    {
      title: t.menu.nonCoffee,
      number: "03",
      items: [
        { name: "Hot Chocolate", price: "16 RON", description: t.menu.hotChocDesc },
        { name: "Matcha Latte", price: "18 RON", description: t.menu.matchaDesc },
        { name: "Loose Leaf Tea", price: "14 RON", description: t.menu.teaDesc },
        { name: "Fresh Lemonade", price: "15 RON", description: t.menu.lemonadeDesc },
      ]
    },
    {
      title: t.menu.pastries,
      number: "04",
      items: [
        { name: "Butter Croissant", price: "9 RON", description: t.menu.croissantDesc },
        { name: "Pain au Chocolat", price: "11 RON", description: t.menu.painChocDesc },
        { name: "Banana Bread", price: "14 RON", description: t.menu.bananaBreadDesc },
        { name: "Avocado Toast", price: "28 RON", description: t.menu.avocadoDesc },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol relative overflow-hidden">
      <Navbar />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[5%] text-coffee-yellow/10"
        >
          <Bean size={180} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[5%] text-coffee-blue/5"
        >
          <Coffee size={220} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[30%] left-[10%] text-coffee-yellow/5"
        >
          <Bean size={140} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 right-[10%] text-coffee-blue/5"
        >
          <Coffee size={200} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="pt-40 pb-24 container mx-auto px-6 max-w-5xl relative z-10">
        <header className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <span className="text-coffee-gold font-bold text-xs tracking-[0.3em] uppercase">00</span>
            <div className="w-12 h-[1px] bg-coffee-yellow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-coffee-petrol mb-6">{t.menu.title}</h1>
          <p className="text-lg md:text-xl text-coffee-soft max-w-2xl leading-relaxed">
            {t.menu.desc}
          </p>
        </header>

        {menuData.map((category, index) => (
          <MenuCategory key={index} {...category} />
        ))}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 rounded-[2rem] bg-coffee-blue/5 border border-coffee-blue/10 text-center"
        >
          <p className="text-coffee-petrol/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t.menu.allergy}
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default Menu;