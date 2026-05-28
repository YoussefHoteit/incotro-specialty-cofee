"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-coffee-yellow">
      <div className="container mx-auto px-6">
        <div className="bg-coffee-petrol rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
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
              Stop by for your next <br />
              <span className="text-coffee-yellow">favorite cup.</span>
            </h2>
            <p className="text-coffee-cream/70 text-lg mb-12 max-w-xl mx-auto">
              We're waiting for you in the heart of Bucharest with fresh beans and warm smiles.
            </p>
            <button className="bg-coffee-yellow text-coffee-petrol px-10 py-5 rounded-full font-bold text-xl hover:bg-coffee-gold transition-all flex items-center justify-center mx-auto group">
              <MapPin className="mr-2 group-hover:animate-bounce" size={24} />
              Find Us in Bucharest
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;