"use client";

import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-coffee-blue pt-12 pb-8 md:pt-20 md:pb-10 border-t border-white/10 text-coffee-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4 md:mb-6">
              <span className="text-2xl font-bold tracking-tighter leading-none text-coffee-yellow">înCotro</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-coffee-cream/60">{t.footer.specialty}</span>
            </div>
            <p className="text-coffee-cream/70 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-coffee-yellow mb-4 md:mb-6 uppercase tracking-widest text-xs">{t.footer.location}</h4>
            <p className="text-coffee-cream/70 text-sm leading-relaxed">
              Strada Exemplu Nr. 42<br />
              Sector 1, Bucharest<br />
              Romania
            </p>
          </div>

          <div>
            <h4 className="font-bold text-coffee-yellow mb-4 md:mb-6 uppercase tracking-widest text-xs">{t.footer.hours}</h4>
            <p className="text-coffee-cream/70 text-sm leading-relaxed">
              {t.footer.monFri}: 08:00 - 19:00<br />
              {t.footer.satSun}: 09:00 - 20:00
            </p>
          </div>

          <div>
            <h4 className="font-bold text-coffee-yellow mb-4 md:mb-6 uppercase tracking-widest text-xs">{t.footer.follow}</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-coffee-cream hover:bg-coffee-yellow hover:text-coffee-petrol transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-coffee-cream hover:bg-coffee-yellow hover:text-coffee-petrol transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-coffee-cream hover:bg-coffee-yellow hover:text-coffee-petrol transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-coffee-cream/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} înCotro {t.footer.specialty}. {t.footer.rights}
          </p>
          <div className="flex space-x-6 text-xs text-coffee-cream/40">
            <a href="#" className="hover:text-coffee-yellow">{t.footer.privacy}</a>
            <a href="#" className="hover:text-coffee-yellow">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;