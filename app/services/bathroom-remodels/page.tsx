import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Bath, CheckCircle, Clock, Wrench, Droplets, Lightbulb, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bathroom Remodels Rochester NY - Alex Renovation",
  description:
    "Professional bathroom remodeling services in Rochester, NY. Custom tile work, modern fixtures, accessibility upgrades. Free estimates.",
}

export default function BathroomRemodelingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-xesbj.png"
            alt="Professional bathroom remodeling background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Bathroom Renovation Specialists
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                Transform Your Bathroom Into a Luxury Retreat
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                From outdated to outstanding - we create beautiful, functional bathrooms that add value to your home and
                comfort to your daily routine. Expert craftsmanship, premium materials, and personalized design.
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
                  src="/placeholder-4nj8h.png"
                  alt="Modern bathroom renovation with luxury finishes"
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
            src="/placeholder.svg?key=cj8pj"
            alt="Bathroom renovation background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Complete Bathroom Renovation Services in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform your bathroom into a luxurious retreat with our comprehensive remodeling services. From minor
              updates to complete overhauls, we handle plumbing, electrical, tiling, and finishing work to create your
              perfect bathroom sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bath,
                title: "Full Bathroom Remodeling",
                description:
                  "Complete bathroom transformations including layout redesign, plumbing relocation, electrical updates, and luxury finishes. We handle every aspect from demolition to final touches, creating spa-like retreats that add significant value to your home.",
                features: [
                  "Custom Layout Design & Planning",
                  "Plumbing Relocation & Updates",
                  "Electrical System Upgrades",
                  "Premium Fixture Installation",
                ],
                benefits:
                  "Increases home value by 20-30%, improves daily comfort, and creates a personal spa experience at home.",
              },
              {
                icon: Droplets,
                title: "Expert Tile Installation",
                description:
                  "Professional tile installation for floors, walls, and shower surrounds using premium materials and precision techniques. We specialize in ceramic, porcelain, natural stone, and mosaic designs with proper waterproofing systems.",
                features: [
                  "Ceramic & Porcelain Tile Installation",
                  "Natural Stone & Marble Work",
                  "Custom Mosaic Designs",
                  "Professional Waterproofing Systems",
                ],
                benefits:
                  "Provides long-lasting beauty, easy maintenance, and superior moisture protection for 15+ years.",
              },
              {
                icon: Wrench,
                title: "Modern Fixture Installation",
                description:
                  "Installation of contemporary vanities, toilets, showers, and bathtubs from leading manufacturers like Kohler, American Standard, and Delta. We ensure proper plumbing connections and optimal functionality.",
                features: [
                  "Custom Vanity Installation",
                  "Walk-in Shower Systems",
                  "Soaking Tub Installation",
                  "High-End Faucet & Hardware",
                ],
                benefits:
                  "Improves functionality, reduces water usage with efficient fixtures, and enhances bathroom aesthetics.",
              },
              {
                icon: Lightbulb,
                title: "Lighting & Ventilation Design",
                description:
                  "Professional lighting design and ventilation system installation for optimal comfort and functionality. We create layered lighting plans and ensure proper air circulation to prevent moisture issues.",
                features: [
                  "LED Recessed Lighting",
                  "Vanity & Mirror Lighting",
                  "Exhaust Fan Installation",
                  "Natural Light Optimization",
                ],
                benefits:
                  "Improves visibility for daily tasks, prevents mold and mildew, and creates ambiance for relaxation.",
              },
              {
                icon: Shield,
                title: "Accessibility Upgrades",
                description:
                  "ADA-compliant bathroom modifications for aging in place and accessibility needs. We create safe, stylish bathrooms that accommodate mobility challenges without sacrificing design aesthetics.",
                features: [
                  "Walk-in Shower Conversions",
                  "Grab Bar Installation",
                  "Comfort Height Toilet Installation",
                  "Non-slip Flooring Solutions",
                ],
                benefits:
                  "Ensures long-term usability, prevents accidents, and allows aging in place with dignity and style.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance & Warranty",
                description:
                  "Meticulous attention to detail with comprehensive quality control and warranty protection on all work performed. We use only premium materials and proven installation techniques.",
                features: [
                  "Premium Material Selection",
                  "Expert Installation Techniques",
                  "Final Quality Inspection",
                  "Comprehensive Warranty Coverage",
                ],
                benefits:
                  "Provides peace of mind, ensures long-term satisfaction, and protects your investment with guaranteed workmanship.",
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

      {/* Process Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Renovation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A streamlined approach that keeps your project on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Design",
                description: "We discuss your vision, assess your space, and create a detailed design plan.",
                duration: "1-2 weeks",
              },
              {
                step: "02",
                title: "Planning & Permits",
                description: "Finalize materials, obtain necessary permits, and schedule the project timeline.",
                duration: "1-2 weeks",
              },
              {
                step: "03",
                title: "Demolition & Prep",
                description: "Careful removal of existing fixtures and preparation of the space for renovation.",
                duration: "2-3 days",
              },
              {
                step: "04",
                title: "Installation & Finishing",
                description: "Professional installation of all components with meticulous attention to detail.",
                duration: "1-2 weeks",
              },
            ].map((phase, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 relative">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-foreground font-bold text-lg">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg font-serif">{phase.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    <Clock className="h-3 w-3 mr-1" />
                    {phase.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{phase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Investment & Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transparent pricing for quality bathroom renovations that add lasting value to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Essential Refresh",
                price: "$8,000 - $15,000",
                description: "Perfect for updating fixtures, vanity, and finishes while keeping existing layout.",
                features: [
                  "New vanity & mirror",
                  "Updated fixtures & hardware",
                  "Fresh paint & lighting",
                  "Basic tile work",
                  "Standard materials",
                ],
              },
              {
                title: "Complete Renovation",
                price: "$15,000 - $25,000",
                description: "Full bathroom transformation with layout changes and premium finishes.",
                features: [
                  "Layout modifications",
                  "Custom tile work",
                  "Premium fixtures",
                  "Electrical & plumbing updates",
                  "Quality materials",
                ],
                popular: true,
              },
              {
                title: "Luxury Spa Retreat",
                price: "$25,000+",
                description: "High-end renovation with luxury materials and custom features.",
                features: [
                  "Designer fixtures & finishes",
                  "Natural stone surfaces",
                  "Custom shower systems",
                  "Heated floors",
                  "Premium materials",
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Let's discuss your bathroom renovation project. We'll provide a detailed estimate and timeline to bring
              your vision to life.
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
