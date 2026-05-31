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
          className="fixed inset-0 z-[9999] bg-coffee-cream flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Area */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-coffee-yellow shadow-xl">
                <img 
                  src="/logo.jpeg" 
                  alt="înCotro Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-3xl font-bold tracking-tighter text-coffee-petrol">înCotro</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-coffee-gold mt-1">Specialty Coffee</span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 h-[2px] bg-coffee-blue/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute inset-0 bg-coffee-yellow"
              />
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-coffee-yellow/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-coffee-blue/10 rounded-full blur-[100px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;