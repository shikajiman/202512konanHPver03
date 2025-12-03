import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'コンセプト', id: 'about' },
    { label: '仕事内容', id: 'work-style' },
    { label: '募集要項', id: 'recruitment' },
    { label: 'アクセス', id: 'access' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-theme-base/90 backdrop-blur-xl py-4 shadow-sm border-b border-theme-sand/50' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="https://www.kinbutsurex.co.jp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-col items-start gap-0.5"
        >
          <span className="font-serif text-xl md:text-2xl text-theme-charcoal tracking-widest group-hover:text-theme-terracotta transition-colors duration-300">
            KINBUTSU REX
          </span>
          <span className="text-[10px] text-theme-gray tracking-[0.2em] font-medium group-hover:text-theme-terracotta/70 transition-colors">
            近物レックス株式会社
          </span>
        </a>

        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 mr-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-serif text-theme-charcoal hover:text-theme-terracotta transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-theme-terracotta transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=近物レックス株式会社+コーナン小牧センター"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-xs font-medium text-theme-gray hover:text-theme-terracotta transition-all group"
          >
             <div className="p-2 bg-white rounded-full shadow-sm mr-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-3.5 h-3.5" />
             </div>
             <span className="border-b border-transparent group-hover:border-theme-terracotta pb-0.5">
               コーナン小牧センター地図
             </span>
          </a>
          <a 
            href={GOOGLE_FORM_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-theme-charcoal text-theme-base text-xs font-serif tracking-widest px-6 py-2.5 rounded-full shadow-lg hover:bg-theme-terracotta transition-colors duration-300"
          >
            採用情報
          </a>
        </div>
      </div>
    </header>
  );
};