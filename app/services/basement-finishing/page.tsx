import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Home, Tv, Dumbbell, CheckCircle, Droplets, Zap, Thermometer } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Basement Finishing Rochester NY - Basement Remodeling - Alex Renovation",
  description:
    "Professional basement finishing and remodeling in Rochester, NY. Create additional living space with family rooms, home theaters, and recreational areas.",
}

export default function BasementFinishingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/beautiful-finished-basement-with-entertainment-area.jpg"
            alt="Professional basement finishing background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Basement Finishing Specialists
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Transform Your Basement into Valuable Living Space
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Create additional living space with professional basement finishing. From family rooms to home theaters,
                we transform unused basements into beautiful, functional areas your family will love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Free Basement Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/projects">View Gallery</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/modern-finished-basement-with-home-theater-setup.jpg"
                  alt="Modern finished basement with home theater"
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
              Complete Basement Finishing Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From moisture control to final finishes, we handle every aspect of basement finishing to create
              comfortable, dry, and beautiful living spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Family Recreation Rooms",
                description:
                  "Comfortable family spaces perfect for relaxation, games, and spending time together with proper lighting and climate control.",
                features: [
                  "Open Floor Plan Design",
                  "Comfortable Seating Areas",
                  "Built-in Storage Solutions",
                  "Climate Control Systems",
                ],
                benefits:
                  "Increases usable living space by 30-50%, provides family gathering area, and adds significant home value.",
              },
              {
                icon: Tv,
                title: "Home Theater Systems",
                description:
                  "Custom home theaters with acoustic treatments, lighting control, and built-in entertainment systems for the ultimate viewing experience.",
                features: [
                  "Acoustic Wall Treatments",
                  "Theater Seating Installation",
                  "Surround Sound Wiring",
                  "Ambient Lighting Control",
                ],
                benefits:
                  "Creates premium entertainment experience, increases home value, and provides family entertainment hub.",
              },
              {
                icon: Dumbbell,
                title: "Home Gym & Fitness Areas",
                description:
                  "Dedicated fitness spaces with proper flooring, ventilation, and electrical for equipment, mirrors, and sound systems.",
                features: [
                  "Rubber Gym Flooring",
                  "Mirror Wall Installation",
                  "Ventilation Systems",
                  "Equipment Electrical",
                ],
                benefits:
                  "Saves gym membership costs, provides convenient fitness access, and increases property appeal.",
              },
              {
                icon: Droplets,
                title: "Moisture Control & Waterproofing",
                description:
                  "Comprehensive moisture control solutions including waterproofing, drainage, and humidity control for dry, comfortable basements.",
                features: [
                  "Interior Waterproofing",
                  "Sump Pump Installation",
                  "Dehumidification Systems",
                  "Vapor Barrier Installation",
                ],
                benefits: "Prevents mold and mildew, protects investment, and ensures healthy indoor air quality.",
              },
              {
                icon: Zap,
                title: "Electrical & Lighting",
                description:
                  "Complete electrical systems with adequate lighting, outlets, and circuits to support modern basement living and entertainment needs.",
                features: [
                  "Recessed Lighting Installation",
                  "GFCI Outlet Installation",
                  "Electrical Panel Upgrades",
                  "Smart Home Integration",
                ],
                benefits:
                  "Provides safe, code-compliant electrical, supports modern technology, and creates bright, welcoming spaces.",
              },
              {
                icon: Thermometer,
                title: "HVAC & Climate Control",
                description:
                  "Proper heating, cooling, and ventilation systems to maintain comfortable temperatures and air quality year-round.",
                features: [
                  "Ductwork Extensions",
                  "Zone Control Systems",
                  "Ventilation Fans",
                  "Insulation Installation",
                ],
                benefits:
                  "Maintains comfortable temperatures, improves air quality, and reduces energy costs with proper insulation.",
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

      {/* Basement Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Popular Basement Designs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform your basement into the perfect space for your family's needs and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Entertainment Center",
                description: "Complete entertainment space with bar, seating, and media systems.",
                features: ["Wet Bar Area", "Theater Seating", "Game Tables", "Sound System"],
              },
              {
                title: "Home Office Suite",
                description: "Professional workspace with separate entrance and meeting areas.",
                features: ["Private Entrance", "Built-in Desks", "Conference Area", "High-Speed Internet"],
              },
              {
                title: "Guest Suite",
                description: "Comfortable guest accommodations with bedroom and bathroom.",
                features: ["Bedroom Area", "Full Bathroom", "Kitchenette", "Separate Entrance"],
              },
              {
                title: "Multi-Purpose Space",
                description: "Flexible space that serves multiple functions for growing families.",
                features: ["Open Floor Plan", "Flexible Furniture", "Storage Solutions", "Activity Zones"],
              },
            ].map((design, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${design.title.toLowerCase()} basement design`}
                      alt={`${design.title} basement design`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-serif">{design.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{design.description}</CardDescription>
                  <div className="space-y-1">
                    {design.features.map((feature, i) => (
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Basement Finishing Investment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional basement finishing that adds significant value and living space to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Basic Finish",
                price: "$25 - $35 per sq ft",
                description: "Essential basement finishing with drywall, flooring, and basic lighting.",
                features: ["Drywall & paint", "Laminate flooring", "Basic lighting", "Standard electrical"],
              },
              {
                title: "Complete Renovation",
                price: "$35 - $55 per sq ft",
                description: "Full basement transformation with premium finishes and features.",
                features: ["Premium flooring", "Recessed lighting", "Built-in features", "Climate control"],
                popular: true,
              },
              {
                title: "Luxury Basement",
                price: "$55 - $75 per sq ft",
                description: "High-end basement with custom features and luxury finishes.",
                features: ["Custom millwork", "Luxury finishes", "Home automation", "Wet bar/kitchen"],
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Finish Your Basement?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Transform your unused basement into valuable living space. Schedule your free assessment and discover the
              potential of your basement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Free Assessment</Link>
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
