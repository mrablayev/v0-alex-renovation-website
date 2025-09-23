import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ServiceNavigationProps {
  currentService: string
  previousService?: {
    title: string
    href: string
  }
  nextService?: {
    title: string
    href: string
  }
}

export function ServiceNavigation({ currentService, previousService, nextService }: ServiceNavigationProps) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Service */}
            <div className="flex justify-start">
              {previousService ? (
                <Card className="border-0 bg-card/50 hover:shadow-lg transition-all group w-full">
                  <CardContent className="p-6">
                    <Link
                      href={previousService.href}
                      className="flex items-center space-x-4 group-hover:text-primary transition-colors"
                      aria-label={`Previous service: ${previousService.title}`}
                    >
                      <ArrowLeft className="h-5 w-5 flex-shrink-0" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground mb-1">Previous Service</div>
                        <div className="font-medium text-sm">{previousService.title}</div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 bg-card/50 w-full opacity-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <ArrowLeft className="h-5 w-5 flex-shrink-0" />
                      <div className="text-left">
                        <div className="text-xs mb-1">Previous Service</div>
                        <div className="font-medium text-sm">None</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Next Service */}
            <div className="flex justify-end">
              {nextService ? (
                <Card className="border-0 bg-card/50 hover:shadow-lg transition-all group w-full">
                  <CardContent className="p-6">
                    <Link
                      href={nextService.href}
                      className="flex items-center justify-end space-x-4 group-hover:text-primary transition-colors"
                      aria-label={`Next service: ${nextService.title}`}
                    >
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Next Service</div>
                        <div className="font-medium text-sm">{nextService.title}</div>
                      </div>
                      <ArrowRight className="h-5 w-5 flex-shrink-0" />
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 bg-card/50 w-full opacity-50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-end space-x-4 text-muted-foreground">
                      <div className="text-right">
                        <div className="text-xs mb-1">Next Service</div>
                        <div className="font-medium text-sm">None</div>
                      </div>
                      <ArrowRight className="h-5 w-5 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Back to All Services */}
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/services" aria-label="View all renovation services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}