import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Briefcase, FileText, MapPin, Send } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const MobileNav: React.FC = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // main要素のスクロール位置を取得するのではなく、windowスクロールを監視する場合
      // App.tsxの構造上、mainがスクロールコンテナになっているため、そちらのイベントが必要だが
      // 簡易的にIntersectionObserverの結果と連動させるのが理想。
      // ここでは簡易実装としてボタンクリックでの移動を主とする
    };
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  const navItems = [
    { id: 'hero', label: 'トップ', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: '魅力', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'work-style', label: '仕事', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'recruitment', label: '募集', icon: <FileText className="w-5 h-5" /> },
    { id: 'access', label: '地図', icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-t border-theme-sand/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"></div>
      
      <div className="relative flex justify-around items-center px-2 py-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
              activeId === item.id ? 'text-theme-terracotta bg-theme-terracotta/10' : 'text-theme-gray hover:text-theme-charcoal'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
          </button>
        ))}
        
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-2 text-white bg-theme-charcoal rounded-xl shadow-lg hover:bg-theme-terracotta transition-colors ml-1"
        >
          <Send className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wide">応募</span>
        </a>
      </div>
    </div>
  );
};