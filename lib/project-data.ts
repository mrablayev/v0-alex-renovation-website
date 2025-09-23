export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'kitchen' | 'bathroom' | 'flooring' | 'exterior' | 'basement' | 'other'
  status: 'draft' | 'published'
  featured: boolean
  beforeImages: string[]
  afterImages: string[]
  completionDate: string
  location: string
  budget: string
  duration: string
  services: string[]
  challenges: string[]
  solutions: string[]
  clientTestimonial?: {
    text: string
    author: string
    rating: number
  }
  createdAt: string
  updatedAt: string
}

// Mock data for demonstration - in a real app, this would come from a database
export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Transformation',
    description: 'Complete kitchen renovation with custom cabinetry and quartz countertops',
    longDescription: 'This Brighton home received a complete kitchen makeover, transforming a dated 1980s kitchen into a modern culinary space. We removed walls to create an open concept layout, installed custom white shaker cabinets, and added a large island with seating.',
    category: 'kitchen',
    status: 'published',
    featured: true,
    beforeImages: ['/kitchen-renovation-before-outdated-cabinets.jpg'],
    afterImages: ['/modern-kitchen-with-white-cabinets-quartz-countert.jpg'],
    completionDate: '2024-03-15',
    location: 'Brighton, NY',
    budget: '$35,000',
    duration: '3 weeks',
    services: ['Custom Cabinetry', 'Countertop Installation', 'Electrical Work', 'Plumbing', 'Flooring'],
    challenges: ['Load-bearing wall removal', 'Electrical panel upgrade needed', 'Plumbing relocation'],
    solutions: ['Structural engineer consultation', 'Panel upgrade to 200 amp', 'Rerouted plumbing lines'],
    clientTestimonial: {
      text: 'Alex and his team exceeded our expectations. The kitchen is now the heart of our home!',
      author: 'Sarah M.',
      rating: 5
    },
    createdAt: '2024-02-01',
    updatedAt: '2024-03-20'
  },
  {
    id: '2',
    title: 'Luxury Master Bathroom',
    description: 'Spa-like bathroom renovation with walk-in shower and heated floors',
    longDescription: 'This Pittsford master bathroom was completely redesigned to create a luxurious spa-like retreat. Features include a large walk-in shower with multiple shower heads, heated tile floors, and custom vanity with quartz countertops.',
    category: 'bathroom',
    status: 'published',
    featured: true,
    beforeImages: ['/bathroom-renovation-before-outdated-fixtures.jpg'],
    afterImages: ['/modern-bathroom-renovation-with-tile-shower-and-va.jpg'],
    completionDate: '2024-02-28',
    location: 'Pittsford, NY',
    budget: '$28,000',
    duration: '2 weeks',
    services: ['Tile Work', 'Plumbing', 'Electrical', 'Heated Floors', 'Custom Vanity'],
    challenges: ['Structural modifications needed', 'Complex tile pattern', 'Heated floor installation'],
    solutions: ['Reinforced floor joists', 'Precision tile layout', 'Professional heating system'],
    clientTestimonial: {
      text: 'Our bathroom feels like a luxury spa. The attention to detail is incredible.',
      author: 'Michael R.',
      rating: 5
    },
    createdAt: '2024-01-15',
    updatedAt: '2024-03-05'
  }
]

export function getPublishedProjects(): Project[] {
  return projects.filter(project => project.status === 'published')
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.status === 'published' && project.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category && project.status === 'published')
}