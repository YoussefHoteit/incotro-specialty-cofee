"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.menu, href: '/menu' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.gallery, href: '/gallery' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isSolidPage = location.pathname === '/menu';
  const isDarkBgPage = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/gallery' || location.pathname === '/contact';
  
  // Determine background and padding based on state
  const navbarBgClass = isMobileMenuOpen 
    ? 'bg-coffee-cream/95 backdrop-blur-xl' 
    : (isScrolled || isSolidPage)
      ? 'bg-white/10 backdrop-blur-xl shadow-lg'
      : 'bg-transparent';

  const navbarPaddingClass = (isScrolled || isMobileMenuOpen || isSolidPage) ? 'py-3' : 'py-6';
  
  // Determine text color based on scroll and page type
  const textColorClass = (isDarkBgPage && !isScrolled && !isMobileMenuOpen) 
    ? 'text-coffee-cream' 
    : 'text-coffee-petrol';

  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'en' : 'ro');
  };

  const handleLogoOrHomeClick = (e: React.MouseEvent, href: string) => {
    if (href === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    } else if (href === '/') {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBgClass} ${navbarPaddingClass} ${textColorClass}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex flex-col"
          onClick={(e) => handleLogoOrHomeClick(e, '/')}
        >
          <span className="text-2xl font-bold tracking-tighter leading-none">înCotro</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">{t.footer.specialty}</span>
        </Link>

        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={(e) => handleLogoOrHomeClick(e, link.href)}
                className={`text-sm font-medium transition-all relative group ${
                  location.pathname === link.href ? 'text-coffee-gold' : ''
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-coffee-yellow transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 text-xs font-bold tracking-widest uppercase hover:text-coffee-gold transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span className="hidden xs:inline">{language === 'ro' ? 'RO' : 'EN'}</span>
          </button>

          {/* Visit Us Button */}
          <Link to="/contact" className="hidden md:block">
            <button className="bg-coffee-yellow text-coffee-petrol px-5 py-2 rounded-full text-sm font-bold hover:bg-coffee-gold transition-colors shadow-sm">
              {t.nav.visit}
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-1"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-coffee-cream/95 backdrop-blur-2xl text-coffee-petrol overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4 p-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-xl font-serif border-b border-coffee-blue/5 pb-3"
                  onClick={(e) => {
                    handleLogoOrHomeClick(e, link.href);
                    if (link.href !== '/') setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="bg-coffee-yellow text-coffee-petrol w-full py-4 rounded-2xl font-bold mt-4 shadow-lg">
                  {t.nav.visit}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;