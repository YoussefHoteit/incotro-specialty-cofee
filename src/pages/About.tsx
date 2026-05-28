"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Bean, Users, Sparkles, Coffee, ArrowRight } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-coffee-blue/5 relative group overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-coffee-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    <div className="mb-6 p-4 bg-coffee-blue/5 rounded-2xl w-fit text-coffee-petrol group-hover:bg-coffee-yellow group-hover:text-coffee-petrol transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-coffee-petrol mb-3">{title}</h3>
    <p className="text-coffee-charcoal/60 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const About = () => {
  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-coffee-blue">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
            alt="Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-petrol to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-coffee-yellow" />
              <span className="text-coffee-yellow font-bold tracking-widest uppercase text-sm">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-coffee-cream mb-6">About înCotro</h1>
            <p className="text-xl text-coffee-cream/80 leading-relaxed max-w-2xl">
              A colorful specialty coffee space built around taste, craft, and community in the heart of Bucharest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-coffee-petrol mb-8">Where Art Meets Espresso</h2>
              <div className="space-y-6 text-lg text-coffee-charcoal/70 leading-relaxed">
                <p>
                  înCotro Specialty Coffee is a bright and welcoming corner in Bucharest where carefully prepared coffee meets a playful, artistic atmosphere.
                </p>
                <p>
                  From the yellow details outside to the deep blue walls inside, every element is designed to make people feel present, inspired, and at home. We believe that a great cup of coffee is the starting point for meaningful conversations and creative sparks.
                </p>
                <p>
                  Our journey began with a simple vision: to create a sanctuary for specialty coffee lovers that doesn't feel intimidating, but rather like a warm extension of your own living room.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-coffee-yellow/20 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1501339819358-ee5969a2f5ac?q=80&w=2069&auto=format&fit=crop" 
                alt="Exterior" 
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 bg-coffee-yellow p-8 rounded-3xl z-20 shadow-xl hidden md:block">
                <p className="text-coffee-petrol font-bold text-xl italic">"A Bucharest soul in every pour."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-coffee-petrol mb-4">What We Stand For</h2>
            <div className="w-24 h-1 bg-coffee-yellow mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <ValueCard 
              icon={Bean} 
              title="Craftsmanship" 
              desc="Precision in every extraction, honoring the hard work of farmers and roasters."
            />
            <ValueCard 
              icon={Users} 
              title="Community" 
              desc="A hub for Bucharest's creative minds to connect and share ideas."
            />
            <ValueCard 
              icon={Sparkles} 
              title="Warm Design" 
              desc="A unique aesthetic that balances bold colors with cozy comfort."
            />
            <ValueCard 
              icon={Coffee} 
              title="Daily Rituals" 
              desc="Elevating the everyday coffee break into a moment of pure joy."
            />
          </div>
        </div>
      </section>

      {/* Space & Atmosphere */}
      <section className="py-24 bg-coffee-blue text-coffee-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" 
                alt="Atmosphere" 
                className="rounded-[3rem] shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-serif mb-8">The înCotro Vibe</h2>
              <p className="text-lg text-coffee-cream/70 leading-relaxed mb-8">
                Our space is a carefully curated blend of deep blue walls, warm chandelier lighting, and fresh flowers. It's a place where the urban energy of Bucharest meets the calm focus of a specialty café.
              </p>
              <ul className="space-y-4">
                {['Deep blue signature walls', 'Warm, inviting lighting', 'Fresh seasonal flowers', 'Artistic local touches'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-coffee-yellow rounded-full" />
                    <span className="text-coffee-cream/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coffee Philosophy */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-coffee-petrol mb-6">Our Coffee Philosophy</h2>
              <p className="text-lg text-coffee-charcoal/70">
                We focus on balance, clarity, and presentation. Every cup is a result of a meticulous process that starts long before the beans reach our bar.
              </p>
            </div>

            {/* Timeline */}
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-coffee-blue/10 hidden md:block" />
              {[
                { label: 'Bean Selection', desc: 'Sourcing seasonal micro-lots.' },
                { label: 'Brewing', desc: 'Precision in every gram and second.' },
                { label: 'Latte Art', desc: 'The final touch of craftsmanship.' },
                { label: 'Shared Moments', desc: 'The joy of the first sip.' }
              ].map((step, i) => (
                <div key={i} className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-coffee-yellow text-coffee-petrol rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-coffee-petrol mb-2">{step.label}</h4>
                  <p className="text-xs text-coffee-charcoal/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-coffee-yellow mb-8">
              <Users size={48} className="mx-auto" />
            </div>
            <blockquote className="text-3xl md:text-4xl font-serif text-coffee-petrol italic mb-8 leading-tight">
              "More than a coffee stop — a place to pause, connect, and enjoy the moment."
            </blockquote>
            <p className="text-lg text-coffee-charcoal/60">
              Whether you're here for a quick espresso or a long afternoon of work, you're part of the înCotro family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-coffee-yellow">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-petrol mb-8">Come experience the space.</h2>
          <button className="bg-coffee-petrol text-coffee-cream px-10 py-5 rounded-full font-bold text-xl hover:bg-coffee-blue transition-all inline-flex items-center group">
            Visit Us in Bucharest
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default About;