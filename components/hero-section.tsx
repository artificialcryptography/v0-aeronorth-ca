"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface VideoSlide {
  id: number
  src: string
  title: string
  description: string
}

export default function HeroSection() {
  const slides: VideoSlide[] = [
    {
      id: 1,
      src: "/images/drone-hero.jpg",
      title: "Aerial Excellence",
      description: "Precision drone surveys for construction and resource management",
    },
    {
      id: 2,
      src: "/images/forest-road.jpg",
      title: "Advanced Mapping",
      description: "High-resolution aerial mapping and 3D modeling",
    },
    {
      id: 3,
      src: "/images/forest-clearing.jpg",
      title: "Environmental Insights",
      description: "Specialized imaging for environmental monitoring and assessment",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video/Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image src={slide.src || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-500 transform">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">{slides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#services">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 w-full sm:w-auto px-8 py-6 text-lg"
              >
                Our Services
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 w-full sm:w-auto px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
