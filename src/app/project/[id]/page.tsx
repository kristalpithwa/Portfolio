import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, personalInfo, seoConfig } from "@/data/portfolioData";
import ProjectDetailsContent from "@/components/common/ProjectDetailsContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return PROJECTS.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const project = PROJECTS.find((p) => p.id === parseInt(id, 10));
  if (!project) return {};

  const projectUrl = `${personalInfo.websiteUrl}/project/${id}`;

  return {
    title: project.title,
    description: project.shortDescription,
    metadataBase: new URL(personalInfo.websiteUrl),
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | ${personalInfo.name}`,
      description: project.shortDescription,
      type: "article",
      url: projectUrl,
      images: project.images?.[0]
        ? [
            {
              url: project.images[0],
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${personalInfo.name}`,
      description: project.shortDescription,
      creator: seoConfig.twitterHandle,
      images: project.images?.[0] ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === parseInt(id, 10));
  if (!project) notFound();
  return <ProjectDetailsContent project={project} />;
}
