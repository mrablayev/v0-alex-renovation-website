"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  className?: string
  customItems?: BreadcrumbItem[]
}

export function Breadcrumbs({ className, customItems }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Generate breadcrumbs from pathname if no custom items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems
    
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]
    
    let currentPath = ''
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Convert segment to readable label
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Special cases for better labels
      if (segment === 'ny') label = 'NY'
      if (segment === 'rochester-ny') label = 'Rochester, NY'
      if (segment === 'kitchen-renovations') label = 'Kitchen Renovations'
      if (segment === 'bathroom-remodels') label = 'Bathroom Remodels'
      if (segment === 'basement-finishing') label = 'Basement Finishing'
      if (segment === 'windows-doors') label = 'Windows & Doors'
      if (segment === 'decks-patios') label = 'Decks & Patios'
      if (segment === 'exterior-painting') label = 'Exterior Painting'
      
      breadcrumbs.push({
        label,
        href: currentPath
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null
  
  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-1">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
            )}
            {index === 0 && (
              <Home className="h-4 w-4 text-muted-foreground/60 mr-1" aria-hidden="true" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span 
                className="font-medium text-foreground"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors focus:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-1"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}