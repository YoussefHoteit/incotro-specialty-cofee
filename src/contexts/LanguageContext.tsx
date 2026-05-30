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
    brandIntro: {
      label: "The Philosophy",
      title: "More than just a cup.",
      titleItalic: "It's a destination.",
      description: "At înCotro, we believe every coffee tells a story. Our identity reflects the vibrant energy of Bucharest paired with the calm focus of a master craftsman.",
      features: [
        { title: "Craft Coffee", desc: "Sourced from the world's best micro-lots and roasted to perfection." },
        { title: "Cozy Space", desc: "A unique blend of deep blue walls and warm yellow accents." },
        { title: "Local Community", desc: "Where Bucharest's creative souls meet for their daily ritual." }
      ]
    },
    experience: {
      title: "The înCotro Experience",
      description: "Step into a world where time slows down. Our space is designed to inspire, with deep blue walls that provide a calm backdrop.",
      est: "Est. 2023 Bucharest",
      items: [
        { title: "The Interior", desc: "Deep blue walls & warm lighting" },
        { title: "The Craft", desc: "Precision in every pour" },
        { title: "The Vibe", desc: "Fresh flowers & cozy corners" }
      ]
    },
    menuPreview: {
      label: "Our Favorites",
      title: "Crafted with Precision",
      cta: "Explore Full Menu"
    },
    community: {
      title: "A Place for Bucharest's Soul",
      description: "înCotro isn't just about the coffee—it's about the people. Whether you're here to work, catch up with friends, or enjoy solitude.",
      joined: "Joined by 500+ locals"
    },
    finalCta: {
      title: "Stop by for your next",
      titleYellow: "favorite cup.",
      description: "We're waiting for you in the heart of Bucharest with fresh beans and warm smiles.",
      button: "Find Us in Bucharest"
    },
    footer: {
      location: "Location",
      hours: "Hours",
      follow: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      desc: "Crafting moments of joy through specialty coffee and community in Bucharest."
    },
    menuPage: {
      title: "Menu",
      description: "Crafted coffee, seasonal drinks, and small bites served with care.",
      allergy: "Please inform our staff of any allergies. Oat and almond milk alternatives are available.",
      categories: {
        espresso: "Espresso Bar",
        filter: "Filter Coffee",
        nonCoffee: "Non-Coffee & Seasonal",
        pastries: "Pastries & Bites"
      }
    },
    galleryPage: {
      label: "Visual Story",
      title: "Gallery",
      description: "A glimpse into our coffee, colors, corners, and everyday moments.",
      follow: "Follow the colors of înCotro.",
      instaDesc: "Join our community on Instagram for daily doses of specialty coffee and Bucharest vibes.",
      followBtn: "Follow Us"
    },
    contactPage: {
      label: "Get in Touch",
      title: "Visit Us",
      description: "Your next coffee stop in Bucharest. We're waiting for you with fresh beans and warm smiles.",
      formTitle: "Send us a message",
      formDesc: "Have a question or just want to say hi? Drop us a line below.",
      labels: { name: "Name", email: "Email", message: "Message" },
      placeholders: { name: "Your name", email: "Your email address", message: "How can we help you?" },
      send: "Send Message",
      mapTitle: "Find us here",
      directions: "Get Directions",
      invitation: "Community Invitation",
      quote: "“Come for the coffee, stay for the color, warmth, and conversation.”",
      cta: "We’ll save you a seat.",
      viewMenu: "View Menu"
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
    brandIntro: {
      label: "Filozofia",
      title: "Mai mult decât o ceașcă.",
      titleItalic: "Este o destinație.",
      description: "La înCotro, credem că fiecare cafea spune o poveste. Identitatea noastră reflectă energia vibrantă a Bucureștiului.",
      features: [
        { title: "Cafea Artizanală", desc: "Provenită din cele mai bune micro-loturi și prăjită la perfecțiune." },
        { title: "Spațiu Primitor", desc: "Un amestec unic de pereți albaștri și accente galbene calde." },
        { title: "Comunitate Locală", desc: "Unde sufletele creative ale Bucureștiului se întâlnesc pentru ritualul zilnic." }
      ]
    },
    experience: {
      title: "Experiența înCotro",
      description: "Pășește într-o lume unde timpul încetinește. Spațiul nostru este conceput să inspire, cu pereți albaștri ce oferă calm.",
      est: "Est. 2023 București",
      items: [
        { title: "Interiorul", desc: "Pereți albaștri și lumină caldă" },
        { title: "Măiestria", desc: "Precizie în fiecare picătură" },
        { title: "Atmosfera", desc: "Flori proaspete și colțuri cozy" }
      ]
    },
    menuPreview: {
      label: "Favoritele Noastre",
      title: "Creat cu Precizie",
      cta: "Explorează Meniul Complet"
    },
    community: {
      title: "Un Loc pentru Sufletul Bucureștiului",
      description: "înCotro nu este doar despre cafea—este despre oameni. Fie că ești aici să lucrezi sau să te vezi cu prietenii.",
      joined: "Peste 500 de localnici ni s-au alăturat"
    },
    finalCta: {
      title: "Treci pe la noi pentru următoarea ta",
      titleYellow: "ceașcă preferată.",
      description: "Te așteptăm în inima Bucureștiului cu boabe proaspete și zâmbete calde.",
      button: "Găsește-ne în București"
    },
    footer: {
      location: "Locație",
      hours: "Program",
      follow: "Urmărește-ne",
      rights: "Toate drepturile rezervate.",
      privacy: "Politică de Confidențialitate",
      terms: "Termeni și Condiții",
      desc: "Creăm momente de bucurie prin cafea de specialitate și comunitate în București."
    },
    menuPage: {
      title: "Meniu",
      description: "Cafea artizanală, băuturi sezoniere și gustări servite cu grijă.",
      allergy: "Vă rugăm să informați personalul despre orice alergii. Alternativele de lapte de ovăz și migdale sunt disponibile.",
      categories: {
        espresso: "Bar Espresso",
        filter: "Cafea la Filtru",
        nonCoffee: "Non-Cafea & Sezonier",
        pastries: "Patiserie & Gustări"
      }
    },
    galleryPage: {
      label: "Poveste Vizuală",
      title: "Galerie",
      description: "O privire asupra cafelei noastre, culorilor și momentelor de zi cu zi.",
      follow: "Urmărește culorile înCotro.",
      instaDesc: "Alătură-te comunității noastre pe Instagram pentru doza zilnică de cafea și vibe-uri bucureștene.",
      followBtn: "Urmărește-ne"
    },
    contactPage: {
      label: "Contact",
      title: "Vizitează-ne",
      description: "Următoarea ta oprire pentru cafea în București. Te așteptăm cu drag.",
      formTitle: "Trimite-ne un mesaj",
      formDesc: "Ai o întrebare sau vrei doar să ne saluți? Scrie-ne mai jos.",
      labels: { name: "Nume", email: "Email", message: "Mesaj" },
      placeholders: { name: "Numele tău", email: "Adresa ta de email", message: "Cum te putem ajuta?" },
      send: "Trimite Mesajul",
      mapTitle: "Găsește-ne aici",
      directions: "Obține Indicații",
      invitation: "Invitație în Comunitate",
      quote: "“Vino pentru cafea, rămâi pentru culoare, căldură și conversație.”",
      cta: "Îți păstrăm un loc.",
      viewMenu: "Vezi Meniul"
    }
  }
};