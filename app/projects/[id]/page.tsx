import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, DollarSign, Clock, Star, CheckCircle, Quote } from "lucide-react"
import type { Metadata } from "next"
import { getProjectById, getPublishedProjects } from "@/lib/project-data"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id)
  
  if (!project || project.status !== 'published') {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Alex Renovation Project`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  const projects = getPublishedProjects()
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project || project.status !== 'published') {
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
                  All Projects
                </Link>
              </Button>
              <Badge variant="secondary">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                {project.title}
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span>{project.budget}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Images */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Before & After</h2>
            {project.beforeImages[0] && project.afterImages[0] && (
              <BeforeAfterSlider
                beforeImage={project.beforeImages[0]}
                afterImage={project.afterImages[0]}
                beforeDescription="Original condition before renovation"
                afterDescription="Completed renovation with modern updates"
                className="mb-8"
              />
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Services & Challenges */}
              <div className="space-y-8">
                <Card className="border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Services Provided</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {project.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Challenges & Solutions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Challenges:</h4>
                      <div className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <div key={index} className="text-sm text-muted-foreground">
                            • {challenge}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Solutions:</h4>
                      <div className="space-y-2">
                        {project.solutions.map((solution, index) => (
                          <div key={index} className="text-sm text-muted-foreground">
                            • {solution}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Client Testimonial */}
              <div className="space-y-8">
                {project.clientTestimonial && (
                  <Card className="border-0 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif flex items-center space-x-2">
                        <Quote className="h-6 w-6 text-primary" />
                        <span>Client Testimonial</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(project.clientTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-lg italic leading-relaxed">
                        "{project.clientTestimonial.text}"
                      </blockquote>
                      <div className="text-sm font-medium">
                        - {project.clientTestimonial.author}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Additional Images */}
                {project.afterImages.length > 1 && (
                  <Card className="border-0 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif">Additional Photos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {project.afterImages.slice(1).map((image, index) => (
                          <div key={index} className="aspect-square rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`${project.title} detail ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
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
              Let's discuss your renovation project and create something amazing together. Get your free estimate today.
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