"use client";

import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-cream pt-20 pb-10 border-t border-coffee-blue/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tighter leading-none text-coffee-petrol">înCotro</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-coffee-petrol/60">Specialty Coffee</span>
            </div>
            <p className="text-coffee-charcoal/60 text-sm leading-relaxed">
              Crafting moments of joy through specialty coffee and community in Bucharest.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-coffee-petrol mb-6 uppercase tracking-widest text-xs">Location</h4>
            <p className="text-coffee-charcoal/60 text-sm leading-relaxed">
              Strada Exemplu Nr. 42<br />
              Sector 1, Bucharest<br />
              Romania
            </p>
          </div>

          <div>
            <h4 className="font-bold text-coffee-petrol mb-6 uppercase tracking-widest text-xs">Hours</h4>
            <p className="text-coffee-charcoal/60 text-sm leading-relaxed">
              Mon - Fri: 08:00 - 19:00<br />
              Sat - Sun: 09:00 - 20:00
            </p>
          </div>

          <div>
            <h4 className="font-bold text-coffee-petrol mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-blue/5 flex items-center justify-center text-coffee-petrol hover:bg-coffee-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-blue/5 flex items-center justify-center text-coffee-petrol hover:bg-coffee-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-blue/5 flex items-center justify-center text-coffee-petrol hover:bg-coffee-yellow transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-coffee-blue/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-coffee-charcoal/40 text-xs">
            © {new Date().getFullYear()} înCotro Specialty Coffee. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-coffee-charcoal/40">
            <a href="#" className="hover:text-coffee-petrol">Privacy Policy</a>
            <a href="#" className="hover:text-coffee-petrol">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;