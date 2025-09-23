"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, ChevronDown } from "lucide-react"

const services = [
  { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
  { name: "Bathroom Remodels", href: "/services/bathroom-remodels" },
  { name: "Flooring", href: "/services/flooring" },
  { name: "Handyman Services", href: "/services/handyman" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Windows & Doors", href: "/services/windows-doors" },
  { name: "Tiling", href: "/services/tiling" },
  { name: "Drywall", href: "/services/drywall" },
  { name: "Decks & Patios", href: "/services/decks-patios" },
  { name: "Basement Finishing", href: "/services/basement-finishing" },
  { name: "Painting", href: "/services/painting" },
  { name: "Plumbing", href: "/services/plumbing" },
  { name: "Electrical Work", href: "/services/electrical" },
  { name: "HVAC", href: "/services/hvac" },
  { name: "Roofing", href: "/services/roofing" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isServicesClicked, setIsServicesClicked] = useState(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close services menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesClicked(false)
        setIsServicesOpen(false)
      }
    }

    if (isServicesClicked) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesClicked])

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    // Small delay before opening
    servicesTimeoutRef.current = setTimeout(() => {
      if (!isServicesClicked) {
        setIsServicesOpen(true)
      }
    }, 150)
  }

  const handleServicesMouseLeave = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    // Delay before closing to allow cursor movement
    servicesTimeoutRef.current = setTimeout(() => {
      if (!isServicesClicked) {
        setIsServicesOpen(false)
      }
    }, 300)
  }

  const handleServicesClick = () => {
    setIsServicesClicked(!isServicesClicked)
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/alex-renovation-logo.png"
              alt="Alex Renovation"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                onClick={handleServicesClick}
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${(isServicesOpen || isServicesClicked) ? 'rotate-180' : ''}`} />
              </button>
              
              {(isServicesOpen || isServicesClicked) && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="grid grid-cols-2 gap-0 p-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => {
                          setIsServicesClicked(false)
                          setIsServicesOpen(false)
                        }}
                        className="block px-3 py-3 text-sm font-medium text-gray-800 hover:bg-blue-600 hover:text-white rounded-md transition-all duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                    <Link 
                      href="/services" 
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      onClick={() => {
                        setIsServicesClicked(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/projects" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>

            <Link 
              href="/blog" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>

            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(585) 472-5795</span>
            </div>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <div className="space-y-2">
                  <div className="text-lg font-medium">Services</div>
                  <div className="ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/projects" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
                <Link href="/blog" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <Phone className="h-4 w-4" />
                    <span>(585) 472-5795</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm mb-4">
                    <Mail className="h-4 w-4" />
                    <span>info@alexrenovation.net</span>
                  </div>
                  <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Free Estimate
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}