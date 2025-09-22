import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Thermometer, Wind, Snowflake, CheckCircle, Wrench, Shield, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HVAC Services Rochester NY - Heating & Cooling - Alex Renovation",
  description:
    "Professional HVAC installation, repair, and maintenance in Rochester, NY. Heating, cooling, ductwork, and energy-efficient systems. Emergency service available.",
}

export default function HVACPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/hvac-technician-installing-air-conditioning-unit.jpg"
            alt="Professional HVAC installation background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                HVAC Installation & Repair
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Complete Heating & Cooling Solutions
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Keep your home comfortable year-round with professional HVAC installation, repair, and maintenance
                services. Energy-efficient systems that save money and improve indoor air quality.
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
                  src="/modern-hvac-system-installation-in-basement.jpg"
                  alt="Modern HVAC system installation"
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
              Professional HVAC Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From installation to emergency repairs, we provide comprehensive heating and cooling solutions for optimal
              home comfort and energy efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Thermometer,
                title: "Heating System Installation",
                description:
                  "Professional installation of furnaces, heat pumps, and boilers with energy-efficient technology for reliable winter comfort.",
                features: [
                  "High-Efficiency Furnace Installation",
                  "Heat Pump Systems",
                  "Boiler Installation & Repair",
                  "Radiant Floor Heating",
                ],
                benefits:
                  "Reduces heating costs by up to 30%, provides consistent comfort, and includes comprehensive warranty coverage.",
              },
              {
                icon: Snowflake,
                title: "Air Conditioning Services",
                description:
                  "Complete AC installation, repair, and maintenance to keep your home cool and comfortable during Rochester's hot summers.",
                features: [
                  "Central Air Installation",
                  "Ductless Mini-Split Systems",
                  "AC Repair & Maintenance",
                  "Smart Thermostat Integration",
                ],
                benefits:
                  "Improves energy efficiency, provides precise temperature control, and reduces humidity for better indoor air quality.",
              },
              {
                icon: Wind,
                title: "Ductwork & Ventilation",
                description:
                  "Professional ductwork installation, repair, and cleaning to ensure optimal airflow and indoor air quality throughout your home.",
                features: [
                  "Duct Installation & Replacement",
                  "Air Duct Cleaning & Sealing",
                  "Ventilation System Design",
                  "Indoor Air Quality Solutions",
                ],
                benefits:
                  "Improves air circulation, reduces energy waste, and eliminates dust and allergens for healthier indoor air.",
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

      {/* Emergency Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="destructive" className="w-fit mx-auto">
              24/7 Emergency Service
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Emergency HVAC Repair Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              HVAC emergencies don't wait for business hours. Our emergency repair team is available 24/7 for urgent
              heating and cooling issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Emergency service available around the clock, including weekends and holidays.",
              },
              {
                icon: Wrench,
                title: "Rapid Response",
                description: "Average response time of 2 hours for emergency HVAC repairs in Rochester area.",
              },
              {
                icon: Shield,
                title: "Guaranteed Repairs",
                description: "All emergency repairs backed by our satisfaction guarantee and warranty coverage.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="destructive" asChild className="text-lg px-8 py-6">
              <Link href="tel:+15854725795">Call Emergency Line: (585) 472-5795</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">HVAC Service Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transparent pricing for all HVAC services with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Service Call",
                price: "$95 - $150",
                description: "Diagnostic service call with detailed system evaluation.",
                features: [
                  "Complete system inspection",
                  "Diagnostic testing",
                  "Written estimate",
                  "Same-day service available",
                ],
              },
              {
                title: "System Installation",
                price: "$3,500 - $8,000",
                description: "Complete HVAC system installation with warranty coverage.",
                features: [
                  "High-efficiency equipment",
                  "Professional installation",
                  "10-year warranty",
                  "Energy rebate assistance",
                ],
                popular: true,
              },
              {
                title: "Emergency Repair",
                price: "$150 - $500",
                description: "24/7 emergency repair service with priority scheduling.",
                features: [
                  "24/7 availability",
                  "2-hour response time",
                  "Parts & labor warranty",
                  "No overtime charges",
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Need HVAC Service Today?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Don't let heating or cooling problems disrupt your comfort. Contact us for fast, reliable HVAC service
              with upfront pricing and guaranteed satisfaction.
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
