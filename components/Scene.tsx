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
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          if (onVisible) onVisible(id);
        }
      },
      { threshold: 0.5 }
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
      className={`h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-center ${className}`}
    >
      {children}
    </section>
  );
};