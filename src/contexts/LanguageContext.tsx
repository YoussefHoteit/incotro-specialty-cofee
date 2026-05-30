"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.visit': 'Visit Us',
    // Hero
    'hero.badge': "Bucharest's Finest Ritual",
    'hero.title': 'Specialty coffee with a bright Bucharest soul.',
    'hero.desc': 'A colorful corner for crafted coffee, warm conversations, and everyday rituals in the heart of the city.',
    'hero.cta.menu': 'View Menu',
    'hero.cta.visit': 'Visit Us',
    'hero.scroll': 'Scroll to explore',
    // About Page
    'about.hero.badge': 'The Essence of înCotro',
    'about.hero.title': 'Crafting Presence in Every Pour.',
    'about.hero.desc': "A colorful specialty coffee space built around taste, craft, and community in the heart of Bucharest. We don't just serve coffee; we curate moments.",
    'about.hero.cta': 'Discover Our Story',
    'about.story.label': 'Specialty coffee rituals',
    'about.story.title': 'Where Art Meets Espresso',
    'about.story.p1': 'înCotro Specialty Coffee is a bright and welcoming corner in Bucharest where carefully prepared coffee meets a playful, artistic atmosphere.',
    'about.story.p2': 'From the yellow details outside to the deep blue walls inside, every element is designed to make people feel present, inspired, and at home.',
    'about.story.p3': 'Our journey began with a simple vision: to create a sanctuary for specialty coffee lovers that feels like a warm extension of your own living room.',
    'about.philosophy.title': 'Our Coffee Philosophy',
    'about.philosophy.desc': 'We focus on balance, clarity, and presentation. Every cup is a result of a meticulous process.',
    'about.step1.title': 'Bean Selection',
    'about.step1.desc': 'Sourcing seasonal micro-lots.',
    'about.step2.title': 'Brewing',
    'about.step2.desc': 'Precision in every gram and second.',
    'about.step3.title': 'Latte Art',
    'about.step3.desc': 'The final touch of craftsmanship.',
    'about.step4.title': 'Shared Moments',
    'about.step4.desc': 'The joy of the first sip.',
    // Footer
    'footer.desc': 'Crafting moments of joy through specialty coffee and community in Bucharest.',
    'footer.location': 'Location',
    'footer.hours': 'Hours',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
  },
  ro: {
    // Navbar
    'nav.home': 'Acasă',
    'nav.menu': 'Meniu',
    'nav.about': 'Despre Noi',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.visit': 'Vizitează-ne',
    // Hero
    'hero.badge': 'Cel mai fin ritual din București',
    'hero.title': 'Cafea de specialitate cu un suflet vibrant de București.',
    'hero.desc': 'Un colț colorat pentru cafea artizanală, conversații calde și ritualuri zilnice în inima orașului.',
    'hero.cta.menu': 'Vezi Meniul',
    'hero.cta.visit': 'Vizitează-ne',
    'hero.scroll': 'Explorează',
    // About Page
    'about.hero.badge': 'Esența înCotro',
    'about.hero.title': 'Modelăm Prezența în Fiecare Ceașcă.',
    'about.hero.desc': 'Un spațiu colorat de cafea de specialitate construit în jurul gustului, meșteșugului și comunității în inima Bucureștiului.',
    'about.hero.cta': 'Descoperă Povestea Noastră',
    'about.story.label': 'Ritualuri de cafea de specialitate',
    'about.story.title': 'Unde Arta Întâlnește Espresso',
    'about.story.p1': 'înCotro Specialty Coffee este un colț luminos și primitor din București unde cafeaua pregătită cu grijă întâlnește o atmosferă jucăușă și artistică.',
    'about.story.p2': 'De la detaliile galbene de afară la pereții albaștri din interior, fiecare element este conceput pentru a te face să te simți prezent și inspirat.',
    'about.story.p3': 'Călătoria noastră a început cu o viziune simplă: să creăm un sanctuar pentru iubitorii de cafea care să se simtă ca o extensie caldă a propriei sufragerii.',
    'about.philosophy.title': 'Filozofia Noastră despre Cafea',
    'about.philosophy.desc': 'Ne concentrăm pe echilibru, claritate și prezentare. Fiecare ceașcă este rezultatul unui proces meticulos.',
    'about.step1.title': 'Selecția Boabelor',
    'about.step1.desc': 'Aprovizionare din micro-loturi sezoniere.',
    'about.step2.title': 'Prepararea',
    'about.step2.desc': 'Precizie în fiecare gram și secundă.',
    'about.step3.title': 'Latte Art',
    'about.step3.desc': 'Atingerea finală a măiestriei.',
    'about.step4.title': 'Momente Împărtășite',
    'about.step4.desc': 'Bucuria primei înghițituri.',
    // Footer
    'footer.desc': 'Creăm momente de bucurie prin cafea de specialitate și comunitate în București.',
    'footer.location': 'Locație',
    'footer.hours': 'Program',
    'footer.follow': 'Urmărește-ne',
    'footer.rights': 'Toate drepturile rezervate.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ro' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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