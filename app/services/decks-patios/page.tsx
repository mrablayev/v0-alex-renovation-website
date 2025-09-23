import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TreePine, Hammer, Palette, CheckCircle, Sun, Shield, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deck & Patio Construction Rochester NY - Outdoor Living - Alex Renovation",
  description:
    "Professional deck and patio construction in Rochester, NY. Custom outdoor living spaces, composite decking, stone patios, and outdoor kitchens.",
}

export default function DecksPatiosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/beautiful-deck-construction-with-composite-materials.jpg"
            alt="Professional deck construction background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Custom Outdoor Living Spaces
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Create Your Perfect Outdoor Living Space
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Transform your backyard with custom decks, patios, and outdoor living spaces. From intimate gathering
                areas to expansive entertainment spaces, we create outdoor environments you'll love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Free Design Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/projects">View Gallery</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/stunning-outdoor-deck-with-furniture-and-lighting.jpg"
                  alt="Beautiful custom deck with outdoor furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Complete Outdoor Living Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From custom deck construction to stone patios and outdoor kitchens, we create beautiful, functional
              outdoor spaces that extend your living area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Custom Deck Construction",
                description:
                  "Beautiful custom decks built with premium materials including composite, cedar, and pressure-treated lumber with professional craftsmanship.",
                features: [
                  "Composite & Wood Decking",
                  "Custom Railings & Balusters",
                  "Multi-Level Designs",
                  "Built-in Seating & Planters",
                ],
                benefits:
                  "Increases home value by 15-25%, provides outdoor entertainment space, and offers low-maintenance options.",
              },
              {
                icon: Palette,
                title: "Stone & Concrete Patios",
                description:
                  "Elegant patio construction using natural stone, pavers, and decorative concrete for durable, beautiful outdoor flooring.",
                features: [
                  "Natural Stone Installation",
                  "Paver Patio Systems",
                  "Stamped Concrete",
                  "Fire Pit Integration",
                ],
                benefits:
                  "Creates low-maintenance outdoor space, improves drainage, and provides year-round durability.",
              },
              {
                icon: Sun,
                title: "Outdoor Kitchens",
                description:
                  "Complete outdoor kitchen design and construction with grills, countertops, storage, and utility connections for ultimate entertaining.",
                features: [
                  "Built-in Grill Stations",
                  "Stone Countertops",
                  "Outdoor Refrigeration",
                  "Utility Connections",
                ],
                benefits:
                  "Enhances outdoor entertaining, increases property value, and creates resort-style living experience.",
              },
              {
                icon: Shield,
                title: "Pergolas & Gazebos",
                description:
                  "Custom pergolas and gazebos that provide shade, define outdoor spaces, and add architectural interest to your landscape.",
                features: [
                  "Custom Wood & Vinyl Construction",
                  "Retractable Canopy Options",
                  "Integrated Lighting",
                  "Weather-Resistant Materials",
                ],
                benefits: "Provides shade and privacy, creates defined outdoor rooms, and adds architectural beauty.",
              },
              {
                icon: Home,
                title: "Outdoor Living Rooms",
                description:
                  "Complete outdoor living spaces with seating areas, fire features, and weather protection for year-round enjoyment.",
                features: [
                  "Built-in Seating",
                  "Fire Pit & Fireplace Options",
                  "Weather Protection",
                  "Outdoor Heating Systems",
                ],
                benefits: "Extends living season, creates gathering spaces, and provides cozy outdoor atmosphere.",
              },
              {
                icon: Hammer,
                title: "Deck Repair & Restoration",
                description:
                  "Professional deck repair, refinishing, and restoration services to extend the life and beauty of your existing outdoor spaces.",
                features: ["Structural Repairs", "Deck Refinishing", "Board Replacement", "Railing Updates"],
                benefits:
                  "Extends deck life, improves safety, and refreshes appearance at fraction of replacement cost.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
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
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground font-medium">Key Benefits:</p>
                    <p className="text-sm text-muted-foreground mt-1">{service.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Premium Outdoor Materials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We use only the finest materials designed to withstand Rochester's climate while maintaining beauty for
              years to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Composite Decking",
                description: "Low-maintenance composite materials with wood-like appearance.",
                features: ["Fade Resistant", "Stain Resistant", "No Splinters", "25-Year Warranty"],
                maintenance: "Minimal",
              },
              {
                title: "Cedar Decking",
                description: "Natural cedar with beautiful grain and natural weather resistance.",
                features: ["Natural Beauty", "Insect Resistant", "Aromatic", "Renewable Resource"],
                maintenance: "Annual Staining",
              },
              {
                title: "Natural Stone",
                description: "Durable stone patios with timeless beauty and lasting value.",
                features: ["Unique Patterns", "Weather Proof", "Non-Slip Surface", "Increases Value"],
                maintenance: "Minimal",
              },
              {
                title: "Pavers",
                description: "Interlocking pavers in various colors and patterns for custom designs.",
                features: ["Design Flexibility", "Easy Repairs", "Permeable Options", "Color Variety"],
                maintenance: "Low",
              },
            ].map((material, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${material.title.toLowerCase()} outdoor material`}
                      alt={`${material.title} material`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-serif">{material.title}</CardTitle>
                  <Badge variant="outline" className="mt-2">
                    {material.maintenance} Maintenance
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{material.description}</CardDescription>
                  <div className="space-y-1">
                    {material.features.map((feature, i) => (
                      <div key={i} className="text-xs text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Outdoor Living Investment Guide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quality outdoor spaces that provide years of enjoyment and add significant value to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Basic Deck",
                price: "$15 - $25 per sq ft",
                description: "Pressure-treated lumber deck with standard railings.",
                features: ["Pressure-treated lumber", "Standard railings", "Basic hardware", "10-year warranty"],
              },
              {
                title: "Premium Deck",
                price: "$25 - $40 per sq ft",
                description: "Composite or cedar decking with custom features.",
                features: ["Composite or cedar", "Custom railings", "Built-in features", "25-year warranty"],
                popular: true,
              },
              {
                title: "Stone Patio",
                price: "$20 - $35 per sq ft",
                description: "Natural stone or paver patio with professional installation.",
                features: [
                  "Natural stone/pavers",
                  "Proper base preparation",
                  "Drainage systems",
                  "Lifetime durability",
                ],
              },
            ].map((tier, index) => (
              <Card
                key={index}
                className={`relative ${tier.popular ? "border-primary shadow-lg" : "border-0 bg-card/50"}`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-serif">{tier.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{tier.price}</div>
                  <CardDescription className="text-sm leading-relaxed">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                    <Link href="/contact">Get Quote</Link>
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
              Ready to Create Your Dream Outdoor Space?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Let's design and build the perfect outdoor living space for your home. Schedule your free design
              consultation and start enjoying your backyard year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Free Design Consultation</Link>
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
