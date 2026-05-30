"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-coffee-yellow">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-coffee-petrol rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-10 w-40 h-40 border-2 border-coffee-yellow rounded-full" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 right-10 w-60 h-60 border-2 border-coffee-yellow rounded-full" 
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-coffee-cream mb-8">
              {t.finalCTA.title} <br />
              <span className="text-coffee-yellow">{t.finalCTA.titleYellow}</span>
            </h2>
            <p className="text-coffee-cream/70 text-lg mb-12 max-w-xl mx-auto">
              {t.finalCTA.desc}
            </p>
            <button className="bg-coffee-yellow text-coffee-petrol px-10 py-5 rounded-full font-bold text-xl hover:bg-coffee-gold transition-all flex items-center justify-center mx-auto group">
              <MapPin className="mr-2 group-hover:animate-bounce" size={24} />
              {t.finalCTA.button}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;