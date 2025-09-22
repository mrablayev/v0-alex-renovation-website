export interface Project {
  id: string
  title: string
  location: string
  city: string
  category: string
  duration: string
  budget: string
  year: string
  description: string
  beforeDescription: string
  afterDescription: string
  features: string[]
  challenges: string[]
  materials: string[]
  beforeImage: string
  afterImage: string
  additionalImages: string[]
  testimonial: {
    text: string
    author: string
    rating: number
    fullReview: string
  }
  roi: string
  services: string[]
  timeline: string
  scope: string
}

export const projects: Project[] = []

export const categories = [
  "All Projects",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Flooring",
  "Exterior Improvements",
  "Interior Improvements",
]

export const cities = [
  "All Cities",
  "Brighton",
  "Pittsford",
  "Webster",
  "Fairport",
  "Henrietta",
  "Greece",
  "Rochester",
  "Irondequoit",
  "Gates",
  "Penfield",
  "East Rochester",
  "Churchville",
  "Spencerport",
  "Hilton",
  "Brockport",
  "Chili",
  "Mendon",
  "Rush",
  "Scottsville",
  "Victor",
  "Macedon",
]

export function getRecentProjects(limit = 6): Project[] {
  return projects.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year)).slice(0, limit)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All Projects") return projects
  return projects.filter((project) => project.category === category)
}

export function getProjectsByCity(city: string): Project[] {
  if (city === "All Cities") return projects
  return projects.filter((project) => project.city === city)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
