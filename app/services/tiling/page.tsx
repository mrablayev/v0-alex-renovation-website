import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Grid3X3, CheckCircle, Droplets, Sparkles, Shield, Ruler } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tile Installation Rochester NY - Ceramic, Porcelain, Stone - Alex Renovation",
  description:
    "Professional tile installation in Rochester, NY. Bathroom tiles, kitchen backsplashes, flooring. Ceramic, porcelain, natural stone. Expert installation.",
}

export default function TilingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/professional-tile-installation-with-tools-and-mat.jpg"
            alt="Professional tile installation background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Expert Tile Installation
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Beautiful, Durable Tile Installation
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Transform your space with professional tile installation. From elegant bathroom renovations to stunning
                kitchen backsplashes, we create beautiful, lasting tile work with precision and expertise.
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
                  src="/beautiful-bathroom-tile-installation-with-subway.jpg"
                  alt="Beautiful bathroom tile installation"
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
              Professional Tile Installation Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Expert tile installation for bathrooms, kitchens, and flooring using premium materials and proven
              techniques for lasting beauty and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Bathroom Tile Installation",
                description:
                  "Complete bathroom tiling including shower surrounds, floors, and accent walls with proper waterproofing and precision installation.",
                features: [
                  "Shower & Tub Surrounds",
                  "Bathroom Floor Tiling",
                  "Accent Wall Installation",
                  "Waterproofing Systems",
                ],
                benefits:
                  "Creates waterproof surfaces, prevents mold and mildew, and provides easy-to-clean bathroom surfaces.",
              },
              {
                icon: Sparkles,
                title: "Kitchen Backsplash Installation",
                description:
                  "Beautiful kitchen backsplashes that protect walls while adding style. From subway tile to natural stone, we create stunning focal points.",
                features: [
                  "Subway Tile Installation",
                  "Natural Stone Backsplashes",
                  "Mosaic Pattern Work",
                  "Custom Design Layouts",
                ],
                benefits:
                  "Protects walls from splashes, adds visual interest, and increases kitchen value with designer appeal.",
              },
              {
                icon: Grid3X3,
                title: "Floor Tile Installation",
                description:
                  "Durable, beautiful tile flooring for kitchens, bathrooms, entryways, and living areas with proper substrate preparation and installation.",
                features: [
                  "Ceramic & Porcelain Flooring",
                  "Natural Stone Installation",
                  "Large Format Tiles",
                  "Heated Floor Integration",
                ],
                benefits:
                  "Provides water-resistant flooring, easy maintenance, and long-lasting durability for high-traffic areas.",
              },
              {
                icon: Ruler,
                title: "Custom Pattern & Design Work",
                description:
                  "Intricate tile patterns and custom designs including herringbone, chevron, and mosaic layouts that create unique, personalized spaces.",
                features: [
                  "Herringbone & Chevron Patterns",
                  "Custom Mosaic Designs",
                  "Border & Accent Installation",
                  "Geometric Pattern Work",
                ],
                benefits:
                  "Creates unique design elements, adds personality to spaces, and showcases premium craftsmanship.",
              },
              {
                icon: Shield,
                title: "Tile Repair & Restoration",
                description:
                  "Professional tile repair services including crack repair, grout restoration, and tile replacement to restore beauty and functionality.",
                features: [
                  "Cracked Tile Replacement",
                  "Grout Cleaning & Resealing",
                  "Loose Tile Re-installation",
                  "Color Matching Services",
                ],
                benefits:
                  "Restores tile appearance, prevents water damage, and extends tile life without full replacement costs.",
              },
              {
                icon: Droplets,
                title: "Waterproofing & Sealing",
                description:
                  "Professional waterproofing systems and sealing services to protect tile installations from moisture damage and ensure long-term durability.",
                features: [
                  "Membrane Waterproofing",
                  "Grout Sealing Services",
                  "Expansion Joint Installation",
                  "Moisture Barrier Systems",
                ],
                benefits:
                  "Prevents water damage, extends tile life, and maintains structural integrity of tile installations.",
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

      {/* Tile Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Premium Tile Materials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We work with the finest tile materials from leading manufacturers to ensure beauty and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ceramic Tile",
                description: "Versatile, affordable, and available in countless designs.",
                features: ["Water Resistant", "Easy Maintenance", "Design Variety", "Budget Friendly"],
                price: "$3-8/sq ft",
              },
              {
                title: "Porcelain Tile",
                description: "Dense, durable, and perfect for high-traffic areas.",
                features: ["Extremely Durable", "Stain Resistant", "Low Maintenance", "Frost Resistant"],
                price: "$5-15/sq ft",
              },
              {
                title: "Natural Stone",
                description: "Elegant marble, granite, and travertine for luxury appeal.",
                features: ["Unique Patterns", "Luxury Appeal", "Natural Beauty", "Increases Value"],
                price: "$8-25/sq ft",
              },
              {
                title: "Mosaic Tile",
                description: "Intricate patterns and designs for accent walls and features.",
                features: ["Artistic Designs", "Custom Patterns", "Accent Features", "Unique Textures"],
                price: "$10-30/sq ft",
              },
            ].map((material, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${material.title.toLowerCase()} tile material`}
                      alt={`${material.title} material`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-serif">{material.title}</CardTitle>
                  <Badge variant="outline" className="mt-2">
                    {material.price}
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

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready for Beautiful Tile Work?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Transform your space with professional tile installation that combines beauty, durability, and expert
              craftsmanship.
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