"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, DollarSign, Clock, Star, ArrowRight, Filter } from "lucide-react"
import { useState, useMemo } from "react"
import { projects, categories, cities } from "@/lib/projects-data"

export default function ProjectsClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [sortBy, setSortBy] = useState("recent")

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== "All Projects") {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    // Filter by city
    if (selectedCity !== "All Cities") {
      filtered = filtered.filter((project) => project.city === selectedCity)
    }

    // Sort projects
    switch (sortBy) {
      case "recent":
        filtered = filtered.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
        break
      case "budget-high":
        filtered = filtered.sort(
          (a, b) => Number.parseInt(b.budget.replace(/[^0-9]/g, "")) - Number.parseInt(a.budget.replace(/[^0-9]/g, "")),
        )
        break
      case "budget-low":
        filtered = filtered.sort(
          (a, b) => Number.parseInt(a.budget.replace(/[^0-9]/g, "")) - Number.parseInt(b.budget.replace(/[^0-9]/g, "")),
        )
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedCity, sortBy])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Work Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
              Transforming Homes Across Rochester
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Explore our completed renovation projects and see the quality craftsmanship that has made us Rochester's
              trusted renovation partner. Every project tells a story of transformation and satisfied customers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* Category Filters */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Service
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* City Filters */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Filter by City
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.slice(0, 8).map((city, index) => (
                  <Button
                    key={index}
                    variant={selectedCity === city ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSelectedCity(city)}
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border rounded-md px-3 py-1 bg-background"
              >
                <option value="recent">Most Recent</option>
                <option value="budget-high">Highest Budget</option>
                <option value="budget-low">Lowest Budget</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 bg-card/50 hover:shadow-xl transition-all group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Before/After Images */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-2">
                        <div className="relative group/before">
                          <img
                            src={`/abstract-geometric-shapes.png?key=5p4lq&key=vlxgb&height=300&width=200&query=${project.beforeImage}`}
                            alt="Before renovation"
                            className="w-full h-full object-cover transition-all group-hover/before:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover/before:bg-black/10 transition-all" />
                          <div className="absolute bottom-2 left-2">
                            <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">
                              Before
                            </Badge>
                          </div>
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/before:opacity-100 transition-all p-3 flex items-end">
                            <p className="text-white text-xs leading-tight">{project.beforeDescription}</p>
                          </div>
                        </div>
                        <div className="relative group/after">
                          <img
                            src={`/abstract-geometric-shapes.png?key=biygj&key=hxeoc&height=300&width=200&query=${project.afterImage}`}
                            alt="After renovation"
                            className="w-full h-full object-cover transition-all group-hover/after:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover/after:bg-black/5 transition-all" />
                          <div className="absolute bottom-2 right-2">
                            <Badge className="text-xs bg-green-600">After</Badge>
                          </div>
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/after:opacity-100 transition-all p-3 flex items-end">
                            <p className="text-white text-xs leading-tight">{project.afterDescription}</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/50 transform -translate-x-0.5" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            {[...Array(project.testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>

                      <CardDescription className="text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>

                      <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-3 w-3" />
                          <span>{project.budget}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-medium">Key Features:</div>
                        <div className="flex flex-wrap gap-1">
                          {project.features.slice(0, 2).map((feature, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {project.features.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.features.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-xs font-medium text-green-800 mb-1">Return on Investment:</div>
                        <div className="text-xs text-green-700">{project.roi}</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t space-y-3">
                      <div className="text-xs italic text-muted-foreground">"{project.testimonial.text}"</div>
                      <div className="text-xs font-medium">- {project.testimonial.author}</div>
                      <Button size="sm" variant="outline" asChild className="w-full mt-3 bg-transparent">
                        <Link href={`/projects/${project.id}`}>
                          View Full Project Details
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Numbers that speak to our commitment to quality and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "10+", label: "Years Experience" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "100%", label: "Projects On Time" },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardContent className="pt-6">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Project Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven process that ensures quality results and satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your vision, assess your space, and provide detailed estimates.",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Create detailed plans, select materials, and finalize project timeline.",
              },
              {
                step: "03",
                title: "Construction",
                description: "Expert craftsmanship with regular updates and quality control.",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final walkthrough, cleanup, and warranty documentation.",
              },
            ].map((phase, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 relative">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-foreground font-bold text-lg">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg font-serif">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{phase.description}</CardDescription>
                </CardContent>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-primary" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Join our satisfied customers and transform your home with quality craftsmanship and personalized service.
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
                <Link href="tel:+15855551234">(585) 555-1234</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
