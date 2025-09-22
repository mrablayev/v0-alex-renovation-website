export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  publishDate: string
  author: string
  category: string
  tags: string[]
  city?: string
  readTime: string
  featured: boolean
  content: string
  seoTitle: string
  seoDescription: string
  relatedServices: string[]
}

export const blogPosts: BlogPost[] = []

export const categories = [
  "All Articles",
  "Bathroom Remodel Tips",
  "Kitchen Remodel Tips",
  "Flooring Guides",
  "Painting & Finishes",
  "Plumbing/Electrical Basics for Homeowners",
  "Maintenance Checklists",
  "Local Projects",
]

export const tags = [
  "Kitchen Design",
  "Bathroom Budget",
  "Hardwood Flooring",
  "Luxury Vinyl",
  "Winter Maintenance",
  "Small Bathrooms",
  "ROI",
  "Paint Colors",
  "Electrical Safety",
  "2024 Trends",
  "Rochester Market",
  "Home Value",
  "Space Saving",
  "Color Psychology",
  "DIY vs Professional",
  "Code Compliance",
]

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getRecentPosts(limit = 6): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, limit)
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All Articles") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag))
}

export function getPostsByCity(city: string): BlogPost[] {
  return blogPosts.filter((post) => post.city === city)
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, limit)
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery),
  )
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
