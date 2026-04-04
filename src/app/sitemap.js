import { PROJECTS } from "@/data/projects";

export default function sitemap() {
  const projects = PROJECTS.map((p) => ({
    url: `https://kristalpithwa.vercel.app/project/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://kristalpithwa.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projects,
  ];
}
