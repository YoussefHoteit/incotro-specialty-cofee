"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MenuHero = () => {
  return (
    <section className="relative pt-40 pb-24 bg-coffee-blue overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-coffee-yellow rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-coffee-yellow rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-coffee-yellow font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Selection</span>
          <h1 className="text-5xl md:text-7xl font-bold text-coffee-cream mb-6">Our Menu</h1>
          <p className="text-xl text-coffee-cream/70 max-w-2xl mx-auto leading-relaxed">
            Crafted drinks, sweet moments, and specialty coffee made with care in the heart of Bucharest.
          </p>
        </motion.div>

        {/* Animated Steam Detail */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <motion.div 
              animate={{ 
                y: [-10, -30],
                opacity: [0, 1, 0],
                scale: [0.8, 1.2]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="absolute left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-coffee-yellow/40 to-transparent rounded-full"
            />
            <motion.div 
              animate={{ 
                y: [-10, -30],
                opacity: [0, 1, 0],
                scale: [0.8, 1.2]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 ml-3 w-1 h-6 bg-gradient-to-t from-coffee-yellow/30 to-transparent rounded-full"
            />
            <motion.div 
              animate={{ 
                y: [-10, -30],
                opacity: [0, 1, 0],
                scale: [0.8, 1.2]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              className="absolute left-1/2 -translate-x-1/2 -ml-3 w-1 h-10 bg-gradient-to-t from-coffee-yellow/30 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;