"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown, Bean, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center bg-coffee-cream">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] text-coffee-yellow/20"
        >
          <Bean size={180} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[10%] text-coffee-blue/5"
        >
          <Coffee size={220} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
          className="max-w-5xl"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-[1px] bg-coffee-yellow" 
            />
            <span className="text-coffee-gold font-bold tracking-[0.4em] uppercase text-xs">{t.hero.ritual}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-coffee-petrol mb-8 leading-[1.1] max-w-4xl">
            {t.hero.title} <span className="text-coffee-gold italic">{t.hero.titleItalic}</span> {t.hero.titleEnd}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-coffee-charcoal/60 leading-relaxed max-w-xl mb-12 font-light">
            {t.hero.desc}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link 
              to="/menu" 
              className="bg-coffee-yellow text-coffee-petrol px-8 py-4 rounded-full font-bold text-sm hover:bg-coffee-gold transition-all flex items-center group shadow-sm"
            >
              {t.hero.viewMenu}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="text-coffee-petrol/80 hover:text-coffee-petrol transition-colors text-sm font-bold tracking-widest uppercase border-b border-coffee-petrol/20 pb-1 sm:ml-4"
            >
              {t.hero.visitUs}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] text-coffee-petrol/40 uppercase tracking-[0.3em] mb-4">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-coffee-yellow"
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;