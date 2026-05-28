"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCard = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2rem] shadow-sm border border-coffee-blue/5 flex flex-col items-center text-center group"
  >
    <div className="mb-4 p-4 bg-coffee-blue/5 rounded-2xl text-coffee-petrol group-hover:bg-coffee-yellow group-hover:text-coffee-petrol transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-sm font-bold text-coffee-petrol/40 uppercase tracking-widest mb-2">{title}</h3>
    <p className="text-lg font-medium text-coffee-petrol">{content}</p>
  </motion.div>
);

const Contact = () => {
  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-coffee-blue">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1501339819358-ee5969a2f5ac?q=80&w=2069&auto=format&fit=crop" 
            alt="Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-petrol to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-coffee-cream mb-4">Visit Us</h1>
            <p className="text-xl text-coffee-cream/80 max-w-2xl mx-auto">
              Your next coffee stop in Bucharest.
            </p>
          </motion.div>
        </div>
        {/* Decorative Yellow Shapes */}
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-coffee-yellow rounded-full blur-3xl opacity-20" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-coffee-yellow rounded-full blur-3xl opacity-10" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <ContactCard icon={MapPin} title="Location" content="Strada Exemplu 42, Bucharest" />
            <ContactCard icon={Phone} title="Phone" content="+40 7XX XXX XXX" />
            <ContactCard icon={Mail} title="Email" content="hello@incotro.coffee" />
            <ContactCard icon={Clock} title="Hours" content="Mon-Sun: 08:00 - 20:00" />
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-coffee-blue/5"
            >
              <h2 className="text-3xl font-serif text-coffee-petrol mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol/60 uppercase tracking-wider ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-2xl bg-coffee-cream/50 border border-transparent focus:border-coffee-yellow focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol/60 uppercase tracking-wider ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-coffee-cream/50 border border-transparent focus:border-coffee-yellow focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol/60 uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 rounded-2xl bg-coffee-cream/50 border border-transparent focus:border-coffee-yellow focus:bg-white outline-none transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-coffee-petrol text-coffee-cream py-5 rounded-2xl font-bold text-lg hover:bg-coffee-blue transition-all flex items-center justify-center group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
                <p className="text-center text-xs text-coffee-charcoal/40 mt-4">
                  For now, you can also contact us directly by phone or email.
                </p>
              </form>
            </motion.div>

            {/* Map & Invitation */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 border-2 border-coffee-yellow rounded-[3.5rem] opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="aspect-video bg-coffee-blue/10 rounded-[3rem] overflow-hidden relative shadow-2xl">
                  {/* Placeholder for Map */}
                  <div className="absolute inset-0 flex items-center justify-center bg-coffee-blue/5">
                    <div className="text-center">
                      <MapPin className="mx-auto text-coffee-yellow mb-4" size={48} />
                      <p className="text-coffee-petrol font-medium">Interactive Map Placeholder</p>
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                    alt="Map Area" 
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                <button className="absolute bottom-6 right-6 bg-coffee-yellow text-coffee-petrol px-8 py-3 rounded-full font-bold shadow-lg hover:bg-coffee-gold transition-all flex items-center">
                  Get Directions
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h3 className="text-2xl font-serif text-coffee-petrol mb-4">A Place for Everyone</h3>
                <p className="text-lg text-coffee-charcoal/70 leading-relaxed mb-6">
                  Whether you're looking for a quiet corner to work, a vibrant spot to meet friends, or just a perfect espresso on your way to work, înCotro is your home in Bucharest.
                </p>
                <blockquote className="text-2xl font-serif text-coffee-gold italic border-l-4 border-coffee-yellow pl-6 py-2">
                  “Come for the coffee, stay for the color, warmth, and conversation.”
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-coffee-yellow">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-petrol mb-8">We’ll save you a seat.</h2>
            <Link 
              to="/menu"
              className="bg-coffee-petrol text-coffee-cream px-12 py-5 rounded-full font-bold text-xl hover:bg-coffee-blue transition-all inline-flex items-center group"
            >
              View Menu
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default Contact;