"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled
          ? 'bg-coffee-cream/80 text-coffee-petrol py-3 shadow-lg border-b border-coffee-blue/5' 
          : 'bg-white/5 text-coffee-cream py-6 border-b border-white/10'
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
          <button className="bg-coffee-yellow/90 backdrop-blur-sm text-coffee-petrol px-5 py-2 rounded-full text-sm font-bold hover:bg-coffee-yellow transition-colors border border-white/20">
            Visit Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-coffee-cream/95 backdrop-blur-xl text-coffee-petrol p-6 md:hidden shadow-xl border-t border-coffee-blue/5"
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
              <button className="bg-coffee-yellow text-coffee-petrol w-full py-3 rounded-xl font-bold mt-4">
                Visit Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;