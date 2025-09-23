export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: 'tips' | 'guides' | 'reviews' | 'news' | 'case-studies'
  status: 'draft' | 'published'
  featured: boolean
  featuredImage: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  tags: string[]
  publishedAt: string
  createdAt: string
  updatedAt: string
  readTime: number
  videoEmbed?: {
    platform: 'youtube' | 'vimeo'
    videoId: string
    title: string
  }
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}

// Mock data for demonstration
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Kitchen Renovation Mistakes to Avoid',
    slug: 'kitchen-renovation-mistakes-to-avoid',
    excerpt: 'Learn from common kitchen renovation pitfalls and how to avoid costly mistakes in your next project.',
    content: `# 10 Kitchen Renovation Mistakes to Avoid

Kitchen renovations are exciting but can be overwhelming. Here are the most common mistakes we see and how to avoid them.

## 1. Not Planning for Enough Storage

One of the biggest regrets homeowners have is not maximizing storage space. Consider:
- Deep drawers instead of cabinets
- Pull-out shelves
- Corner solutions
- Vertical storage

## 2. Choosing Style Over Function

While aesthetics matter, functionality should come first:
- Ensure adequate counter space
- Plan for proper lighting
- Consider workflow patterns
- Don't sacrifice storage for looks

## 3. Ignoring the Work Triangle

The work triangle between sink, stove, and refrigerator should be efficient:
- Keep distances between 4-9 feet
- Avoid obstacles in the triangle
- Consider multiple work zones for larger kitchens

## 4. Inadequate Lighting

Good lighting is crucial for both function and ambiance:
- Layer different types of lighting
- Include task lighting for work areas
- Add under-cabinet lighting
- Consider natural light sources

## 5. Not Hiring Professionals When Needed

Some tasks require professional expertise:
- Electrical work
- Plumbing modifications
- Structural changes
- Gas line work

Contact Alex Renovation for professional kitchen renovation services in Rochester, NY.`,
    category: 'guides',
    status: 'published',
    featured: true,
    featuredImage: '/kitchen-renovation-planning-guide.jpg',
    author: {
      name: 'Alex Martinez',
      avatar: '/alex-martinez-avatar.jpg',
      bio: 'Professional contractor with over 10 years of experience in home renovation.'
    },
    tags: ['kitchen renovation', 'home improvement', 'renovation tips', 'Rochester NY'],
    publishedAt: '2024-03-10',
    createdAt: '2024-03-05',
    updatedAt: '2024-03-10',
    readTime: 8,
    videoEmbed: {
      platform: 'youtube',
      videoId: 'dQw4w9WgXcQ',
      title: 'Kitchen Renovation Planning Tips'
    },
    seo: {
      metaTitle: '10 Kitchen Renovation Mistakes to Avoid - Alex Renovation Rochester NY',
      metaDescription: 'Avoid costly kitchen renovation mistakes with expert tips from Alex Renovation. Professional kitchen remodeling services in Rochester, NY.',
      keywords: ['kitchen renovation mistakes', 'Rochester NY kitchen remodel', 'home improvement tips']
    }
  },
  {
    id: '2',
    title: 'Best Flooring Options for Rochester Homes',
    slug: 'best-flooring-options-rochester-homes',
    excerpt: 'Discover the most popular and practical flooring choices for Rochester\'s climate and lifestyle.',
    content: `# Best Flooring Options for Rochester Homes

Rochester's climate presents unique challenges for flooring. Here's our guide to the best options for local homes.

## Hardwood Flooring

### Pros:
- Timeless appeal
- Increases home value
- Can be refinished multiple times
- Natural insulation properties

### Cons:
- Susceptible to moisture damage
- Requires regular maintenance
- Higher upfront cost

### Best for: Living rooms, bedrooms, dining rooms

## Luxury Vinyl Plank (LVP)

### Pros:
- 100% waterproof
- Realistic wood appearance
- Easy maintenance
- Budget-friendly

### Cons:
- Can be damaged by heavy furniture
- Not as prestigious as real wood

### Best for: Kitchens, bathrooms, basements

## Tile Flooring

### Pros:
- Extremely durable
- Water resistant
- Easy to clean
- Great for radiant heat

### Cons:
- Cold underfoot
- Grout maintenance required
- Can be slippery when wet

### Best for: Bathrooms, kitchens, entryways

## Carpet

### Pros:
- Warm and comfortable
- Sound absorption
- Wide variety of styles
- Budget-friendly options

### Cons:
- Stains easily
- Harbors allergens
- Shorter lifespan

### Best for: Bedrooms, family rooms

## Our Recommendation

For Rochester homes, we typically recommend:
1. **LVP for high-moisture areas** (kitchens, bathrooms, basements)
2. **Hardwood for main living areas** (living room, dining room)
3. **Carpet for bedrooms** (comfort and warmth)
4. **Tile for entryways** (durability and easy cleaning)

Contact Alex Renovation for professional flooring installation in Rochester, NY.`,
    category: 'guides',
    status: 'published',
    featured: false,
    featuredImage: '/flooring-options-comparison-guide.jpg',
    author: {
      name: 'Alex Martinez',
      avatar: '/alex-martinez-avatar.jpg',
      bio: 'Professional contractor with over 10 years of experience in home renovation.'
    },
    tags: ['flooring', 'home improvement', 'Rochester NY', 'hardwood', 'LVP', 'tile'],
    publishedAt: '2024-03-05',
    createdAt: '2024-03-01',
    updatedAt: '2024-03-05',
    readTime: 6,
    seo: {
      metaTitle: 'Best Flooring Options for Rochester NY Homes - Alex Renovation',
      metaDescription: 'Expert guide to choosing the right flooring for Rochester homes. Professional flooring installation services available.',
      keywords: ['Rochester NY flooring', 'best flooring options', 'hardwood flooring Rochester', 'LVP installation']
    }
  }
]

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.status === 'published')
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.status === 'published' && post.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category && post.status === 'published')
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.filter(post => post.status === 'published').map(post => post.slug)
}