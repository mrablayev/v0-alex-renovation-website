import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Play } from "lucide-react"
import type { Metadata } from "next"
import { getPublishedPosts, getFeaturedPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog - Home Renovation Tips & Guides - Alex Renovation Rochester NY",
  description:
    "Expert home renovation tips, guides, and project insights from Alex Renovation. Learn about kitchen remodels, bathroom renovations, and home improvement in Rochester, NY.",
}

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts()
  const allPosts = getPublishedPosts()
  const recentPosts = allPosts.slice(0, 6)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Expert Insights
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
              Home Renovation Blog
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Expert tips, guides, and insights from our renovation professionals. Learn about the latest trends,
              avoid common mistakes, and get inspired for your next home improvement project.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Featured Articles</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our most popular and helpful renovation guides and tips.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.videoEmbed && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </Badge>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/blog/${post.slug}`} className="flex items-center justify-center space-x-2">
                        <span>Read Article</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Recent Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay up to date with the latest renovation tips, trends, and project insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all border-0 bg-card/50 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.videoEmbed && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}m</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-serif group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author.name}</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Browse by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Find articles that match your specific renovation interests and needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Tips', slug: 'tips', count: 12 },
              { name: 'Guides', slug: 'guides', count: 8 },
              { name: 'Reviews', slug: 'reviews', count: 6 },
              { name: 'Case Studies', slug: 'case-studies', count: 4 },
              { name: 'News', slug: 'news', count: 3 },
            ].map((category) => (
              <Card key={category.slug} className="text-center border-0 bg-card/50 hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-lg font-serif group-hover:text-primary transition-colors">
                    {category.name}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {category.count} articles
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Stay Updated with Renovation Tips
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Get the latest renovation tips, project ideas, and exclusive insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-black"
              />
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}