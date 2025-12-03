import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MessageBox } from './components/MessageBox';
import { JobCards } from './components/JobCards';
import { JobConditions } from './components/JobConditions';
import { StatsSection } from './components/StatsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AccessMap } from './components/AccessMap';
import { OpeningOverlay } from './components/OpeningOverlay';
import { Scene } from './components/Scene';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpening, setIsOpening] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  const scenes = [
    { id: 'hero', label: 'トップ' },
    { id: 'about', label: 'コンセプト' },
    { id: 'work-style', label: '仕事内容' },
    { id: 'recruitment', label: '募集要項' },
    { id: 'data', label: 'データ' },
    { id: 'access', label: 'アクセス' },
  ];

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    if (isOpening && mainRef.current) {
      mainRef.current.scrollTop = 0;
      mainRef.current.style.overflow = 'hidden';
    } else if (!isOpening && mainRef.current) {
      mainRef.current.style.overflow = '';
      mainRef.current.style.overflowY = '';
    }
  }, [isOpening]);

  const handleSceneVisible = (id: string) => {
    if (!isOpening) {
      setActiveSection(id);
    }
  };

  const scrollToScene = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full bg-theme-base text-theme-charcoal selection:bg-theme-terracotta selection:text-white overflow-hidden relative">
      
      {/* Background Textures & Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[0] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-theme-apricot/20 rounded-full blur-[120px] transition-transform duration-[3000ms] ${activeSection === 'work-style' ? 'translate-x-20 translate-y-20' : ''}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-theme-sage/10 rounded-full blur-[100px] transition-transform duration-[3000ms] ${activeSection === 'recruitment' ? '-translate-x-20 -translate-y-20' : ''}`}></div>
      </div>

      <OpeningOverlay onComplete={() => setIsOpening(false)} />
      <Header />
      
      {/* Main Container: No Snap on Mobile, Snap on Desktop */}
      <main 
        ref={mainRef}
        className={`h-full w-full md:snap-y md:snap-mandatory no-scrollbar ${isOpening ? 'overflow-hidden' : 'overflow-y-scroll'}`}
      >
        
        {/* Scene 1: Hero */}
        <Scene id="hero" onVisible={handleSceneVisible} className="pt-0 md:pt-0">
          <Hero />
        </Scene>
        
        {/* Scene 2: About (Message Box) */}
        <Scene id="about" onVisible={handleSceneVisible} className="bg-gradient-to-b from-transparent to-theme-sand/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl h-full flex items-center justify-center">
             <div className="w-full">
               <MessageBox />
             </div>
          </div>
        </Scene>

        {/* Scene 3: Work Style (Job Cards) */}
        <Scene id="work-style" onVisible={handleSceneVisible} className="bg-theme-sand/10">
           <div className="container mx-auto px-4 md:px-6 max-w-7xl h-full flex flex-col justify-start md:justify-center pt-20 md:pt-32 pb-4 md:pb-10">
              <JobCards />
           </div>
        </Scene>

        {/* Scene 4: Recruitment (Conditions) */}
        <Scene id="recruitment" onVisible={handleSceneVisible}>
           <div className="container mx-auto px-4 md:px-6 max-w-7xl h-full flex flex-col justify-start md:justify-center pt-20 md:pt-32 pb-4 md:pb-20">
              <JobConditions />
           </div>
        </Scene>

        {/* Scene 5: Data */}
        <Scene id="data" onVisible={handleSceneVisible} className="bg-gradient-to-b from-theme-base to-theme-sand/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl h-full flex flex-col justify-center py-8 md:py-12">
             <div className="w-full max-w-5xl mx-auto">
               <StatsSection />
             </div>
          </div>
        </Scene>
        
        {/* Scene 6: Access & Apply */}
        <Scene id="access" onVisible={handleSceneVisible}>
          <div className="container mx-auto px-4 md:px-6 max-w-5xl h-full flex flex-col justify-start md:justify-center pt-20 md:pt-32 pb-16 md:pb-24 overflow-y-auto no-scrollbar">
            <div className="space-y-8 md:space-y-16">
               <AccessMap />
               <CtaSection />
               <div className="pt-4 md:pt-8">
                 <Footer />
               </div>
            </div>
          </div>
        </Scene>

      </main>

      {/* Desktop Floating Navigation Dots */}
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 transition-opacity duration-1000 ${isOpening ? 'opacity-0' : 'opacity-100'}`}>
        {scenes.map((scene) => (
          <button
            key={scene.id}
            onClick={() => scrollToScene(scene.id)}
            className="group flex items-center gap-3 justify-end"
            aria-label={`${scene.label}へ移動`}
          >
            <span className={`text-xs font-serif tracking-widest transition-all duration-300 ${
              activeSection === scene.id ? 'text-theme-charcoal opacity-100' : 'text-theme-gray opacity-0 group-hover:opacity-100'
            }`}>
              {scene.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-500 border border-theme-charcoal ${
              activeSection === scene.id ? 'bg-theme-charcoal scale-125' : 'bg-transparent hover:bg-theme-charcoal/50'
            }`}></div>
          </button>
        ))}
      </div>

    </div>
  );
};

export default App;