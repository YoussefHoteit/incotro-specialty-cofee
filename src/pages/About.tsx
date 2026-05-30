"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bean, Users, Sparkles, Coffee, ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ValueCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white p-5 md:p-8 rounded-[2rem] border border-coffee-blue/5 shadow-[0_4px_20px_-4px_rgba(22,74,99,0.05)] flex flex-col h-full group transition-all duration-500"
  >
    <div className="mb-5 p-3.5 bg-coffee-cream rounded-2xl w-fit text-coffee-petrol group-hover:bg-coffee-yellow group-hover:text-coffee-petrol transition-colors duration-500">
      <Icon size={22} />
    </div>
    <h3 className="text-base md:text-lg font-bold text-coffee-petrol mb-2">{title}</h3>
    <p className="text-coffee-charcoal/60 text-[11px] md:text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

const DetailLabel = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-2 mb-4">
    <div className="w-1.5 h-1.5 rounded-full bg-coffee-yellow" />
    <span className="text-[10px] font-bold text-coffee-gold uppercase tracking-[0.2em]">{text}</span>
  </div>
);

const About = () => {
  const { t } = useLanguage();
  
  const scrollToStory = () => {
    const element = document.getElementById('our-story');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      <section className="relative h-screen flex items-center overflow-hidden bg-coffee-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
            alt="înCotro Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-petrol/90 via-coffee-petrol/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/40 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[1px] bg-coffee-yellow" 
              />
              <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">{t('about.hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif text-coffee-cream mb-8 leading-[1.1]">
              {t('about.hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-coffee-cream/80 leading-relaxed max-w-xl mb-12 font-light">
              {t('about.hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={scrollToStory}
                className="bg-coffee-yellow text-coffee-petrol px-8 py-4 rounded-full font-bold text-sm hover:bg-coffee-gold transition-all flex items-center group"
              >
                {t('about.hero.cta')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToStory}
        >
          <span className="text-[10px] text-coffee-cream/40 uppercase tracking-[0.3em] mb-4">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-coffee-yellow"
          >
            <ArrowDown size={20} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      <section id="our-story" className="py-32 bg-coffee-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <DetailLabel text={t('about.story.label')} />
              <h2 className="text-4xl md:text-6xl font-serif text-coffee-petrol mb-10 leading-tight">
                {t('about.story.title')}
              </h2>
              
              <div className="space-y-8 text-lg text-coffee-charcoal/70 leading-relaxed font-light">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-coffee-petrol first-letter:mr-3 first-letter:float-left">
                  {t('about.story.p1')}
                </p>
                <p>
                  {t('about.story.p2')}
                </p>
                <p>
                  {t('about.story.p3')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 order-1 lg:order-2 relative"
            >
              <div className="relative z-10">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-coffee-yellow/10 rounded-full blur-3xl" />
                <img 
                  src="/gallery/entrance-view.jpg" 
                  alt="înCotro Entrance" 
                  className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-coffee-cream relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-serif text-coffee-petrol mb-6">{t('about.philosophy.title')}</h2>
              <p className="text-lg text-coffee-charcoal/70 font-light max-w-2xl mx-auto leading-relaxed">
                {t('about.philosophy.desc')}
              </p>
            </div>

            <div className="relative px-4 md:px-0">
              <div className="absolute top-[18px] left-0 w-full h-[1px] bg-coffee-yellow/20 hidden md:block" />
              <div className="absolute top-0 left-[18px] w-[1px] h-full bg-coffee-yellow/20 md:hidden" />

              <div className="grid md:grid-cols-4 gap-10 md:gap-8">
                {[
                  { label: t('about.step1.title'), desc: t('about.step1.desc') },
                  { label: t('about.step2.title'), desc: t('about.step2.desc') },
                  { label: t('about.step3.title'), desc: t('about.step3.desc') },
                  { label: t('about.step4.title'), desc: t('about.step4.desc') }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center group"
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-coffee-yellow text-coffee-petrol rounded-full flex items-center justify-center shadow-sm mb-0 md:mb-8 mr-6 md:mr-0 group-hover:scale-110 transition-transform duration-500">
                      <span className="font-bold text-xs">{i + 1}</span>
                    </div>
                    <div className="pt-1 md:pt-0">
                      <h4 className="text-base md:text-lg font-bold text-coffee-petrol mb-2 tracking-tight">{step.label}</h4>
                      <p className="text-[13px] md:text-sm text-coffee-charcoal/60 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;