"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-coffee-petrol mb-6">A Place for Bucharest's Soul</h2>
            <p className="text-lg text-coffee-charcoal/70 leading-relaxed mb-8">
              înCotro isn't just about the coffee—it's about the people. Whether you're here to finish your next big project, catch up with an old friend, or simply enjoy a moment of solitude with a book, you're part of our community.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-coffee-soft overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-coffee-petrol/60">Joined by 500+ locals</span>
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
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" 
              alt="Community" 
              className="rounded-[3rem] relative z-10 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scrolling Image Strip */}
      <div className="flex space-x-4 overflow-hidden py-4">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex space-x-4 whitespace-nowrap"
        >
          {[1,2,3,4,5,6].map(i => (
            <img 
              key={i}
              src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?q=80&w=400&auto=format&fit=crop`}
              className="w-64 h-48 object-cover rounded-2xl"
              alt="Gallery"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {[1,2,3,4,5,6].map(i => (
            <img 
              key={`dup-${i}`}
              src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?q=80&w=400&auto=format&fit=crop`}
              className="w-64 h-48 object-cover rounded-2xl"
              alt="Gallery"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Community;