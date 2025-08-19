import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.05) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can disconnect the observer for performance
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '200px 0px 0px 0px', // Start animation much earlier when approaching viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

export default useScrollAnimation;