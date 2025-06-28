import Techs from "../Techs/Techs";
import BgAnimation from "./BgAnimation";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Hero() {
  return (
    <div className="relative w-3/4 pt-10 m-auto lg:h-screen">
      <div className="lg:py-10 lg:pl-10 lg:pe-[25%] max-w-max">
        <h2 className="font-bold text-5xl leading-[35px] lg:leading-[60px] lg:text-7xl text-transparent bg-clip-text bg-gradient-title">
          Welcome, <span>I{`'`}m Ahmed Alaa</span>
        </h2>
        <h3 className="text-gray-400 pt-4 pb-5 lg:text-5xl text-4xl capitalize font-semibold">
          Full-stack web developer
        </h3>
        <p className="font-light text-2xl lg:text-3xl leading-10 lg:leading-[30px] text-[#858484] py-10 ">
          I craft responsive web applications where technologies meet
          creativity.
          <br />
          Building exceptional digital experiences with modern full stack
          frameworks.
        </p>

        <a
          className="lg:text-3xl text-2xl font-semibold flex justify-center items-center gap-2 w-max m-auto"
          href="https://drive.google.com/u/0/uc?id=1bZQ_iL7feMC5Ldmw3ukWuMME4BOjTDls&export=download"
          download
        >
          <button className="border-none rounded-[50px] px-14 py-4 lg:px-16 lg:py-6 text-[#fff] flex top-0 left-0 bg-gradient transition-all duration-300 ease-in gap-1 justify-center items-center hover:scale-105">
            <MdOutlineFileDownload className="text-3xl lg:text-5xl animate-bounce" />
            <span>Download CV</span>
          </button>
        </a>

        <Techs />
      </div>
      <BgAnimation />
    </div>
  );
}
