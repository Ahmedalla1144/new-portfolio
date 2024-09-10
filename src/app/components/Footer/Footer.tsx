import Link from "next/link";
import React from "react";
import Social from "../Social/Social";
import Section from "../Section/Section";

export default function Footer() {
  return (
    <Section>
      <div className="border-t pt-20 border-[#ffffff1a]">
        <ul className="flex flex-wrap gap-10 pb-5 list-none">
          <div className="flex flex-col gap-10 w-1/4 p-3">
            <h4 className="uppercase text-[#fff6] text-lg lg:text-xl leading-7 tracking-wider font-semibold">CAll</h4>
            <Link className="text-[#ffffffbf] text-2xl lg:text-3xl transition-all duration-500 hover:ml-3 hover:text-white w-max" href="tel:+201207213250">+20 1207213250</Link>
          </div>
          <div className="flex flex-col gap-10 p-3">
            <h4 className="uppercase text-[#fff6] text-lg lg:text-xl leading-7 tracking-wider font-semibold">Email</h4>
            <Link className="text-[#ffffffbf] text-2xl lg:text-3xl transition-all duration-500 hover:ml-3 hover:text-white w-max" href="mailto:ahmed.alla56756@gmail.com">
              ahmed.alla56756@gmail.com
            </Link>
          </div>
        </ul>
        <div className="flex flex-wrap gap-10 justify-center lg:justify-between pt-10 lg:pt-20 items-center pb-10 lg:pb-0">
          <div>
            <p className="text-[#ffffff80] hover:text-white transition-all duration-150 text-xl lg:text-3xl tracking-wider">This Portfolio made by Ahmed Alaa, © Last updated At {new Date().getFullYear()} {new Date().getMonth()}. </p>
          </div>
          <div className="flex gap-5 text-4xl lg:text-5xl">
            <Social />
          </div>
        </div>
      </div>
    </Section>
  );
}
