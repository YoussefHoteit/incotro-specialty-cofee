"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();

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

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      <section className="pt-40 pb-24 bg-coffee-blue text-coffee-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-coffee-yellow" />
              <span className="text-coffee-yellow font-bold tracking-widest uppercase text-sm">{t.gallery.visualStory}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">{t.gallery.heroTitle}</h1>
            <p className="text-xl text-coffee-cream/80 leading-relaxed">
              {t.gallery.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-coffee-cream">
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

      <section className="py-24 bg-white">
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