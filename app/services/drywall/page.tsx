import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Hammer, CheckCircle, Home, Wrench, Shield, Ruler } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drywall & Framing Services Rochester NY - Alex Renovation",
  description:
    "Professional drywall installation, repair, and framing services in Rochester, NY. New construction, repairs, texture matching, room additions. Expert craftsmanship.",
}

export default function DrywallPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-drywall.png"
            alt="Professional drywall services background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Drywall & Framing Specialists
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Professional Drywall & Framing Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Expert drywall installation, repair, and custom framing for new construction, renovations, and room
                additions. Quality craftsmanship that creates smooth, perfect walls and ceilings.
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
                  src="/placeholder-drywall-work.png"
                  alt="Professional drywall installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Drywall & Framing Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional drywall and framing services for residential construction, renovations, and repairs. We
              deliver smooth, perfectly finished walls and ceilings that provide the foundation for beautiful interiors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "New Drywall Installation",
                description:
                  "Professional drywall installation for new construction, additions, and renovations. We ensure proper hanging, taping, and finishing for smooth, paint-ready surfaces.",
                features: [
                  "Proper Hanging Techniques",
                  "Professional Taping & Mudding",
                  "Smooth Finish Application",
                  "Paint-Ready Surfaces",
                ],
                rate: "$2-4/sq ft",
                benefits:
                  "Creates perfect foundation for paint and wallpaper, ensures structural integrity, and provides professional-quality finish.",
              },
              {
                icon: Wrench,
                title: "Drywall Repair Services",
                description:
                  "Expert repair of holes, cracks, water damage, and other drywall issues. We match existing textures and ensure seamless repairs that blend perfectly with surrounding areas.",
                features: [
                  "Hole & Crack Repair",
                  "Water Damage Restoration",
                  "Texture Matching",
                  "Seamless Patch Work",
                ],
                rate: "$150-300/repair",
                benefits:
                  "Restores wall integrity, prevents further damage, and maintains consistent appearance throughout your home.",
              },
              {
                icon: Ruler,
                title: "Custom Framing Services",
                description:
                  "Professional framing for room additions, basement finishing, and structural modifications. We ensure proper load distribution and code compliance for all framing work.",
                features: [
                  "Room Addition Framing",
                  "Basement Framing",
                  "Load-Bearing Modifications",
                  "Code Compliance",
                ],
                rate: "$8-15/sq ft",
                benefits:
                  "Provides structural foundation for renovations, ensures safety and code compliance, and enables custom room layouts.",
              },
              {
                icon: Home,
                title: "Ceiling Installation & Repair",
                description:
                  "Professional ceiling drywall installation and repair services including drop ceilings, coffered ceilings, and specialty ceiling treatments.",
                features: [
                  "Standard Ceiling Installation",
                  "Drop Ceiling Systems",
                  "Coffered Ceiling Design",
                  "Ceiling Repair & Patching",
                ],
                rate: "$3-6/sq ft",
                benefits:
                  "Enhances room aesthetics, provides acoustic benefits, and creates opportunities for recessed lighting installation.",
              },
              {
                icon: Shield,
                title: "Texture Application & Matching",
                description:
                  "Expert texture application and matching for walls and ceilings. We can replicate existing textures or create new decorative finishes to enhance your interior design.",
                features: [
                  "Orange Peel Texture",
                  "Knockdown Finish",
                  "Popcorn Ceiling Removal",
                  "Custom Texture Patterns",
                ],
                rate: "$1-3/sq ft",
                benefits:
                  "Adds visual interest, hides minor imperfections, and creates consistent appearance throughout your home.",
              },
              {
                icon: CheckCircle,
                title: "Insulation & Soundproofing",
                description:
                  "Professional insulation installation and soundproofing solutions for walls and ceilings. Improve energy efficiency and reduce noise transmission between rooms.",
                features: [
                  "Fiberglass Insulation",
                  "Foam Board Installation",
                  "Soundproofing Materials",
                  "Vapor Barrier Installation",
                ],
                rate: "$2-5/sq ft",
                benefits:
                  "Improves energy efficiency, reduces utility costs, and enhances comfort by controlling temperature and sound.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">{service.rate}</Badge>
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

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Drywall Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional installation process that ensures quality results and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Evaluate project scope, measure spaces, and plan material requirements.",
              },
              {
                step: "02",
                title: "Framing & Preparation",
                description: "Install framing, insulation, and prepare surfaces for drywall installation.",
              },
              {
                step: "03",
                title: "Installation & Finishing",
                description: "Hang drywall, apply tape and mud, sand smooth, and prepare for paint.",
              },
              {
                step: "04",
                title: "Quality Control",
                description: "Final inspection, touch-ups, and cleanup for perfect results.",
              },
            ].map((phase, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-foreground font-bold text-lg">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg font-serif">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{phase.description}</CardDescription>
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Need Drywall or Framing Work?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact us for professional drywall and framing services that provide the perfect foundation for your
              renovation project.
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
