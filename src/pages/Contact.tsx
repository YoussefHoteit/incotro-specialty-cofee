"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-coffee-blue">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1501339819358-ee5969a2f5ac?q=80&w=2069&auto=format&fit=crop" 
            alt="Café Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-petrol to-transparent" />
        </div>
        
        {/* Decorative Yellow Shapes */}
        <div className="absolute top-20 right-[-5%] w-64 h-64 bg-coffee-yellow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[-5%] w-48 h-48 bg-coffee-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-coffee-yellow" />
              <span className="text-coffee-yellow font-bold tracking-widest uppercase text-sm">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-coffee-cream mb-6">Visit Us</h1>
            <p className="text-xl text-coffee-cream/80 leading-relaxed max-w-2xl">
              Your next coffee stop in Bucharest. We're waiting for you with fresh beans and warm smiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <ContactCard 
              icon={MapPin} 
              title="Location" 
              content={<p>Strada Exemplu Nr. 42<br />Sector 1, Bucharest</p>}
            />
            <ContactCard 
              icon={Phone} 
              title="Phone" 
              content={<p>+40 7XX XXX XXX</p>}
            />
            <ContactCard 
              icon={Mail} 
              title="Email" 
              content={<p>hello@incotro.coffee</p>}
            />
            <ContactCard 
              icon={Clock} 
              title="Hours" 
              content={<p>Mon-Fri: 08:00 - 19:00<br />Sat-Sun: 09:00 - 20:00</p>}
            />
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-coffee-cream p-10 md:p-12 rounded-[3rem] border border-coffee-blue/5"
            >
              <h2 className="text-3xl font-serif text-coffee-petrol mb-6">Send us a message</h2>
              <p className="text-coffee-charcoal/60 mb-8">
                Have a question or just want to say hi? Drop us a line below. For now, you can also contact us directly by phone or email.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-coffee-petrol uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-coffee-petrol text-coffee-cream py-5 rounded-2xl font-bold text-lg hover:bg-coffee-blue transition-all flex items-center justify-center group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full flex flex-col"
            >
              <div className="relative flex-grow min-h-[400px] rounded-[3rem] overflow-hidden border-4 border-coffee-blue/5 shadow-2xl group">
                {/* Placeholder for Map */}
                <div className="absolute inset-0 bg-coffee-soft/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-coffee-petrol/20" />
                  <div className="relative z-10 bg-white p-6 rounded-3xl shadow-xl text-center max-w-xs">
                    <MapPin className="mx-auto text-coffee-red mb-4" size={32} />
                    <h4 className="font-bold text-coffee-petrol mb-2">Find us here</h4>
                    <p className="text-sm text-coffee-charcoal/60 mb-4">Strada Exemplu Nr. 42, Bucharest</p>
                    <button className="bg-coffee-yellow text-coffee-petrol px-6 py-2 rounded-full text-sm font-bold hover:bg-coffee-gold transition-colors flex items-center mx-auto">
                      Get Directions
                      <ExternalLink className="ml-2" size={14} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 rounded-[2.5rem] bg-coffee-yellow/10 border border-coffee-yellow/20">
                <h3 className="text-xl font-serif text-coffee-petrol mb-4">Community Invitation</h3>
                <p className="text-coffee-charcoal/70 leading-relaxed italic">
                  “Come for the coffee, stay for the color, warmth, and conversation. Whether you're here to work, meet friends, or enjoy a calm break, our doors are always open.”
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-6xl font-serif text-coffee-petrol mb-8">We’ll save you a seat.</h2>
            <Link to="/menu">
              <button className="bg-coffee-petrol text-coffee-cream px-12 py-5 rounded-full font-bold text-xl hover:bg-coffee-blue transition-all shadow-xl">
                View Menu
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