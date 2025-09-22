import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin, Phone, Star, ArrowLeft, Home, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gates NY Renovation Services - Alex Renovation",
  description:
    "Professional home renovation services in Gates, NY. Kitchen remodels, bathroom renovations, flooring, basement finishing. Serving Gates homeowners with quality craftsmanship. Free estimates.",
}

export default function GatesPage() {
  const city = {
    city: "Gates",
    state: "NY",
    population: "28,000",
    zipCodes: ["14624"],
    completedProjects: 38,
    averageProjectValue: "$23,000",
    neighborhoods: ["Gates Center", "Lyell Avenue", "Buffalo Road", "Chili Avenue", "Elmgrove", "Coldwater"],
    landmarks: ["Gates Town Hall", "Elmgrove Park", "Chili-Riga Recreation Center", "Buffalo Road"],
    testimonials: [
      {
        text: "Our Gates kitchen renovation transformed our 1960s ranch into a modern family home. The open concept design is perfect for entertaining.",
        author: "Michelle T.",
        neighborhood: "Gates Center",
        project: "Kitchen Renovation",
        rating: 5,
      },
      {
        text: "Alex's team finished our basement beautifully. Now we have a great space for the kids to play and for family movie nights.",
        author: "Robert K.",
        neighborhood: "Elmgrove",
        project: "Basement Finishing",
        rating: 5,
      },
    ],
    services: [
      {
        title: "Kitchen Renovations Gates NY",
        description:
          "Transform your Gates kitchen with modern designs perfect for family living. Open concepts, efficient storage, and quality materials that fit your budget.",
        features: ["Open concept layouts", "Modern cabinetry", "Efficient storage", "Family-friendly designs"],
        startingPrice: "$11,000",
      },
      {
        title: "Basement Finishing Gates NY",
        description:
          "Turn your Gates basement into valuable living space. Family rooms, playrooms, home offices - we create comfortable, functional finished basements.",
        features: ["Moisture control", "Egress windows", "Recreation areas", "Storage solutions"],
        startingPrice: "$16,000",
      },
      {
        title: "Bathroom Renovations Gates NY",
        description:
          "Update your Gates bathroom with modern fixtures and efficient layouts. From simple updates to complete remodels that add value to your home.",
        features: ["Walk-in showers", "Vanity upgrades", "Tile work", "Efficient layouts"],
        startingPrice: "$7,000",
      },
    ],
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
                <Link href="/locations">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Locations
                </Link>
              </Button>
              <Badge variant="secondary">Service Area</Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Gates, NY Home Renovation Services
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Population: {city.population}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span>{city.completedProjects} Projects</span>
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
                Professional home renovation services for Gates, NY homeowners. From kitchen remodels to basement
                finishing, we help Gates families create beautiful, functional living spaces that enhance their
                lifestyle and home value.
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
                Professional Renovation Services in Gates, NY
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Trusted by Gates homeowners for quality craftsmanship and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {city.services.map((service, index) => (
                <Card key={index} className="border-0 bg-card/50 hover:shadow-lg transition-all">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        Starting at {service.startingPrice}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                      Get Free Estimate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Gates Neighborhoods We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Professional renovation services throughout all Gates neighborhoods and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    Primary Neighborhoods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {city.neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm">{neighborhood}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center">
                    <Home className="h-6 w-6 text-primary mr-3" />
                    Local Landmarks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {city.landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-sm">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">What Gates Homeowners Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Real reviews from satisfied customers in your neighborhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {city.testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 bg-card/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-base italic">"{testimonial.text}"</blockquote>
                    <div className="space-y-1">
                      <div className="font-medium text-sm">- {testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.neighborhood}, Gates</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Ready to Transform Your Gates Home?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact us today for a free estimate on your renovation project. Serving Gates homeowners with quality
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
