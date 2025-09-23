// Internal linking strategy and anchor text variations
export interface InternalLink {
  href: string
  anchorText: string
  context: string
  priority: 'high' | 'medium' | 'low'
}

// Service-to-service relationships for strategic linking
export const serviceRelationships = {
  'kitchen-renovations': [
    'bathroom-remodels',
    'flooring',
    'electrical',
    'plumbing',
    'painting',
    'tiling'
  ],
  'bathroom-remodels': [
    'kitchen-renovations',
    'tiling',
    'plumbing',
    'electrical',
    'flooring',
    'painting'
  ],
  'flooring': [
    'kitchen-renovations',
    'bathroom-remodels',
    'basement-finishing',
    'painting',
    'drywall'
  ],
  'basement-finishing': [
    'flooring',
    'electrical',
    'plumbing',
    'drywall',
    'painting',
    'hvac'
  ],
  'painting': [
    'drywall',
    'kitchen-renovations',
    'bathroom-remodels',
    'exterior-painting',
    'handyman'
  ],
  'electrical': [
    'kitchen-renovations',
    'bathroom-remodels',
    'basement-finishing',
    'hvac',
    'handyman'
  ],
  'plumbing': [
    'bathroom-remodels',
    'kitchen-renovations',
    'basement-finishing',
    'handyman',
    'hvac'
  ]
}

// Anchor text variations for natural linking
export const anchorTextVariations = {
  'kitchen-renovations': [
    'kitchen renovation services',
    'custom kitchen remodeling',
    'kitchen renovation experts',
    'professional kitchen remodels',
    'kitchen renovation contractors',
    'complete kitchen transformations'
  ],
  'bathroom-remodels': [
    'bathroom renovation services',
    'luxury bathroom remodels',
    'bathroom renovation experts',
    'professional bathroom remodeling',
    'custom bathroom renovations',
    'complete bathroom transformations'
  ],
  'flooring': [
    'flooring installation services',
    'professional flooring contractors',
    'hardwood flooring installation',
    'luxury vinyl flooring',
    'tile flooring installation',
    'flooring renovation experts'
  ],
  'electrical': [
    'electrical services',
    'professional electricians',
    'electrical installation',
    'electrical system upgrades',
    'residential electrical work',
    'electrical renovation services'
  ],
  'plumbing': [
    'plumbing services',
    'professional plumbers',
    'plumbing installation',
    'plumbing system upgrades',
    'residential plumbing work',
    'plumbing renovation services'
  ]
}

// Location-based anchor text variations
export const locationAnchorText = {
  'rochester-ny': [
    'Rochester NY renovation services',
    'Rochester home renovation',
    'Rochester renovation contractors',
    'home improvement Rochester NY',
    'Rochester remodeling services'
  ],
  'brighton-ny': [
    'Brighton NY renovation services',
    'Brighton home renovation',
    'Brighton renovation contractors',
    'home improvement Brighton NY'
  ],
  'webster-ny': [
    'Webster NY renovation services',
    'Webster home renovation',
    'Webster renovation contractors',
    'home improvement Webster NY'
  ]
}

// Strategic internal links for each page type
export const strategicLinks = {
  homepage: [
    { href: '/services/kitchen-renovations', text: 'kitchen renovation services', priority: 'high' as const },
    { href: '/services/bathroom-remodels', text: 'bathroom remodeling', priority: 'high' as const },
    { href: '/services/flooring', text: 'flooring installation', priority: 'high' as const },
    { href: '/projects', text: 'completed renovation projects', priority: 'medium' as const },
    { href: '/locations/rochester-ny', text: 'Rochester NY services', priority: 'medium' as const },
    { href: '/contact', text: 'free renovation estimate', priority: 'high' as const }
  ],
  services: [
    { href: '/projects', text: 'view our completed projects', priority: 'high' as const },
    { href: '/contact', text: 'get your free estimate', priority: 'high' as const },
    { href: '/about', text: 'learn about our team', priority: 'medium' as const },
    { href: '/blog', text: 'renovation tips and guides', priority: 'medium' as const }
  ],
  locations: [
    { href: '/services', text: 'our renovation services', priority: 'high' as const },
    { href: '/projects', text: 'local project gallery', priority: 'medium' as const },
    { href: '/contact', text: 'schedule a consultation', priority: 'high' as const }
  ]
}

// Get related services for a given service
export function getRelatedServices(currentService: string): string[] {
  return serviceRelationships[currentService as keyof typeof serviceRelationships] || []
}

// Get random anchor text for a service
export function getAnchorText(service: string): string {
  const variations = anchorTextVariations[service as keyof typeof anchorTextVariations]
  if (!variations) return service.replace('-', ' ')
  return variations[Math.floor(Math.random() * variations.length)]
}

// Generate contextual internal links
export function generateContextualLinks(pageType: string, currentPath: string): InternalLink[] {
  const baseLinks = strategicLinks[pageType as keyof typeof strategicLinks] || []
  
  return baseLinks
    .filter(link => link.href !== currentPath) // Don't link to current page
    .map(link => ({
      href: link.href,
      anchorText: link.text,
      context: `Related to ${pageType}`,
      priority: link.priority
    }))
}