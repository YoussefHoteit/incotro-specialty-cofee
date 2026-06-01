"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bean, Home, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BrandIntro = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const features = [
    {
      icon: <Bean size={24} />,
      title: t.brandIntro.feature1Title,
      description: t.brandIntro.feature1Desc,
      number: "01"
    },
    {
      icon: <Home size={24} />,
      title: t.brandIntro.feature2Title,
      description: t.brandIntro.feature2Desc,
      number: "02"
    },
    {
      icon: <Users size={24} />,
      title: t.brandIntro.feature3Title,
      description: t.brandIntro.feature3Desc,
      number: "03"
    }
  ];

  return (
    <section id="about" className="py-32 bg-coffee-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] text-coffee-yellow/20"
        >
          <Bean size={120} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[10%] text-coffee-blue/10"
        >
          <Bean size={160} strokeWidth={0.5} />
        </motion.div>
        <div className="absolute top-40 right-[5%] w-96 h-96 bg-coffee-yellow/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-[5%] w-80 h-80 bg-coffee-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
          >
            <motion.span 
              variants={itemVariants}
              className="text-coffee-gold font-bold text-xs uppercase tracking-[0.4em] mb-6 block"
            >
              {t.brandIntro.philosophy}
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-7xl font-serif text-coffee-petrol mb-8 leading-[1.1]"
            >
              {t.brandIntro.title} <br />
              <span className="text-coffee-gold italic">{t.brandIntro.titleItalic}</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-coffee-charcoal/60 leading-relaxed max-w-2xl"
            >
              {t.brandIntro.desc}
            </motion.p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-coffee-yellow via-coffee-yellow to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-coffee-yellow via-coffee-yellow to-transparent md:hidden" />

          <div className="space-y-24 md:space-y-40">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white border border-coffee-blue/10 flex items-center justify-center shadow-sm group-hover:border-coffee-yellow transition-colors duration-500">
                      <div className="text-coffee-petrol">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-coffee-gold tracking-widest uppercase">
                      {feature.number}
                    </div>
                  </div>
                </div>

                <div className={`pl-20 md:pl-0 w-full md:w-[42%] ${
                  index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-coffee-petrol mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-coffee-charcoal/60 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="hidden md:block md:w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;