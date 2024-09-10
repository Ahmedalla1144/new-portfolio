import Section from "../Section/Section";

export default function About() {
  const years = [
    {
      year: 2023,
      accomplishment:
        "Graduated from the Faculty of Arts and started my journey in the programming world.",
    },
    {
      year: 2024,
      accomplishment:
        "Became a full stack web developer, creating websites and continuously developing my skills to excel in full stack development.",
    },
  ];
  return (
    <Section title="About">
      <p className="text-2xl lg:text-4xl tracking-wider text-[#FFFFFF80] font-light leading-9 lg:leading-[40px] pt-10 pb-5">
        I am a skilled front-end web developer with expertise in HTML, CSS,
        JavaScript, and responsive design. I have a strong eye for aesthetics,
        attention to detail, and a passion for creating engaging user
        experiences. My portfolio showcases a diverse range of visually
        appealing and interactive websites that demonstrate my abilities.
      </p>
      <ul className="max-w-5xl p-0 list-none gap-10 flex justify-between pb-20 overflow-x-scroll snap-mandatory touch-pan-x lg:overflow-auto pt-10">
        {years.map((year) => (
          <div
            className="bg-[#0e131f] lg:bg-inherit rounded py-3 px-2"
            key={year.year}
          >
            <div className="flex gap-10">
              <h4 className="text-2xl lg:text-4xl tracking-wider font-bold bg-gradient-title bg-clip-text text-transparent">
                {year.year}
              </h4>
              <svg
                width="180"
                height="4"
                viewBox="0 0 208 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-cOifbb dESMXW"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                  fill="url(#paint0_linear)"
                  fillOpacity="0.33"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-4.30412e-10"
                    y1="0.5"
                    x2="208"
                    y2="0.500295"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white"></stop>
                    <stop
                      offset="0.79478"
                      stopColor="white"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-[#FFFFFF80] text-xl lg:text-3xl tracking-wider leading-10 lg:leading-10">
              {year.accomplishment}
            </p>
          </div>
        ))}
      </ul>
    </Section>
  );
}
