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
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === parseInt(id));
  if (!project) notFound();
  return <ProjectDetailsContent project={project} />;
}
