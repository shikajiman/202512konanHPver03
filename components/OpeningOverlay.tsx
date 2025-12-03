import React, { useLayoutEffect, useState } from 'react';

interface OpeningOverlayProps {
  onComplete?: () => void;
}

export const OpeningOverlay: React.FC<OpeningOverlayProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Initial lock is handled by App component now via isOpening prop,
    // but we double check here to be safe.
    window.scrollTo(0, 0);

    // Animation Sequence
    const t1 = setTimeout(() => setAnimationStep(1), 100);
    const t2 = setTimeout(() => setAnimationStep(2), 2200);
    const t3 = setTimeout(() => {
        setAnimationStep(3); // Curtain starts opening
        if (onComplete) onComplete();
    }, 3500);
    const t4 = setTimeout(() => setIsVisible(false), 5000); // Remove from DOM

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col transition-transform duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        animationStep === 3 ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
       {/* Background layers */}
       <div className="absolute inset-0 bg-theme-base z-0"></div>
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-multiply z-1"></div>

       {/* Content Container */}
       <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
          
          <div className="relative w-full max-w-7xl px-8 md:px-12">
             
             {/* 1. KINBUTSU REX (Slide Right to Left with Blur) */}
             <div className="overflow-visible py-4">
               <h1 
                 className={`font-serif text-4xl md:text-6xl lg:text-7xl text-theme-charcoal font-bold tracking-wider whitespace-nowrap transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                   animationStep >= 1 
                     ? 'translate-x-0 opacity-100 blur-0' 
                     : 'translate-x-[30%] opacity-0 blur-xl'
                 }`}
               >
                 近物レックス株式会社
               </h1>
             </div>

             {/* Decorative Line */}
             <div 
                className={`h-[1px] bg-theme-terracotta mt-4 mb-6 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-300 ${
                  animationStep >= 1 ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
             ></div>

             {/* 2. KONAN KOMAKI CENTER (Slide Right to Left with Blur, Delay) */}
             <div className="overflow-visible py-2 flex justify-end">
               <p 
                 className={`font-serif text-3xl md:text-5xl lg:text-6xl text-theme-gray tracking-wide font-medium transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 transform ${
                   animationStep >= 1 
                     ? 'translate-x-0 opacity-100 blur-0' 
                     : 'translate-x-[20%] opacity-0 blur-lg'
                 }`}
               >
                 コーナン小牧センター
               </p>
             </div>
          </div>
       </div>
    </div>
  );
};