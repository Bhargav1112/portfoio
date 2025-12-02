import { Metadata } from "next";
import { ProjectsPageContent } from "@/components/projects-page-content";

export const metadata: Metadata = {
  title: "Projects | Bhargav Bhakhar",
  description:
    "Explore my portfolio of web development projects including e-commerce platforms, enterprise applications, and modern web applications built with React.js, Next.js, and TypeScript.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
