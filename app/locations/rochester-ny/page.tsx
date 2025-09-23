import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin, Phone, Star, ArrowLeft, Home, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rochester NY Renovation Services - Alex Renovation",
  description:
    "Premier home renovation services in Rochester, NY. Historic home restorations, urban loft conversions, kitchen remodels, and complete home improvements in the Flower City.",
}

export default function RochesterPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/locations">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Locations
                </Link>
              </Button>
              <Badge variant="secondary">Primary Service Area</Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Rochester, NY Renovation Services
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Population: 206,000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span>156 Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span>5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Free Estimates</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Rochester, New York is a vibrant city known as the Flower City, with diverse neighborhoods ranging from
                historic districts to modern developments. Our renovation team has deep roots in Rochester, serving
                homeowners throughout the city with quality craftsmanship that respects the area's rich architectural
                heritage while meeting modern living needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                Professional Renovation Services in Rochester, NY
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Trusted by Rochester homeowners for quality craftsmanship and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Starting at $25,000
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif">Historic Home Renovations Rochester NY</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Preserve Rochester's architectural heritage while adding modern amenities. We specialize in
                    maintaining historic character while improving functionality and efficiency.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Period-appropriate materials</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Historic detail preservation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Modern system integration</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">City permit assistance</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Get Free Estimate
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Starting at $18,000
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif">Urban Kitchen Renovations Rochester NY</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Maximize space and functionality in Rochester's urban kitchens. Smart designs that work with city
                    living constraints while creating beautiful, efficient spaces.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Space optimization</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Modern appliances</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Smart storage solutions</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Urban-appropriate materials</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Get Free Estimate
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Starting at $12,000
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif">Multi-Family Property Improvements Rochester NY</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Enhance Rochester rental properties and multi-family homes. Durable, attractive renovations that
                    increase property value and tenant satisfaction.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Durable materials</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Cost-effective solutions</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Tenant-friendly scheduling</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Property value enhancement</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Get Free Estimate
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Ready to Transform Your Rochester Home?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact us today for a free estimate on your renovation project. Serving Rochester homeowners with quality
              craftsmanship and exceptional service.
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
