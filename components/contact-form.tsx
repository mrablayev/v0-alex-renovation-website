"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ChevronDown, ChevronUp, Phone, Mail, MessageSquare, CheckCircle, Clock, Star } from "lucide-react"

// Smart form validation schema
const contactFormSchema = z.object({
  // Essential fields only
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide more details about your project"),
  
  // Optional advanced fields
  address: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  
  // Preferences
  consultation: z.boolean().default(false),
  newsletter: z.boolean().default(false),
  urgent: z.boolean().default(false),
})

type ContactFormData = z.infer<typeof contactFormSchema>

// Smart defaults based on common patterns
const projectTypeDefaults = {
  kitchen: {
    budget: "25k-50k",
    timeline: "2-3-months",
    suggestedMessage: "I'm interested in renovating my kitchen. I'd like to discuss cabinet options, countertops, and layout improvements."
  },
  bathroom: {
    budget: "15k-30k", 
    timeline: "1-2-months",
    suggestedMessage: "I'm planning a bathroom renovation. I'd like to explore tile options, fixture upgrades, and layout modifications."
  },
  flooring: {
    budget: "5k-15k",
    timeline: "1-month",
    suggestedMessage: "I'm interested in new flooring installation. I'd like to discuss material options and room coverage."
  }
}

export function ContactForm() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
      address: "",
      budget: "",
      timeline: "",
      consultation: true, // Smart default - most people want consultation
      newsletter: false,
      urgent: false,
    },
  })

  // Smart defaults when project type changes
  const handleProjectTypeChange = (projectType: string) => {
    const defaults = projectTypeDefaults[projectType as keyof typeof projectTypeDefaults]
    if (defaults) {
      form.setValue("budget", defaults.budget)
      form.setValue("timeline", defaults.timeline)
      if (!form.getValues("message")) {
        form.setValue("message", defaults.suggestedMessage)
      }
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 bg-card/50">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-bold">Thank You!</h3>
            <p className="text-muted-foreground">
              We've received your request and will contact you within 24 hours with your free estimate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
            <Button asChild>
              <a href="tel:+15854725795">Call Us Now</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 bg-card/50">
      <CardHeader>
        <CardTitle className="text-xl font-serif">Get Your Free Estimate</CardTitle>
        <CardDescription>
          Tell us about your project and we'll provide a detailed estimate within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Essential Information - Always Visible */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Project Information</span>
              </h3>

              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field}
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact Method Choice */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          {...field}
                          className="transition-all focus:ring-2 focus:ring-primary/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="(585) 472-5795" 
                          {...field}
                          className="transition-all focus:ring-2 focus:ring-primary/20"
                        />
                      </FormControl>
                      <FormDescription>For faster response (recommended)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Project Type with Smart Defaults */}
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What type of project are you planning? *</FormLabel>
                    <Select 
                      onValueChange={(value) => {
                        field.onChange(value)
                        handleProjectTypeChange(value)
                      }} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="transition-all focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Choose your project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="kitchen">🍳 Kitchen Renovation</SelectItem>
                        <SelectItem value="bathroom">🛁 Bathroom Remodel</SelectItem>
                        <SelectItem value="flooring">🏠 Flooring Installation</SelectItem>
                        <SelectItem value="painting">🎨 Interior/Exterior Painting</SelectItem>
                        <SelectItem value="handyman">🔧 Handyman Services</SelectItem>
                        <SelectItem value="basement">🏠 Basement Finishing</SelectItem>
                        <SelectItem value="multiple">📋 Multiple Services</SelectItem>
                        <SelectItem value="other">❓ Other/Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Project Description */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your project *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe what you'd like to accomplish, room dimensions, style preferences, or any specific requirements..."
                        rows={4}
                        {...field}
                        className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </FormControl>
                    <FormDescription>
                      The more details you provide, the more accurate your estimate will be
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Progressive Disclosure - Advanced Options */}
            <div className="border-t pt-6">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full justify-between p-0 h-auto font-normal text-left hover:bg-transparent"
              >
                <span className="text-sm font-medium">
                  {showAdvanced ? "Hide" : "Show"} Additional Details (Optional)
                </span>
                {showAdvanced ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>

              {showAdvanced && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-10k">Under $10,000</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="over-100k">Over $100,000</SelectItem>
                              <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>Helps us recommend appropriate options</FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="When to start?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="asap">As soon as possible</SelectItem>
                              <SelectItem value="1-month">Within 1 month</SelectItem>
                              <SelectItem value="2-3-months">2-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-months-plus">6+ months</SelectItem>
                              <SelectItem value="just-planning">Just planning</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>Helps us schedule your project</FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Property Address */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="123 Main St, Rochester, NY 14620" 
                            {...field}
                            className="transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormDescription>
                          Helps us provide location-specific recommendations
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            {/* Preferences - Simplified */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold">How can we help?</h3>
              
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="consultation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          Schedule a free in-home consultation (Recommended)
                        </FormLabel>
                        <FormDescription>
                          We'll visit your home to provide the most accurate estimate
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urgent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          This is urgent (emergency repair needed)
                        </FormLabel>
                        <FormDescription>
                          We'll prioritize your request for same-day response
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button with Loading State */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg py-6 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Sending Request...
                </>
              ) : (
                "Get My Free Estimate"
              )}
            </Button>

            {/* Trust Indicators */}
            <div className="text-center space-y-3 pt-4 border-t">
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>24hr response</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>5-star rated</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Your information is secure and will never be shared. We respect your privacy.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}