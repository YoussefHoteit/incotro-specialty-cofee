"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1501339819358-ee5969a2f5ac?q=80&w=2069&auto=format&fit=crop",
    category: "Space",
    caption: "Yellow mood",
    size: "large"
  },
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    category: "Space",
    caption: "Blue room calm",
    size: "medium"
  },
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    category: "Coffee",
    caption: "Latte art ritual",
    size: "small"
  },
  {
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
    category: "Details",
    caption: "Coffee and flowers",
    size: "medium"
  },
  {
    url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop",
    category: "Moments",
    caption: "A table for slow mornings",
    size: "large"
  },
  {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    category: "Coffee",
    caption: "The perfect extraction",
    size: "small"
  },
  {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop",
    category: "Details",
    caption: "Warm chandelier glow",
    size: "medium"
  },
  {
    url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop",
    category: "Moments",
    caption: "Bucharest soul",
    size: "small"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-coffee-blue text-coffee-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-coffee-yellow" />
              <span className="text-coffee-yellow font-bold tracking-widest uppercase text-sm">Visual Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Gallery</h1>
            <p className="text-xl text-coffee-cream/80 leading-relaxed">
              A glimpse into our coffee, colors, corners, and everyday moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-[3rem] aspect-[21/9] shadow-2xl cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img 
              src={galleryImages[0].url} 
              alt="Featured" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-coffee-petrol/30 group-hover:bg-coffee-petrol/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-serif text-coffee-cream mb-4 drop-shadow-lg">Bright outside. Warm inside.</h2>
                <div className="w-24 h-[2px] bg-coffee-yellow mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-[2rem] break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-petrol/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-coffee-yellow font-bold text-xs uppercase tracking-widest mb-2">{img.category}</span>
                  <h3 className="text-xl font-serif text-coffee-cream">{img.caption}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-24 bg-coffee-cream overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-coffee-petrol text-center">Every detail has its own color, texture, and story.</h2>
        </div>
        <div className="flex space-x-6 overflow-hidden py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6 whitespace-nowrap"
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} className="w-80 h-60 rounded-3xl overflow-hidden border-4 border-coffee-yellow/20 flex-shrink-0">
                <img src={img.url} className="w-full h-full object-cover" alt="Atmosphere" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Instagram className="mx-auto text-coffee-red mb-6" size={48} />
            <h2 className="text-4xl font-serif text-coffee-petrol mb-6">Follow the colors of înCotro.</h2>
            <p className="text-lg text-coffee-charcoal/60 mb-10">
              Join our community on Instagram for daily doses of specialty coffee and Bucharest vibes.
            </p>
            <button className="bg-coffee-yellow text-coffee-petrol px-10 py-4 rounded-full font-bold text-lg hover:bg-coffee-yellow/90 transition-all inline-flex items-center group">
              Follow Us
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
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