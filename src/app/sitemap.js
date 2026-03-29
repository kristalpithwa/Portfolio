import { PROJECTS } from "@/data/projects";

export default function sitemap() {
  const projects = PROJECTS.map((p) => ({
    url: `https://kristalpithwa.com/project/${p.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://kristalpithwa.com", lastModified: new Date() },
    ...projects,
  ];
}
