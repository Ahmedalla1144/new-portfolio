"use client";
import Image from "next/image";
import Section from "../Section/Section";
import { useState } from "react";

interface DisplayedProjects {
  projects: Project[];
}
export default function DisplayedProjects({ projects }: DisplayedProjects) {
  const [displayedProjects, setDisplayedProjects] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const links = ["Code", "Visit"];

  const handleShowMore = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setDisplayedProjects(displayedProjects + 2);
      setIsAnimating(false);
    }, 300);
  };
  return (
    <Section title="Projects">
      <div className="grid grid-col-1 lg:grid-cols-2 place-items-center gap-20 py-10">
        {projects.slice(0, displayedProjects).map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg shadow-[#504E4E] w-[250px] md:w-[400px] flex flex-col gap-1 py-8 px-5"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={20000}
              height={2000}
            />
            <div className="text-center w-full">
              <h3 className="font-medium tracking-widest text-[#9CC9E3] text-5xl py-2 px-1">
                {project.title}
              </h3>
              <hr className="w-[60px] h-[3px] mx-auto my-[20px] bg-[#D0BB57]" />
            </div>
            <p className="w-full px-12 text-[#E4E6E7] leading-10 text-justify">
              {project.description}
            </p>
            <div className="text-center">
              <div className="w-full">Stack</div>
              <ul
                className={`flex flex-wrap p-8 ${
                  project.tags.length > 4
                    ? "justify-center gap-10"
                    : "justify-around"
                }`}
              >
                {project.tags.map((tag) => (
                  <li className="text-[#D8BFBF]" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="list-none flex justify-around p-0 my-10">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={project.visit}
                    className="text-[#D8BFBF] text-2xl py-4 px-6 bg-[#6B3030] rounded-2xl transition-all duration-500 hover:bg-[#771d1d]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center py-5">
        <button
          className={`bg-gradient py-5 px-8 rounded-[50px] text-3xl hover:scale-110 transition-all duration-500 ${
            projects.length <= displayedProjects && "hidden"
          }`}
          onClick={handleShowMore}
        >
          Show More
        </button>
      </div>
    </Section>
  );
}
