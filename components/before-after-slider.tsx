"use client"

import React from "react"
import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeDescription: string
  afterDescription: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeDescription,
  afterDescription,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <Card className={`relative overflow-hidden cursor-col-resize ${className}`}>
      <div
        className="relative aspect-[16/10] select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={`/abstract-geometric-shapes.png?height=400&width=640&query=${beforeImage}`}
            alt="Before renovation"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              Before
            </Badge>
          </div>
        </div>

        {/* After Image */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img
            src="/modern-kitchen-renovation-with-white-cabinets-and-.jpg"
            alt="After renovation"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600">After</Badge>
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-full" />
          </div>
        </div>

        {/* Hover Descriptions */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity p-6 flex items-end"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <p className="text-white text-sm leading-tight">{afterDescription}</p>
          </div>
          <div
            className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity p-6 flex items-end"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <p className="text-white text-sm leading-tight">{beforeDescription}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
