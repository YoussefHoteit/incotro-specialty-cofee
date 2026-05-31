import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-coffee-cream">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif text-coffee-petrol mb-4">{t.notFound.title}</h1>
          <p className="text-xl text-coffee-charcoal/60 mb-8">{t.notFound.desc}</p>
          <Link to="/" className="bg-coffee-yellow text-coffee-petrol px-8 py-3 rounded-full font-bold hover:bg-coffee-gold transition-all inline-block">
            {t.notFound.return}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;