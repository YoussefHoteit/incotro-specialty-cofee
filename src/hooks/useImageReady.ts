"use client";

import { useState, useEffect } from 'react';

/**
 * A hook that returns true when an image URL has been fully loaded by the browser.
 * Useful for synchronizing animations with background image availability.
 */
export const useImageReady = (src: string) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;

    if (img.complete) {
      setIsReady(true);
    } else {
      img.onload = () => setIsReady(true);
      img.onerror = () => setIsReady(true); // Fallback to show content even if image fails
    }
  }, [src]);

  return isReady;
};