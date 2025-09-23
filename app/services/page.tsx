import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Bath,
  ChefHat,
  Hammer,
  PaintBucket,
  Wrench,
  Zap,
  Wind,
  Home,
  ArrowRight,
  CheckCircle,
  Star,
  Grid3X3,
  TreePine,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Services - Alex Renovation Rochester, NY",
  description:
    "Professional home renovation services in Rochester, NY. Kitchen remodels, bathroom renovations, flooring, painting, plumbing, electrical, HVAC, and more.",
}

const services = [
  {
    title: "Bathroom Remodels",
    description:
      "Transform your bathroom into a luxurious retreat with modern fixtures, custom tile work, and efficient layouts.",
    icon: Bath,
    href: "/services/bathroom-remodels",
    features: ["Custom Tile Work", "Modern Fixtures", "Accessibility Upgrades", "Waterproofing"],
    startingPrice: "$8,000",
    backgroundImage: "/modern-bathroom-renovation-with-tile-shower-and-va.jpg",
  },
  {
    title: "Kitchen Renovations",
    description: "Create the heart of your home with custom cabinetry, premium countertops, and modern appliances.",
    icon: ChefHat,
    href: "/services/kitchen-renovations",
    features: ["Custom Cabinetry", "Countertop Installation", "Appliance Integration", "Kitchen Islands"],
    startingPrice: "$15,000",
    backgroundImage: "/kitchen-renovation-with-custom-cabinets-and-counte.jpg",
  },
  {
    title: "Flooring Installation",
    description: "Beautiful, durable flooring solutions including hardwood, tile, laminate, and luxury vinyl.",
    icon: Home,
    href: "/services/flooring",
    features: ["Hardwood Installation", "Tile & Stone", "Laminate & LVP", "Floor Refinishing"],
    startingPrice: "$3,500",
    backgroundImage: "/laminate-flooring-installation-with-planks-and-fin.jpg",
  },
  {
    title: "Handyman Services",
    description: "Reliable handyman services for all your home repair and maintenance needs.",
    icon: Wrench,
    href: "/services/handyman",
    features: ["Home Repairs", "Fixture Installation", "Assembly Services", "Maintenance"],
    startingPrice: "$75/hr",
    backgroundImage: "/handyman-installing-cabinet-hardware-and-fixtures.jpg",
  },
  {
    title: "Tiling Services",
    description: "Expert tile installation for bathrooms, kitchens, and flooring with precision and quality.",
    icon: Grid3X3,
    href: "/services/tiling",
    features: ["Bathroom Tiles", "Kitchen Backsplashes", "Floor Tiling", "Custom Patterns"],
    startingPrice: "$5,000",
    backgroundImage: "/beautiful-bathroom-tile-installation-with-subway.jpg",
  },
  {
    title: "Basement Finishing",
    description: "Transform your basement into valuable living space with professional finishing services.",
    icon: Home,
    href: "/services/basement-finishing",
    features: ["Family Rooms", "Home Theaters", "Moisture Control", "Electrical & HVAC"],
    startingPrice: "$15,000",
    backgroundImage: "/beautiful-finished-basement-with-entertainment-area.jpg",
  },
  {
    title: "Drywall & Framing",
    description: "Professional drywall installation, repair, and custom framing for room additions and renovations.",
    icon: Hammer,
    href: "/services/drywall",
    features: ["New Construction", "Drywall Repair", "Texture Matching", "Room Additions"],
    startingPrice: "$1,200",
    backgroundImage: "/drywall-installation-and-smooth-finished-ceiling-w.jpg",
  },
  {
    title: "Decks & Patios",
    description: "Custom outdoor living spaces including deck construction and patio installation.",
    icon: TreePine,
    href: "/services/decks-patios",
    features: ["Custom Decks", "Stone Patios", "Outdoor Kitchens", "Pergolas"],
    startingPrice: "$8,000",
    backgroundImage: "/beautiful-deck-construction-with-composite-materials.jpg",
  },
  {
    title: "Windows & Doors",
    description: "Energy-efficient window and door installation for improved comfort and security.",
    icon: Home,
    href: "/services/windows-doors",
    features: ["Replacement Windows", "Entry Doors", "Patio Doors", "Energy Efficiency"],
    startingPrice: "$400",
    backgroundImage: "/beautiful-home-with-new-energy-efficient-windows.jpg",
  },
  {
    title: "Interior Painting",
    description:
      "Professional interior and exterior painting services with premium paints and expert color consultation.",
    icon: PaintBucket,
    href: "/services/painting",
    features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Trim & Detail Work"],
    startingPrice: "$2,500",
    backgroundImage: "/interior-painting-with-roller-and-finished-living-.jpg",
  },
  {
    title: "Exterior Painting",
    description: "Weather-resistant exterior painting that protects and beautifies your home's exterior.",
    icon: PaintBucket,
    href: "/services/exterior-painting",
    features: ["House Painting", "Trim Work", "Deck Staining", "Power Washing"],
    startingPrice: "$3,500",
    backgroundImage: "/exterior-house-painting-with-ladder-and-paint-bru.jpg",
  },
  {
    title: "Plumbing Services",
    description: "Complete plumbing solutions from fixture installation to pipe repair and water heater replacement.",
    icon: Wrench,
    href: "/services/plumbing",
    features: ["Fixture Installation", "Pipe Repair", "Water Heaters", "Leak Detection"],
    startingPrice: "$150/hr",
    backgroundImage: "/modern-sink-installation-with-pex-plumbing-lines-a.jpg",
  },
  {
    title: "Electrical Work",
    description: "Professional electrical services including wiring, panel upgrades, and smart home installations.",
    icon: Zap,
    href: "/services/electrical",
    features: ["Panel Upgrades", "New Wiring", "Smart Home Setup", "Lighting Installation"],
    startingPrice: "$200/hr",
    backgroundImage: "/electrical-outlet-installation-and-led-lighting-wo.jpg",
  },
  {
    title: "HVAC Services",
    description: "Heating and cooling system installation, repair, and maintenance for year-round comfort.",
    icon: Wind,
    href: "/services/hvac",
    features: ["System Installation", "Ductwork", "Maintenance", "Energy Efficiency"],
    startingPrice: "$3,000",
    backgroundImage: "/hvac-minisplit-unit-installation-and-vent-register.jpg",
  },
  {
    title: "Roofing Services",
    description: "Professional roofing installation, repair, and maintenance with premium materials.",
    icon: Home,
    href: "/services/roofing",
    features: ["Roof Replacement", "Repair Services", "Gutters", "Emergency Service"],
    startingPrice: "$5,000",
    backgroundImage: "/professional-roofer-installing-shingles-on-house.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/home-renovation-tools-and-materials-construction-s.jpg"
            alt="Home renovation services background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Professional Home Renovation Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
              Complete Home Renovation Solutions
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              From kitchen remodels to complete home renovations, we provide expert craftsmanship and personalized
              service for every project. Trusted by Rochester homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive renovation services to transform every area of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.backgroundImage || "/placeholder.svg"}
                    alt={`${service.title} background`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-300" />
                </div>
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-white/90 text-black">
                      From {service.startingPrice}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif text-white group-hover:text-white transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <CardDescription className="text-base leading-relaxed text-white/90">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-white">Key Features:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-white flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-white text-black hover:bg-white/90 transition-colors">
                    <Link href={service.href} className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Why Choose Alex Renovation?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience the difference that quality craftsmanship and personalized service make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "10+ Years Experience",
                description: "Proven track record with hundreds of satisfied customers",
              },
              {
                icon: CheckCircle,
                title: "Quality Guarantee",
                description: "We stand behind our work with comprehensive warranties",
              },
              {
                icon: Hammer,
                title: "Quality Materials",
                description: "We use only premium materials from trusted suppliers",
              },
              {
                icon: Home,
                title: "Warranty Included",
                description: "All work comes with our comprehensive warranty protection",
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Get a free, no-obligation estimate for your home renovation project. We'll work with you to bring your
              vision to life.
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
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
