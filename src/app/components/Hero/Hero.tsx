"use client";
import React, { useRef } from "react";
import Header from "../Header/Header";
import BgAnimation from "./BgAnimation";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef<HTMLSpanElement | null>(null);
  React.useEffect(() => {
    new Typed(el.current, {
      strings: [
        " To<br />My Personal Portfolio",
        "<br />I'm Ahmed Alaa",
        "<br />I'm A Front-End Developer<br />Using React Js",
      ],
      typeSpeed: 150,
      backSpeed: 100,
      loop: false,
    });
  });
  return (
    <div className="relative w-3/4 h-screen pt-10 m-auto">
      <div className="lg:py-10 lg:pl-10 pe-[25%] max-w-max">
        <h2 className="font-bold text-3xl leading-[24px] lg:leading-[60px] lg:text-8xl  text-transparent bg-clip-text bg-gradient-title">
          Welcome <span ref={el}></span>
        </h2>
        <p className="font-light text-xl lg:text-4xl leading-10 text-[#858484] py-10 ">
          As a Front-End Developer, I utilize React.js, Next.js, Vite.js, and
          Tailwind CSS to craft stunning websites that captivate audiences
          worldwide. My portfolio showcases a collection of exceptional and
          awe-inspiring creations.
        </p>

        <button className="border-none rounded-[50px] px-12 py-3 lg:px-32 lg:py-8 text-[#fff]  flex top-0 left-0 bg-gradient transition-all duration-700 ease-in">
          <a
            className="lg:text-4xl text-xl font-semibold"
            href="https://drive.google.com/u/0/uc?id=1ysEPFMhB4BXCFtADtwkZN8vwvnQYzXnS&export=download"
            download
          >
            Download CV
          </a>
        </button>
      </div>
      <BgAnimation />
    </div>
  );
}
