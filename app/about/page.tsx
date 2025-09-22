import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Users, Award, Shield, Clock, CheckCircle, Star, Quote, Target, Handshake } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Alex Renovation - Professional Home Renovation Experts in Rochester, NY",
  description:
    "Learn about Alex Renovation's story, values, and commitment to quality home renovation services in Rochester, NY. Over 10 years of experience.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Serving Rochester, NY Since 2014
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
              Building Dreams, One Project at a Time
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              At Alex Renovation, we believe every home has the potential to be extraordinary. Our passion for
              craftsmanship and commitment to excellence has made us Rochester's trusted renovation partner.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Alex Renovation, we believe every home has the potential to be extraordinary. Our passion for
                  craftsmanship and commitment to excellence has made us Rochester's trusted renovation partner.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in transforming homes with quality workmanship and attention to detail. Our commitment
                  to customer satisfaction drives everything we do, from initial consultation to project completion.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/alex-martinez-founder-of-alex-renovation-in-his-workshop.jpg"
                  alt="Professional renovation workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion for Excellence",
                description:
                  "We pour our heart into every project, treating your home with the same care we'd give our own.",
              },
              {
                icon: Handshake,
                title: "Honest Communication",
                description:
                  "Transparent pricing, clear timelines, and regular updates keep you informed every step of the way.",
              },
              {
                icon: Shield,
                title: "Quality Craftsmanship",
                description:
                  "We use premium materials and proven techniques to ensure your renovation stands the test of time.",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction is our priority. We listen to your needs and exceed your expectations.",
              },
              {
                icon: Target,
                title: "Attention to Detail",
                description:
                  "From the initial design to the final cleanup, we sweat the small stuff so you don't have to.",
              },
              {
                icon: Clock,
                title: "Reliable Service",
                description:
                  "We show up on time, complete projects as promised, and stand behind our work with warranties.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Professional & Certified</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Your peace of mind is our priority. We maintain all necessary certifications and professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Professional Contractor",
                description: "NYS Home Improvement Contractor",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Comprehensive Quality & Safety Standards",
              },
              {
                icon: CheckCircle,
                title: "EPA Certified",
                description: "Lead-Safe Renovation Practices",
              },
              {
                icon: Star,
                title: "BBB Accredited",
                description: "A+ Rating with Better Business Bureau",
              },
            ].map((credential, index) => (
              <Card key={index} className="text-center border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <credential.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-serif">{credential.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{credential.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't just take our word for it. Here's what Rochester homeowners say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Brighton, NY",
                rating: 5,
                text: "Alex and his team transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations. Highly recommend!",
              },
              {
                name: "Michael Chen",
                location: "Pittsford, NY",
                rating: 5,
                text: "Professional, reliable, and honest. Alex Renovation completed our bathroom remodel on time and within budget. The craftsmanship is outstanding.",
              },
              {
                name: "Jennifer Davis",
                location: "Webster, NY",
                rating: 5,
                text: "From the initial consultation to the final walkthrough, the entire process was smooth and stress-free. Our new hardwood floors are absolutely beautiful!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Work with Us?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Experience the Alex Renovation difference. Let's discuss your project and create something amazing
              together.
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
