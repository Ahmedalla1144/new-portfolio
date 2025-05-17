"use client";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

type Props = {
  number: number;
  className: any;
};

export default function AnimateNumber({ number, className }: Props) {
  const [props, set] = useSpring(() => ({ number: 0 }));

  useEffect(() => {
    set({ number: number, config: { friction: 55, mass: 2, tension: 50 } });
  }, [number, set]);

  return <animated.h4 className={className}>{props.number.to((n) => n.toFixed(0))}</animated.h4>;
}
