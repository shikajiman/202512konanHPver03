import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-theme-base border-t border-theme-sand py-12 text-center">
       <div className="container mx-auto px-6">
         <p className="text-theme-charcoal font-serif tracking-widest text-lg mb-4">近物レックス株式会社</p>
         <p className="text-xs text-theme-gray tracking-wider">
           &copy; {new Date().getFullYear()} Kinbutsu Rex Co., Ltd. Konan Komaki Center.
         </p>
         <p className="text-[10px] text-theme-gray/50 mt-2">求人特設サイト</p>
       </div>
    </footer>
  );
};