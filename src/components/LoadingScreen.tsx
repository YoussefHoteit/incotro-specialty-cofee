"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';

const LoadingScreen = () => {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-coffee-cream flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Centered Logo with Tight Circular Crop */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative mb-12"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_0_60px_rgba(242,195,0,0.3)] relative">
                <img 
                  src="/logo.jpeg" 
                  alt="înCotro Logo" 
                  className="w-full h-full object-cover scale-[1.6]"
                />
              </div>
              
              {/* Subtle pulsing ring around the logo */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full border-2 border-coffee-yellow pointer-events-none"
              />
            </motion.div>

            {/* Minimal Progress Indicator */}
            <div className="w-32 h-[1px] bg-coffee-blue/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity
                }}
                className="absolute inset-0 bg-coffee-yellow"
              />
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-coffee-yellow/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-coffee-blue/5 rounded-full blur-[120px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;