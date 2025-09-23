import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Alex Renovation - Free Estimates Rochester, NY",
  description:
    "Contact Alex Renovation for your home renovation project in Rochester, NY. Get free estimates, schedule consultations. Call (585) 472-5795 or fill out our contact form.",
}

export default function ContactPage() {
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">Ready to Transform Your Home?</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Let's discuss your renovation project and bring your vision to life. Get a free, no-obligation estimate
              and discover why Rochester homeowners trust Alex Renovation. Whether you need <Link href="/services/kitchen-renovations" className="text-primary hover:underline">kitchen renovation</Link>, <Link href="/services/bathroom-remodels" className=\"text-primary hover:underline">bathroom remodeling</Link>, or any of our <Link href="/services" className=\"text-primary hover:underline">professional renovation services</Link>, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                primary: "(585) 472-5795",
                secondary: "Mon-Fri: 7AM-6PM",
                description: "Speak directly with Alex for immediate assistance",
                action: "Call Now",
                href: "tel:+15854725795",
              },
              {
                icon: Mail,
                title: "Email Us",
                primary: "info@alexrenovation.net",
                secondary: "Response within 24 hours",
                description: "Send us details about your project",
                action: "Send Email",
                href: "mailto:info@alexrenovation.net",
              },
              {
                icon: MessageSquare,
                title: "Get Free Estimate",
                primary: "Online Form",
                secondary: "Detailed project quote",
                description: "Fill out our form for a comprehensive estimate",
                action: "Get Quote",
                href: "#contact-form",
              },
            ].map((contact, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 hover:shadow-lg transition-all group">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{contact.title}</CardTitle>
                  <div className="text-lg font-semibold text-primary">{contact.primary}</div>
                  <div className="text-sm text-muted-foreground">{contact.secondary}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{contact.description}</CardDescription>
                  <Button asChild className="w-full">
                    <Link href={contact.href}>{contact.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Get Your Free Estimate</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tell us about your project and we'll provide a detailed estimate within 24 hours. All estimates are
                  completely free with no obligation.
                </p>
              </div>

              <div id="contact-form">
                <ContactForm />
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-8">
              <Card className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center space-x-2">
                    <Home className="h-5 w-5 text-primary" />
                    <span>Alex Renovation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Service Area</div>
                        <div className="text-sm text-muted-foreground">
                          Rochester, Brighton, Pittsford, Webster, Penfield, Henrietta, Fairport, and surrounding areas
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                          <div>Saturday: 8:00 AM - 4:00 PM</div>
                          <div>Sunday: Emergency calls only</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="tel:+15854725795" className="hover:text-primary transition-colors">
                            (585) 472-5795
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="mailto:info@alexrenovation.net" className="hover:text-primary transition-colors">
                            info@alexrenovation.net
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Professional Service</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Free Estimates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Emergency Service Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Warranty on All Work</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to get an estimate?",
                answer:
                  "We provide estimates within 24-48 hours of your initial contact. For complex projects, we may schedule an in-home consultation to ensure accuracy.",
              },
              {
                question: "Do you offer warranties on your work?",
                answer:
                  "We provide comprehensive warranties on all our work. Warranty terms vary by project type, and we'll explain all coverage during your consultation.",
              },
              {
                question: "Can you work within my budget?",
                answer:
                  "We work with various budgets and can suggest alternatives to help you achieve your goals. We'll provide options at different price points during our consultation.",
              },
              {
                question: "Do you handle permits and inspections?",
                answer:
                  "Yes, we handle all necessary permits and coordinate inspections as required. This is included in our service to ensure all work meets local codes.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We serve Rochester and the greater Rochester area, including Brighton, Pittsford, Webster, Penfield, Henrietta, Fairport, and surrounding communities.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{faq.answer}</CardDescription>
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
              Ready to Get Started on Your Project?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact us today for your free estimate. We're here to answer your questions and help bring your
              renovation vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="#contact-form">Fill Out Form</Link>
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
