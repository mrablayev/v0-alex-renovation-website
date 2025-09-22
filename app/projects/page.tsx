import type { Metadata } from "next"
import ProjectsClientPage from "./projects-client"

export const metadata: Metadata = {
  title: "Project Portfolio - Alex Renovation Rochester, NY",
  description:
    "View our completed renovation projects in Rochester, NY. Kitchen remodels, bathroom renovations, flooring, and more. Quality craftsmanship and satisfied customers.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
