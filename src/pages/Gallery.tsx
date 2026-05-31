"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Instagram, ArrowDown, ArrowRight, Bean, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useImageReady } from '../hooks/useImageReady';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();
  const bgImage = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop";
  const isImageLoaded = useImageReady(bgImage);

  const galleryImages = [
    { url: "/gallery/entrance-view.jpg", category: t.gallery.catSpace, caption: t.gallery.capWelcome },
    { url: "/gallery/coffee-outdoor.jpg", category: t.gallery.catCoffee, caption: t.gallery.capOutdoor },
    { url: "/gallery/latte-art-yellow.jpg", category: t.gallery.catCoffee, caption: t.gallery.capYellow },
    { url: "/gallery/coffee-table-sun.jpg", category: t.gallery.catCoffee, caption: t.gallery.capSun },
    { url: "/gallery/cat-latte-art.jpg", category: t.gallery.catArt, caption: t.gallery.capPlayful },
    { url: "/gallery/yellow-car-side.jpg", category: t.gallery.catVibe, caption: t.gallery.capFiat },
    { url: "/gallery/coffee-cookie-tulip.jpg", category: t.gallery.catDetails, caption: t.gallery.capPairing },
    { url: "/gallery/interior-chandelier.jpg", category: t.gallery.catSpace, caption: t.gallery.capElegant },
    { url: "/gallery/flowers-window.jpg", category: t.gallery.catDetails, caption: t.gallery.capBlooms },
    { url: "/gallery/street-vibe.jpg", category: t.gallery.catCommunity, caption: t.gallery.capStreet },
    { url: "/gallery/ferrari-window.jpg", category: t.gallery.catVibe, caption: t.gallery.capViews },
    { url: "/gallery/night-chandelier.jpg", category: t.gallery.catSpace, caption: t.gallery.capGlow },
    { url: "/gallery/interior-art.jpg", category: t.gallery.catSpace, caption: t.gallery.capCorners },
    { url: "/gallery/mirror-reflection.jpg", category: t.gallery.catDetails, caption: t.gallery.capReflections },
    { url: "/gallery/flowers-counter.jpg", category: t.gallery.catDetails, caption: t.gallery.capWelcomeWarm },
    { url: "/gallery/snow-car.jpg", category: t.gallery.catVibe, caption: t.gallery.capWinter },
    { url: "/gallery/outdoor-umbrella.jpg", category: t.gallery.catVibe, caption: t.gallery.capSummer },
    { url: "/gallery/swan-latte-art.jpg", category: t.gallery.catCoffee, caption: t.gallery.capMastering },
    { url: "/gallery/teddy-bear-car.jpg", category: t.gallery.catVibe, caption: t.gallery.capMoments },
    { url: "/gallery/child-dog.jpg", category: t.gallery.catCommunity, caption: t.gallery.capFamily },
    { url: "/gallery/community-outdoor.jpg", category: t.gallery.catCommunity, caption: t.gallery.capGathering },
    { url: "/gallery/dog-coffee.jpg", category: t.gallery.catCommunity, caption: t.gallery.capPet },
    { url: "/gallery/writing-window.jpg", category: t.gallery.catCommunity, caption: t.gallery.capMark },
    { url: "/gallery/coffee-peonies.jpg", category: t.gallery.catDetails, caption: t.gallery.capPeonies },
    { url: "/gallery/peonies-car.jpg", category: t.gallery.catVibe, caption: t.gallery.capColors },
    { url: "/gallery/child-coffee.jpg", category: t.gallery.catCommunity, caption: t.gallery.capFuture }
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  const scrollToGallery = () => {
    const element = document.getElementById('gallery-grid');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol relative overflow-hidden">
      <Navbar />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[-5%] text-coffee-yellow/10"
        >
          <Bean size={200} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[60%] right-[-5%] text-coffee-blue/5"
        >
          <Coffee size={240} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[5%] text-coffee-yellow/10"
        >
          <Bean size={160} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[40%] right-[8%] text-coffee-blue/5"
        >
          <Coffee size={190} strokeWidth={0.5} />
        </motion.div>
      </div>

      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="înCotro Gallery Atmosphere" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-petrol/90 via-coffee-petrol/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/40 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isImageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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
              <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">{t.gallery.visualStory}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif text-coffee-cream mb-8 leading-[1.1]">
              {t.gallery.heroTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-coffee-cream/80 leading-relaxed max-w-xl mb-12 font-light">
              {t.gallery.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={scrollToGallery}
                className="bg-coffee-yellow text-coffee-petrol px-8 py-4 rounded-full font-bold text-sm hover:bg-coffee-gold transition-all flex items-center group"
              >
                {t.gallery.visualStory}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isImageLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToGallery}
        >
          <span className="text-[10px] text-coffee-cream/40 uppercase tracking-[0.3em] mb-4">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-coffee-yellow"
          >
            <ArrowDown size={20} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      <section id="gallery-grid" className="py-24 bg-coffee-cream relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-2 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-[2rem] break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-coffee-petrol/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-8">
                  <span className="text-coffee-yellow font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2">{img.category}</span>
                  <h3 className="text-sm md:text-xl font-serif text-coffee-cream line-clamp-2">{img.caption}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Instagram className="mx-auto text-coffee-red mb-6" size={48} />
            <h2 className="text-4xl font-serif text-coffee-petrol mb-6">{t.gallery.followInsta}</h2>
            <p className="text-lg text-coffee-charcoal/60 mb-10">
              {t.gallery.instaDesc}
            </p>
            <button className="bg-coffee-yellow text-coffee-petrol px-10 py-4 rounded-full font-bold text-lg hover:bg-coffee-yellow/90 transition-all inline-flex items-center group">
              {t.gallery.followUs}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-coffee-petrol/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-coffee-cream hover:text-coffee-yellow transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-coffee-cream hover:text-coffee-yellow transition-colors z-[110]"
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-coffee-cream hover:text-coffee-yellow transition-colors z-[110]"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-coffee-yellow font-bold text-xs uppercase tracking-widest block mb-2">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-2xl font-serif text-coffee-cream">
                  {galleryImages[selectedImage].caption}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Gallery;