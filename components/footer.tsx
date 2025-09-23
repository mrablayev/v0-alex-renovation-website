import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/alex-renovation-logo.png"
              alt="Alex Renovation"
              width={160}
              height={53}
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Professional renovation and handyman services in Rochester, NY. Quality craftsmanship, reliable service,
              and customer satisfaction guaranteed.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>(585) 472-5795</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@alexrenovation.net</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Rochester, NY</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/kitchen-renovations" className="text-muted-foreground hover:text-foreground">
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-remodels" className="text-muted-foreground hover:text-foreground">
                  Bathroom Remodels
                </Link>
              </li>
              <li>
                <Link href="/services/flooring" className="text-muted-foreground hover:text-foreground">
                  Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="text-muted-foreground hover:text-foreground">
                  Painting
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="text-muted-foreground hover:text-foreground">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-muted-foreground hover:text-foreground">
                  Electrical Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Mon - Fri: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="ml-6 text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</div>
              <div className="ml-6 text-muted-foreground">Sunday: Emergency Only</div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">Free Estimates • Emergency Services Available</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Alex Renovation. All rights reserved. | Rochester, NY</p>
        </div>
      </div>
    </footer>
  )
}
