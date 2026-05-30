"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bean, Users, Sparkles, Coffee, ArrowRight, ArrowDown } from 'lucide-react';

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
  const scrollToStory = () => {
    const element = document.getElementById('our-story');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Redesigned Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-coffee-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
            alt="înCotro Interior" 
            className="w-full h-full object-cover"
          />
          {/* Premium Gradient Overlay */}
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
              <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">The Essence of înCotro</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif text-coffee-cream mb-8 leading-[1.1]">
              Crafting <span className="text-coffee-yellow italic">Presence</span> <br />
              in Every Pour.
            </h1>
            
            <p className="text-lg md:text-xl text-coffee-cream/80 leading-relaxed max-w-xl mb-12 font-light">
              A colorful specialty coffee space built around taste, craft, and community in the heart of Bucharest. We don't just serve coffee; we curate moments.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={scrollToStory}
                className="bg-coffee-yellow text-coffee-petrol px-8 py-4 rounded-full font-bold text-sm hover:bg-coffee-gold transition-all flex items-center group"
              >
                Discover Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Cue */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToStory}
        >
          <span className="text-[10px] text-coffee-cream/40 uppercase tracking-[0.3em] mb-4">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-coffee-yellow"
          >
            <ArrowDown size={20} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* Redesigned Story Section - Editorial Style */}
      <section id="our-story" className="py-32 bg-coffee-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <DetailLabel text="Specialty coffee rituals" />
              <h2 className="text-4xl md:text-6xl font-serif text-coffee-petrol mb-10 leading-tight">
                Where Art Meets <br />
                <span className="text-coffee-gold italic">Espresso</span>
              </h2>
              
              <div className="space-y-8 text-lg text-coffee-charcoal/70 leading-relaxed font-light">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-coffee-petrol first-letter:mr-3 first-letter:float-left">
                  înCotro Specialty Coffee is a bright and welcoming corner in Bucharest where carefully prepared coffee meets a playful, artistic atmosphere.
                </p>
                <p>
                  From the <span className="text-coffee-petrol font-medium">yellow details</span> outside to the <span className="text-coffee-petrol font-medium">deep blue walls</span> inside, every element is designed to make people feel present, inspired, and at home. We believe that a great cup of coffee is the starting point for meaningful conversations and creative sparks.
                </p>
                <p>
                  Our journey began with a simple vision: to create a sanctuary for specialty coffee lovers that doesn't feel intimidating, but rather like a warm extension of your own living room.
                </p>
              </div>

              <div className="mt-12 flex items-center space-x-8">
                <div>
                  <span className="block text-3xl font-serif text-coffee-petrol">2023</span>
                  <span className="text-[10px] uppercase tracking-widest text-coffee-gold font-bold">Established</span>
                </div>
                <div className="w-[1px] h-10 bg-coffee-blue/10" />
                <div>
                  <span className="block text-3xl font-serif text-coffee-petrol">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-coffee-gold font-bold">Specialty Grade</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 order-1 lg:order-2 relative"
            >
              {/* Visual Collage Block */}
              <div className="relative z-10">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-coffee-yellow/10 rounded-full blur-3xl" />
                <img 
                  src="/gallery/entrance-view.jpg" 
                  alt="înCotro Entrance" 
                  className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover"
                />
                
                {/* Floating Detail Labels */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-[240px] border border-coffee-blue/5"
                >
                  <DetailLabel text="Deep blue walls" />
                  <p className="text-coffee-petrol font-serif text-lg italic leading-snug">
                    "A Bucharest soul in every single pour."
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-12 -right-8 bg-coffee-yellow p-4 rounded-2xl shadow-lg z-20 hidden md:block"
                >
                  <DetailLabel text="Warm yellow details" />
                </motion.div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-coffee-blue/5 rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Values Section - Compact Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-coffee-petrol mb-3">What We Stand For</h2>
            <div className="w-12 h-1 bg-coffee-yellow mx-auto mb-6" />
            <p className="text-coffee-charcoal/60 text-sm md:text-base max-w-md mx-auto font-light">
              The details that shape every cup, every corner, and every visit.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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

      {/* Redesigned înCotro Vibe Section - Editorial Style */}
      <section className="py-32 bg-coffee-blue text-coffee-cream relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-coffee-yellow/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-8 h-[1px] bg-coffee-yellow" />
                <span className="text-coffee-yellow font-bold tracking-[0.3em] uppercase text-[10px]">Atmosphere</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">The înCotro Vibe</h2>
              
              <p className="text-lg md:text-xl text-coffee-cream/70 leading-relaxed mb-10 font-light">
                Our space is a carefully curated blend of deep blue walls, warm chandelier lighting, and fresh flowers. It's a place where the urban energy of Bucharest meets the calm focus of a specialty café.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12 lg:mb-0">
                {[
                  'Deep blue signature walls',
                  'Warm, inviting lighting',
                  'Fresh seasonal flowers',
                  'Artistic local touches'
                ].map((tag, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 rounded-full border border-coffee-yellow/30 text-coffee-yellow text-[10px] md:text-xs font-bold uppercase tracking-widest bg-coffee-yellow/5 whitespace-nowrap"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 relative"
            >
              <div className="relative">
                {/* Decorative Frame Detail */}
                <div className="absolute -inset-4 border border-coffee-yellow/10 rounded-[3.5rem] pointer-events-none" />
                
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" 
                  alt="Atmosphere" 
                  className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/3] lg:aspect-square"
                />
                
                {/* Subtle Accent Glow */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-coffee-yellow/10 rounded-full blur-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Coffee Philosophy Section */}
      <section className="py-32 bg-coffee-cream relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-coffee-yellow" />
                <span className="text-[10px] font-bold text-coffee-gold uppercase tracking-[0.3em]">The Ritual</span>
                <div className="w-1.5 h-1.5 rounded-full bg-coffee-yellow" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-coffee-petrol mb-6">Our Coffee Philosophy</h2>
              <p className="text-lg text-coffee-charcoal/70 font-light max-w-2xl mx-auto leading-relaxed">
                We focus on balance, clarity, and presentation. Every cup is a result of a meticulous process that starts long before the beans reach our bar.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative px-4 md:px-0">
              {/* Desktop Connecting Line */}
              <div className="absolute top-[18px] left-0 w-full h-[1px] bg-coffee-yellow/20 hidden md:block" />
              
              {/* Mobile Connecting Line */}
              <div className="absolute top-0 left-[18px] w-[1px] h-full bg-coffee-yellow/20 md:hidden" />

              <div className="grid md:grid-cols-4 gap-10 md:gap-8">
                {[
                  { label: 'Bean Selection', desc: 'Sourcing seasonal micro-lots.' },
                  { label: 'Brewing', desc: 'Precision in every gram and second.' },
                  { label: 'Latte Art', desc: 'The final touch of craftsmanship.' },
                  { label: 'Shared Moments', desc: 'The joy of the first sip.' }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center group"
                  >
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 w-9 h-9 bg-coffee-yellow text-coffee-petrol rounded-full flex items-center justify-center shadow-sm mb-0 md:mb-8 mr-6 md:mr-0 group-hover:scale-110 transition-transform duration-500">
                      <span className="font-bold text-xs">{i + 1}</span>
                    </div>
                    
                    {/* Content */}
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
    </main>
  );
};

export default About;