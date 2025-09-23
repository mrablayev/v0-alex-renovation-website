import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Home, Shield, Droplets, CheckCircle, Hammer, Wrench, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roofing Services Rochester NY - Roof Repair & Installation - Alex Renovation",
  description:
    "Professional roofing services in Rochester, NY. Roof repair, replacement, gutters, and emergency services with warranty coverage.",
}

export default function RoofingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/professional-roofer-installing-shingles-on-house.jpg"
            alt="Professional roofing installation background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Licensed Roofing Contractors
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Protect Your Home with Expert Roofing
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Professional roofing services including repair, replacement, and emergency services. We use premium
                materials and provide comprehensive warranties to protect your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Free Roof Inspection</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="tel:+15854725795">Emergency Service</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/beautiful-home-with-new-architectural-shingle-roof.jpg"
                  alt="Beautiful home with new roof installation"
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
              Complete Roofing Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From minor repairs to complete roof replacement, we provide comprehensive roofing solutions with premium
              materials and expert craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Roof Replacement",
                description:
                  "Complete roof replacement with premium materials and expert installation. We handle everything from tear-off to cleanup.",
                features: [
                  "Architectural Shingle Installation",
                  "Metal Roofing Systems",
                  "Slate & Tile Roofing",
                  "Complete Tear-Off & Disposal",
                ],
                benefits:
                  "Increases home value by 15-20%, provides 25-50 year warranty coverage, and improves energy efficiency.",
              },
              {
                icon: Hammer,
                title: "Roof Repair Services",
                description:
                  "Professional roof repairs for leaks, storm damage, and wear issues. Fast response to prevent further damage to your home.",
                features: [
                  "Leak Detection & Repair",
                  "Storm Damage Restoration",
                  "Shingle Replacement",
                  "Flashing & Gutter Repair",
                ],
                benefits:
                  "Prevents water damage, extends roof life, and maintains home protection with cost-effective solutions.",
              },
              {
                icon: Droplets,
                title: "Gutter Systems",
                description:
                  "Complete gutter installation, repair, and maintenance to protect your home's foundation and landscaping from water damage.",
                features: [
                  "Seamless Gutter Installation",
                  "Gutter Guard Systems",
                  "Downspout Extensions",
                  "Gutter Cleaning & Maintenance",
                ],
                benefits:
                  "Protects foundation, prevents basement flooding, and reduces maintenance with leaf guard systems.",
              },
              {
                icon: Shield,
                title: "Emergency Roofing",
                description:
                  "24/7 emergency roofing services for storm damage, leaks, and urgent repairs to protect your home immediately.",
                features: [
                  "Emergency Tarping Services",
                  "Storm Damage Assessment",
                  "Insurance Claim Assistance",
                  "Rapid Response Team",
                ],
                benefits:
                  "Prevents further damage, provides immediate protection, and includes insurance claim support.",
              },
              {
                icon: Wrench,
                title: "Roof Maintenance",
                description:
                  "Preventive maintenance programs to extend roof life and identify potential issues before they become costly problems.",
                features: [
                  "Annual Roof Inspections",
                  "Preventive Maintenance Plans",
                  "Gutter Cleaning Services",
                  "Minor Repair Services",
                ],
                benefits: "Extends roof life by 5-10 years, prevents major repairs, and maintains warranty coverage.",
              },
              {
                icon: AlertTriangle,
                title: "Insurance Claims",
                description:
                  "Expert assistance with insurance claims for storm damage, helping you navigate the process and maximize your coverage.",
                features: [
                  "Damage Documentation",
                  "Insurance Adjuster Meetings",
                  "Claim Filing Assistance",
                  "Restoration Services",
                ],
                benefits:
                  "Maximizes insurance coverage, simplifies claim process, and ensures proper restoration work.",
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

      {/* Roofing Materials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Premium Roofing Materials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We use only the highest quality roofing materials from trusted manufacturers with comprehensive warranty
              coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Architectural Shingles",
                description: "Premium dimensional shingles with 25-30 year warranties.",
                features: ["Wind Resistant", "Energy Efficient", "Multiple Colors", "Algae Resistant"],
                lifespan: "25-30 years",
              },
              {
                title: "Metal Roofing",
                description: "Durable metal systems with 40-50 year warranties.",
                features: ["Fire Resistant", "Energy Efficient", "Low Maintenance", "Recyclable"],
                lifespan: "40-50 years",
              },
              {
                title: "Slate Roofing",
                description: "Natural stone roofing with 75-100 year lifespan.",
                features: ["Fire Resistant", "Weather Proof", "Natural Beauty", "Eco-Friendly"],
                lifespan: "75-100 years",
              },
              {
                title: "Tile Roofing",
                description: "Clay and concrete tiles with 50+ year warranties.",
                features: ["Fire Resistant", "Insulating", "Low Maintenance", "Storm Resistant"],
                lifespan: "50+ years",
              },
            ].map((material, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${material.title.toLowerCase()} roofing material`}
                      alt={`${material.title} roofing material`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-serif">{material.title}</CardTitle>
                  <Badge variant="outline" className="mt-2">
                    {material.lifespan}
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Roofing Investment Guide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quality roofing that protects your home and adds significant value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Roof Repair",
                price: "$300 - $1,500",
                description: "Professional repair services for leaks and damage.",
                features: ["Leak detection & repair", "Shingle replacement", "Flashing repair", "Emergency tarping"],
              },
              {
                title: "Roof Replacement",
                price: "$8,000 - $15,000",
                description: "Complete roof replacement with premium materials.",
                features: ["Complete tear-off", "Premium shingles", "New underlayment", "25-year warranty"],
                popular: true,
              },
              {
                title: "Premium Systems",
                price: "$15,000 - $30,000",
                description: "High-end roofing with metal, slate, or tile materials.",
                features: ["Premium materials", "Enhanced warranties", "Energy efficiency", "Lifetime protection"],
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
              Protect Your Home with Expert Roofing
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Don't wait for small problems to become major issues. Schedule your free roof inspection today and get
              expert recommendations for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Free Inspection</Link>
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
