"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageUrl = "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop";

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-coffee-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {isLoaded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-coffee-petrol/60" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Bottom Fade Transition - Always visible to blend with the page */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-coffee-cream via-coffee-cream/40 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-[2px] w-12 bg-coffee-yellow" />
              <span className="text-coffee-yellow font-bold tracking-widest uppercase text-sm">Bucharest's Finest</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-coffee-cream leading-tight mb-6">
              Specialty coffee with a <span className="text-coffee-yellow">bright</span> Bucharest soul.
            </h1>
            
            <p className="text-xl text-coffee-cream/80 mb-10 max-w-xl leading-relaxed">
              A colorful corner for crafted coffee, warm conversations, and everyday rituals in the heart of the city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/menu" 
                className="bg-coffee-yellow/90 border border-white/20 text-coffee-petrol px-6 py-3 rounded-full font-bold text-base hover:bg-coffee-yellow transition-all flex items-center justify-center group"
              >
                View Menu
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 border border-white/30 text-coffee-cream px-6 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-all text-center"
              >
                Visit Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Detail */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block z-20"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-coffee-yellow/20 rounded-full blur-xl animate-pulse" />
          <Coffee className="text-coffee-yellow relative" size={64} strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-coffee-cream/50 z-20">
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-coffee-yellow to-transparent" />
      </div>
    </section>
  );
};

export default Hero;