"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Slide {
  id: number
  type: "image" | "video"
  src: string
  title: string
  description: string
  poster: string
}

export default function HeroSection() {
  const slides: Slide[] = [
    {
      id: 1,
      type: "video",
      src: "/videos/drone-mountain.mp4",
      title: "Aerial Excellence",
      description: "Precision drone surveys for construction and resource management",
      poster: "/images/drone-hero.jpg",
    },
    {
      id: 2,
      type: "video",
      src: "/videos/drone-cliff.mp4",
      title: "Advanced Mapping",
      description: "High-resolution aerial mapping and 3D modeling",
      poster: "/images/forest-road.jpg",
    },
    {
      id: 3,
      type: "video",
      src: "/videos/drone-waterfall.mp4",
      title: "Environmental Insights",
      description: "Specialized imaging for environmental monitoring and assessment",
      poster: "/images/forest-clearing.jpg",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Reset and restart the auto-advance timer when manually changing slides
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 12000)
  }

  // Handle manual slide navigation
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    resetInterval()
  }

  // Handle video playback when slide changes
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
      }
    })

    // Play the current video if it exists
    const currentVideo = videoRefs.current[currentSlide]
    if (currentVideo) {
      // Reset to beginning
      currentVideo.currentTime = 0

      // Play with a slight delay to ensure DOM is ready
      setTimeout(() => {
        const playPromise = currentVideo.play()

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Silent catch for autoplay restrictions
            console.log("Autoplay prevented by browser. User interaction required.")
          })
        }
      }, 50)
    }
  }, [currentSlide])

  // Auto-advance slides
  useEffect(() => {
    // Initialize the interval
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 12000)

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0">
            <video
              ref={(el) => {
                if (el) videoRefs.current[index] = el
              }}
              className="w-full h-full object-cover"
              playsInline
              muted
              loop
              preload="auto"
              poster={slide.poster}
            >
              <source src={slide.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
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
        onClick={() => {
          prevSlide()
          resetInterval()
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => {
          nextSlide()
          resetInterval()
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-30"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
