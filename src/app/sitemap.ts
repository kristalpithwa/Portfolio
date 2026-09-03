import { MetadataRoute } from "next";
import { PROJECTS, personalInfo } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${personalInfo.websiteUrl}/project/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: personalInfo.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...projects,
  ];
}
