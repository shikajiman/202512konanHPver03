import React, { useState } from 'react';
import { Layers, FileText, Plus, Minus, CheckCircle2, Clock, MessageCircle, ArrowDown, Search } from 'lucide-react';
import { JobType } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ExtendedJobType extends JobType {
  details: string;
  engTitle: string;
  tasks: string[];
  skills: string[];
  testimonial: {
    text: string;
    author: string;
  };
}

const jobs: ExtendedJobType[] = [
  {
    title: "女性作業員（検品・仕分・開梱）",
    engTitle: "検品業務",
    description: "ホームセンターの日用品を仕分ける簡単ワーク！バーコードをスキャンして棚に入れるだけ。",
    details: `入荷した商品を、各店舗に仕分けするお仕事です。専門知識や経験は一切不要。
以下の3つのステップを分担して繰り返すシンプルな作業です。

【1. 開梱】メーカーから届いた段ボール箱を開けて、中から商品を取り出します。
【2. 仕分】商品のバーコードを読み取り、光った棚に入れます。
【3. 検品】商品に傷がないかサッと確認します。`,
    tasks: [
        "入荷商品の箱開け（開梱作業）",
        "備え付けのスキャナでのバーコードスキャン",
        "デジタル表示（ピッキング）に従った仕分け",
        "商品の簡易的な傷・汚れチェック"
    ],
    skills: [
        "未経験の方大歓迎",
        "コツコツとした作業が好きな方",
        "適度に体を動かして働きたい方"
    ],
    testimonial: {
        text: "最初は機械の操作が不安でしたが、ランプが光って場所を教えてくれるので、ゲーム感覚で覚えられました。私でも初日から即戦力になれて嬉しかったです。",
        author: "パート歴1年・30代女性"
    },
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "男性構内作業員（ピッキング・仕分け・カゴ積み）",
    engTitle: "ケース仕分け",
    description: "店舗ごとに商品をケース単位で仕分けます。適度に体を動かして、リズムよく働けるお仕事です。",
    details: "商品の入ったダンボール（ケース）を、配送先の店舗ごとに仕分ける作業がメインです。リストを見ながら正確に、そしてスピーディーに。特別なスキルは不要で、未経験からでもすぐに活躍できます。",
    tasks: [
        "商品ケースの行先ラベル確認",
        "店舗別カゴ車への積み込み",
        "出荷バースへの移動",
        "荷崩れ防止のラップ巻き作業"
    ],
    skills: [
        "チームワークを大切にできる方",
        "リズムよく動くのが好きな方",
        "整理整頓が得意な方"
    ],
    testimonial: {
        text: "体を動かす仕事がしたくて入社しました。最初は体力を使いますが、慣れればいい運動になります。正社員登用の制度もあるので、将来を見据えて頑張っています。",
        author: "準社員歴3年・30代男性"
    },
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "事務員（伝票整理・電話応対・入力）",
    engTitle: "一般事務",
    description: "データ入力や電話対応など、物流センターをバックオフィスから支える大切なお仕事です。",
    details: "物流センターの「司令塔」として、現場がスムーズに動けるようにサポートします。ドライバーさんの受付対応や、専用システムへのデータ入力など、事務作業全般をお任せします。現場と連携を取ることも多い、やりがいのあるポジションです。",
    tasks: [
        "専用システムへのデータ入力",
        "配送伝票の出力・仕分け・整理",
        "電話対応（社内・ドライバー・他拠点）",
        "ドライバーさんの受付対応"
    ],
    skills: [
        "PCの基本操作（文字入力）ができる方",
        "明るい対応ができる方",
        "人をサポートするのが好きな方"
    ],
    testimonial: {
        text: "物流の知識は全くありませんでしたが、先輩が優しく教えてくれたので安心でした。ドライバーさんからの「ありがとう」という言葉に日々やりがいを感じています。",
        author: "事務歴3年・30代女性"
    },
    icon: <FileText className="w-6 h-6" />
  }
];

