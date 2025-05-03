"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "BuildRight Construction",
      quote:
        "SkyVision's drone surveys have transformed how we monitor construction progress. The accuracy of their volumetric calculations and the quality of their orthomosaic maps have saved us time and money on every project.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Environmental Scientist",
      company: "EcoSystems Research",
      quote:
        "The multispectral imaging provided by SkyVision has been invaluable for our environmental monitoring projects. Their team's expertise and attention to detail ensure we get the data we need for our research.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "David Rodriguez",
      position: "Operations Director",
      company: "Global Mining Solutions",
      quote:
        "We've been working with SkyVision for over three years, and their drone survey services have consistently exceeded our expectations. Their volumetric analysis has become an essential part of our inventory management.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 text-sky-200">
            <Quote size={80} />
          </div>

          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
              >
                <Card className="glass-card border-none">
                  <CardContent className="p-8 md:p-10 text-center">
                    <p className="text-lg text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-sky-500">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-sky-700">{testimonial.name}</h4>
                      <p className="text-slate-600">{testimonial.position}</p>
                      <p className="text-slate-500 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 ${index === activeIndex ? "bg-sky-600" : "bg-slate-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
