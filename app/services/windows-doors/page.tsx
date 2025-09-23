import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Home, Shield, Thermometer, CheckCircle, Lock, Eye, Wind } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Window & Door Replacement Rochester NY - Energy Efficient - Alex Renovation",
  description:
    "Professional window and door installation in Rochester, NY. Energy-efficient windows, entry doors, patio doors. Improve comfort and reduce energy costs.",
}

export default function WindowsDoorsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/professional-installing-energy-efficient-windows.jpg"
            alt="Professional window installation background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Energy-Efficient Windows & Doors
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Transform Your Home with New Windows & Doors
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Improve energy efficiency, security, and curb appeal with professional window and door installation.
                Quality products with comprehensive warranties and expert installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/projects">View Gallery</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/beautiful-home-with-new-energy-efficient-windows.jpg"
                  alt="Beautiful home with new energy-efficient windows"
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
              Professional Window & Door Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From energy-efficient windows to secure entry doors, we provide complete installation services that
              improve comfort, security, and home value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Replacement Windows",
                description:
                  "Energy-efficient replacement windows that reduce energy costs and improve comfort while enhancing your home's appearance.",
                features: [
                  "Double & Triple Pane Glass",
                  "Low-E Coating Technology",
                  "Vinyl, Wood & Fiberglass Frames",
                  "Custom Sizes & Styles",
                ],
                benefits: "Reduces energy costs by 25-30%, eliminates drafts, and increases home value by 10-15%.",
              },
              {
                icon: Home,
                title: "Entry Doors",
                description:
                  "Secure, beautiful entry doors that provide protection, energy efficiency, and stunning curb appeal for your home.",
                features: [
                  "Steel & Fiberglass Construction",
                  "Decorative Glass Options",
                  "Multi-Point Locking Systems",
                  "Energy-Efficient Cores",
                ],
                benefits:
                  "Improves security, reduces energy loss, and creates impressive first impressions for guests.",
              },
              {
                icon: Wind,
                title: "Patio Doors",
                description:
                  "Sliding and French patio doors that connect indoor and outdoor living spaces with style and energy efficiency.",
                features: [
                  "Sliding & French Door Styles",
                  "Multi-Point Locking",
                  "Low-E Glass Technology",
                  "Weather-Resistant Materials",
                ],
                benefits:
                  "Enhances indoor-outdoor living, provides natural light, and improves home entertainment spaces.",
              },
              {
                icon: Shield,
                title: "Storm Doors",
                description:
                  "Protective storm doors that add an extra layer of security and energy efficiency while preserving your entry door.",
                features: [
                  "Full & Partial View Options",
                  "Retractable Screen Systems",
                  "Heavy-Duty Hardware",
                  "Weather-Resistant Finishes",
                ],
                benefits: "Extends entry door life, provides ventilation options, and adds extra security layer.",
              },
              {
                icon: Lock,
                title: "Security Features",
                description:
                  "Advanced security features including multi-point locks, reinforced frames, and impact-resistant glass options.",
                features: [
                  "Multi-Point Locking Systems",
                  "Reinforced Door Frames",
                  "Impact-Resistant Glass",
                  "Smart Lock Integration",
                ],
                benefits: "Enhances home security, provides peace of mind, and may provide additional protection.",
              },
              {
                icon: Thermometer,
                title: "Energy Efficiency",
                description:
                  "Advanced energy-efficient features that reduce heating and cooling costs while improving year-round comfort.",
                features: [
                  "ENERGY STAR Certification",
                  "Low-E Glass Coatings",
                  "Insulated Frames",
                  "Weather Stripping Systems",
                ],
                benefits: "Reduces energy bills, eliminates drafts, and qualifies for energy rebates and tax credits.",
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

      {/* Window Styles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Popular Window & Door Styles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose from a wide variety of styles to complement your home's architecture and personal preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Double-Hung Windows",
                description: "Classic style with both sashes that move up and down for easy cleaning.",
                features: ["Easy Cleaning", "Traditional Look", "Good Ventilation", "Energy Efficient"],
              },
              {
                title: "Casement Windows",
                description: "Side-hinged windows that open outward for maximum ventilation.",
                features: ["Maximum Airflow", "Unobstructed Views", "Easy Operation", "Tight Seal"],
              },
              {
                title: "Bay & Bow Windows",
                description: "Projecting windows that create additional interior space and natural light.",
                features: ["Extra Space", "Panoramic Views", "Natural Light", "Architectural Interest"],
              },
              {
                title: "Sliding Patio Doors",
                description: "Space-saving doors that slide open for easy access to outdoor areas.",
                features: ["Space Saving", "Large Glass Area", "Easy Operation", "Weather Resistant"],
              },
            ].map((style, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${style.title.toLowerCase()} window door style`}
                      alt={`${style.title} style`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-serif">{style.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{style.description}</CardDescription>
                  <div className="space-y-1">
                    {style.features.map((feature, i) => (
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Window & Door Investment Guide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quality windows and doors that improve comfort, security, and energy efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Standard Windows",
                price: "$300 - $600 each",
                description: "Quality replacement windows with energy-efficient features.",
                features: ["Double-pane glass", "Vinyl frames", "Standard hardware", "10-year warranty"],
              },
              {
                title: "Premium Package",
                price: "$600 - $1,200 each",
                description: "High-performance windows with advanced energy features.",
                features: ["Triple-pane glass", "Low-E coatings", "Fiberglass frames", "Lifetime warranty"],
                popular: true,
              },
              {
                title: "Entry Doors",
                price: "$800 - $2,500",
                description: "Secure, energy-efficient entry doors with professional installation.",
                features: ["Steel or fiberglass", "Multi-point locks", "Decorative glass", "Weather stripping"],
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
              Ready to Upgrade Your Windows & Doors?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Improve your home's comfort, security, and energy efficiency with professional window and door
              installation. Get your free estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Free Estimate</Link>
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
