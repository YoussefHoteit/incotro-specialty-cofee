"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const communityImages = [
  "/gallery/community-outdoor.jpg",
  "/gallery/street-vibe.jpg",
  "/gallery/dog-coffee.jpg",
  "/gallery/child-dog.jpg",
  "/gallery/writing-window.jpg",
  "/gallery/child-coffee.jpg",
  "/gallery/coffee-outdoor.jpg",
  "/gallery/entrance-view.jpg"
];

const Community = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-coffee-petrol mb-6">{t.community.title}</h2>
            <p className="text-lg text-coffee-charcoal/70 leading-relaxed mb-8">
              {t.community.desc}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-coffee-soft overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-coffee-petrol/60">{t.community.joined}</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-coffee-yellow/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coffee-blue/10 rounded-full blur-2xl" />
            <img 
              src="/gallery/community-outdoor.jpg" 
              alt="Community at înCotro" 
              className="rounded-[3rem] relative z-10 shadow-2xl w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex space-x-4 overflow-hidden py-4">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex space-x-4 whitespace-nowrap"
        >
          {communityImages.map((src, i) => (
            <img 
              key={i}
              src={src}
              className="w-64 h-48 object-cover rounded-2xl shadow-sm"
              alt={`Gallery moment ${i}`}
            />
          ))}
          {communityImages.map((src, i) => (
            <img 
              key={`dup-${i}`}
              src={src}
              className="w-64 h-48 object-cover rounded-2xl shadow-sm"
              alt={`Gallery moment ${i} duplicate`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Community;