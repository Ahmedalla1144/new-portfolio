'use client'
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { styles } from "./styles";
import Social from "../Social/Social";
import { usePathname } from "next/navigation";

const isActivePath = (path: string, href: string) => {
  if (path === '/') return path === href;
  return path.startsWith(href);
}

export default function Header() {
  const path = usePathname();
  return (
    <header className="flex flex-wrap justify-between items-center px-5 py-5 lg:px-16 lg:py-10 text-2xl lg:text-3xl -tracking-[-0.2rem]">
      <Link
        href="/"
        className="flex justify-center items-center hover:cursor-pointer order-1"
      >
        <DiCssdeck className="lg:text-5xl text-4xl animate-spin" />
        <h1>Ahmed</h1>
      </Link>
      <div className="flex gap-4 text-2xl  lg:gap-10 lg:text-3xl leading-8 text-[#ffffffbf] order-3 md:order-2 m-auto md:pt-0 pt-5 px-0 md:px-0 ss:px-32 xs:px-56 ">
        <Link className={`${styles?.link} ${isActivePath(path, '/projects') ? "text-white" : ""}`} href="projects">
          Projects
        </Link>
        <Link className={`${styles?.link} ${isActivePath(path, '/technologies') ? "text-white" : ""}`} href="technologies">
          Technologies
        </Link>
        <Link className={`${styles?.link} ${isActivePath(path, '/about') ? "text-white" : ""}`} href="about">
          About
        </Link>
      </div>
      <div className="flex lg:gap-5 lg:text-4xl text-3xl order-2 md:order-3 justify-center items-center">
        <Social />
      </div>
    </header>
  );
}
