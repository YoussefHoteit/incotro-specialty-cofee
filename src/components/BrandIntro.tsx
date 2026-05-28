"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bean, Home, Users } from 'lucide-react';

const features = [
  {
    icon: <Bean className="text-coffee-yellow" size={32} />,
    title: "Craft Coffee",
    description: "Sourced from the world's best micro-lots and roasted to perfection."
  },
  {
    icon: <Home className="text-coffee-yellow" size={32} />,
    title: "Cozy Space",
    description: "A unique blend of deep blue walls and warm yellow accents."
  },
  {
    icon: <Users className="text-coffee-yellow" size={32} />,
    title: "Local Community",
    description: "Where Bucharest's creative souls meet for their daily ritual."
  }
];

const BrandIntro = () => {
  return (
    <section id="about" className="py-24 bg-coffee-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-coffee-petrol mb-8"
          >
            More than just a cup. <br />
            <span className="text-coffee-gold italic">It's a destination.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-coffee-charcoal/70 leading-relaxed"
          >
            At înCotro, we believe every coffee tells a story. Our unique yellow-and-blue identity reflects the vibrant energy of Bucharest paired with the calm focus of a master craftsman. We've created a sanctuary where quality meets comfort.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-coffee-blue/5 group"
            >
              <div className="mb-6 p-4 bg-coffee-blue/5 rounded-2xl w-fit group-hover:bg-coffee-blue transition-colors duration-300">
                <div className="group-hover:text-coffee-yellow transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-coffee-petrol mb-4">{feature.title}</h3>
              <p className="text-coffee-charcoal/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;