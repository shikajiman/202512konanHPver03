import React, { useRef, useEffect } from 'react';

interface SceneProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  onVisible?: (id: string) => void;
}

export const Scene: React.FC<SceneProps> = ({ id, children, className = "", onVisible }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          if (onVisible) onVisible(id);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [id, onVisible]);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      // PC (md以上) では h-screen と snap-start を強制。
      // Mobile では min-h-screen で中身に合わせて伸びる。
      className={`
        w-full relative flex flex-col
        min-h-screen md:h-screen 
        md:snap-start md:snap-always 
        py-6 md:py-0
        ${className}
      `}
    >
      {children}
    </section>
  );
};