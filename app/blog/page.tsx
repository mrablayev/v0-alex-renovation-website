"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Search, Tag, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useMemo } from "react"
import { categories, getFeaturedPosts, getPostsByCategory, searchPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles")
  const [searchQuery, setSearchQuery] = useState("")

  const featuredPosts = getFeaturedPosts()

  const filteredPosts = useMemo(() => {
    let posts = getPostsByCategory(selectedCategory)

    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery)
      if (selectedCategory !== "All Articles") {
        posts = posts.filter((post) => post.category === selectedCategory)
      }
    }

    return posts.filter((post) => !post.featured)
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Expert Renovation Insights
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">Home Renovation Tips & Guides</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Get expert advice, renovation tips, and industry insights from the Alex Renovation team. Learn how to make
              informed decisions for your home improvement projects in Rochester, NY.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* Search */}
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium flex items-center justify-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Category
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className="rounded-full text-xs"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center text-sm text-muted-foreground">
              {searchQuery ? (
                <>
                  Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for "{searchQuery}"
                </>
              ) : (
                <>
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} in {selectedCategory}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && !searchQuery && selectedCategory === "All Articles" && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-serif font-bold mb-2">Featured Articles</h2>
              <p className="text-muted-foreground">Our latest insights and expert advice</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-0 bg-card/50 hover:shadow-xl transition-all">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={`/generic-blog-icon.png?key=blog${index}&height=400&width=600&query=${post.coverImage}`}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="default">{post.category}</Badge>
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-serif leading-tight hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>

                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            <Tag className="h-2 w-2 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button asChild className="w-full group">
                        <Link href={`/blog/${post.slug}`}>
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold mb-2">
              {searchQuery
                ? "Search Results"
                : selectedCategory === "All Articles"
                  ? "Latest Articles"
                  : selectedCategory}
            </h2>
            <p className="text-muted-foreground">Expert tips and insights for your home renovation projects</p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All Articles")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-0 bg-card/50 hover:shadow-lg transition-all group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`/generic-article-placeholder.png?key=article${index}&height=300&width=400&query=${post.coverImage}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="text-xs text-muted-foreground">{post.readTime}</div>
                    </div>
                    <CardTitle className="text-lg font-serif leading-tight group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>

                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="h-3 w-3 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-0 bg-card/50">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Stay Updated with Renovation Tips</CardTitle>
              <CardDescription className="text-base">
                Get the latest renovation tips, project ideas, and expert advice delivered to your inbox monthly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button className="sm:w-auto">Subscribe to Newsletter</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe at any time. We respect your privacy and only send valuable content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Have questions about your renovation project? Our experts are here to help you make informed decisions and
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="tel:+15854725795">(585) 472-5795</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
