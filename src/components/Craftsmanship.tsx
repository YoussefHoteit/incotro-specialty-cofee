"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bean, Droplets, Thermometer, Sparkles } from 'lucide-react';

const steps = [
  { icon: <Bean size={32} />, title: "The Bean", desc: "Sourced from ethical micro-lots." },
  { icon: <Droplets size={32} />, title: "Extraction", desc: "Precision timing for every shot." },
  { icon: <Thermometer size={32} />, title: "Texture", desc: "Silky milk at the perfect temp." },
  { icon: <Sparkles size={32} />, title: "Art", desc: "Finished with a touch of soul." }
];

const Craftsmanship = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-coffee-petrol mb-6">The Art of the Pour</h2>
          <p className="text-lg text-coffee-charcoal/60">
            Every drink at înCotro is a result of meticulous attention to detail. We don't just make coffee; we craft an experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-coffee-cream rounded-3xl flex items-center justify-center text-coffee-blue mb-6 group-hover:bg-coffee-yellow group-hover:text-coffee-petrol transition-all duration-300">
                {step.icon}
              </div>
              <h4 className="font-bold text-coffee-petrol mb-2">{step.title}</h4>
              <p className="text-sm text-coffee-charcoal/50">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;