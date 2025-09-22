import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag, MapPin } from "lucide-react"
import { getPostBySlug, getRelatedPosts, blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="outline" asChild className="bg-transparent">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge variant="default">{post.category}</Badge>
                {post.city && (
                  <Badge variant="outline" className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {post.city}
                  </Badge>
                )}
                {post.featured && <Badge variant="secondary">Featured</Badge>}
              </div>

              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance leading-tight">{post.title}</h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`/generic-placeholder-graphic.png?key=${post.slug}&height=600&width=1200&query=${post.coverImage}`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-base leading-relaxed">{post.content}</div>
                </div>

                {/* Related Services */}
                {post.relatedServices.length > 0 && (
                  <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-serif font-semibold mb-4">Related Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.relatedServices.map((service, i) => (
                        <Badge key={i} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button asChild>
                        <Link href="/contact">Get Free Estimate</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Author Box */}
                  <Card className="border-0 bg-card/50">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-serif">Alex Renovation</CardTitle>
                      <CardDescription className="text-sm">
                        Expert renovation contractors serving Rochester, NY for over 10 years.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  {/* Quick Contact */}
                  <Card className="border-0 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">Need Help with Your Project?</CardTitle>
                      <CardDescription className="text-sm">
                        Get expert advice and a free estimate for your renovation project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button asChild className="w-full">
                        <Link href="/contact">Get Free Estimate</Link>
                      </Button>
                      <Button variant="outline" asChild className="w-full bg-transparent">
                        <Link href="tel:+15854725795">Call (585) 472-5795</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-serif font-bold mb-2">Related Articles</h2>
                <p className="text-muted-foreground">More expert tips and insights</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-0 bg-card/50 hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={`/ceholder-svg-key-related.jpg?key=related${index}&height=300&width=400&query=${relatedPost.coverImage}`}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-4">
                      <Badge variant="outline" className="text-xs w-fit">
                        {relatedPost.category}
                      </Badge>
                      <CardTitle className="text-lg font-serif leading-tight group-hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardDescription className="text-sm leading-relaxed line-clamp-2">
                        {relatedPost.excerpt}
                      </CardDescription>
                      <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Read More
                          <ArrowRight className="h-3 w-3 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Turn your renovation ideas into reality with our expert team and quality craftsmanship.
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
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
