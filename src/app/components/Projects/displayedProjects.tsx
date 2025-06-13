"use client";
import Image from "next/image";
import Section from "../Section/Section";
import { useState } from "react";
import Loading from "@/app/loading";
import { AiFillGithub } from "react-icons/ai";
import { FaArrowUpFromBracket } from "react-icons/fa6";

interface DisplayedProjects {
  projects: Project[];
}
export default function DisplayedProjects({ projects }: DisplayedProjects) {
  const [displayedProjects, setDisplayedProjects] = useState(3);
  const [loading, setLoading] = useState(false);
  console.log(projects)

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedProjects(displayedProjects + 3);
      setLoading(false);
    }, 300);
  };
  return (
    <Section title="Projects">
      <div className="grid grid-col-1 lg:grid-cols-3 place-items-center gap-20 py-10">
        {projects.slice(0, displayedProjects).map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg shadow-[#504E4E] w-full max-w-[400px] md:w-[400px] flex flex-col gap-1 h-full justify-between"
          >
            <div className="flex flex-col gap-3">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                priority={true}
                onClick={() => window.open(project.visit, "_blank")}
                className="cursor-pointer rounded-t-2xl"
              />
              <div className="text-center w-full">
                <h3 className="font-medium tracking-widest text-[#9CC9E3] text-5xl py-2 px-1">
                  {project.title}
                </h3>
                <hr className="w-[60px] h-[3px] mx-auto my-[20px] bg-[#D0BB57]" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="w-full px-4 lg:px-12 text-[#E4E6E7] leading-10 text-justify">
                {project.description}
              </p>
              <div className="text-center">
                <div className="w-full animate-pulse">Stack</div>
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
              <ul className="list-none flex justify-around p-0 my-10 items-center">
                <li>
                  <a
                    href={project.source}
                    className="text-[#e0dede] text-2xl py-4 px-6 bg-transparent border-gray-600 border-[0.1px] rounded-2xl transition-all duration-500 hover:bg-gray-800 hover:border-none flex justify-center items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                    <span>Source</span>
                  </a>
                </li>

                <li>
                  <a
                    href={project.visit}
                    className="text-[#D8BFBF] text-2xl py-4 px-6 bg-[#6B3030] rounded-2xl transition-all duration-500 hover:bg-[#771d1d] flex justify-center items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaArrowUpFromBracket />
                    <span>Live Demo</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {loading && <Loading />}
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
