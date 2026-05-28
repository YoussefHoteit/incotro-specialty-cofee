"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MenuCTA = () => {
  return (
    <section className="py-24 bg-coffee-yellow">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-petrol mb-8">
            Come taste what’s brewing today.
          </h2>
          <p className="text-coffee-petrol/70 text-lg mb-12">
            Our baristas are ready to prepare your next favorite cup. Find us in the heart of Bucharest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-coffee-petrol text-coffee-cream px-10 py-5 rounded-full font-bold text-xl hover:bg-coffee-blue transition-all flex items-center justify-center group">
              <MapPin className="mr-2 group-hover:animate-bounce" size={24} />
              Get Directions
            </button>
            <button className="border-2 border-coffee-petrol text-coffee-petrol px-10 py-5 rounded-full font-bold text-xl hover:bg-coffee-petrol hover:text-coffee-cream transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuCTA;