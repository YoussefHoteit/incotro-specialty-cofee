"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCard = ({ icon: Icon, title, content, delay }: { icon: any, title: string, content: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-coffee-blue/5 flex flex-col items-center text-center group"
  >
    <div className="mb-6 p-4 bg-coffee-blue/5 rounded-2xl text-coffee-petrol group-hover:bg-coffee-yellow group-hover:text-coffee-petrol transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold text-coffee-petrol mb-2 uppercase tracking-widest text-xs">{title}</h3>
    <div className="text-coffee-charcoal/70 leading-relaxed">
      {content}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-coffee-blue">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1501339819358-ee5969a2f5ac?q=80&w=2069&auto=format&fit=crop" 
            alt="Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-petrol to-transparent" />
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-[-5%] w-64 h-64 bg-coffee-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[-5%] w-96 h-96 bg-coffee-yellow/5 rounded-full blur-3xl" />

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
              delay={0.1}
            />
            <ContactCard 
              icon={Phone} 
              title="Phone" 
              content={<p>+40 7XX XXX XXX</p>}
              delay={0.2}
            />
            <ContactCard 
              icon={Mail} 
              title="Email" 
              content={<p>hello@incotro.coffee</p>}
              delay={0.3}
            />
            <ContactCard 
              icon={Clock} 
              title="Hours" 
              content={<p>Mon-Fri: 08:00 - 19:00<br />Sat-Sun: 09:00 - 20:00</p>}
              delay={0.4}
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
                Have a question or just want to say hi? Drop us a line and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-coffee-petrol uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-coffee-petrol uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-coffee-petrol uppercase tracking-widest">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white border border-coffee-blue/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-coffee-yellow transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                
                <button className="w-full bg-coffee-petrol text-coffee-cream py-5 rounded-2xl font-bold text-lg hover:bg-coffee-blue transition-all flex items-center justify-center group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
                
                <p className="text-xs text-center text-coffee-charcoal/40 mt-4">
                  For now, you can also contact us directly by phone or email.
                </p>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl border-8 border-coffee-cream">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-coffee-soft/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin size={64} className="text-coffee-petrol mx-auto mb-4 opacity-20" />
                    <p className="text-coffee-petrol/40 font-serif text-xl italic">Map view of our Bucharest location</p>
                  </div>
                </div>
                {/* Styled Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/40 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <button className="w-full bg-white text-coffee-petrol py-4 rounded-2xl font-bold shadow-xl hover:bg-coffee-yellow transition-all flex items-center justify-center group">
                    <ExternalLink className="mr-2" size={20} />
                    Get Directions
                  </button>
                </div>
              </div>
              
              <div className="p-10 bg-coffee-blue/5 rounded-[2.5rem] border border-coffee-blue/10">
                <h3 className="text-2xl font-serif text-coffee-petrol mb-4">Community Invitation</h3>
                <p className="text-coffee-charcoal/70 leading-relaxed mb-6">
                  înCotro is more than just a coffee shop. It's a space for Bucharest's creative souls to meet, work, and find inspiration. Whether you're here for a quick espresso or a long afternoon of work, you're always welcome.
                </p>
                <blockquote className="text-xl font-serif text-coffee-petrol italic border-l-4 border-coffee-yellow pl-6">
                  “Come for the coffee, stay for the color, warmth, and conversation.”
                </blockquote>
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
            <Link to="/menu" className="bg-coffee-petrol text-coffee-cream px-12 py-5 rounded-full font-bold text-xl hover:bg-coffee-blue transition-all inline-flex items-center group">
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