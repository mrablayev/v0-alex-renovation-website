import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { primaryServiceAreas, additionalServiceAreas } from "@/lib/city-data"

export const metadata: Metadata = {
  title: "Service Areas - Alex Renovation Rochester NY",
  description:
    "Professional renovation services throughout Rochester, NY and surrounding areas. Brighton, Pittsford, Webster, Penfield, Fairport, and more. Free estimates.",
}

export default function LocationsPage() {
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
              Service Areas
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
              Serving Rochester & Surrounding Communities
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Professional renovation services throughout Monroe County and the greater Rochester area. Local expertise,
              quality craftsmanship, and personalized service for every community we serve. We offer comprehensive <Link href="/services" className="text-primary hover:underline">renovation services</Link> including <Link href="/services/kitchen-renovations" className=\"text-primary hover:underline">kitchen remodeling</Link> and <Link href="/services/bathroom-remodels" className=\"text-primary hover:underline">bathroom renovations</Link> in all our service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're proud to serve homeowners throughout the Rochester metropolitan area with quality renovation
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServiceAreas.map((area, index) => (
              <Card key={index} className="border-0 bg-card/50 hover:shadow-lg transition-all group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                      {area.city}, NY
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {area.completedProjects} projects
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-muted-foreground">Population</div>
                      <div>{area.population}</div>
                    </div>
                    <div>
                      <div className="font-medium text-muted-foreground">Avg. Project</div>
                      <div>{area.averageProjectValue}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium text-sm">Area Highlights:</div>
                    <div className="flex flex-wrap gap-1">
                      {area.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium text-sm">Popular Services:</div>
                    <div className="space-y-1">
                      {area.specialties.slice(0, 2).map((specialty, i) => (
                        <div key={i} className="text-xs text-muted-foreground">
                          • {specialty}
                        </div>
                      ))}
                      {area.specialties.length > 2 && (
                        <div className="text-xs text-muted-foreground">• {area.specialties[2]}</div>
                      )}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" asChild className="w-full mt-4 bg-transparent">
                    <Link href={`/locations/${area.slug}`}>
                      View {area.city} Services
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Complete Coverage Area</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional renovation services throughout Monroe County and beyond.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-card/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold">Primary Service Areas</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {primaryServiceAreas.slice(0, 6).map((area, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{area.city}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold">Additional Areas</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {additionalServiceAreas.map((city, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Don't see your area listed? We may still be able to help!
                  </p>
                  <Button asChild>
                    <Link href="/contact">Contact Us About Your Location</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Local Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proud to be part of the Rochester community with a track record of satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Local Projects Completed" },
              { number: "8", label: "Cities Served" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "5+", label: "Years in Rochester" },
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

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact us today for a free estimate on your renovation project, no matter where you're located in the
              Rochester area.
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
