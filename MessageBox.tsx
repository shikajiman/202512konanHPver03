import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// ==========================================
// 画像の編集はこちら
// ==========================================
const MESSAGE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1wE-F7XmJUWcsunb5dJEq9BIGs1kYi4Ni";
// ==========================================

export const MessageBox: React.FC = () => {
  return (
    <div className="relative bg-white rounded-[4rem] p-8 md:p-24 shadow-soft overflow-hidden">
      {/* Background Shapes (Parallax-like feeling) */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-theme-sand/40 to-transparent skew-x-12 translate-x-20"></div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-serif text-theme-charcoal leading-tight mb-10">
              ここは、<br/>
              <span className="text-theme-terracotta relative inline-block">
                トラックに乗らない
                <span className="absolute bottom-1 left-0 w-full h-3 bg-theme-terracotta/10 -z-10"></span>
              </span><br/>
              近物レックス
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="space-y-8 text-theme-gray leading-loose font-medium text-lg">
              <p>
                「運送会社＝ドライバー」というイメージ、<br className="hidden lg:block"/>
                少しだけ横に置いてみてください。
              </p>
              <div className="pl-6 border-l-2 border-theme-terracotta/30">
                <p>
                  ここは、お店に並ぶ前の商品を整える<br/>
                  <strong className="text-theme-charcoal text-xl">「屋内」でのバックヤード業務</strong>がメイン。
                </p>
              </div>
              <p>
                重いものばかりじゃない。難しい機械操作もない。<br/>
                まるで文化祭の準備のような、<br/>
                程よい活気と、心地よい疲労感がある場所です。
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="relative">
          <ScrollReveal direction="left" delay={300}>
            <div className="aspect-[4/5] rounded-t-[12rem] rounded-b-[3rem] overflow-hidden relative shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-1000">
              <img 
                src={MESSAGE_IMAGE_URL}
                alt="Bright Warehouse Work" 
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2000ms] ease-out"
                onError={(e) => {
                  console.error("Message Box Image Load Failed");
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                }}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-theme-charcoal/20 to-transparent pointer-events-none"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500} className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-12 z-20">
            <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-card border border-white/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-theme-sage rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-theme-sage tracking-widest">安心・清潔</span>
              </div>
              <p className="font-serif text-theme-charcoal">
                冷暖房完備の<br/>休憩室あり
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};