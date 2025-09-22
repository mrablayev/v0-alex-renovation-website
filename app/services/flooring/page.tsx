import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, Hammer, Shield, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flooring Installation Rochester NY - Alex Renovation",
  description:
    "Professional flooring installation in Rochester, NY. Hardwood, tile, laminate, luxury vinyl. Expert installation with warranty. Free estimates.",
}

export default function FlooringPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-31gi9.png"
            alt="Professional flooring background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Flooring Installation Experts
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance text-white">
                Beautiful, Durable Flooring Solutions
              </h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed">
                Transform your home with premium flooring that combines beauty, durability, and value. From hardwood to
                luxury vinyl, we install floors that stand the test of time.
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
                  src="/placeholder-ewkhn.png"
                  alt="Professional flooring installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring Types */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-r4wg9.png"
            alt="Flooring samples background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Premium Flooring Options in Rochester, NY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose from our extensive selection of premium flooring materials, each professionally installed with
              industry-leading techniques and backed by comprehensive warranties. We work with top manufacturers like
              Shaw, Mohawk, and Armstrong to ensure quality and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Hardwood Flooring Installation",
                description:
                  "Timeless elegance with solid and engineered hardwood options from premium manufacturers. Our hardwood floors add significant value to your home while providing natural beauty that lasts generations.",
                price: "$8-15/sq ft",
                features: [
                  "Red Oak, White Oak, Maple, Cherry",
                  "Prefinished & Site-Finished Options",
                  "Custom Staining & Color Matching",
                  "25+ Year Manufacturer Warranty",
                ],
                benefits:
                  "Increases home value by 15-20%, improves indoor air quality, and provides natural insulation properties.",
              },
              {
                title: "Luxury Vinyl Plank (LVP)",
                description:
                  "100% waterproof flooring that perfectly mimics natural wood and stone textures. Ideal for kitchens, bathrooms, and high-traffic areas where moisture resistance is essential.",
                price: "$4-8/sq ft",
                features: [
                  "100% Waterproof Core Technology",
                  "Easy Maintenance & Cleaning",
                  "Realistic Wood & Stone Textures",
                  "Pet & Child-Friendly Surface",
                ],
                benefits:
                  "Perfect for busy families, requires minimal maintenance, and offers superior moisture protection with authentic appearance.",
              },
              {
                title: "Ceramic & Porcelain Tile",
                description:
                  "Versatile, water-resistant flooring perfect for any room in your home. Available in countless designs, colors, and textures to match any decor style from traditional to contemporary.",
                price: "$5-12/sq ft",
                features: [
                  "Water & Stain Resistant",
                  "Easy to Clean & Maintain",
                  "Endless Design Possibilities",
                  "Radiant Heat System Compatible",
                ],
                benefits:
                  "Extremely durable with 20+ year lifespan, hypoallergenic properties, and excellent for homes with allergies.",
              },
              {
                title: "Laminate Flooring",
                description:
                  "Budget-friendly, durable flooring with incredibly realistic wood and stone appearances. Modern laminate offers superior scratch and fade resistance for active households.",
                price: "$3-6/sq ft",
                features: [
                  "AC4/AC5 Scratch Resistance Rating",
                  "Click-Lock Easy Installation",
                  "Fade & Moisture Resistant",
                  "Budget-Friendly Premium Look",
                ],
                benefits:
                  "Cost-effective solution that doesn't compromise on style, easy to replace individual planks, and perfect for DIY-friendly installation.",
              },
            ].map((type, index) => (
              <Card key={index} className="border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${type.title.toLowerCase()} flooring sample`}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-serif">{type.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {type.price}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{type.description}</CardDescription>
                  <div className="space-y-1">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground font-medium">Key Benefits:</p>
                    <p className="text-xs text-muted-foreground mt-1">{type.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Complete Flooring Installation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From initial consultation to final cleanup, we handle every aspect of your flooring project with
              professional expertise and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Professional Floor Installation",
                description:
                  "Expert installation of all flooring types using industry-standard techniques and professional-grade tools. Our certified installers ensure proper subfloor preparation, moisture barriers, and precise fitting for long-lasting results.",
                details:
                  "Includes subfloor inspection, moisture testing, acclimation period management, and post-installation quality inspection.",
              },
              {
                icon: Sparkles,
                title: "Hardwood Floor Refinishing",
                description:
                  "Restore the natural beauty of your existing hardwood floors with our comprehensive refinishing services. We sand, stain, and apply protective finishes to bring old floors back to like-new condition.",
                details:
                  "Process includes deep sanding, stain application, multiple polyurethane coats, and final buffing for a showroom finish.",
              },
              {
                icon: Shield,
                title: "Floor Repair & Restoration",
                description:
                  "Expert repair services for damaged, warped, or worn flooring materials. We can replace individual planks, fix squeaks, repair water damage, and address subfloor issues to extend your floor's lifespan.",
                details:
                  "Services include plank replacement, squeak elimination, water damage restoration, and subfloor reinforcement.",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">{service.details}</p>
                  </div>
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready for New Floors?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Let's discuss your flooring project and find the perfect solution for your home and budget.
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
