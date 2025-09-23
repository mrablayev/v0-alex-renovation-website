import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, DollarSign, Clock, Star } from "lucide-react"
import type { Metadata } from "next"
import { getPublishedProjects, getFeaturedProjects } from "@/lib/project-data"

export const metadata: Metadata = {
  title: "Our Projects - Alex Renovation Rochester NY",
  description:
    "View our completed renovation projects in Rochester, NY. Kitchen remodels, bathroom renovations, and home improvements with before and after photos.",
}

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects()
  const allProjects = getPublishedProjects()
  const recentProjects = allProjects.slice(0, 6)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumbs */}
      <section className="py-4 bg-muted/20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Work
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
              Completed Renovation Projects
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of successful home renovations throughout Rochester, NY. From kitchen remodels to
              complete home transformations, see the quality craftsmanship that sets us apart. Each project showcases our expertise in <Link href="/services/kitchen-renovations" className="text-primary hover:underline">kitchen renovations</Link>, <Link href="/services/bathroom-remodels" className=\"text-primary hover:underline">bathroom remodeling</Link>, and other <Link href="/services" className=\"text-primary hover:underline">professional renovation services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Showcasing our most impressive transformations and client favorites.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.afterImages[0] || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(project.clientTestimonial?.rating || 5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="grid grid-cols-2 gap-4 text-sm">
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
                    <Button asChild className="w-full">
                      <Link href={`/projects/${project.id}`} className="flex items-center justify-center space-x-2">
                        <span>View Project Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Browse our latest completed renovations and see the transformation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all border-0 bg-card/50 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.afterImages[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.location}</span>
                  </div>
                  <CardTitle className="text-lg font-serif group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{project.budget}</span>
                    <span>{project.duration}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Let's discuss your renovation vision and create something amazing together. Get your free estimate today.
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