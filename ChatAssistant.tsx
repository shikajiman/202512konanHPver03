import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

export const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは。近物レックス採用担当AIです。仕事内容や働き方について、どのようなことでもお尋ねください。' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = `
        あなたは近物レックス株式会社コーナン小牧センターの採用コンシェルジュです。
        30代〜40代の女性求職者をメインターゲットに、丁寧で上品、かつ親しみやすい敬語で対応してください。
        
        【トーン＆マナー】
        - 寄り添うような優しい口調。
        - 専門用語は使わず、噛み砕いて説明する。
        - 「安心」「柔軟性」をキーワードに。

        【基本情報】
        - 勤務地: コーナン小牧センター（倉庫内作業）
        - 業務内容: 検品・仕分・開梱、ケース仕分、出荷準備。
        - 環境: 屋内作業。重労働は少なめ。冷暖房完備ではないが風通しは良い。
        - 雰囲気: 自分のペースで働ける。人間関係はフラット。
        - 服装: 動きやすい服装なら自由。
        - シフト: 家庭の都合に合わせて相談可能。
        - 未経験: 丁寧なサポートあり。
        
        回答は200文字以内で簡潔に。
      `;

      const history = messages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));
      // Add current message to history for the API call
      history.push({ role: 'user', parts: [{ text: userMessage.text }] });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: history,
        config: { 
          temperature: 0.7,
          systemInstruction: systemPrompt
        }
      });

      const text = response.text || "申し訳ありません。回答を生成できませんでした。";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'システムエラーが発生しました。時間を置いて再度お試しください。', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-soft overflow-hidden border border-theme-sand/50 flex flex-col h-[600px] relative">
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-theme-apricot to-theme-terracotta"></div>
      
      {/* Chat Header */}
      <div className="bg-white p-6 border-b border-theme-sand/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-theme-sand rounded-full flex items-center justify-center">
             <Sparkles className="w-5 h-5 text-theme-terracotta" />
           </div>
           <div>
             <span className="block font-serif text-theme-charcoal font-bold text-lg">AI Concierge</span>
             <span className="block text-xs text-theme-sage flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-theme-sage rounded-full animate-pulse"></span> Online
             </span>
           </div>
        </div>
      </div>
      
      {/* Messages Area */}
      <div className="flex-grow p-6 overflow-y-auto bg-theme-base space-y-6 scrollbar-thin scrollbar-thumb-theme-sand">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-5 text-sm md:text-base leading-loose ${
                msg.role === 'user' 
                  ? 'bg-theme-charcoal text-white rounded-2xl rounded-tr-none shadow-lg' 
                  : 'bg-white text-theme-charcoal rounded-2xl rounded-tl-none shadow-sm border border-theme-sand/50'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-theme-sand/50">
               <Loader2 className="w-5 h-5 animate-spin text-theme-terracotta" />
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-theme-sand/50">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="ご質問を入力してください..."
            className="w-full pl-6 pr-14 py-4 bg-theme-sand/30 border border-theme-sand rounded-full focus:outline-none focus:ring-1 focus:ring-theme-terracotta/50 focus:bg-white transition-all text-theme-charcoal placeholder-theme-gray/50"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputText.trim()}
            className="absolute right-2 p-2.5 bg-theme-terracotta text-white rounded-full hover:bg-theme-charcoal disabled:opacity-30 disabled:hover:bg-theme-terracotta transition-colors duration-300 shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};