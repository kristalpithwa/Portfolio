import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `https://kristalpithwa.vercel.app/project/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://kristalpithwa.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...projects,
  ];
}
