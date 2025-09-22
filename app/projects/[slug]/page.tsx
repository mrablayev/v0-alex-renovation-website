import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, DollarSign, Clock, Star, ArrowLeft, CheckCircle, Wrench, Home } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Project data (in a real app, this would come from a database or CMS)
const projects = [
  {
    id: "modern-kitchen-brighton",
    title: "Modern Kitchen Transformation",
    location: "Brighton, NY",
    category: "Kitchen Renovation",
    duration: "3 weeks",
    budget: "$35,000",
    year: "2024",
    description:
      "Complete kitchen renovation featuring custom white shaker cabinets, quartz countertops, and stainless steel appliances. Open concept design with large island.",
    beforeDescription:
      "Outdated 1980s kitchen with dark oak cabinets, laminate countertops, and closed-off layout that made the space feel cramped and disconnected from the dining area.",
    afterDescription:
      "Bright, modern kitchen with custom white shaker cabinets, quartz waterfall island, subway tile backsplash, and open concept design that flows seamlessly into the dining room.",
    features: [
      "Custom Cabinetry",
      "Quartz Countertops",
      "Kitchen Island",
      "Subway Tile Backsplash",
      "Recessed Lighting",
      "Stainless Steel Appliances",
    ],
    challenges: ["Load-bearing wall removal", "Electrical panel upgrade", "Plumbing relocation"],
    materials: [
      "Benjamin Moore Cloud White paint",
      "Caesarstone Calacatta Nuvo quartz",
      "3x6 subway tile",
      "Brushed gold hardware",
    ],
    beforeImage: "outdated kitchen with dark cabinets",
    afterImage: "modern white kitchen with island",
    additionalImages: [
      "kitchen island with bar seating",
      "custom cabinet storage solutions",
      "subway tile backsplash detail",
    ],
    testimonial: {
      text: "Alex and his team exceeded our expectations. The attention to detail and quality of work is outstanding. Our kitchen is now the heart of our home.",
      author: "Sarah Johnson",
      rating: 5,
      fullReview:
        "From the initial consultation to the final walkthrough, Alex's team was professional, punctual, and incredibly skilled. They transformed our dated kitchen into a modern masterpiece while staying within budget and timeline.",
    },
    roi: "Increased home value by $45,000",
    timeline: [
      {
        phase: "Design & Planning",
        duration: "1 week",
        description: "Finalized design, selected materials, obtained permits",
      },
      { phase: "Demolition", duration: "2 days", description: "Removed old cabinets, countertops, and flooring" },
      { phase: "Rough Work", duration: "1 week", description: "Electrical, plumbing, and structural modifications" },
      {
        phase: "Installation",
        duration: "1.5 weeks",
        description: "Cabinet installation, countertops, backsplash, flooring",
      },
      { phase: "Finishing", duration: "2 days", description: "Final touches, cleanup, and walkthrough" },
    ],
  },
  // Add other projects here...
]

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    return {
      title: "Project Not Found - Alex Renovation",
    }
  }

  return {
    title: `${project.title} - Alex Renovation Rochester NY`,
    description: `${project.description} View detailed before/after photos, materials used, and customer testimonials.`,
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/projects">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
              <Badge variant="secondary">{project.category}</Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">{project.title}</h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span>{project.budget}</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">The Transformation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                See the dramatic before and after results of this renovation project.
              </p>
            </div>

            {/* Large Before/After Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="overflow-hidden border-0 bg-card/50">
                <div className="aspect-[4/3] relative">
                  <img
                    src={`/abstract-geometric-shapes.png?height=400&width=600&query=${project.beforeImage}`}
                    alt="Before renovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      Before
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-serif mb-3">Before Renovation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.beforeDescription}</CardDescription>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-0 bg-card/50">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/modern-kitchen-renovation-with-white-cabinets-and-.jpg"
                    alt="After renovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600">After</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-serif mb-3">After Renovation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.afterDescription}</CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Additional Images Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.additionalImages.map((image, index) => (
                <Card key={index} className="overflow-hidden border-0 bg-card/50">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={`/abstract-geometric-shapes.png?height=300&width=400&query=${image}`}
                      alt={`Project detail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <CardDescription className="text-sm capitalize">{image}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Features & Materials */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif flex items-center">
                      <CheckCircle className="h-6 w-6 text-primary mr-3" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif flex items-center">
                      <Wrench className="h-6 w-6 text-primary mr-3" />
                      Materials Used
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {project.materials.map((material, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm">{material}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Project Challenges & Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-orange-600 text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-sm">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* ROI Card */}
                <Card className="border-0 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif flex items-center text-green-800">
                      <Home className="h-5 w-5 mr-2" />
                      Return on Investment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 font-medium">{project.roi}</p>
                  </CardContent>
                </Card>

                {/* Customer Testimonial */}
                <Card className="border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Customer Review</CardTitle>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-sm italic">"{project.testimonial.fullReview}"</blockquote>
                    <div className="text-sm font-medium">- {project.testimonial.author}</div>
                  </CardContent>
                </Card>

                {/* Project Timeline */}
                <Card className="border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Project Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.timeline.map((phase, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-sm">{phase.phase}</div>
                            <div className="text-xs text-muted-foreground">{phase.duration}</div>
                            <div className="text-xs text-muted-foreground">{phase.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Let's discuss your renovation project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="tel:+15854725795">(585) 472-5795</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
