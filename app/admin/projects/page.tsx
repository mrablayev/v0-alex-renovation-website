"use client"

import React from "react"
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
import { Plus, Edit, Eye, Trash2, Save, X } from "lucide-react"
import { projects, type Project } from "@/lib/project-data"

export default function AdminProjectsPage() {
  const [projectList, setProjectList] = useState<Project[]>(projects)
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null)

  const handleNewProject = () => {
    setEditingProject({
      id: Date.now().toString(),
      title: "",
      description: "",
      longDescription: "",
      category: "kitchen",
      status: "draft",
      featured: false,
      beforeImages: [],
      afterImages: [],
      completionDate: "",
      location: "",
      budget: "",
      duration: "",
      services: [],
      challenges: [],
      solutions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    setIsEditing(true)
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setIsEditing(true)
  }

  const handleSaveProject = () => {
    if (!editingProject) return

    const updatedProject = {
      ...editingProject,
      updatedAt: new Date().toISOString(),
    } as Project

    const existingIndex = projectList.findIndex(p => p.id === editingProject.id)
    if (existingIndex >= 0) {
      const newList = [...projectList]
      newList[existingIndex] = updatedProject
      setProjectList(newList)
    } else {
      setProjectList([...projectList, updatedProject])
    }

    setIsEditing(false)
    setEditingProject(null)
  }

  const handleDeleteProject = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjectList(projectList.filter(p => p.id !== id))
    }
  }

  const handlePublishProject = (id: string) => {
    setProjectList(projectList.map(p => 
      p.id === id ? { ...p, status: 'published' as const, updatedAt: new Date().toISOString() } : p
    ))
  }

  const handleUnpublishProject = (id: string) => {
    setProjectList(projectList.map(p => 
      p.id === id ? { ...p, status: 'draft' as const, updatedAt: new Date().toISOString() } : p
    ))
  }

  if (isEditing && editingProject) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-serif font-bold">
                  {editingProject.id && projectList.find(p => p.id === editingProject.id) ? 'Edit Project' : 'New Project'}
                </h1>
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={handleSaveProject}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Project
                  </Button>
                </div>
              </div>

              <Card className="border-0 bg-card/50">
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Project Title *</Label>
                      <Input
                        id="title"
                        value={editingProject.title || ""}
                        onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                        placeholder="Enter project title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={editingProject.category}
                        onValueChange={(value) => setEditingProject({...editingProject, category: value as Project['category']})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kitchen">Kitchen</SelectItem>
                          <SelectItem value="bathroom">Bathroom</SelectItem>
                          <SelectItem value="flooring">Flooring</SelectItem>
                          <SelectItem value="exterior">Exterior</SelectItem>
                          <SelectItem value="basement">Basement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description *</Label>
                    <Textarea
                      id="description"
                      value={editingProject.description || ""}
                      onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                      placeholder="Brief description for project cards"
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="longDescription">Detailed Description *</Label>
                    <Textarea
                      id="longDescription"
                      value={editingProject.longDescription || ""}
                      onChange={(e) => setEditingProject({...editingProject, longDescription: e.target.value})}
                      placeholder="Detailed project description for the project page"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={editingProject.location || ""}
                        onChange={(e) => setEditingProject({...editingProject, location: e.target.value})}
                        placeholder="e.g., Brighton, NY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget</Label>
                      <Input
                        id="budget"
                        value={editingProject.budget || ""}
                        onChange={(e) => setEditingProject({...editingProject, budget: e.target.value})}
                        placeholder="e.g., $25,000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={editingProject.duration || ""}
                        onChange={(e) => setEditingProject({...editingProject, duration: e.target.value})}
                        placeholder="e.g., 3 weeks"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="completionDate">Completion Date</Label>
                    <Input
                      id="completionDate"
                      type="date"
                      value={editingProject.completionDate || ""}
                      onChange={(e) => setEditingProject({...editingProject, completionDate: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services">Services Provided (one per line)</Label>
                    <Textarea
                      id="services"
                      value={editingProject.services?.join('\n') || ""}
                      onChange={(e) => setEditingProject({...editingProject, services: e.target.value.split('\n').filter(s => s.trim())})}
                      placeholder="Custom Cabinetry&#10;Countertop Installation&#10;Electrical Work"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="challenges">Challenges (one per line)</Label>
                      <Textarea
                        id="challenges"
                        value={editingProject.challenges?.join('\n') || ""}
                        onChange={(e) => setEditingProject({...editingProject, challenges: e.target.value.split('\n').filter(s => s.trim())})}
                        placeholder="Load-bearing wall removal&#10;Electrical panel upgrade needed"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="solutions">Solutions (one per line)</Label>
                      <Textarea
                        id="solutions"
                        value={editingProject.solutions?.join('\n') || ""}
                        onChange={(e) => setEditingProject({...editingProject, solutions: e.target.value.split('\n').filter(s => s.trim())})}
                        placeholder="Structural engineer consultation&#10;Panel upgrade to 200 amp"
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Project Settings</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="featured"
                        checked={editingProject.featured || false}
                        onCheckedChange={(checked) => setEditingProject({...editingProject, featured: !!checked})}
                      />
                      <Label htmlFor="featured">Featured Project</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="status">Status:</Label>
                      <Select
                        value={editingProject.status}
                        onValueChange={(value) => setEditingProject({...editingProject, status: value as 'draft' | 'published'})}
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
              <h1 className="text-3xl font-serif font-bold">Manage Projects</h1>
              <Button onClick={handleNewProject}>
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {projectList.map((project) => (
                <Card key={project.id} className="border-0 bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-serif font-semibold">{project.title}</h3>
                          <Badge variant={project.status === 'published' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                          {project.featured && (
                            <Badge variant="outline">Featured</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{project.category}</span>
                          <span>{project.location}</span>
                          <span>{project.budget}</span>
                          <span>Updated: {new Date(project.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {project.status === 'published' && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/projects/${project.id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="outline" size="sm" onClick={() => handleEditProject(project)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        {project.status === 'draft' ? (
                          <Button size="sm" onClick={() => handlePublishProject(project.id)}>
                            Publish
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" onClick={() => handleUnpublishProject(project.id)}>
                            Unpublish
                          </Button>
                        )}
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteProject(project.id)}>
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