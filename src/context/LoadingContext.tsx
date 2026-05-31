"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface LoadingContextType {
  isLoading: boolean;
  isFinished: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const location = useLocation();

  // Define hero images for each route to preload
  const heroImages: Record<string, string> = {
    '/': "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop",
    '/about': "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    '/gallery': "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    '/contact': "/gallery/entrance-view.jpg"
  };

  useEffect(() => {
    const currentHeroImage = heroImages[location.pathname];
    
    if (!currentHeroImage) {
      // If no hero image for this route, finish loading quickly
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setIsFinished(true), 800);
      }, 1000);
      return () => clearTimeout(timer);
    }

    const img = new Image();
    img.src = currentHeroImage;

    const handleLoad = () => {
      // Minimum loading time for brand feel
      setTimeout(() => {
        setIsLoading(false);
        // Wait for fade out animation to finish before signaling "finished"
        setTimeout(() => setIsFinished(true), 800);
      }, 1500);
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.onload = handleLoad;
      img.onerror = handleLoad;
    }

    // Safety timeout
    const safetyTimer = setTimeout(handleLoad, 4000);
    return () => clearTimeout(safetyTimer);
  }, [location.pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, isFinished }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};