"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bean, Home, Users } from 'lucide-react';

const features = [
  {
    icon: <Bean size={32} />,
    title: "Craft Coffee",
    description: "Sourced from the world's best micro-lots and roasted to perfection for a clean, vibrant cup.",
    color: "bg-coffee-yellow",
    textColor: "text-coffee-petrol"
  },
  {
    icon: <Home size={32} />,
    title: "Cozy Space",
    description: "A unique blend of deep blue walls and warm yellow accents designed for focus and comfort.",
    color: "bg-coffee-blue",
    textColor: "text-coffee-cream"
  },
  {
    icon: <Users size={32} />,
    title: "Local Community",
    description: "Where Bucharest's creative souls meet for their daily ritual and meaningful connections.",
    color: "bg-white",
    textColor: "text-coffee-petrol"
  }
];

const BrandIntro = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-coffee-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-coffee-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-coffee-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-coffee-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-coffee-petrol mb-8 leading-tight">
              More than just a cup. <br />
              <span className="text-coffee-gold italic">It's a destination.</span>
            </h2>
            <p className="text-lg md:text-xl text-coffee-charcoal/60 leading-relaxed max-w-2xl">
              At înCotro, we believe every coffee tells a story. Our identity reflects the vibrant energy of Bucharest paired with the calm focus of a master craftsman.
            </p>
          </motion.div>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-12 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className={`
                snap-center shrink-0 w-[85%] md:w-full
                ${index === 1 ? 'md:mt-16' : ''} 
                ${feature.color} ${feature.textColor}
                p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl shadow-coffee-petrol/5 flex flex-col h-full
                border border-coffee-blue/5 relative group overflow-hidden
              `}
            >
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              
              <div className={`
                mb-6 md:mb-8 p-4 md:p-5 rounded-2xl w-fit 
                ${index === 1 ? 'bg-coffee-yellow text-coffee-petrol' : 'bg-coffee-blue/5 text-coffee-petrol'}
                group-hover:scale-110 transition-transform duration-500
              `}>
                {feature.icon}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-70 leading-relaxed text-base md:text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Detail */}
              <div className={`
                absolute -bottom-4 -right-4 w-20 md:w-24 h-20 md:h-24 rounded-full opacity-10
                ${index === 1 ? 'bg-white' : 'bg-coffee-yellow'}
              `} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;