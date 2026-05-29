"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    url: "/gallery/entrance-view.jpg",
    category: "The Exterior",
    caption: "Welcome to înCotro",
  },
  {
    url: "/gallery/coffee-outdoor.jpg",
    category: "Coffee Moments",
    caption: "Outdoor ritual",
  },
  {
    url: "/gallery/latte-art-yellow.jpg",
    category: "Daily Rituals",
    caption: "Signature yellow cup",
  },
  {
    url: "/gallery/coffee-table-sun.jpg",
    category: "Coffee Moments",
    caption: "Sun-drenched mornings",
  },
  {
    url: "/gallery/cat-latte-art.jpg",
    category: "Warm Details",
    caption: "Playful details",
  },
  {
    url: "/gallery/yellow-car-side.jpg",
    category: "The Exterior",
    caption: "The iconic yellow Fiat",
  },
  {
    url: "/gallery/coffee-cookie-tulip.jpg",
    category: "Warm Details",
    caption: "The perfect pairing",
  },
  {
    url: "/gallery/interior-chandelier.jpg",
    category: "The Interior",
    caption: "Elegant interiors",
  },
  {
    url: "/gallery/flowers-window.jpg",
    category: "Warm Details",
    caption: "Fresh blooms",
  },
  {
    url: "/gallery/street-vibe.jpg",
    category: "Community",
    caption: "Bucharest street life",
  },
  {
    url: "/gallery/ferrari-window.jpg",
    category: "The Exterior",
    caption: "City views",
  },
  {
    url: "/gallery/night-chandelier.jpg",
    category: "The Interior",
    caption: "Evening glow",
  },
  {
    url: "/gallery/interior-art.jpg",
    category: "The Interior",
    caption: "Artistic corners",
  },
  {
    url: "/gallery/mirror-reflection.jpg",
    category: "Warm Details",
    caption: "Reflections of style",
  },
  {
    url: "/gallery/flowers-counter.jpg",
    category: "Warm Details",
    caption: "Warm welcomes",
  },
  {
    url: "/gallery/snow-car.jpg",
    category: "The Exterior",
    caption: "Winter at înCotro",
  },
  {
    url: "/gallery/outdoor-umbrella.jpg",
    category: "The Exterior",
    caption: "Summer shade",
  },
  {
    url: "/gallery/swan-latte-art.jpg",
    category: "Daily Rituals",
    caption: "Mastering the craft",
  },
  {
    url: "/gallery/teddy-bear-car.jpg",
    category: "Warm Details",
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
    category: "Warm Details",
    caption: "Coffee and peonies",
  },
  {
    url: "/gallery/peonies-car.jpg",
    category: "The Exterior",
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

      {/* Refined Hero Section */}
      <section className="pt-40 pb-24 bg-coffee-blue text-coffee-cream relative overflow-hidden">
        {/* Subtle Background Detail */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-yellow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-[1px] bg-coffee-yellow" 
              />
              <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Visual Story</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">Gallery</h1>
            <p className="text-lg md:text-xl text-coffee-cream/70 leading-relaxed max-w-2xl font-light">
              A glimpse into our coffee, colors, corners, and everyday moments. Each frame tells a part of the înCotro journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Masonry Gallery */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-2 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-[2.5rem] break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-coffee-petrol/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-coffee-yellow/90 text-coffee-petrol font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-3">
                      {img.category}
                    </span>
                    <h3 className="text-sm md:text-2xl font-serif text-coffee-cream leading-tight">
                      {img.caption}
                    </h3>
                  </div>
                </div>
                
                {/* Subtle Border Detail */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl md:rounded-[2.5rem] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-coffee-blue/5 rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-coffee-gold font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Experience it</span>
            <h2 className="text-4xl md:text-6xl font-serif text-coffee-petrol mb-6">Like what you see?</h2>
            <p className="text-lg text-coffee-charcoal/60 mb-12 font-light">
              The colors are brighter and the coffee is warmer in person. Come experience the space for yourself.
            </p>
            <Link to="/contact">
              <button className="bg-coffee-yellow text-coffee-petrol px-12 py-5 rounded-full font-bold text-lg hover:bg-coffee-gold transition-all shadow-xl flex items-center justify-center mx-auto group">
                <MapPin className="mr-2 group-hover:animate-bounce" size={20} />
                Visit Us
              </button>
            </Link>
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
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-8 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-coffee-yellow text-coffee-petrol font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
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