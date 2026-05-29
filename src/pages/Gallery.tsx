"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Instagram, ArrowRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    url: "/gallery/entrance-view.jpg",
    category: "The Exterior",
    caption: "A welcoming corner in the heart of Bucharest.",
    size: "large"
  },
  {
    url: "/gallery/coffee-outdoor.jpg",
    category: "Coffee Moments",
    caption: "Morning rituals under the city sun.",
    size: "medium"
  },
  {
    url: "/gallery/latte-art-yellow.jpg",
    category: "Daily Rituals",
    caption: "Our signature yellow cup, crafted with care.",
    size: "small"
  },
  {
    url: "/gallery/coffee-table-sun.jpg",
    category: "Warm Details",
    caption: "Where light meets texture.",
    size: "medium"
  },
  {
    url: "/gallery/cat-latte-art.jpg",
    category: "Daily Rituals",
    caption: "Playful details in every pour.",
    size: "small"
  },
  {
    url: "/gallery/yellow-car-side.jpg",
    category: "The Exterior",
    caption: "The iconic înCotro Fiat.",
    size: "medium"
  },
  {
    url: "/gallery/coffee-cookie-tulip.jpg",
    category: "Coffee Moments",
    caption: "The perfect afternoon pairing.",
    size: "small"
  },
  {
    url: "/gallery/interior-chandelier.jpg",
    category: "The Interior",
    caption: "Warm lighting for deep conversations.",
    size: "large"
  },
  {
    url: "/gallery/flowers-window.jpg",
    category: "Warm Details",
    caption: "Fresh blooms by the window.",
    size: "medium"
  },
  {
    url: "/gallery/street-vibe.jpg",
    category: "Community",
    caption: "Bucharest street life at our doorstep.",
    size: "medium"
  },
  {
    url: "/gallery/ferrari-window.jpg",
    category: "The Exterior",
    caption: "City views from our favorite seat.",
    size: "small"
  },
  {
    url: "/gallery/night-chandelier.jpg",
    category: "The Interior",
    caption: "Evening glow and cozy corners.",
    size: "medium"
  },
  {
    url: "/gallery/interior-art.jpg",
    category: "The Interior",
    caption: "Artistic touches on deep blue walls.",
    size: "small"
  },
  {
    url: "/gallery/mirror-reflection.jpg",
    category: "Warm Details",
    caption: "Reflections of a morning well spent.",
    size: "medium"
  },
  {
    url: "/gallery/flowers-counter.jpg",
    category: "Warm Details",
    caption: "A touch of nature at the bar.",
    size: "small"
  },
  {
    url: "/gallery/snow-car.jpg",
    category: "The Exterior",
    caption: "Winter magic at înCotro.",
    size: "medium"
  },
  {
    url: "/gallery/outdoor-umbrella.jpg",
    category: "The Exterior",
    caption: "Summer shade and fresh air.",
    size: "small"
  },
  {
    url: "/gallery/swan-latte-art.jpg",
    category: "Daily Rituals",
    caption: "Mastering the art of the pour.",
    size: "medium"
  },
  {
    url: "/gallery/teddy-bear-car.jpg",
    category: "The Exterior",
    caption: "Playful moments in the city.",
    size: "small"
  },
  {
    url: "/gallery/child-dog.jpg",
    category: "Community",
    caption: "A space for everyone, big and small.",
    size: "medium"
  },
  {
    url: "/gallery/community-outdoor.jpg",
    category: "Community",
    caption: "Where Bucharest comes together.",
    size: "large"
  },
  {
    url: "/gallery/dog-coffee.jpg",
    category: "Community",
    caption: "Pet-friendly rituals.",
    size: "small"
  },
  {
    url: "/gallery/writing-window.jpg",
    category: "Daily Rituals",
    caption: "Leaving a mark on our community.",
    size: "medium"
  },
  {
    url: "/gallery/coffee-peonies.jpg",
    category: "Warm Details",
    caption: "Seasonal colors and fresh brews.",
    size: "small"
  },
  {
    url: "/gallery/peonies-car.jpg",
    category: "The Exterior",
    caption: "Summer blooms on the Fiat.",
    size: "medium"
  },
  {
    url: "/gallery/child-coffee.jpg",
    category: "Community",
    caption: "Future coffee lovers.",
    size: "small"
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

      {/* Premium Hero Section */}
      <section className="relative pt-48 pb-32 bg-coffee-blue text-coffee-cream overflow-hidden">
        {/* Decorative Background Detail */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-coffee-yellow/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-[1px] bg-coffee-yellow" />
                <span className="text-coffee-yellow font-bold tracking-[0.4em] uppercase text-xs">Visual Story</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">Gallery</h1>
              
              <div className="space-y-6 max-w-2xl">
                <p className="text-xl md:text-2xl text-coffee-cream/90 leading-relaxed font-light">
                  A glimpse into our coffee, colors, corners, and everyday moments.
                </p>
                <p className="text-lg text-coffee-cream/60 font-light italic">
                  From deep blue walls to warm coffee rituals, discover the mood of înCotro.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Masonry Gallery */}
      <section className="py-24 bg-coffee-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="relative group cursor-pointer overflow-hidden rounded-[2rem] break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700 bg-white"
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-auto">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/80 via-coffee-petrol/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-coffee-yellow font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
                        {img.category}
                      </span>
                      <h3 className="text-lg font-serif text-coffee-cream leading-snug mb-4">
                        {img.caption}
                      </h3>
                      <div className="flex items-center text-coffee-cream/60 text-[10px] uppercase tracking-widest font-bold">
                        <Maximize2 size={14} className="mr-2" />
                        View Larger
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Label (Visible without hover) */}
                <div className="md:hidden p-6 bg-white">
                  <span className="text-coffee-gold font-bold text-[10px] uppercase tracking-widest mb-1 block">
                    {img.category}
                  </span>
                  <p className="text-coffee-petrol text-sm font-serif italic">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-white border-y border-coffee-blue/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-coffee-cream rounded-3xl flex items-center justify-center mx-auto mb-8 text-coffee-red shadow-sm">
              <Instagram size={32} />
            </div>
            <h2 className="text-4xl font-serif text-coffee-petrol mb-6">Follow the colors of înCotro.</h2>
            <p className="text-lg text-coffee-charcoal/60 mb-10 font-light">
              Join our community on Instagram for daily doses of specialty coffee and Bucharest vibes.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-coffee-yellow text-coffee-petrol px-10 py-4 rounded-full font-bold text-sm hover:bg-coffee-gold transition-all inline-flex items-center group shadow-sm"
            >
              @incotro.coffee
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-coffee-yellow">
        <div className="container mx-auto px-6">
          <div className="bg-coffee-petrol rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-coffee-cream mb-6">Like what you see?</h2>
              <p className="text-xl text-coffee-cream/70 mb-12 max-w-xl mx-auto font-light">
                Come experience the space in person. We'll save you a seat.
              </p>
              <Link 
                to="/contact" 
                className="bg-coffee-yellow text-coffee-petrol px-12 py-5 rounded-full font-bold text-xl hover:bg-white transition-all inline-flex items-center group shadow-xl"
              >
                Visit Us
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </motion.div>
          </div>
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
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-coffee-cream/60 hover:text-coffee-yellow transition-colors z-[110] p-2"
            >
              <X size={40} strokeWidth={1.5} />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-coffee-cream/40 hover:text-coffee-yellow transition-colors z-[110] p-2 hidden md:block"
            >
              <ChevronLeft size={64} strokeWidth={1} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-coffee-cream/40 hover:text-coffee-yellow transition-colors z-[110] p-2 hidden md:block"
            >
              <ChevronRight size={64} strokeWidth={1} />
            </button>

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
            >
              <div className="relative group">
                <img 
                  src={galleryImages[selectedImage].url} 
                  alt={galleryImages[selectedImage].caption}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                />
                
                {/* Mobile Navigation Overlay */}
                <div className="absolute inset-y-0 left-0 w-1/2 md:hidden" onClick={prevImage} />
                <div className="absolute inset-y-0 right-0 w-1/2 md:hidden" onClick={nextImage} />
              </div>

              <div className="mt-10 text-center max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-coffee-yellow font-bold text-xs uppercase tracking-[0.4em] block mb-4"
                >
                  {galleryImages[selectedImage].category}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-4xl font-serif text-coffee-cream mb-4"
                >
                  {galleryImages[selectedImage].caption}
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-coffee-cream/40 text-sm font-light"
                >
                  {selectedImage + 1} / {galleryImages.length}
                </motion.div>
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