export const JobCards: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scrollToRecruitment = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.getElementById(`recruitment-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-center mb-6 lg:mb-8 shrink-0 px-6 pt-4 md:pt-0">
        <ScrollReveal>
          <h2 className="text-2xl md:text-5xl font-serif text-theme-charcoal mb-2 md:mb-4">
            仕事内容
          </h2>
          <p className="text-theme-gray tracking-widest text-xs md:text-sm uppercase mb-4">
             お店のレスキュー隊として働く
          </p>
          <div className="w-px h-8 md:h-12 bg-theme-terracotta mx-auto opacity-50"></div>
        </ScrollReveal>
      </div>
      
      {/* Cards Grid: Mobile(Vertical), PC(3 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-6 w-full pb-12">
        {jobs.map((job, index) => (
          <div key={index} className="w-full">
            <ScrollReveal delay={index * 150}>
              <div 
                onClick={() => toggleExpand(index)}
                className={`
                  group relative bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 lg:p-6 cursor-pointer flex flex-col
                  transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-transparent
                  ${expandedIndex === index 
                    ? 'shadow-2xl scale-[1.02] border-theme-terracotta/20 z-10' 
                    : 'shadow-soft hover:shadow-card hover:scale-[1.02] hover:-translate-y-1'}
                `}
              >
                <div className="flex justify-between items-start mb-3 lg:mb-4">
                  <div className={`
                    p-3 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${expandedIndex === index ? 'bg-theme-terracotta text-white shadow-glow rotate-6 scale-110' : 'bg-theme-sand text-theme-charcoal group-hover:bg-theme-apricot group-hover:-rotate-6 group-hover:scale-110'}
                  `}>
                    {job.icon}
                  </div>
                  <span className="font-serif text-3xl lg:text-4xl text-theme-sand font-bold opacity-30 group-hover:opacity-60 transition-opacity">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base lg:text-lg font-bold mb-1 text-theme-charcoal group-hover:text-theme-terracotta transition-colors">
                  {job.title}
                </h3>
                <p className="text-[10px] md:text-xs font-serif text-theme-terracotta tracking-widest mb-2 md:mb-3 opacity-70">
                  {job.engTitle}
                </p>
                
                <p className="text-theme-gray leading-relaxed text-xs md:text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {job.description}
                </p>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                     <div className="pt-4 mt-2 border-t border-theme-sand/50 space-y-4">
                        
                        {/* Job Details */}
                        <div className="mb-4">
                          <p className="text-xs text-theme-charcoal leading-loose whitespace-pre-wrap">
                            {job.details}
                          </p>
                        </div>

                        {/* Tasks & Skills Grid */}
                        <div className="flex flex-col gap-3">
                          {/* Tasks */}
                          <div className="bg-theme-base/60 p-3 rounded-xl border border-theme-sand/40">
                            <h4 className="flex items-center gap-2 font-bold text-theme-charcoal mb-2 text-xs uppercase tracking-wider">
                               <Clock className="w-3 h-3 text-theme-terracotta" /> 主な業務
                            </h4>
                            <ul className="space-y-1.5">
                              {job.tasks.map((task, i) => (
                                <li key={i} className="text-[10px] md:text-xs text-theme-gray flex items-start gap-2 leading-relaxed">
                                  <span className="w-1 h-1 bg-theme-sand rounded-full mt-1.5 flex-shrink-0"></span>
                                  <span className="flex-1">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Skills */}
                          <div className="bg-theme-base/60 p-3 rounded-xl border border-theme-sand/40">
                            <h4 className="flex items-center gap-2 font-bold text-theme-charcoal mb-2 text-xs uppercase tracking-wider">
                               <CheckCircle2 className="w-3 h-3 text-theme-sage" /> こんな方へ
                            </h4>
                            <ul className="space-y-1.5">
                              {job.skills.map((skill, i) => (
                                <li key={i} className="text-[10px] md:text-xs text-theme-gray flex items-start gap-2 leading-relaxed">
                                  <span className="w-1 h-1 bg-theme-sage rounded-full mt-1.5 flex-shrink-0"></span>
                                  <span className="flex-1">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-theme-sand/30 p-3 rounded-xl relative mt-2">
                          <MessageCircle className="w-4 h-4 text-theme-apricot absolute -top-2 -left-1 opacity-50" />
                          <p className="text-[10px] md:text-xs text-theme-charcoal italic mb-1 leading-relaxed relative z-10">
                            "{job.testimonial.text}"
                          </p>
                          <p className="text-[10px] text-theme-terracotta text-right font-bold tracking-wider">
                            — {job.testimonial.author}
                          </p>
                        </div>

                        {/* Scroll Button */}
                         <div className="pt-1">
                          <button 
                            onClick={(e) => scrollToRecruitment(index, e)}
                            className="flex w-full items-center justify-center gap-2 bg-white border border-theme-terracotta/30 text-theme-terracotta py-2 rounded-lg font-bold text-xs hover:bg-theme-terracotta hover:text-white transition-all duration-300 shadow-sm"
                          >
                             募集要項を見る <ArrowDown className="w-3 h-3" />
                          </button>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="flex justify-end mt-auto pt-4">
                   {expandedIndex === index ? (
                     <div className="flex items-center gap-2 text-[10px] text-theme-terracotta font-bold tracking-widest hover:opacity-70 transition-opacity">
                       閉じる <Minus className="w-3 h-3" />
                     </div>
                   ) : (
                     <div className="flex items-center gap-2 text-[10px] text-theme-gray group-hover:text-theme-terracotta font-bold tracking-widest transition-colors">
                       詳細を見る <Plus className="w-3 h-3" />
                     </div>
                   )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  );
};