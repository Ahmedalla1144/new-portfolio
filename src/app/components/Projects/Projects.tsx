import getProjects from "./getProjects";
import DisplayedProjects from "./displayedProjects";

export const dynamic = 'force-dynamic';

export default async function Projects() {
  const projects: Project[] = await getProjects();
  return <DisplayedProjects projects={projects} />;
}
