"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Plus, Edit, Eye, Trash2, Save, X, Play } from "lucide-react"
import { blogPosts, type BlogPost } from "@/lib/blog-data"

export default function AdminBlogPage() {
  const [postList, setPostList] = useState<BlogPost[]>(blogPosts)
  const [isEditing, setIsEditing] = useState(false)
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null)

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleNewPost = () => {
    setEditingPost({
      id: Date.now().toString(),
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "tips",
      status: "draft",
      featured: false,
      featuredImage: "",
      author: {
        name: "Alex Martinez",
        avatar: "/alex-martinez-avatar.jpg",
        bio: "Professional contractor with over 10 years of experience in home renovation."
      },
      tags: [],
      publishedAt: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      readTime: 5,
      seo: {
        metaTitle: "",
        metaDescription: "",
        keywords: []
      }
    })
    setIsEditing(true)
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setIsEditing(true)
  }

  const handleSavePost = () => {
    if (!editingPost) return

    const updatedPost = {
      ...editingPost,
      slug: editingPost.slug || generateSlug(editingPost.title || ""),
      updatedAt: new Date().toISOString(),
      publishedAt: editingPost.status === 'published' && !editingPost.publishedAt 
        ? new Date().toISOString() 
        : editingPost.publishedAt,
    } as BlogPost

    const existingIndex = postList.findIndex(p => p.id === editingPost.id)
    if (existingIndex >= 0) {
      const newList = [...postList]
      newList[existingIndex] = updatedPost
      setPostList(newList)
    } else {
      setPostList([...postList, updatedPost])
    }

    setIsEditing(false)
    setEditingPost(null)
  }

  const handleDeletePost = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      setPostList(postList.filter(p => p.id !== id))
    }
  }

  const handlePublishPost = (id: string) => {
    setPostList(postList.map(p => 
      p.id === id ? { 
        ...p, 
        status: 'published' as const, 
        publishedAt: p.publishedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString() 
      } : p
    ))
  }

  const handleUnpublishPost = (id: string) => {
    setPostList(postList.map(p => 
      p.id === id ? { ...p, status: 'draft' as const, updatedAt: new Date().toISOString() } : p
    ))
  }

  if (isEditing && editingPost) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-serif font-bold">
                  {editingPost.id && postList.find(p => p.id === editingPost.id) ? 'Edit Post' : 'New Post'}
                </h1>
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={handleSavePost}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Post
                  </Button>
                </div>
              </div>

              <Card className="border-0 bg-card/50">
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Post Title *</Label>
                      <Input
                        id="title"
                        value={editingPost.title || ""}
                        onChange={(e) => {
                          const title = e.target.value
                          setEditingPost({
                            ...editingPost, 
                            title,
                            slug: generateSlug(title),
                            seo: {
                              ...editingPost.seo,
                              metaTitle: title ? `${title} - Alex Renovation Rochester NY` : ""
                            }
                          })
                        }}
                        placeholder="Enter post title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug">URL Slug</Label>
                      <Input
                        id="slug"
                        value={editingPost.slug || ""}
                        onChange={(e) => setEditingPost({...editingPost, slug: e.target.value})}
                        placeholder="url-friendly-slug"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={editingPost.category}
                        onValueChange={(value) => setEditingPost({...editingPost, category: value as BlogPost['category']})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tips">Tips</SelectItem>
                          <SelectItem value="guides">Guides</SelectItem>
                          <SelectItem value="reviews">Reviews</SelectItem>
                          <SelectItem value="news">News</SelectItem>
                          <SelectItem value="case-studies">Case Studies</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="readTime">Read Time (minutes)</Label>
                      <Input
                        id="readTime"
                        type="number"
                        value={editingPost.readTime || 5}
                        onChange={(e) => setEditingPost({...editingPost, readTime: parseInt(e.target.value) || 5})}
                        min="1"
                        max="60"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={editingPost.excerpt || ""}
                      onChange={(e) => setEditingPost({
                        ...editingPost, 
                        excerpt: e.target.value,
                        seo: {
                          ...editingPost.seo,
                          metaDescription: e.target.value.slice(0, 160)
                        }
                      })}
                      placeholder="Brief description for post cards and SEO"
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={editingPost.content || ""}
                      onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                      placeholder="Write your blog post content here. You can use Markdown formatting."
                      rows={12}
                      className="font-mono text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featuredImage">Featured Image URL</Label>
                    <Input
                      id="featuredImage"
                      value={editingPost.featuredImage || ""}
                      onChange={(e) => setEditingPost({...editingPost, featuredImage: e.target.value})}
                      placeholder="/path/to/image.jpg"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Video Embed (Optional)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="videoPlatform">Platform</Label>
                        <Select
                          value={editingPost.videoEmbed?.platform || ""}
                          onValueChange={(value) => setEditingPost({
                            ...editingPost, 
                            videoEmbed: value ? {
                              platform: value as 'youtube' | 'vimeo',
                              videoId: editingPost.videoEmbed?.videoId || "",
                              title: editingPost.videoEmbed?.title || ""
                            } : undefined
                          })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">None</SelectItem>
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="vimeo">Vimeo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="videoId">Video ID</Label>
                        <Input
                          id="videoId"
                          value={editingPost.videoEmbed?.videoId || ""}
                          onChange={(e) => setEditingPost({
                            ...editingPost,
                            videoEmbed: editingPost.videoEmbed ? {
                              ...editingPost.videoEmbed,
                              videoId: e.target.value
                            } : undefined
                          })}
                          placeholder="dQw4w9WgXcQ"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="videoTitle">Video Title</Label>
                        <Input
                          id="videoTitle"
                          value={editingPost.videoEmbed?.title || ""}
                          onChange={(e) => setEditingPost({
                            ...editingPost,
                            videoEmbed: editingPost.videoEmbed ? {
                              ...editingPost.videoEmbed,
                              title: e.target.value
                            } : undefined
                          })}
                          placeholder="Video title"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={editingPost.tags?.join(', ') || ""}
                      onChange={(e) => setEditingPost({
                        ...editingPost, 
                        tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag),
                        seo: {
                          ...editingPost.seo,
                          keywords: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
                        }
                      })}
                      placeholder="renovation tips, kitchen remodel, Rochester NY"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">SEO Settings</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="metaTitle">Meta Title</Label>
                        <Input
                          id="metaTitle"
                          value={editingPost.seo?.metaTitle || ""}
                          onChange={(e) => setEditingPost({
                            ...editingPost,
                            seo: { ...editingPost.seo, metaTitle: e.target.value }
                          })}
                          placeholder="SEO title (60 characters max)"
                          maxLength={60}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="metaDescription">Meta Description</Label>
                        <Textarea
                          id="metaDescription"
                          value={editingPost.seo?.metaDescription || ""}
                          onChange={(e) => setEditingPost({
                            ...editingPost,
                            seo: { ...editingPost.seo, metaDescription: e.target.value }
                          })}
                          placeholder="SEO description (160 characters max)"
                          maxLength={160}
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Post Settings</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="featured"
                        checked={editingPost.featured || false}
                        onCheckedChange={(checked) => setEditingPost({...editingPost, featured: !!checked})}
                      />
                      <Label htmlFor="featured">Featured Post</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="status">Status:</Label>
                      <Select
                        value={editingPost.status}
                        onValueChange={(value) => setEditingPost({...editingPost, status: value as 'draft' | 'published'})}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-serif font-bold">Manage Blog Posts</h1>
              <Button onClick={handleNewPost}>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {postList.map((post) => (
                <Card key={post.id} className="border-0 bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-serif font-semibold">{post.title}</h3>
                          <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                            {post.status}
                          </Badge>
                          {post.featured && (
                            <Badge variant="outline">Featured</Badge>
                          )}
                          {post.videoEmbed && (
                            <Badge variant="outline">
                              <Play className="h-3 w-3 mr-1" />
                              Video
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{post.category}</span>
                          <span>{post.readTime} min read</span>
                          <span>{post.tags.length} tags</span>
                          <span>Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {post.status === 'published' && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/blog/${post.slug}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        {post.status === 'draft' ? (
                          <Button size="sm" onClick={() => handlePublishPost(post.id)}>
                            Publish
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" onClick={() => handleUnpublishPost(post.id)}>
                            Unpublish
                          </Button>
                        )}
                        <Button variant="destructive" size="sm" onClick={() => handleDeletePost(post.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}