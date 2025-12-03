import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { ScrollReveal } from './ScrollReveal';

const genderData = [
  { name: '男性', value: 6, color: '#98A890' }, // Sage
  { name: '女性', value: 23, color: '#E08E6D' }, // Terracotta
];

const ageData = [
  { name: '20-30代', value: 4 },
  { name: '40代', value: 10 },
  { name: '50代以上', value: 15 },
];

export const StatsSection: React.FC = () => {
  return (
    <div>
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-theme-sand pb-8">
          <div>
             <h2 className="text-3xl md:text-5xl font-serif text-theme-charcoal mb-4">
               Data & Statistics
             </h2>
             <p className="text-theme-gray">
               数字で見る、小牧センターの働きやすさ。
             </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
             <p className="font-serif text-theme-terracotta text-lg tracking-widest">REAL VOICE</p>
          </div>
        </div>
      </ScrollReveal>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Gender Chart Card */}
        <ScrollReveal delay={100} className="h-full">
          <div className="bg-white rounded-[2rem] p-10 shadow-soft h-full relative overflow-hidden group hover:shadow-card transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-theme-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <h3 className="text-xl font-serif text-theme-charcoal">
                男女比率
              </h3>
              <span className="text-xs text-theme-gray border border-theme-sand px-3 py-1 rounded-full">GENDER</span>
            </div>

            <div className="h-[240px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={6}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={12}
                    startAngle={90}
                    endAngle={-270}
                    isAnimationActive={true}
                    animationDuration={1500}
                    animationBegin={200}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontFamily: 'Zen Maru Gothic' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                 <span className="text-4xl font-serif text-theme-charcoal font-bold tracking-widest">2:8</span>
              </div>
            </div>
            <div className="flex justify-center gap-8 mt-6 text-sm text-theme-gray font-medium">
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-theme-sage shadow-sm"></span> 男性 21%
               </div>
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-theme-terracotta shadow-sm"></span> 女性 79%
               </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Age Chart Card */}
        <ScrollReveal delay={200} className="h-full">
          <div className="bg-white rounded-[2rem] p-10 shadow-soft h-full relative overflow-hidden group hover:shadow-card transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-theme-terracotta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <h3 className="text-xl font-serif text-theme-charcoal">
                年齢層バランス
              </h3>
              <span className="text-xs text-theme-gray border border-theme-sand px-3 py-1 rounded-full">AGE</span>
            </div>
            
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ageData}
                  layout="vertical"
                  margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                  barSize={24}
                >
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={80} 
                    tick={{fill: '#4A4238', fontSize: 13, fontFamily: 'Zen Maru Gothic', fontWeight: 500}} 
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                     cursor={{fill: 'transparent'}}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontFamily: 'Zen Maru Gothic' }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#E08E6D" 
                    radius={[0, 12, 12, 0] as any}
                    background={{ fill: '#F2EFE9', radius: [0, 12, 12, 0] as any }}
                    animationDuration={1500}
                    animationBegin={400}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
             <p className="text-center text-sm text-theme-gray mt-6 bg-theme-sand/30 py-3 rounded-xl">
               40代・50代を中心に、落ち着いた雰囲気の職場です。
             </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};