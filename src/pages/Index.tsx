"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandIntro from '@/components/BrandIntro';
import SignatureExperience from '@/components/SignatureExperience';
import MenuPreview from '@/components/MenuPreview';
import Community from '@/components/Community';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <main className="min-h-screen bg-coffee-cream selection:bg-coffee-yellow selection:text-coffee-petrol">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <BrandIntro />
      <SignatureExperience />
      <MenuPreview />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;