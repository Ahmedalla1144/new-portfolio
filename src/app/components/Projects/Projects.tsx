import getProjects from "./getProjects";
import DisplayedProjects from "./displayedProjects";

export default async function Projects() {
  const projects: Project[] = await getProjects();
  return <DisplayedProjects projects={projects} />;
}
