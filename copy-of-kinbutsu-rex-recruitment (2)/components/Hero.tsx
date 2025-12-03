import React, { useState, useEffect } from 'react';
import { ArrowDown, Loader2 } from 'lucide-react';

const CAROUSEL_IMAGES = [
  {
    url: "https://lh3.googleusercontent.com/d/15i5ONIHLGCLsD-LLM6w_5KJgjcmnnNf4",
    alt: "近物レックス 職場風景 1"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1xYXWjsbbbiI-eZlpSxDEX__62-05cUaR",
    alt: "近物レックス 職場風景 2"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1u3TUO36w4VMKN0IUx7sjUh_4NIvQCuat",
    alt: "近物レックス 職場風景 3"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1cOPnvgGLQXt87Nwr2vw0fx36zQ_ARGbA",
    alt: "近物レックス 職場風景 4"
  }
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (url: string) => {
    setLoadedImages((prev) => ({ ...prev, [url]: true }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden" aria-label="Hero Section">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-16 items-center h-full">
        
        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative z-20">
          <div className="animate-fade-up" style={{ animationDelay: '2.5s' }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-theme-terracotta"></span>
              <span className="text-theme-terracotta text-sm tracking-[0.2em] font-serif font-bold uppercase">
                採用情報
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-theme-charcoal leading-[1.1] mb-8 tracking-wide">
              <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '2.6s' }}>物流は、</span>
              <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '2.8s' }}>もっと</span>
              <span className="relative inline-block z-0 opacity-0 animate-fade-up" style={{ animationDelay: '3.0s' }}>
                 自由でいい。
                 <span className="absolute bottom-3 left-0 w-full h-3 md:h-5 bg-theme-terracotta/20 -z-10 transform -rotate-1 origin-left animate-scale-slow"></span>
              </span>
              <span className="text-lg md:text-2xl mt-6 block font-medium leading-relaxed text-theme-charcoal/80 opacity-0 animate-fade-up" style={{ animationDelay: '3.2s' }}>
                契約社員・アルバイト・<br className="lg:hidden"/>パート募集中。
              </span>
            </h1>

            <p className="text-theme-gray leading-loose mb-10 text-sm md:text-base font-medium opacity-0 animate-fade-up" style={{ animationDelay: '3.4s' }}>
              話したくない日だってある。<br/>
              そんなあなたを、物流は歓迎します。<br/>
              小牧で始める、新しいワークスタイル。
            </p>

            <div className="hidden lg:flex items-center gap-3 text-theme-gray/50 opacity-0 animate-fade-up" style={{ animationDelay: '3.6s' }}>
              <span className="text-xs tracking-widest uppercase">スクロールして見る</span>
              <div className="animate-bounce duration-[2000ms]">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Visual */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[45vh] lg:h-[70vh]" role="region" aria-label="Workplace Image Carousel">
          <div className="absolute inset-0 rounded-tl-[60px] rounded-br-[60px] lg:rounded-tl-[160px] lg:rounded-br-[160px] overflow-hidden shadow-2xl opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
             <div className="absolute inset-0 bg-theme-charcoal/5 z-10 mix-blend-multiply pointer-events-none" aria-hidden="true"></div>
             
             {CAROUSEL_IMAGES.map((image, index) => {
               const isLoaded = loadedImages[image.url];
               const isActive = index === currentImageIndex;

               return (
                 <React.Fragment key={image.url}>
                   <div 
                      className={`absolute inset-0 bg-theme-sand flex items-center justify-center transition-opacity duration-1000 ${isActive && !isLoaded ? 'opacity-100' : 'opacity-0'} ${isLoaded ? 'pointer-events-none' : ''}`}
                      aria-hidden="true"
                   >
                      <Loader2 className="w-10 h-10 text-theme-terracotta/40 animate-spin" />
                   </div>

                   <div 
                     className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                       isActive && isLoaded ? 'opacity-100' : 'opacity-0'
                     }`}
                     aria-hidden={!isActive}
                   >
                     <img 
                       src={image.url}
                       alt={image.alt} 
                       referrerPolicy="no-referrer"
                       decoding="async"
                       onLoad={() => handleImageLoad(image.url)}
                       className={`w-full h-full object-cover ${isActive ? 'animate-ken-burns' : ''}`}
                       onError={(e) => {
                         console.error(`Image load failed: ${image.url}`);
                         e.currentTarget.src = `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`;
                         handleImageLoad(image.url);
                       }}
                     />
                   </div>
                 </React.Fragment>
               );
             })}

             <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-20 flex gap-3">
               {CAROUSEL_IMAGES.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentImageIndex(index)}
                   className={`h-1 rounded-full transition-all duration-500 ${
                     index === currentImageIndex 
                       ? 'w-6 lg:w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                       : 'w-2 bg-white/40 hover:bg-white/70'
                   }`}
                   aria-label={`Go to slide ${index + 1}`}
                   aria-current={index === currentImageIndex ? 'true' : 'false'}
                 />
               ))}
             </div>
          </div>
          
          {/* Floating Card */}
          <div className="absolute bottom-4 left-0 lg:bottom-12 lg:-left-8 bg-white/90 backdrop-blur-xl p-6 lg:p-8 rounded-tr-[30px] rounded-bl-[30px] shadow-card border border-white/50 max-w-[220px] lg:max-w-[260px] z-20 opacity-0 animate-fade-up" style={{ animationDelay: '3s' }}>
             <p className="font-serif text-lg lg:text-xl text-theme-charcoal mb-1">小牧センター</p>
             <p className="text-[10px] text-theme-gray mb-3 tracking-widest font-bold opacity-60">KOMAKI CENTER</p>
             <div className="flex items-center gap-2">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-terracotta opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-theme-terracotta"></span>
                </span>
               <span className="text-xs text-theme-charcoal font-bold tracking-wider">現在、募集中</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};