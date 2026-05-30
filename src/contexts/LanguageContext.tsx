"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Simple translation helper that can access nested keys like 'navbar.home'
  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    navbar: {
      home: 'Home',
      menu: 'Menu',
      about: 'About Us',
      gallery: 'Gallery',
      contact: 'Contact',
      visit: 'Visit Us'
    },
    hero: {
      subtitle: "Bucharest's Finest Ritual",
      title: "Specialty coffee with a bright Bucharest soul.",
      titleItalic: "bright",
      description: "A colorful corner for crafted coffee, warm conversations, and everyday rituals in the heart of the city.",
      viewMenu: "View Menu",
      visitUs: "Visit Us",
      scroll: "Scroll to explore"
    },
    about: {
      hero: {
        subtitle: "The Essence of înCotro",
        title: "Crafting Presence in Every Pour.",
        titleItalic: "Presence",
        description: "A colorful specialty coffee space built around taste, craft, and community in the heart of Bucharest. We don't just serve coffee; we curate moments.",
        cta: "Discover Our Story"
      },
      story: {
        label: "Specialty coffee rituals",
        title: "Where Art Meets Espresso",
        titleItalic: "Espresso",
        p1: "înCotro Specialty Coffee is a bright and welcoming corner in Bucharest where carefully prepared coffee meets a playful, artistic atmosphere.",
        p2: "From the yellow details outside to the deep blue walls inside, every element is designed to make people feel present, inspired, and at home.",
        p3: "Our journey began with a simple vision: to create a sanctuary for specialty coffee lovers that doesn't feel intimidating.",
        est: "Established",
        grade: "Specialty Grade"
      },
      philosophy: {
        label: "The Ritual",
        title: "Our Coffee Philosophy",
        description: "We focus on balance, clarity, and presentation. Every cup is a result of a meticulous process.",
        steps: [
          { label: 'Bean Selection', desc: 'Sourcing seasonal micro-lots.' },
          { label: 'Brewing', desc: 'Precision in every gram and second.' },
          { label: 'Latte Art', desc: 'The final touch of craftsmanship.' },
          { label: 'Shared Moments', desc: 'The joy of the first sip.' }
        ]
      }
    },
    footer: {
      location: "Location",
      hours: "Hours",
      follow: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  ro: {
    navbar: {
      home: 'Acasă',
      menu: 'Meniu',
      about: 'Despre Noi',
      gallery: 'Galerie',
      contact: 'Contact',
      visit: 'Vizitează-ne'
    },
    hero: {
      subtitle: "Cel mai fin ritual din București",
      title: "Cafea de specialitate cu un suflet vibrant de București.",
      titleItalic: "vibrant",
      description: "Un colț colorat pentru cafea artizanală, conversații calde și ritualuri zilnice în inima orașului.",
      viewMenu: "Vezi Meniul",
      visitUs: "Vizitează-ne",
      scroll: "Explorează"
    },
    about: {
      hero: {
        subtitle: "Esența înCotro",
        title: "Modelăm Prezența în Fiecare Ceașcă.",
        titleItalic: "Prezența",
        description: "Un spațiu colorat de cafea de specialitate construit în jurul gustului, măiestriei și comunității în inima Bucureștiului. Nu doar servim cafea; curatăm momente.",
        cta: "Descoperă Povestea Noastră"
      },
      story: {
        label: "Ritualuri de cafea de specialitate",
        title: "Unde Arta Întâlnește Espresso-ul",
        titleItalic: "Espresso-ul",
        p1: "înCotro Specialty Coffee este un colț luminos și primitor din București unde cafeaua pregătită cu grijă întâlnește o atmosferă jucăușă și artistică.",
        p2: "De la detaliile galbene de afară până la pereții albaștri din interior, fiecare element este conceput pentru a-i face pe oameni să se simtă prezenți, inspirați și acasă.",
        p3: "Călătoria noastră a început cu o viziune simplă: să creăm un sanctuar pentru iubitorii de cafea de specialitate care să nu pară intimidant.",
        est: "Înființat",
        grade: "Grad de Specialitate"
      },
      philosophy: {
        label: "Ritualul",
        title: "Filozofia Noastră despre Cafea",
        description: "Ne concentrăm pe echilibru, claritate și prezentare. Fiecare ceașcă este rezultatul unui proces meticulos.",
        steps: [
          { label: 'Selecția Boabelor', desc: 'Aprovizionare cu micro-loturi sezoniere.' },
          { label: 'Prepararea', desc: 'Precizie în fiecare gram și secundă.' },
          { label: 'Latte Art', desc: 'Atingerea finală a măiestriei.' },
          { label: 'Momente Împărtășite', desc: 'Bucuria primei înghițituri.' }
        ]
      }
    },
    footer: {
      location: "Locație",
      hours: "Program",
      follow: "Urmărește-ne",
      rights: "Toate drepturile rezervate.",
      privacy: "Politică de Confidențialitate",
      terms: "Termeni și Condiții"
    }
  }
};