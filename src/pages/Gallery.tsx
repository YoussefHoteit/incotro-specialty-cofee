"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Instagram, Filter } from 'lucide-react';

const galleryImages = [
  {
    url: "/gallery/entrance-view.jpg",
    category: "Space",
    caption: "Welcome to înCotro",
    featured: true,
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
    featured: true,
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

const categories = ["All", "Space", "Coffee", "Vibe", "Community", "Details"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages;
    return galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    const originalIndex = galleryImages.findIndex(img => img.url === filteredImages[index].url);
    setSelectedImage(originalIndex);
  };

  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-coffee-blue text-coffee-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-coffee-yellow/5 skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-coffee-yellow" />
              <span className="text-coffee-yellow font-bold tracking-widest uppercase text-xs">Visual Narrative</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">The Art of <br /><span className="text-coffee-yellow italic">înCotro</span></h1>
            <p className="text-xl text-coffee-cream/70 leading-relaxed max-w-xl">
              A curated collection of moments, textures, and colors that define our specialty coffee sanctuary in Bucharest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-[72px] z-40 bg-coffee-cream/80 backdrop-blur-md border-b border-coffee-blue/5 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-2 text-coffee-petrol/40">
              <Filter size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Filter by</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-coffee-petrol text-coffee-cream shadow-lg scale-105"
                      : "bg-white text-coffee-petrol/60 hover:bg-coffee-blue/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Grid Gallery */}
      <section className="py-20 bg-coffee-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className={`relative group cursor-pointer overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 ${
                    img.featured ? "col-span-2 row-span-2 aspect-square md:aspect-video lg:aspect-square" : "aspect-[4/5]"
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Sophisticated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-petrol/80 via-coffee-petrol/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="inline-block px-3 py-1 bg-coffee-yellow text-coffee-petrol text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                        {img.category}
                      </span>
                      <h3 className="text-lg md:text-2xl font-serif text-coffee-cream leading-tight">
                        {img.caption}
                      </h3>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-coffee-yellow/0 group-hover:border-coffee-yellow/100 transition-all duration-500 rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-coffee-yellow/0 group-hover:border-coffee-yellow/100 transition-all duration-500 rounded-bl-xl" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-coffee-yellow/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-coffee-blue/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-coffee-red/10 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
              <Instagram className="text-coffee-red" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-petrol mb-6">Follow the colors of înCotro.</h2>
            <p className="text-lg text-coffee-charcoal/60 mb-12 leading-relaxed">
              Join our community on Instagram for daily doses of specialty coffee, Bucharest vibes, and behind-the-scenes moments.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 group"
            >
              <span className="bg-coffee-yellow text-coffee-petrol px-10 py-5 rounded-full font-bold text-lg hover:bg-coffee-gold transition-all shadow-xl flex items-center">
                @incotro.coffee
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
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
            className="fixed inset-0 z-[100] bg-coffee-petrol/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-coffee-cream/50 hover:text-coffee-yellow transition-colors z-[110] p-2"
            >
              <X size={40} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-coffee-cream/30 hover:text-coffee-yellow transition-colors z-[110] p-4"
            >
              <ChevronLeft size={64} strokeWidth={1} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-coffee-cream/30 hover:text-coffee-yellow transition-colors z-[110] p-4"
            >
              <ChevronRight size={64} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
            >
              <div className="relative group">
                <img 
                  src={galleryImages[selectedImage].url} 
                  alt={galleryImages[selectedImage].caption}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-20 left-0 right-0 text-center">
                  <span className="text-coffee-yellow font-bold text-xs uppercase tracking-[0.3em] block mb-3">
                    {galleryImages[selectedImage].category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-coffee-cream">
                    {galleryImages[selectedImage].caption}
                  </h3>
                </div>
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