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
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          if (onVisible) onVisible(id);
        }
      },
      { threshold: 0.2 }
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
      className={`min-h-screen md:h-screen w-full md:snap-start md:snap-always relative flex flex-col md:justify-center py-6 md:py-0 ${className}`}
    >
      {children}
    </section>
  );
};