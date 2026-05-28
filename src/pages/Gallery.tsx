"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const galleryImages = [
  {
    url: "/gallery/entrance-view.jpg",
    category: "Space",
    caption: "Welcome to înCotro",
  },
  {
    url: "/gallery/coffee-outdoor.jpg",
    category: "Coffee",
    caption: "Outdoor ritual",
  },
  {
    url: "/gallery/latte-art-yellow.jpg",
    category: "Coffee",
    caption: "Signature yellow cup",
  },
  {
    url: "/gallery/cat-latte-art.jpg",
    category: "Art",
    caption: "Playful details",
  },
  {
    url: "/gallery/yellow-car-side.jpg",
    category: "Vibe",
    caption: "The iconic yellow Fiat",
  },
  {
    url: "/gallery/interior-chandelier.jpg",
    category: "Space",
    caption: "Elegant interiors",
  },
  {
    url: "/gallery/flowers-window.jpg",
    category: "Details",
    caption: "Fresh blooms",
  },
  {
    url: "/gallery/street-vibe.jpg",
    category: "Community",
    caption: "Bucharest street life",
  },
  {
    url: "/gallery/ferrari-window.jpg",
    category: "Vibe",
    caption: "City views",
  },
  {
    url: "/gallery/night-chandelier.jpg",
    category: "Space",
    caption: "Evening glow",
  },
  {
    url: "/gallery/interior-art.jpg",
    category: "Space",
    caption: "Artistic corners",
  },
  {
    url: "/gallery/mirror-reflection.jpg",
    category: "Details",
    caption: "Reflections of style",
  },
  {
    url: "/gallery/flowers-counter.jpg",
    category: "Details",
    caption: "Warm welcomes",
  },
  {
    url: "/gallery/snow-car.jpg",
    category: "Vibe",
    caption: "Winter at înCotro",
  },
  {
    url: "/gallery/swan-latte-art.jpg",
    category: "Coffee",
    caption: "Mastering the craft",
  },
  {
    url: "/gallery/teddy-bear-car.jpg",
    category: "Vibe",
    caption: "Playful moments",
  },
  {
    url: "/gallery/child-dog.jpg",
    category: "Community",
    caption: "Family friendly",
  },
  {
    url: "/gallery/community-outdoor.jpg",
    category: "Community",
    caption: "Local gathering",
  },
  {
    url: "/gallery/dog-coffee.jpg",
    category: "Community",
    caption: "Pet friendly",
  },
  {
    url: "/gallery/writing-window.jpg",
    category: "Community",
    caption: "Leaving a mark",
  },
  {
    url: "/gallery/coffee-peonies.jpg",
    category: "Details",
    caption: "Coffee and peonies",
  },
  {
    url: "/gallery/peonies-car.jpg",
    category: "Vibe",
    caption: "Summer colors",
  },
  {
    url: "/gallery/child-coffee.jpg",
    category: "Community",
    caption: "Future coffee lovers",
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
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

      {/* Masonry Gallery Grid */}
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