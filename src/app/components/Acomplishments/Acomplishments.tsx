import Section from "../Section/Section";
import getProjects from "../Projects/getProjects";
import getCountVisits from "./getCountVisits";
import getGithubStats from "./getGithubStats";
import AnimateNumber from "../AnimateNumber/AnimateNumber";

export default async function Acomplishments() {
  const projects: Project[] = await getProjects();
  const visitCount = await getCountVisits();
  const githubStats = await getGithubStats();
  const visits = Number(visitCount?.portfolio_visits);

  const content = (title: number, desc: string) => {
    return (
      <div className="bg-[#212d45] rounded-xl p-[24px] h-[110px] md:h-[135px] md:py-10 font-sans tracking-wider">
        <AnimateNumber className='font-semibold text-[#ffffff] mb-[8px] text-4xl md:text-5xl lg:text-6xl leading-6 md:leading-8 lg:leading-10 tracking-wider' number={title}></AnimateNumber>
        <p className="text-[#ffffffbf] leading-7 text-lg lg:text-3xl pt-3">
          {desc}
        </p>
      </div>
    );
  };
  return (
    <Section title="Personal Acomplishments">
      <div className="grid grid-cols-2 gap-10 max-w-[500px] my-6 md:grid-cols-3 lg:grid-cols-4 lg:max-w-full py-10">
        {content(projects.length, "Open Source Projects")}
        {content(Number.isFinite(visits) ? visits : 0, "Visits")}
        {content(githubStats.followers, "Github Followers")}
        {content(githubStats.stars, "Github Stars")}
      </div>
    </Section>
  );
}
