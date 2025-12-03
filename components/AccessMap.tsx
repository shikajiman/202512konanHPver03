import React from 'react';
import { MapPin, Car, Train } from 'lucide-react';

export const AccessMap: React.FC = () => {
  return (
    <section className="py-20 container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-theme-charcoal mb-4">
          Access
        </h2>
        <p className="text-theme-gray text-sm tracking-widest uppercase">
          勤務地・アクセス
        </p>
      </div>

      <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-soft border border-theme-sand/50">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Map Area */}
          <div className="w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden relative shadow-inner bg-theme-sand/20">
            <iframe
              src="https://maps.google.com/maps?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%B0%8F%E7%89%A7%E5%B8%82%E5%A0%80%E3%81%AE%E5%86%854%E4%B8%81%E7%9B%AE136-1&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kinbutsu Rex Konan Komaki Center Map"
              className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

          {/* Info Area */}
          <div className="flex flex-col justify-center p-4 md:p-8">
             <div className="mb-8">
               <h3 className="flex items-center gap-3 text-xl font-bold text-theme-charcoal mb-4">
                 <span className="p-3 bg-theme-terracotta/10 rounded-full text-theme-terracotta">
                   <MapPin className="w-6 h-6" />
                 </span>
                 近物レックス（株）<br/>コーナン小牧センター
               </h3>
               <p className="text-theme-gray leading-loose pl-14">
                 〒485-0046<br/>
                 愛知県小牧市堀の内4丁目136-1
               </p>
             </div>

             <div className="space-y-6 pl-4 border-l-2 border-theme-sand ml-5">
               <div className="flex items-start gap-4">
                 <Car className="w-5 h-5 text-theme-sage mt-1 flex-shrink-0" />
                 <div>
                   <span className="block font-bold text-theme-charcoal text-sm mb-1">車・バイク通勤OK</span>
                   <p className="text-sm text-theme-gray">
                     無料駐車場・駐輪場を完備しています。<br/>
                     小牧インターから車で約5分。
                   </p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <Train className="w-5 h-5 text-theme-sage mt-1 flex-shrink-0" />
                 <div>
                   <span className="block font-bold text-theme-charcoal text-sm mb-1">最寄り駅</span>
                   <p className="text-sm text-theme-gray">
                     名鉄小牧線「小牧駅」より徒歩で20分
                   </p>
                 </div>
               </div>
             </div>

             <div className="mt-8 pt-8 border-t border-theme-sand/50 text-center lg:text-left">
               <a 
                 href="https://www.google.com/maps/dir//愛知県小牧市堀の内4丁目136-1"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-sm text-theme-terracotta font-bold hover:underline"
               >
                 Googleマップでルートを調べる
               </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};