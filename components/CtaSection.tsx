
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const CtaSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[3rem] shadow-glow max-w-5xl mx-auto">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-theme-terracotta via-[#D07B5D] to-theme-charcoal"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Decorative Light */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-theme-apricot rounded-full mix-blend-overlay blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 px-8 py-20 md:p-24 text-center text-white">
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight tracking-wide">
                次のステージは、<br/>
                ここから始まります。
            </h2>
            <p className="text-theme-base/90 text-lg mb-12 font-medium tracking-wider">
                契約社員・アルバイト・パート募集中。<br/>
                まずは面談の申込みをしましょう。
            </p>
            
            <a 
                href={GOOGLE_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-theme-terracotta py-4 px-12 rounded-full font-serif text-lg tracking-widest hover:bg-theme-sand transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
                <span>APPLY NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="mt-8 text-xs text-white/50 tracking-widest uppercase">
              Kinbutsu Rex Co., Ltd. Konan Komaki Center
            </p>
        </div>
    </div>
  );
};
