import Section from "../Section/Section";
import { technologies } from "./constans";

export default function Technologies() {
  return (
    <Section title="Technologies">
      <p className=" text-3xl lg:text-4xl leading-normal font-thin py-10 text-[#FFFFFF80] tracking-widest">
      I have worked with a range technologies in the web development world From
        Back-end To Design
      </p>
      <ul className="flex flex-wrap gap-10 justify-between items-center pt-10 w-4/5 pb-10">
        {technologies.map((technology, id) => (
          <li className="text-5xl flex lg:flex-col gap-4" key={id}>
            {technology.icon}
            <div className="flex flex-col gap-5">
              <h4 className="text-4xl lg:text-5xl font-semibold tracking-wider">
                {technology.title}
              </h4>
              <p className="text-2xl lg:text-3xl font-thin leading-10 tracking-wide text-[#FFFFFF80]">
                Experience with <br />
                {technology.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
