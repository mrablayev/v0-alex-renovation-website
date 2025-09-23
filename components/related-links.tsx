import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Wrench, PaintBucket } from "lucide-react"

interface RelatedLink {
  title: string
  description: string
  href: string
  category?: string
  icon?: React.ComponentType<{ className?: string }>
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
  className?: string
}

export function RelatedLinks({ title = "Related Services", links, className }: RelatedLinksProps) {
  if (links.length === 0) return null
  
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-8">
            {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-0 bg-card/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    {link.icon && (
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <link.icon className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    {link.category && (
                      <Badge variant="outline" className="text-xs">
                        {link.category}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-serif group-hover:text-primary transition-colors">
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {link.description}
                  </CardDescription>
                  <Link
                    href={link.href}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:underline"
                    aria-label={`Learn more about ${link.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Predefined related links for different service categories
export const kitchenRelatedLinks: RelatedLink[] = [
  {
    title: "Bathroom Remodels",
    description: "Complete bathroom renovations with modern fixtures and custom tile work.",
    href: "/services/bathroom-remodels",
    category: "Renovation",
    icon: Home,
  },
  {
    title: "Flooring Installation",
    description: "Beautiful hardwood, tile, and luxury vinyl flooring installation.",
    href: "/services/flooring",
    category: "Installation",
    icon: Home,
  },
  {
    title: "Interior Painting",
    description: "Professional interior painting with premium paints and color consultation.",
    href: "/services/painting",
    category: "Finishing",
    icon: PaintBucket,
  },
]

export const bathroomRelatedLinks: RelatedLink[] = [
  {
    title: "Kitchen Renovations",
    description: "Custom kitchen remodeling with cabinetry, countertops, and appliances.",
    href: "/services/kitchen-renovations",
    category: "Renovation",
    icon: Home,
  },
  {
    title: "Tiling Services",
    description: "Expert tile installation for bathrooms, kitchens, and flooring.",
    href: "/services/tiling",
    category: "Installation",
    icon: Home,
  },
  {
    title: "Plumbing Services",
    description: "Complete plumbing solutions from repairs to full system installations.",
    href: "/services/plumbing",
    category: "Systems",
    icon: Wrench,
  },
]

export const flooringRelatedLinks: RelatedLink[] = [
  {
    title: "Kitchen Renovations",
    description: "Complete kitchen remodeling including flooring, cabinets, and countertops.",
    href: "/services/kitchen-renovations",
    category: "Renovation",
    icon: Home,
  },
  {
    title: "Bathroom Remodels",
    description: "Luxury bathroom renovations with tile flooring and modern fixtures.",
    href: "/services/bathroom-remodels",
    category: "Renovation",
    icon: Home,
  },
  {
    title: "Basement Finishing",
    description: "Transform basements with quality flooring and complete finishing services.",
    href: "/services/basement-finishing",
    category: "Finishing",
    icon: Home,
  },
]