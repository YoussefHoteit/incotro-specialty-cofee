"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-coffee-blue">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop" 
          alt="înCotro Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-petrol/90 via-coffee-petrol/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/40 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center space-x-4 mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] bg-coffee-yellow" 
            />
            <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">{t.hero.ritual}</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-coffee-cream mb-8 leading-[1.1]">
            {t.hero.title} <br />
            <span className="text-coffee-yellow italic">{t.hero.titleItalic}</span> {t.hero.titleEnd}
          </h1>
          
          <p className="text-lg md:text-xl text-coffee-cream/80 leading-relaxed max-w-xl mb-12 font-light">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link 
              to="/menu" 
              className="bg-coffee-yellow text-coffee-petrol px-8 py-4 rounded-full font-bold text-sm hover:bg-coffee-gold transition-all flex items-center group"
            >
              {t.hero.viewMenu}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="text-coffee-cream/80 hover:text-coffee-cream transition-colors text-sm font-bold tracking-widest uppercase border-b border-coffee-cream/20 pb-1"
            >
              {t.hero.visitUs}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] text-coffee-cream/40 uppercase tracking-[0.3em] mb-4">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-coffee-yellow"
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;