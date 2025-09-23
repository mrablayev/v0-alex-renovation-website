import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Wrench, CheckCircle, Home, Hammer, Clock, Shield, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Handyman Services Rochester NY - Home Repairs - Alex Renovation",
  description:
    "Professional handyman services in Rochester, NY. Home repairs, maintenance, installations, and small projects. Same-day service available. Free estimates.",
}

export default function HandymanPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/professional-handyman-with-tools-and-toolbox.jpg"
            alt="Professional handyman services background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Professional Handyman Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Reliable Handyman Services for Every Home Need
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                From small repairs to home maintenance and installations, our skilled handyman team handles all your
                home improvement needs with professional expertise and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="tel:+15854725795">Same-Day Service</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/handyman-installing-cabinet-hardware-and-fixtures.jpg"
                  alt="Professional handyman at work"
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
              Complete Handyman Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              No job too small! Our experienced handyman team handles all your home repair and maintenance needs with
              professional quality and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Home Repairs & Maintenance",
                description:
                  "General home repairs including door adjustments, window repairs, cabinet fixes, and routine maintenance to keep your home in perfect condition.",
                features: [
                  "Door & Window Adjustments",
                  "Cabinet Hardware Installation",
                  "Shelf & Bracket Installation",
                  "General Home Maintenance",
                ],
                rate: "$75-125/hr",
                benefits:
                  "Prevents small problems from becoming major issues, maintains home value, and ensures everything functions properly.",
              },
              {
                icon: Wrench,
                title: "Fixture Installation & Replacement",
                description:
                  "Professional installation of light fixtures, ceiling fans, bathroom accessories, and home hardware with proper mounting and electrical connections.",
                features: [
                  "Light Fixture Installation",
                  "Ceiling Fan Installation",
                  "Bathroom Accessory Mounting",
                  "Cabinet Hardware Installation",
                ],
                rate: "$100-150/hr",
                benefits:
                  "Ensures safe installation, prevents damage to walls and ceilings, and provides professional-quality results.",
              },
              {
                icon: Home,
                title: "Assembly & Installation Services",
                description:
                  "Expert assembly and installation of furniture, appliances, and home equipment with proper tools and techniques for lasting results.",
                features: [
                  "Furniture Assembly",
                  "Appliance Installation",
                  "TV Mounting & Setup",
                  "Home Organization Systems",
                ],
                rate: "$75-100/hr",
                benefits:
                  "Saves time and frustration, ensures proper assembly, and prevents damage from incorrect installation.",
              },
              {
                icon: Shield,
                title: "Safety & Security Upgrades",
                description:
                  "Home safety improvements including grab bar installation, smoke detector updates, and security hardware installation for peace of mind.",
                features: [
                  "Grab Bar Installation",
                  "Smoke Detector Updates",
                  "Security Hardware Installation",
                  "Child Safety Modifications",
                ],
                rate: "$100-150/hr",
                benefits:
                  "Improves home safety, provides peace of mind, and helps prevent accidents and injuries.",
              },
              {
                icon: Zap,
                title: "Minor Electrical & Plumbing",
                description:
                  "Small electrical and plumbing tasks including outlet installation, faucet replacement, and minor repairs that don't require major system work.",
                features: [
                  "Outlet & Switch Installation",
                  "Faucet Replacement",
                  "Toilet Repair & Installation",
                  "Minor Leak Repairs",
                ],
                rate: "$125-175/hr",
                benefits:
                  "Handles common household issues quickly, prevents water damage, and ensures electrical safety.",
              },
              {
                icon: Clock,
                title: "Emergency Repair Services",
                description:
                  "Quick response for urgent home repairs including emergency fixes, temporary solutions, and same-day service for critical issues.",
                features: [
                  "Same-Day Service Available",
                  "Emergency Temporary Fixes",
                  "Urgent Repair Response",
                  "Weekend Service Available",
                ],
                rate: "$150-200/hr",
                benefits:
                  "Prevents further damage, provides immediate solutions, and offers peace of mind during emergencies.",
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

      {/* Common Tasks */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Common Handyman Tasks</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Here are some of the most popular handyman services we provide for Rochester homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Leaky faucet repair",
              "Door lock installation",
              "Ceiling fan installation",
              "Drywall hole repair",
              "Shelf installation",
              "Cabinet door adjustment",
              "Toilet installation",
              "Light switch replacement",
              "Caulking & sealing",
              "Furniture assembly",
              "TV wall mounting",
              "Grab bar installation",
              "Smoke detector installation",
              "Weather stripping",
              "Gutter cleaning",
              "Deck staining",
            ].map((task, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Need a Reliable Handyman?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              No job too small! Contact us for professional handyman services that get the job done right the first
              time.
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