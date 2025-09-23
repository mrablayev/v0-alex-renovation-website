import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PaintBucket, CheckCircle, Home, Shield, Sun, Droplets } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exterior Painting Rochester NY - House Painting - Alex Renovation",
  description:
    "Professional exterior painting services in Rochester, NY. House painting, siding, trim, deck staining. Weather-resistant paints and expert preparation.",
}

export default function ExteriorPaintingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/exterior-house-painting-with-ladder-and-paint-bru.jpg"
            alt="Professional exterior painting background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Exterior Painting Specialists
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Protect & Beautify Your Home's Exterior
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Professional exterior painting services that protect your home from Rochester's harsh weather while
                enhancing curb appeal. Premium paints, expert preparation, and lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/projects">View Gallery</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/beautiful-home-exterior-with-fresh-paint-and-lan.jpg"
                  alt="Beautiful home with fresh exterior paint"
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
              Complete Exterior Painting Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Protect your investment with professional exterior painting that withstands Rochester's climate while
              enhancing your home's beauty and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "House Siding Painting",
                description:
                  "Complete house painting including vinyl, wood, and fiber cement siding with weather-resistant paints designed for Rochester's climate.",
                features: [
                  "Vinyl Siding Painting",
                  "Wood Siding Restoration",
                  "Fiber Cement Painting",
                  "Color Consultation",
                ],
                benefits:
                  "Protects siding from weather damage, increases curb appeal, and extends siding life by 8-12 years.",
              },
              {
                icon: Shield,
                title: "Trim & Detail Work",
                description:
                  "Precision painting of exterior trim, shutters, doors, and architectural details that require careful attention and expert technique.",
                features: [
                  "Window Trim Painting",
                  "Door & Shutter Painting",
                  "Decorative Trim Work",
                  "Architectural Detail Painting",
                ],
                benefits:
                  "Enhances architectural features, provides accent colors, and protects wood trim from rot and decay.",
              },
              {
                icon: Sun,
                title: "Deck & Fence Staining",
                description:
                  "Professional deck staining and fence painting to protect wood surfaces from UV damage, moisture, and wear while maintaining natural beauty.",
                features: [
                  "Deck Staining & Sealing",
                  "Fence Painting & Staining",
                  "Pergola & Gazebo Finishing",
                  "Outdoor Structure Protection",
                ],
                benefits:
                  "Prevents wood rot and decay, maintains natural wood beauty, and extends outdoor structure life significantly.",
              },
              {
                icon: Droplets,
                title: "Power Washing & Preparation",
                description:
                  "Thorough surface preparation including power washing, scraping, sanding, and priming to ensure optimal paint adhesion and longevity.",
                features: [
                  "High-Pressure Cleaning",
                  "Surface Scraping & Sanding",
                  "Primer Application",
                  "Caulking & Sealing",
                ],
                benefits:
                  "Ensures proper paint adhesion, removes mold and mildew, and provides clean surface for lasting results.",
              },
              {
                icon: PaintBucket,
                title: "Premium Paint Systems",
                description:
                  "Application of high-quality exterior paints from Sherwin-Williams and Benjamin Moore designed to withstand harsh weather conditions.",
                features: [
                  "Weather-Resistant Formulas",
                  "Fade-Resistant Technology",
                  "Mold & Mildew Protection",
                  "10-15 Year Durability",
                ],
                benefits:
                  "Provides long-lasting protection, maintains color vibrancy, and reduces maintenance frequency.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance & Warranty",
                description:
                  "Comprehensive quality control process with detailed inspections and warranty coverage on all exterior painting work performed.",
                features: [
                  "Multi-Stage Quality Inspections",
                  "Color Matching Guarantee",
                  "Workmanship Warranty",
                  "Customer Satisfaction Guarantee",
                ],
                benefits:
                  "Ensures professional results, provides peace of mind, and protects your investment with guaranteed quality.",
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

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Exterior Painting Investment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quality exterior painting that protects your home and enhances curb appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Basic Exterior",
                price: "$3,500 - $6,000",
                description: "Standard exterior painting with quality materials.",
                features: ["Power washing", "Basic prep work", "Quality exterior paint", "2-year warranty"],
              },
              {
                title: "Complete Package",
                price: "$6,000 - $12,000",
                description: "Comprehensive exterior painting with premium materials.",
                features: ["Extensive prep work", "Premium paint systems", "Trim & detail work", "5-year warranty"],
                popular: true,
              },
              {
                title: "Premium Service",
                price: "$12,000+",
                description: "High-end exterior painting with luxury finishes.",
                features: [
                  "Complete surface restoration",
                  "Designer color consultation",
                  "Premium paint systems",
                  "10-year warranty",
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
              Ready to Refresh Your Home's Exterior?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Protect your investment and boost curb appeal with professional exterior painting. Get your free estimate
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Free Color Consultation</Link>
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