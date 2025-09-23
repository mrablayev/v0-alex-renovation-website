import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Phone,
  Mail,
  Star,
  CheckCircle,
  Hammer,
  Wrench,
  PaintBucket,
  Zap,
  Droplets,
  Home,
  Clock,
  Shield,
  Award,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Professional Renovation in Rochester, NY
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-balance leading-tight">
                  Transform Your Home with <span className="text-primary">Professional Renovation</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  From small repairs to complete home transformations, we handle every aspect of your renovation project
                  with expertise and care. Whether you need <Link href="/services/kitchen-renovations" className="text-primary hover:underline">kitchen renovation services</Link>, <Link href="/services/bathroom-remodels" className=\"text-primary hover:underline">bathroom remodeling</Link>, or <Link href="/services/flooring" className=\"text-primary hover:underline">flooring installation</Link>, we're here to help transform your home.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Call Now</div>
                    <div className="font-semibold">(585) 472-5795</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="font-semibold">info@alexrenovation.net</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-kitchen-renovation-with-white-cabinets-and-.jpg"
                  alt="Beautiful kitchen renovation by Alex Renovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">50+ Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Complete Home Renovation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From small repairs to complete home transformations, we handle every aspect of your renovation project
              with expertise and care. Explore our <Link href="/services" className="text-primary hover:underline">complete renovation services</Link> or <Link href="/projects" className=\"text-primary hover:underline">view our completed projects</Link> to see the quality of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Kitchen Renovations",
                description: "Complete kitchen remodels with custom cabinets, countertops, and modern appliances.",
                href: "/services/kitchen-renovations",
                backgroundImage: "/kitchen-renovation-with-custom-cabinets-and-counte.jpg",
              },
              {
                icon: Droplets,
                title: "Bathroom Remodels",
                description: "Luxury bathroom renovations with tile work, fixtures, and spa-like features.",
                href: "/services/bathroom-remodels",
                backgroundImage: "/bathroom-renovation-with-tile-shower-and-modern-va.jpg",
              },
              {
                icon: Hammer,
                title: "Flooring Installation",
                description: "Hardwood, tile, laminate, and luxury vinyl flooring installation and refinishing.",
                href: "/services/flooring",
                backgroundImage: "/hardwood-flooring-installation-with-planks-and-fin.jpg",
              },
              {
                icon: PaintBucket,
                title: "Interior Painting",
                description: "Professional interior and exterior painting with premium materials and finishes.",
                href: "/services/painting",
                backgroundImage: "/interior-painting-with-roller-and-freshly-painted-.jpg",
              },
              {
                icon: Zap,
                title: "Electrical Work",
                description:
                  "Professional electrical services including wiring, outlets, lighting, and panel upgrades.",
                href: "/services/electrical",
                backgroundImage: "/electrical-outlet-installation-and-led-lighting-in.jpg",
              },
              {
                icon: Wrench,
                title: "Plumbing Services",
                description: "Complete plumbing solutions from repairs to full system installations.",
                href: "/services/plumbing",
                backgroundImage: "/plumbing-installation-with-modern-sink-and-copper-.jpg",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.backgroundImage || "/placeholder.svg"}
                    alt={`${service.title} background`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4 relative z-10">
                  <CardDescription className="text-base leading-relaxed text-white/90">
                    {service.description}
                  </CardDescription>
                  <Button variant="secondary" asChild className="w-full bg-white text-black hover:bg-white/90">
                    <Link href={service.href}>Learn More</Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                  Why Rochester Homeowners Choose Alex Renovation
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  With over 5 years of experience serving our community, we've built our reputation on
                  quality work, honest pricing, and exceptional customer service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Quality Guarantee",
                    description: "We stand behind our work with comprehensive warranties",
                  },
                  {
                    icon: Award,
                    title: "On-Time Completion",
                    description: "Projects completed on schedule and within budget",
                  },
                  {
                    icon: Clock,
                    title: "Free Estimates",
                    description: "Detailed, no-obligation estimates for all projects",
                  },
                  {
                    icon: CheckCircle,
                    title: "Professional Team",
                    description: "Experienced and skilled professionals dedicated to your project",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/professional-contractor-working-on-home-renovation.jpg"
                  alt="Alex Renovation team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              See our latest completed renovations and the transformations we've created for Rochester homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all border-0 bg-card/50 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/modern-kitchen-with-white-cabinets-quartz-countert.jpg"
                  alt="Modern kitchen renovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-serif">Modern Kitchen Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Complete kitchen renovation with custom cabinetry and quartz countertops in Brighton, NY.
                  <Link href="/locations/brighton-ny" className="text-primary hover:underline ml-1">Learn about our Brighton services</Link>.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all border-0 bg-card/50 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/modern-bathroom-renovation-with-tile-shower-and-va.jpg"
                  alt="Luxury bathroom renovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-serif">Luxury Master Bathroom</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Spa-like bathroom renovation with walk-in shower and heated floors in Pittsford, NY.
                  <Link href="/locations/pittsford-ny" className="text-primary hover:underline ml-1">Discover our Pittsford services</Link>.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all border-0 bg-card/50 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/beautiful-hardwood-flooring-installation-in-modern.jpg"
                  alt="Hardwood flooring installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-serif">Hardwood Flooring Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Beautiful oak hardwood flooring installation throughout main living areas in Webster, NY.
                  <Link href="/locations/webster-ny" className="text-primary hover:underline ml-1">Explore our Webster services</Link>.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Transform Your Home?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Get started with a free, no-obligation estimate. Our team will work with you to bring your vision to life
              within your budget and timeline.
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
                <Link href="tel:+15854725795">Call (585) 472-5795</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}