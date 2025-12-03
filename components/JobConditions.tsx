import React from 'react';
import { Clock, Calendar, Banknote, Sparkles, ArrowRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

const conditions = [
  {
    title: "女性作業員（検品・仕分・開梱）",
    engTitle: "WOMEN'S STAFF",
    image: "https://lh3.googleusercontent.com/d/15i5ONIHLGCLsD-LLM6w_5KJgjcmnnNf4", 
    wage: "時給 1,140円",
    time: (
      <div className="text-sm space-y-4">
        <div>
          <span className="font-bold text-theme-terracotta block mb-1.5">① フルタイム</span>
          <div className="pl-3 text-theme-charcoal leading-relaxed border-l-2 border-theme-sand">
            9:00〜18:00（実働8時間）<br/>
            火曜日〜土曜日（週5回出勤）<br/>
            <span className="text-xs text-theme-gray">※休憩合計1時間半</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-theme-terracotta block mb-1.5">② パートタイム（フルパート）</span>
          <div className="pl-3 text-theme-charcoal leading-relaxed border-l-2 border-theme-sand">
             9:00〜17:00（休憩1時間半）<br/>
             週1回 or 週2回
          </div>
        </div>
        <div>
          <span className="font-bold text-theme-terracotta block mb-1.5">③ ハーフパート</span>
          <div className="pl-3 text-theme-charcoal leading-relaxed border-l-2 border-theme-sand">
             9:00〜12:30 / 13:30〜17:00<br/>
             <span className="text-xs text-theme-gray">※休憩15分</span><br/>
             週1回〜週4回
          </div>
        </div>
      </div>
    ),
    days: "日・月定休（祝日は出勤）",
    benefits: [
      "年2回の賞与あり（7月・12月）",
      "昇給制度あり・交通費規定支給",
      "社会保険完備・個人ロッカー貸与",
      "エプロン貸与・ブランク復帰歓迎",
      "扶養内・ハーフシフト相談可"
    ]
  },
  {
    title: "男性構内作業員（ピッキング・仕分け・カゴ積み）",
    engTitle: "MEN'S STAFF",
    image: "https://lh3.googleusercontent.com/d/1jHQWrFYucv_uJbMMxx30hxSkrKk84F91", 
    wage: "時給 1,200円",
    time: (
      <div className="text-sm space-y-4">
        <div>
          <span className="font-bold text-theme-terracotta block mb-1.5">① フルタイム</span>
          <div className="pl-3 text-theme-charcoal leading-relaxed border-l-2 border-theme-sand">
            8:00〜17:00（実働8時間）<br/>
            火曜日〜土曜日<br/>
            <span className="text-xs text-theme-gray">※休憩1時間半</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-theme-terracotta block mb-1.5">② パートタイム</span>
          <div className="pl-3 text-theme-charcoal leading-relaxed border-l-2 border-theme-sand">
             8:00〜17:00（実働8時間）<br/>
             週2日勤務（火〜土の中で契約）<br/>
             <span className="text-xs text-theme-gray">※休憩1時間半</span>
          </div>
        </div>
      </div>
    ),
    days: "日・月定休（祝日は出勤）",
    benefits: [
      "年2回の賞与あり（7月・12月）",
      "交通費規定支給・社会保険完備",
      "正社員登用制度・資格取得支援",
      "長期キャリア形成支援",
      "制服貸与・未経験歓迎"
    ]
  },
  {
    title: "事務員（伝票整理・電話応対・入力）",
    engTitle: "OFFICE WORK",
    image: "https://lh3.googleusercontent.com/d/1JQ2dhlaQrtjiyHIVzzSOoL2lfvCzFnNS",
    imageClass: "object-contain bg-theme-sand/20", 
    wage: "時給 1,140円",
    time: (
      <div className="text-sm space-y-4">
        <div>
          <span className="font-bold text-theme-terracotta block mb-1.5">① フルタイム</span>
          <div className="pl-3 text-theme-charcoal leading-relaxed border-l-2 border-theme-sand">
            8:00〜17:00（実働8時間）<br/>
            火曜日〜土曜日（週5日勤務）<br/>
            <span className="text-xs text-theme-gray">※祝日・祭日は出勤必須</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-theme-terracotta block mb-1.5">② パートタイム</span>
          <div className="pl-3 text-theme-charcoal leading-relaxed border-l-2 border-theme-sand">
             8:00〜12:00 / 13:00〜17:00（実働4時間）<br/>
             週2回〜週4回（火〜土の中で契約）<br/>
             <span className="text-xs text-theme-gray">※祝日・祭日は出勤必須</span>
          </div>
        </div>
      </div>
    ),
    days: "日・月定休（祝日は出勤）",
    benefits: [
      "年2回の賞与あり（7月・12月）",
      "社会保険完備・交通費規定支給",
      "正社員登用制度・昇給あり",
      "PCスキル（Excel/Word）活かせる",
      "未経験歓迎・ブランクOK"
    ]
  }
];

export const JobConditions: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar">
      <div className="bg-white rounded-[3rem] p-6 md:p-16 shadow-soft shrink-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-theme-charcoal mb-4">
            Recruitment Guide
          </h2>
          <p className="text-theme-gray text-sm tracking-widest uppercase">
            募集要項・待遇について
          </p>
        </div>

        <div className="space-y-12">
          {conditions.map((item, index) => (
            <div 
              key={index} 
              id={`recruitment-${index}`} 
              className="group relative overflow-hidden rounded-3xl border border-theme-sand/50 hover:shadow-lg transition-all duration-500 bg-theme-base"
            >
              <div className="grid md:grid-cols-12 gap-0">
                
                {/* Image Section */}
                <div className="md:col-span-4 relative h-64 md:h-full min-h-[300px] overflow-hidden">
                   <img 
                     src={item.image} 
                     alt={item.title}
                     loading="lazy"
                     decoding="async"
                     referrerPolicy="no-referrer"
                     className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 ${item.imageClass || "object-cover"}`}
                   />
                   <div className="absolute inset-0 bg-theme-charcoal/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-serif tracking-widest text-theme-charcoal z-10">
                      0{index + 1}
                   </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
                   <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-6 border-b border-theme-sand pb-4">
                      <h3 className="text-xl md:text-2xl font-serif text-theme-charcoal">
                        {item.title}
                      </h3>
                      <span className="text-xs text-theme-terracotta tracking-[0.2em] font-bold">
                        {item.engTitle}
                      </span>
                   </div>

                   <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                      <div className="flex flex-col gap-2">
                         <span className="flex items-center gap-2 text-xs text-theme-gray font-bold tracking-wider">
                           <Banknote className="w-4 h-4 text-theme-terracotta" /> 給与
                         </span>
                         <p className="text-lg text-theme-charcoal font-medium pl-6">
                           {item.wage}
                         </p>
                      </div>

                      <div className="flex flex-col gap-2">
                         <span className="flex items-center gap-2 text-xs text-theme-gray font-bold tracking-wider">
                           <Clock className="w-4 h-4 text-theme-terracotta" /> 勤務時間
                         </span>
                         <div className="text-base text-theme-charcoal pl-6">
                           {item.time}
                         </div>
                      </div>

                      <div className="flex flex-col gap-2">
                         <span className="flex items-center gap-2 text-xs text-theme-gray font-bold tracking-wider">
                           <Calendar className="w-4 h-4 text-theme-terracotta" /> 休日・休暇
                         </span>
                         <p className="text-base text-theme-charcoal pl-6">
                           {item.days}
                         </p>
                      </div>

                      <div className="flex flex-col gap-2">
                         <span className="flex items-center gap-2 text-xs text-theme-gray font-bold tracking-wider">
                           <Sparkles className="w-4 h-4 text-theme-terracotta" /> 待遇・福利厚生
                         </span>
                         <ul className="pl-6 text-sm text-theme-charcoal space-y-1">
                            {item.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-theme-sage rounded-full"></span>
                                {benefit}
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   {/* Apply Button */}
                   <div className="mt-8 pt-6 border-t border-theme-sand/50">
                     <a 
                       href={GOOGLE_FORM_URL}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-theme-charcoal text-white py-3 px-8 rounded-full font-bold text-sm hover:bg-theme-terracotta transition-colors shadow-md group/btn"
                     >
                       この職種に応募する <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                     </a>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-24"></div> {/* Bottom spacer */}
      </div>
    </div>
  );
};