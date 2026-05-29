"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bean, Home, Users } from 'lucide-react';

const features = [
  {
    icon: <Bean size={24} />,
    title: "Craft Coffee",
    description: "Sourced from the world's best micro-lots and roasted to perfection for a clean, vibrant cup.",
    number: "01"
  },
  {
    icon: <Home size={24} />,
    title: "Cozy Space",
    description: "A unique blend of deep blue walls and warm yellow accents designed for focus and comfort.",
    number: "02"
  },
  {
    icon: <Users size={24} />,
    title: "Local Community",
    description: "Where Bucharest's creative souls meet for their daily ritual and meaningful connections.",
    number: "03"
  }
];

const BrandIntro = () => {
  return (
    <section id="about" className="py-32 bg-coffee-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 right-[5%] w-96 h-96 bg-coffee-yellow/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-[5%] w-80 h-80 bg-coffee-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-coffee-gold font-bold text-xs uppercase tracking-[0.4em] mb-6 block">The Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-serif text-coffee-petrol mb-8 leading-[1.1]">
              More than just a cup. <br />
              <span className="text-coffee-gold italic">It's a destination.</span>
            </h2>
            <p className="text-lg md:text-xl text-coffee-charcoal/60 leading-relaxed max-w-2xl">
              At înCotro, we believe every coffee tells a story. Our identity reflects the vibrant energy of Bucharest paired with the calm focus of a master craftsman.
            </p>
          </motion.div>
        </div>

        {/* The Journey Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line - Updated gradient to stay yellow longer */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-coffee-yellow via-coffee-yellow to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-coffee-yellow via-coffee-yellow to-transparent md:hidden" />

          <div className="space-y-24 md:space-y-40">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node (Icon & Number) */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white border border-coffee-blue/10 flex items-center justify-center shadow-sm group-hover:border-coffee-yellow transition-colors duration-500">
                      <div className="text-coffee-petrol">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-coffee-gold tracking-widest uppercase">
                      {feature.number}
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`pl-20 md:pl-0 w-full md:w-[42%] ${
                  index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-coffee-petrol mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-coffee-charcoal/60 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;