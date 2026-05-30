"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Instagram, Camera } from 'lucide-react';

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
    url: "/gallery/coffee-table-sun.jpg",
    category: "Coffee",
    caption: "Sun-drenched mornings",
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
    url: "/gallery/coffee-cookie-tulip.jpg",
    category: "Details",
    caption: "The perfect pairing",
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
    url: "/gallery/outdoor-umbrella.jpg",
    category: "Vibe",
    caption: "Summer shade",
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

// Refined grid spans for a dense, gapless puzzle effect
const getGridSpan = (index: number) => {
  const spans = [
    "col-span-1 row-span-2", // Tall
    "col-span-1 row-span-1", // Square
    "col-span-2 row-span-1", // Wide
    "col-span-1 row-span-1", // Square
    "col-span-1 row-span-2", // Tall
    "col-span-2 row-span-2", // Large
    "col-span-1 row-span-1", // Square
    "col-span-1 row-span-1", // Square
    "col-span-1 row-span-2", // Tall
    "col-span-2 row-span-1", // Wide
  ];
  return spans[index % spans.length];
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Redesigned Premium Hero Section */}
      <section className="relative pt-48 pb-32 bg-coffee-blue text-coffee-cream overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-coffee-petrol/20 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-coffee-yellow/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-[1px] bg-coffee-yellow" />
                <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">Visual Story</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
                Gallery
              </h1>
              
              <div className="max-w-lg space-y-6">
                <p className="text-xl md:text-2xl text-coffee-cream/90 leading-relaxed font-light">
                  A glimpse into our coffee, colors, corners, and everyday moments.
                </p>
                <div className="h-[1px] w-24 bg-coffee-yellow/30" />
                <p className="text-sm md:text-base text-coffee-cream/60 uppercase tracking-widest font-medium">
                  Capturing the soul of Bucharest, one cup at a time.
                </p>
              </div>
            </motion.div>

            {/* Desktop Decorative Collage Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 border border-coffee-yellow/20 rounded-[3rem] rotate-6 translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border border-coffee-yellow/10 rounded-[3rem] -rotate-3 -translate-x-2 -translate-y-2" />
                <img 
                  src="/gallery/interior-art.jpg" 
                  alt="Gallery Preview" 
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-8 -left-8 bg-coffee-yellow p-6 rounded-2xl shadow-xl z-20">
                  <Camera className="text-coffee-petrol" size={32} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dense Puzzle-style Masonry Gallery Grid */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 grid-auto-flow-dense">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 6) * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-coffee-blue/5 ${getGridSpan(index)}`}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/80 via-coffee-petrol/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="text-coffee-yellow font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 block">
                      {img.category}
                    </span>
                    <h3 className="text-sm md:text-2xl font-serif text-coffee-cream leading-tight">
                      {img.caption}
                    </h3>
                  </motion.div>
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
            <Instagram className="mx-auto text-coffee-red mb-8" size={56} strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-petrol mb-6">Follow the colors of înCotro.</h2>
            <p className="text-lg text-coffee-charcoal/60 mb-12 font-light">
              Join our community on Instagram for daily doses of specialty coffee and Bucharest vibes.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-coffee-yellow text-coffee-petrol px-12 py-5 rounded-full font-bold text-lg hover:bg-coffee-gold transition-all inline-flex items-center group shadow-lg"
            >
              Follow Us
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
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
            className="fixed inset-0 z-[100] bg-coffee-petrol/98 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-coffee-cream hover:text-coffee-yellow transition-colors z-[110] p-2"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-coffee-cream hover:text-coffee-yellow transition-colors z-[110] p-2"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-coffee-cream hover:text-coffee-yellow transition-colors z-[110] p-2"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-10 text-center max-w-2xl">
                <span className="text-coffee-yellow font-bold text-xs uppercase tracking-[0.4em] block mb-3">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-2xl md:text-4xl font-serif text-coffee-cream">
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