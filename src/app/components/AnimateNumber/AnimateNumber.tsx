"use client";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

type Props = {
  number: number | string | null | undefined;
  className?: string;
};

export default function AnimateNumber({ number, className }: Props) {
  const [props, api] = useSpring(() => ({ number: 0 }));

  useEffect(() => {
    const normalizedNumber = Number(number);
    api.start({
      number: Number.isFinite(normalizedNumber) ? normalizedNumber : 0,
      config: { friction: 55, mass: 2, tension: 50 },
    });
  }, [number, api]);

  return (
    <animated.h4 className={className}>
      {props.number.to((n) => n.toFixed(0))}
    </animated.h4>
  );
}
