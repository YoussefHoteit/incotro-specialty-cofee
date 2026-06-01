"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useLoading } from '../context/LoadingContext';

const Hero = () => {
  const { t } = useLanguage();
  const { isFinished } = useLoading();
  const containerRef = useRef(null);
  const bgImage = "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop";
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothYProgress, [0, 1], ["0%", "20%"]);
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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background with Optimized Parallax */}
      <motion.div 
        style={{ y }}
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
          src={bgImage} 
          alt="înCotro Atmosphere" 
          className="w-full h-full object-cover pointer-events-none"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-petrol/90 via-coffee-petrol/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/40 via-transparent to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isFinished ? "visible" : "hidden"}
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
            <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">{t.hero.ritual}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-coffee-cream mb-8 leading-[1.1] max-w-4xl">
            {t.hero.title} <span className="text-coffee-yellow italic">{t.hero.titleItalic}</span> {t.hero.titleEnd}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-coffee-cream/80 leading-relaxed max-w-xl mb-12 font-light">
            {t.hero.desc}
          </motion.p>

          <motion.div variants={itemVariants} className="inline-flex flex-col items-center gap-4">
            <Link 
              to="/menu" 
              className="bg-coffee-yellow/10 backdrop-blur-md border border-coffee-yellow/30 text-coffee-yellow px-10 py-4 rounded-full font-bold text-sm hover:bg-coffee-yellow/20 transition-all flex items-center group min-w-[220px] justify-center"
            >
              {t.hero.viewMenu}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/5 backdrop-blur-md border border-white/10 text-coffee-cream/80 px-10 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center min-w-[220px]"
            >
              {t.hero.visitUs}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isFinished ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] text-coffee-cream/40 uppercase tracking-[0.3em] mb-4">{t.hero.scroll}</span>
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