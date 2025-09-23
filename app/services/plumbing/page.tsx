import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Wrench, CheckCircle, Droplets, Thermometer, AlertTriangle, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plumbing Services Rochester NY - Alex Renovation",
  description:
    "Professional plumbing services in Rochester, NY. Fixture installation, pipe repair, water heaters, leak detection. Emergency service available.",
}

export default function PlumbingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-o0gh0.png"
            alt="Professional plumbing background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Professional Plumbing Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance text-white">
                Reliable Plumbing Solutions
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed">
                Professional plumbing services for your home renovation and repair needs. From fixture installation to
                emergency repairs, our expert plumbers deliver quality workmanship you can trust.
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
                  src="/placeholder-t8t5c.png"
                  alt="Professional plumbing services"
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
            src="/placeholder-io95x.png"
            alt="Plumbing tools background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Plumbing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Complete plumbing solutions for residential properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Fixture Installation",
                description: "Professional installation of sinks, faucets, toilets, and shower systems.",
                rate: "$150-200/hr",
              },
              {
                icon: Thermometer,
                title: "Water Heater Service",
                description: "Installation, repair, and maintenance of traditional and tankless water heaters.",
                rate: "$200-300/hr",
              },
              {
                icon: Droplets,
                title: "Leak Detection & Repair",
                description: "Advanced leak detection and professional repair services.",
                rate: "$150-250/hr",
              },
              {
                icon: AlertTriangle,
                title: "Emergency Plumbing",
                description: "24/7 emergency plumbing services for urgent repairs.",
                rate: "$200-350/hr",
              },
              {
                icon: Wrench,
                title: "Pipe Repair & Replacement",
                description: "Complete pipe repair and replacement services for all pipe materials.",
                rate: "$150-200/hr",
              },
              {
                icon: Clock,
                title: "Drain Cleaning",
                description: "Professional drain cleaning and maintenance services.",
                rate: "$100-150/hr",
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
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">24/7 Emergency Service</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Plumbing emergencies don't wait for business hours. We're available 24/7 for urgent repairs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                "Burst Pipes",
                "Water Heater Failure",
                "Severe Leaks",
                "Blocked Drains",
                "No Hot Water",
                "Toilet Overflows",
              ].map((emergency, index) => (
                <div key={index} className="flex items-center space-x-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{emergency}</span>
                </div>
              ))}
            </div>
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="tel:+15854725795">Call Emergency Line</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Need Plumbing Services?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact our professional plumbers for reliable service and quality workmanship on all your plumbing needs.
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
