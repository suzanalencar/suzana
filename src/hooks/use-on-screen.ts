'use client';

import { useState, useEffect, type RefObject } from 'react';

type IntersectionObserverOptions = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

export function useOnScreen(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = false } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
           if (!triggerOnce) {
            setIntersecting(false);
          }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, root, rootMargin, triggerOnce]);

  return isIntersecting;
}
