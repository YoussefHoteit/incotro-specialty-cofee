"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t, language } = useLanguage();

  const menuData = [
    {
      title: t('menuPage.categories.espresso'),
      number: "01",
      items: [
        { name: "Espresso", price: "10 RON", description: language === 'en' ? "Double shot of our seasonal single origin." : "Shot dublu din originea noastră sezonieră." },
        { name: "Long Black", price: "12 RON", description: language === 'en' ? "Espresso over hot water." : "Espresso peste apă fierbinte." },
        { name: "Cortado", price: "13 RON", description: language === 'en' ? "Equal parts espresso and steamed milk." : "Părți egale de espresso și lapte cremos." },
        { name: "Flat White", price: "15 RON", description: language === 'en' ? "Double shot with silky micro-foam." : "Shot dublu cu micro-spumă fină." },
        { name: "Cappuccino", price: "15 RON", description: language === 'en' ? "Classic balance of espresso, milk, and foam." : "Echilibru clasic între espresso, lapte și spumă." },
        { name: "Latte", price: "17 RON", description: language === 'en' ? "Double shot with plenty of steamed milk." : "Shot dublu cu mult lapte cremos." },
      ]
    },
    {
      title: t('menuPage.categories.filter'),
      number: "02",
      items: [
        { name: "V60 Pour Over", price: "18 RON", description: language === 'en' ? "Hand-brewed seasonal selection." : "Selecție sezonieră preparată manual." },
        { name: "Batch Brew", price: "12 RON", description: language === 'en' ? "Quick, clean, and consistently delicious." : "Rapid, curat și constant delicios." },
        { name: "Cold Brew", price: "16 RON", description: language === 'en' ? "Steeped for 18 hours for a smooth finish." : "Infuzat timp de 18 ore pentru un gust fin." },
      ]
    },
    {
      title: t('menuPage.categories.nonCoffee'),
      number: "03",
      items: [
        { name: "Hot Chocolate", price: "16 RON", description: language === 'en' ? "Single-origin 70% dark chocolate." : "Ciocolată neagră 70% de origine unică." },
        { name: "Matcha Latte", price: "18 RON", description: language === 'en' ? "Ceremonial grade Japanese matcha." : "Matcha japoneză de grad ceremonial." },
        { name: "Loose Leaf Tea", price: "14 RON", description: language === 'en' ? "Selection of black, green, and herbal teas." : "Selecție de ceaiuri negre, verzi și de plante." },
        { name: "Fresh Lemonade", price: "15 RON", description: language === 'en' ? "With seasonal fruit infusions." : "Cu infuzii de fructe sezoniere." },
      ]
    },
    {
      title: t('menuPage.categories.pastries'),
      number: "04",
      items: [
        { name: "Butter Croissant", price: "9 RON", description: language === 'en' ? "Flaky, buttery, and freshly baked." : "Fraged, cu unt și proaspăt copt." },
        { name: "Pain au Chocolat", price: "11 RON", description: language === 'en' ? "Classic French pastry with dark chocolate." : "Patiserie franceză clasică cu ciocolată neagră." },
        { name: "Banana Bread", price: "14 RON", description: language === 'en' ? "Toasted with espresso butter." : "Prăjit cu unt de espresso." },
        { name: "Avocado Toast", price: "28 RON", description: language === 'en' ? "Sourdough, chili flakes, and lime." : "Maia, fulgi de chili și lime." },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />
      
      <div className="pt-40 pb-24 container mx-auto px-6 max-w-5xl">
        <header className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <span className="text-coffee-gold font-bold text-xs tracking-[0.3em] uppercase">00</span>
            <div className="w-12 h-[1px] bg-coffee-yellow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-coffee-petrol mb-6">{t('menuPage.title')}</h1>
          <p className="text-lg md:text-xl text-coffee-soft max-w-2xl leading-relaxed">
            {t('menuPage.description')}
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
            {t('menuPage.allergy')}
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default Menu;