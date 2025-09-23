import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Zap, CheckCircle, Shield, Lightbulb, Home, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Electrical Services Rochester NY - Alex Renovation",
  description:
    "Professional electrical services in Rochester, NY. Panel upgrades, wiring, smart home installation, lighting. Emergency service available.",
}

export default function ElectricalPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-c7vkg.png"
            alt="Professional electrical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Professional Electrical Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance text-white">
                Safe, Professional Electrical Work
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed">
                Professional electrical services for your home renovation and safety needs. From panel upgrades to smart
                home installations, our expert electricians ensure code compliance and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="tel:+15854725795">Emergency Service</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder-510h8.png"
                  alt="Professional electrical services"
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
            src="/placeholder-m0vxb.png"
            alt="Electrical tools background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Professional Electrical Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional electrical services performed by expert electricians. We handle everything from simple outlet
              installations to complete home rewiring, ensuring all work meets current NEC codes and local Rochester
              building requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Electrical Panel Upgrades",
                description:
                  "Upgrade your home's electrical panel to meet modern power demands safely. We install new 200-amp panels, AFCI/GFCI breakers, and surge protection systems to protect your home and family from electrical hazards.",
                rate: "$1,500-3,000",
                details:
                  "Includes permit acquisition, inspection scheduling, old panel removal, new panel installation, and circuit labeling.",
                benefits: "Increases home safety, supports modern appliances, and improves electrical efficiency.",
              },
              {
                icon: Zap,
                title: "Complete Home Rewiring",
                description:
                  "Full electrical system rewiring for older homes or major renovations. We install new copper wiring, update outlets to GFCI standards, and ensure your electrical system can handle today's technology demands.",
                rate: "$200-300/hr",
                details:
                  "Comprehensive service including wire removal, new circuit installation, outlet upgrades, and switch replacements.",
                benefits:
                  "Eliminates fire hazards, improves electrical efficiency, and increases property value significantly.",
              },
              {
                icon: Lightbulb,
                title: "Lighting Design & Installation",
                description:
                  "Professional lighting installation including recessed lights, chandeliers, under-cabinet LED systems, and outdoor security lighting. We create layered lighting plans that enhance both function and ambiance.",
                rate: "$150-250/hr",
                details:
                  "Services include lighting design consultation, fixture installation, dimmer controls, and smart lighting integration.",
                benefits:
                  "Improves home aesthetics, increases security, and can reduce energy costs by up to 75% with LED upgrades.",
              },
              {
                icon: Home,
                title: "Smart Home Electrical Setup",
                description:
                  "Transform your home with smart electrical systems including automated switches, smart outlets, whole-home surge protection, and integration with popular home automation platforms like Alexa and Google Home.",
                rate: "$200-350/hr",
                details:
                  "Installation of smart switches, outlets, thermostats, and integration with home automation systems.",
                benefits:
                  "Increases convenience, improves energy efficiency, and adds significant value to modern homes.",
              },
              {
                icon: AlertTriangle,
                title: "Emergency Electrical Services",
                description:
                  "24/7 emergency electrical repairs for power outages, electrical fires, sparking outlets, and other urgent electrical issues. Our expert electricians respond quickly to restore safety and power to your home.",
                rate: "$250-400/hr",
                details:
                  "Rapid response service including troubleshooting, temporary repairs, and permanent solutions.",
                benefits:
                  "Ensures family safety, prevents property damage, and restores essential electrical services quickly.",
              },
              {
                icon: CheckCircle,
                title: "Electrical Code Compliance",
                description:
                  "Comprehensive electrical inspections and code compliance updates to bring older electrical systems up to current NEC and local Rochester standards. Essential for home sales and insurance requirements.",
                rate: "$150-200/hr",
                details:
                  "Thorough inspection, code violation identification, compliance upgrades, and certification documentation.",
                benefits: "Ensures legal compliance, improves safety, and facilitates smooth real estate transactions.",
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
                <CardContent className="space-y-3">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground font-medium">Service Details:</p>
                    <p className="text-sm text-muted-foreground mt-1">{service.details}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground font-medium">Key Benefits:</p>
                    <p className="text-sm text-muted-foreground mt-1">{service.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Safety & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              All electrical work is performed to code with proper permits and inspections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Expert Electricians",
                description: "Professional electrical contractors with proper expertise",
              },
              {
                icon: CheckCircle,
                title: "Code Compliant",
                description: "All work meets current electrical codes",
              },
              {
                icon: AlertTriangle,
                title: "Safety First",
                description: "Comprehensive safety protocols and testing",
              },
              {
                icon: Home,
                title: "Warranty Included",
                description: "All electrical work comes with warranty",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-serif">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{benefit.description}</CardDescription>
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Need Electrical Services?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact our professional electricians for safe, professional electrical work that meets all codes and
              standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Schedule Service</Link>
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
