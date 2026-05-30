"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.menu'), href: '/menu' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isSolidPage = location.pathname === '/menu';
  const showGlassy = isScrolled || isSolidPage || isMobileMenuOpen;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showGlassy
          ? 'bg-white/90 backdrop-blur-md text-coffee-petrol py-3 shadow-sm border-b border-coffee-blue/10' 
          : 'bg-transparent text-coffee-cream py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter leading-none">înCotro</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">Specialty Coffee</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-sm font-medium transition-all relative group ${
                location.pathname === link.href ? 'text-coffee-gold' : ''
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-coffee-yellow transition-all group-hover:w-full" />
            </Link>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest hover:text-coffee-gold transition-colors"
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'RO' : 'EN'}</span>
          </button>

          <button className="bg-coffee-yellow text-coffee-petrol px-5 py-2 rounded-full text-sm font-bold hover:bg-coffee-gold transition-colors shadow-sm">
            {t('nav.visit')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest"
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'RO' : 'EN'}</span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl text-coffee-petrol p-6 md:hidden shadow-xl border-t border-coffee-blue/5"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-lg font-medium border-b border-coffee-blue/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-coffee-yellow text-coffee-petrol w-full py-3 rounded-xl font-bold mt-4 shadow-md">
                {t('nav.visit')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;