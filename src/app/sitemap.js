import { PROJECTS } from "@/data/projects";

export default function sitemap() {
  const projects = PROJECTS.map((p) => ({
    url: `https://kristalpithwa.vercel.app/project/${p.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://kristalpithwa.vercel.app", lastModified: new Date() },
    ...projects,
  ];
}
