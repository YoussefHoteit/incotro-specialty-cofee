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
        <div className="bg-coffee-petrol rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-coffee-yellow rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-coffee-yellow rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;