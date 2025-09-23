import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PaintBucket, CheckCircle, Home, Brush, Shield, Palette } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior & Exterior Painting Rochester NY - Alex Renovation",
  description:
    "Professional painting services in Rochester, NY. Interior & exterior painting, color consultation, premium paints. Free estimates.",
}

export default function PaintingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-qbrcb.png"
            alt="Professional painting background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Professional Painting Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance text-white">
                Transform Your Space with Color
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed">
                Professional interior and exterior painting services that refresh and protect your home. Premium paints,
                expert application, and color consultation to bring your vision to life.
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
                  src="/placeholder-qdc1b.png"
                  alt="Professional painting services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-xwd5i.png"
            alt="Painting tools background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Professional Painting Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Complete interior and exterior painting solutions for residential properties. Our experienced painters use
              premium Benjamin Moore and Sherwin-Williams paints to deliver lasting, beautiful results that protect and
              enhance your home's value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Home,
                title: "Interior Painting Services",
                description:
                  "Transform your indoor living spaces with our comprehensive interior painting services. We specialize in walls, ceilings, trim work, and cabinet refinishing using low-VOC, eco-friendly paints that are safe for your family and pets.",
                features: [
                  "Wall & Ceiling Painting with Premium Paints",
                  "Trim & Molding Detail Work",
                  "Kitchen & Bathroom Cabinet Painting",
                  "Accent Walls & Feature Painting",
                  "Drywall Texture Repair & Matching",
                  "Custom Color Matching & Consultation",
                ],
                price: "$2-4/sq ft",
                benefits:
                  "Increase home value by 10-15%, improve indoor air quality with low-VOC paints, and create personalized living spaces that reflect your style.",
              },
              {
                icon: PaintBucket,
                title: "Exterior Painting & Protection",
                description:
                  "Protect and beautify your home's exterior with our weather-resistant painting services. We use high-quality exterior paints designed to withstand Rochester's harsh winters and humid summers, ensuring long-lasting protection and curb appeal.",
                features: [
                  "House Siding & Trim Painting",
                  "Deck Staining & Sealing",
                  "Fence & Outdoor Structure Painting",
                  "Power Washing & Surface Preparation",
                  "Wood Rot Repair & Priming",
                  "Weather-Resistant Paint Systems",
                ],
                price: "$3-6/sq ft",
                benefits:
                  "Protect your investment from weather damage, increase curb appeal and property value, and extend the life of your home's exterior surfaces by 8-12 years.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <div className="grid grid-cols-1 gap-2">
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

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Specialized Painting Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Beyond standard painting, we offer specialized services to meet unique design needs and ensure perfect
              results for every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Professional Color Consultation",
                description:
                  "Expert color selection services to complement your home's architecture, lighting, and personal style. We consider factors like room size, natural light, and existing furnishings to create the perfect color palette.",
                details:
                  "Includes color psychology consultation, lighting analysis, and coordination with existing decor elements.",
              },
              {
                icon: Brush,
                title: "Specialty Finishes & Techniques",
                description:
                  "Decorative painting techniques including faux finishes, textured walls, venetian plaster, and custom murals. Perfect for creating unique focal points and adding character to any space.",
                details:
                  "Techniques include sponging, ragging, color washing, metallic finishes, and custom stenciling work.",
              },
              {
                icon: Shield,
                title: "Surface Preparation & Repair",
                description:
                  "Comprehensive surface preparation including crack repair, hole patching, sanding, priming, and caulking. Proper preparation ensures paint adhesion and longevity, preventing premature peeling and fading.",
                details:
                  "Includes drywall repair, wood rot treatment, rust removal, and primer application for optimal paint performance.",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">{service.details}</p>
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Add Color to Your Home?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Let's discuss your painting project and create a beautiful, lasting finish for your home.
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
