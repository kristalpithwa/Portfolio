import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import ProjectDetailsContent from "@/components/common/ProjectDetailsContent";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const project = PROJECTS.find((p) => p.id === parseInt(id));
  if (!project) return {};

  const projectUrl = `https://kristalpithwa.vercel.app/project/${id}`;

  return {
    title: project.title,
    description: project.shortDescription,
    metadataBase: new URL("https://kristalpithwa.vercel.app"),
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | Kristal Pithwa`,
      description: project.shortDescription,
      type: "article",
      url: projectUrl,
      images: project.images?.[0]
        ? [{ url: project.images[0], width: 1200, height: 630, alt: project.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Kristal Pithwa`,
      description: project.shortDescription,
      creator: "@kristalpithwa",
      images: project.images?.[0] ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === parseInt(id));
  if (!project) notFound();
  return <ProjectDetailsContent project={project} />;
}
