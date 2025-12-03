import React, { useState } from 'react';
import { Search, Layers, FileText, Plus, Minus, CheckCircle2, Clock, MessageCircle, ArrowDown } from 'lucide-react';
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
    engTitle: "Inspection",
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
    engTitle: "Case Sorting",
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
    engTitle: "Office Work",
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
    <div className="h-full flex flex-col justify-start overflow-y-auto no-scrollbar w-full">
      <div className="text-center mb-8 lg:mb-12 shrink-0">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-serif text-theme-charcoal mb-4">
            仕事内容
          </h2>
          <p className="text-theme-gray tracking-widest text-sm uppercase mb-4">
             お店のレスキュー隊として働く
          </p>
          <div className="w-px h-12 bg-theme-terracotta mx-auto opacity-50"></div>
        </ScrollReveal>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 perspective-[1000px] w-full pb-20">
        {jobs.map((job, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <div 
              onClick={() => toggleExpand(index)}
              className={`
                group relative bg-white rounded-[2rem] p-6 lg:p-8 cursor-pointer transition-all duration-700 border border-transparent flex flex-col
                ${expandedIndex === index 
                  ? 'shadow-card border-theme-terracotta/20 scale-[1.02] z-10' 
                  : 'shadow-soft hover:shadow-card hover:-translate-y-2 hover:rotate-1'}
              `}
            >
              <div className="flex justify-between items-start mb-4 lg:mb-6">
                <div className={`
                  p-4 lg:p-5 rounded-2xl transition-all duration-500
                  ${expandedIndex === index ? 'bg-theme-terracotta text-white shadow-glow' : 'bg-theme-sand text-theme-charcoal group-hover:bg-theme-apricot group-hover:scale-110'}
                `}>
                  {job.icon}
                </div>
                <span className="font-serif text-4xl lg:text-5xl text-theme-sand font-bold opacity-30 group-hover:opacity-60 transition-opacity">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg lg:text-xl font-bold mb-1 text-theme-charcoal group-hover:text-theme-terracotta transition-colors">
                {job.title}
              </h3>
              <p className="text-xs font-serif text-theme-terracotta tracking-widest uppercase mb-3 opacity-70">
                {job.engTitle}
              </p>
              
              <p className="text-theme-gray leading-relaxed text-sm mb-4 lg:mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                {job.description}
              </p>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                   <div className="pt-4 mt-2 border-t border-theme-sand/50 space-y-6">
                      
                      {/* Job Details */}
                      <div>
                        <p className="text-sm text-theme-charcoal leading-loose whitespace-pre-wrap">
                          {job.details}
                        </p>
                      </div>

                      {/* Tasks */}
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-theme-charcoal mb-2 text-sm">
                           <Clock className="w-4 h-4 text-theme-terracotta" /> 主な業務
                        </h4>
                        <ul className="space-y-2">
                          {job.tasks.map((task, i) => (
                            <li key={i} className="text-sm text-theme-gray flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-theme-sand rounded-full mt-1.5 flex-shrink-0"></span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Skills */}
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-theme-charcoal mb-2 text-sm">
                           <CheckCircle2 className="w-4 h-4 text-theme-terracotta" /> こんな方へ
                        </h4>
                        <ul className="space-y-2">
                          {job.skills.map((skill, i) => (
                            <li key={i} className="text-sm text-theme-gray flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-theme-sage rounded-full mt-1.5 flex-shrink-0"></span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-theme-sand/30 p-4 lg:p-6 rounded-2xl relative mt-2">
                        <MessageCircle className="w-6 h-6 text-theme-apricot absolute -top-3 -left-2 opacity-50" />
                        <p className="text-sm text-theme-charcoal italic mb-2 leading-relaxed relative z-10">
                          "{job.testimonial.text}"
                        </p>
                        <p className="text-xs text-theme-terracotta text-right font-bold tracking-wider">
                          — {job.testimonial.author}
                        </p>
                      </div>

                      {/* Scroll Button */}
                       <div className="pt-2">
                        <button 
                          onClick={(e) => scrollToRecruitment(index, e)}
                          className="flex w-full items-center justify-center gap-2 bg-white border border-theme-terracotta/30 text-theme-terracotta py-3 rounded-xl font-bold text-sm hover:bg-theme-terracotta hover:text-white transition-all duration-300 shadow-sm hover:shadow-glow"
                        >
                           応募要項 <ArrowDown className="w-4 h-4" />
                        </button>
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex justify-end mt-auto pt-4">
                 {expandedIndex === index ? (
                   <div className="flex items-center gap-2 text-xs text-theme-terracotta font-bold tracking-widest hover:opacity-70 transition-opacity">
                     閉じる <Minus className="w-4 h-4" />
                   </div>
                 ) : (
                   <div className="flex items-center gap-2 text-xs text-theme-gray group-hover:text-theme-terracotta font-bold tracking-widest transition-colors">
                     詳細を見る <Plus className="w-4 h-4" />
                   </div>
                 )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};