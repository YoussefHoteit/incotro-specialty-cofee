"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SignatureExperience = () => {
  const { t } = useLanguage();

  const images = [
    {
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
      title: t.signature.interior,
      desc: t.signature.interiorDesc
    },
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
      title: t.signature.craft,
      desc: t.signature.craftDesc
    },
    {
      url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
      title: t.signature.vibe,
      desc: t.signature.vibeDesc
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-coffee-blue text-coffee-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.signature.experience}</h2>
            <p className="text-coffee-cream/70 text-lg">
              {t.signature.desc}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 border-2 border-coffee-yellow rounded-full flex items-center justify-center text-coffee-yellow font-bold text-xs uppercase tracking-widest text-center p-4">
              {t.signature.est}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] aspect-[4/5] ${
                index === 2 ? 'col-span-2 md:col-span-1 max-w-[50%] mx-auto md:max-w-none' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg md:text-2xl font-bold text-coffee-yellow mb-1 md:mb-2">{img.title}</h3>
                <p className="text-[10px] md:text-sm text-coffee-cream/80 uppercase tracking-widest">{img.desc}</p>
              </div>
              <div className="absolute top-6 right-6 w-2 h-2 bg-coffee-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;