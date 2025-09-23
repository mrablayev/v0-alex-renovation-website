import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedLinks, kitchenRelatedLinks } from "@/components/related-links"
import { ServiceNavigation } from "@/components/service-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ChefHat, CheckCircle, Lightbulb, Wrench, Home, Zap, Droplets } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kitchen Renovations Rochester NY - Alex Renovation",
  description:
    "Professional kitchen remodeling services in Rochester, NY. Custom cabinetry, countertops, appliances. Transform your kitchen. Free estimates.",
}

export default function KitchenRenovationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumbs */}
      <section className="py-4 bg-muted/20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/kitchen-renovation-in-progress-with-cabinets-count.jpg"
            alt="Professional kitchen renovation background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Kitchen Renovation Experts
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">Create Your Dream Kitchen</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Transform the heart of your home with custom cabinetry, premium countertops, and modern appliances. Our
                expert team creates functional, beautiful kitchens that bring families together. We also provide <Link href="/services/bathroom-remodels" className="text-primary hover:underline">bathroom renovation services</Link> and <Link href="/services/flooring" className="text-primary hover:underline">professional flooring installation</Link> to complete your home transformation.
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
                  src="/modern-kitchen-with-white-cabinets-quartz-countert.jpg"
                  alt="Modern kitchen renovation with custom cabinetry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?key=hmysu"
            alt="Kitchen renovation background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Complete Kitchen Renovation Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform the heart of your home with our comprehensive kitchen remodeling services. From design
              consultation to final installation, we create functional, beautiful kitchens that bring families together
              and add significant value to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Custom Kitchen Cabinetry",
                description:
                  "Handcrafted custom cabinets designed to maximize storage efficiency and complement your home's architectural style. We work with premium wood species and modern hardware to create lasting beauty and functionality.",
                features: [
                  "Custom Design & 3D Rendering",
                  "Premium Wood & Hardware Selection",
                  "Soft-Close Doors & Drawers",
                  "Organizational System Integration",
                ],
                benefits:
                  "Maximizes storage space, increases home value by 15-25%, and provides personalized solutions for your cooking and storage needs.",
              },
              {
                icon: Home,
                title: "Premium Countertop Installation",
                description:
                  "Professional installation of premium countertop materials including quartz, granite, marble, and butcher block. We ensure precise measurements, seamless joints, and proper support for long-lasting beauty.",
                features: [
                  "Quartz & Granite Fabrication",
                  "Butcher Block & Wood Options",
                  "Marble & Natural Stone",
                  "Custom Edge Profiles & Details",
                ],
                benefits:
                  "Provides durable work surfaces, enhances kitchen aesthetics, and offers easy maintenance with stain-resistant materials.",
              },
              {
                icon: Zap,
                title: "Appliance Integration Services",
                description:
                  "Seamless integration of modern appliances with proper <Link href='/services/electrical' className='text-primary hover:underline'>electrical connections</Link>, <Link href='/services/plumbing' className='text-primary hover:underline'>plumbing hookups</Link>, and ventilation systems. We ensure optimal performance and energy efficiency for all kitchen appliances.",
                features: [
                  "Built-in Appliance Installation",
                  "Electrical System Upgrades",
                  "Plumbing Connections & Gas Lines",
                  "Ventilation & Hood Installation",
                ],
                benefits:
                  "Ensures proper appliance function, improves energy efficiency, and creates a cohesive, professional kitchen design.",
              },
              {
                icon: Lightbulb,
                title: "Kitchen Lighting Design",
                description:
                  "Comprehensive lighting design featuring layered illumination for task, ambient, and accent lighting. We create well-lit workspaces that enhance both functionality and atmosphere.",
                features: [
                  "Under-Cabinet LED Systems",
                  "Pendant & Island Lighting",
                  "Recessed Ceiling Lights",
                  "Dimmer Controls & Smart Integration",
                ],
                benefits:
                  "Improves cooking safety and efficiency, creates ambiance for entertaining, and can reduce energy costs by 60% with LED technology.",
              },
              {
                icon: Droplets,
                title: "Backsplash & Tile Work",
                description:
                  "Beautiful backsplash installation and flooring that ties your kitchen design together. We specialize in subway tile, natural stone, mosaic patterns, and custom designs that reflect your personal style.",
                features: [
                  "Subway & Metro Tile Installation",
                  "Natural Stone & Marble",
                  "Custom Mosaic Patterns",
                  "Waterproof Installation Techniques",
                ],
                benefits:
                  "Protects walls from moisture and stains, adds visual interest, and provides easy-to-clean surfaces for busy kitchens. Learn more about our <Link href='/services/tiling' className='text-primary hover:underline'>professional tiling services</Link>.",
              },
              {
                icon: Wrench,
                title: "Plumbing & Electrical Updates",
                description:
                  "Complete plumbing and electrical system updates to support your new kitchen layout. We handle sink installations, dishwasher connections, electrical panels, and GFCI outlet requirements.",
                features: [
                  "Kitchen Sink & Faucet Installation",
                  "Electrical Panel Upgrades",
                  "GFCI Outlet Installation",
                  "Water Line & Drain Connections",
                ],
                benefits:
                  "Ensures code compliance, supports modern appliances, and provides safe, reliable utility connections for years to come.",
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

      {/* Kitchen Styles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Popular Kitchen Styles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From traditional to contemporary, we create kitchens that reflect your personal style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Modern Farmhouse",
                description: "Warm wood tones with clean lines and vintage-inspired details.",
                features: ["Shaker Cabinets", "Butcher Block", "Subway Tile", "Barn Doors"],
              },
              {
                title: "Contemporary",
                description: "Sleek, minimalist design with high-end materials and finishes.",
                features: ["Flat Panel Doors", "Quartz Counters", "Stainless Steel", "LED Lighting"],
              },
              {
                title: "Traditional",
                description: "Classic elegance with raised panel doors and rich finishes.",
                features: ["Raised Panels", "Crown Molding", "Granite Counters", "Oil-Rubbed Bronze"],
              },
              {
                title: "Transitional",
                description: "Perfect blend of traditional and contemporary elements.",
                features: ["Mixed Materials", "Neutral Colors", "Clean Lines", "Timeless Appeal"],
              },
            ].map((style, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${style.title.toLowerCase()} kitchen style`}
                      alt={`${style.title} kitchen style`}
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

      {/* Pricing Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Kitchen Renovation Investment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quality kitchen renovations that add significant value to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Essential Update",
                price: "$15,000 - $25,000",
                description: "Refresh your kitchen with new cabinets, countertops, and appliances.",
                features: [
                  "Stock cabinets",
                  "Laminate countertops",
                  "Standard appliances",
                  "Basic backsplash",
                  "Standard fixtures",
                ],
              },
              {
                title: "Complete Renovation",
                price: "$25,000 - $45,000",
                description: "Full kitchen transformation with custom features and premium materials.",
                features: [
                  "Semi-custom cabinets",
                  "Quartz countertops",
                  "Mid-range appliances",
                  "Tile backsplash",
                  "Under-cabinet lighting",
                ],
                popular: true,
              },
              {
                title: "Luxury Kitchen",
                price: "$45,000+",
                description: "High-end renovation with custom cabinetry and luxury finishes.",
                features: [
                  "Custom cabinetry",
                  "Natural stone counters",
                  "Premium appliances",
                  "Designer backsplash",
                  "Smart home features",
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

      {/* Related Services */}
      <RelatedLinks 
        title="Complete Your Home Renovation"
        links={kitchenRelatedLinks}
        className="bg-muted/30"
      />

      {/* Service Navigation */}
      <ServiceNavigation
        currentService="Kitchen Renovations"
        nextService={{
          title: "Bathroom Remodels",
          href: "/services/bathroom-remodels"
        }}
      />

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Ready to Create Your Dream Kitchen?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Let's discuss your kitchen renovation project. We'll provide a detailed design consultation and
              transparent pricing to bring your vision to life. We also offer <Link href="/services/bathroom-remodels" className="text-white hover:text-white/80 underline">bathroom renovation services</Link> and <Link href="/services/flooring" className="text-white hover:text-white/80 underline">flooring installation</Link> to complete your home transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Schedule Consultation</Link>
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
