"use client";

import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: "Signature Flat White",
    desc: "Our most loved drink. A double shot of seasonal single origin with perfectly textured micro-foam.",
    image: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Yellow Table Cappuccino",
    desc: "Named after our favorite spot in the café. A classic balance that highlights the chocolatey notes of our beans.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1970&auto=format&fit=crop"
  },
  {
    title: "Slow Morning Cold Brew",
    desc: "Steeped for 12 hours to extract the brightest floral notes without the bitterness. Perfect for Bucharest summers.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1974&auto=format&fit=crop"
  }
];

const SpecialtyHighlight = () => {
  return (
    <section className="py-24 bg-coffee-blue text-coffee-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-yellow font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Favorites</span>
          <h2 className="text-4xl font-bold">Signature Experiences</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-square mb-8">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-petrol/20 group-hover:bg-coffee-petrol/40 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-coffee-yellow mb-4">{item.title}</h3>
              <p className="text-coffee-cream/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyHighlight;