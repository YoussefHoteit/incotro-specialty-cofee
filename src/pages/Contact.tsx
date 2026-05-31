"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, ArrowRight, ArrowDown, Bean, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useLoading } from '../context/LoadingContext';

const ContactCard = ({ icon: Icon, title, content }: { icon: any, title: string, content: string | React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-coffee-blue/5 flex flex-col items-center text-center group transition-all duration-300"
  >
    <div className="mb-6 p-4 bg-coffee-blue/5 rounded-2xl text-coffee-petrol group-hover:bg-coffee-yellow group-hover:text-coffee-petrol transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold text-coffee-petrol mb-2 uppercase tracking-widest text-xs">{title}</h3>
    <div className="text-coffee-charcoal/70 leading-relaxed">{content}</div>
  </motion.div>
);

const Contact = () => {
  const { t } = useLanguage();
  const { isFinished } = useLoading();
  const bgImage = "/gallery/entrance-view.jpg";

  const scrollToInfo = () => {
    const element = document.getElementById('contact-info');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol relative overflow-hidden">
      <Navbar />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[2%] text-coffee-yellow/10"
        >
          <Bean size={150} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[60%] right-[2%] text-coffee-blue/5"
        >
          <Coffee size={180} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] left-[10%] text-coffee-yellow/10"
        >
          <Bean size={130} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[5%] text-coffee-blue/5"
        >
          <Coffee size={210} strokeWidth={0.5} />
        </motion.div>
      </div>

      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="înCotro Café Exterior" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-petrol/90 via-coffee-petrol/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/40 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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
              <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">{t.contact.getInTouch}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif text-coffee-cream mb-8 leading-[1.1]">
              {t.contact.heroTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-coffee-cream/80 leading-relaxed max-w-xl mb-12 font-light">
              {t.contact.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={scrollToInfo}
                className="bg-coffee-yellow text-coffee-petrol px-8 py-4 rounded-full font-bold text-sm hover:bg-coffee-gold transition-all flex items-center group"
              >
                {t.contact.getInTouch}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isFinished ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToInfo}
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

      <section id="contact-info" className="py-24 bg-coffee-cream relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <ContactCard 
              icon={MapPin} 
              title={t.contact.location} 
              content={<p>Strada Exemplu Nr. 42<br />Sector 1, Bucharest</p>}
            />
            <ContactCard 
              icon={Phone} 
              title={t.contact.phone} 
              content={<p>+40 7XX XXX XXX</p>}
            />
            <ContactCard 
              icon={Mail} 
              title={t.contact.email} 
              content={<p>hello@incotro.coffee</p>}
            />
            <ContactCard 
              icon={Clock} 
              title={t.contact.hours} 
              content={<p>{t.contact.monFri}<br />{t.contact.satSun}</p>}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-coffee-cream p-10 md:p-12 rounded-[3rem] border border-coffee-blue/5"
            >
              <h2 className="text-3xl font-serif text-coffee-petrol mb-6">{t.contact.sendMessage}</h2>
              <p className="text-coffee-charcoal/60 mb-8">
                {t.contact.formDesc}
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol uppercase tracking-wider">{t.contact.name}</label>
                  <input 
                    type="text" 
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol uppercase tracking-wider">{t.contact.emailLabel}</label>
                  <input 
                    type="email" 
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol uppercase tracking-wider">{t.contact.message}</label>
                  <textarea 
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-coffee-petrol text-coffee-cream py-5 rounded-2xl font-bold text-lg hover:bg-coffee-blue transition-all flex items-center justify-center group">
                  {t.contact.sendButton}
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full flex flex-col"
            >
              <div className="relative flex-grow min-h-[400px] rounded-[3rem] overflow-hidden border-4 border-coffee-blue/5 shadow-2xl group">
                <div className="absolute inset-0 bg-coffee-soft/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-coffee-petrol/20" />
                  <div className="relative z-10 bg-white p-6 rounded-3xl shadow-xl text-center max-w-xs">
                    <MapPin className="mx-auto text-coffee-red mb-4" size={32} />
                    <h4 className="font-bold text-coffee-petrol mb-2">{t.contact.findUs}</h4>
                    <p className="text-sm text-coffee-charcoal/60 mb-4">Strada Exemplu Nr. 42, Bucharest</p>
                    <button className="bg-coffee-yellow text-coffee-petrol px-6 py-2 rounded-full text-sm font-bold hover:bg-coffee-gold transition-colors flex items-center mx-auto">
                      {t.contact.directions}
                      <ExternalLink className="ml-2" size={14} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 rounded-[2.5rem] bg-coffee-yellow/10 border border-coffee-yellow/20">
                <h3 className="text-xl font-serif text-coffee-petrol mb-4">{t.contact.invitation}</h3>
                <p className="text-coffee-charcoal/70 leading-relaxed italic">
                  “{t.contact.invitationText}”
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-coffee-yellow relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-coffee-petrol mb-8">{t.contact.saveSeat}</h2>
            <Link to="/menu">
              <button className="bg-coffee-petrol text-coffee-cream px-12 py-5 rounded-full font-bold text-xl hover:bg-coffee-blue transition-all shadow-xl">
                {t.contact.viewMenu}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;