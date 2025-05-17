"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

type Props = {
  children: React.ReactNode;
};

export default function FadeInOnScroll({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
  });
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  return (
    <animated.div style={props} ref={ref}>
      {children}
    </animated.div>
  );
}
