"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bean, Home, Users, Sparkles } from 'lucide-react';

const BrandIntro = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-coffee-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-coffee-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-coffee-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section: Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="text-coffee-yellow" size={20} />
                <span className="text-coffee-gold font-bold tracking-[0.2em] uppercase text-xs">The înCotro Philosophy</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif text-coffee-petrol leading-tight mb-8">
                More than just a cup. <br />
                <span className="text-coffee-gold italic">It's a destination.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-coffee-charcoal/70 leading-relaxed mb-10">
                At înCotro, we believe every coffee tells a story. Our unique yellow-and-blue identity reflects the vibrant energy of Bucharest paired with the calm focus of a master craftsman. We've created a sanctuary where quality meets comfort.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-serif text-coffee-petrol mb-2">100%</h4>
                  <p className="text-sm text-coffee-charcoal/50 uppercase tracking-widest">Specialty Grade</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-coffee-petrol mb-2">2023</h4>
                  <p className="text-sm text-coffee-charcoal/50 uppercase tracking-widest">Est. Bucharest</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]"
              >
                <img 
                  src="/gallery/entrance-view.jpg" 
                  alt="înCotro Entrance" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Secondary Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-12 -left-12 w-1/2 hidden md:block z-20 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-coffee-cream aspect-square"
              >
                <img 
                  src="/gallery/interior-art.jpg" 
                  alt="Interior Detail" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative Yellow Box */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-coffee-yellow rounded-[2rem] -z-10 hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Bean size={32} />,
              title: "Craft Coffee",
              desc: "Sourced from the world's best micro-lots and roasted to perfection for a clean, vibrant taste."
            },
            {
              icon: <Home size={32} />,
              title: "Cozy Space",
              desc: "A unique blend of deep blue walls and warm yellow accents designed for focus and relaxation."
            },
            {
              icon: <Users size={32} />,
              title: "Local Community",
              desc: "Where Bucharest's creative souls meet for their daily ritual, sharing ideas over every pour."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-coffee-blue/5 group"
            >
              <div className="mb-8 p-4 bg-coffee-blue/5 rounded-2xl w-fit text-coffee-petrol group-hover:bg-coffee-yellow transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-coffee-petrol mb-4">{feature.title}</h3>
              <p className="text-coffee-charcoal/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;