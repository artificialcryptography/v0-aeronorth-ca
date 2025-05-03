"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Highway Construction Monitoring",
      category: "construction",
      image: "/images/constructionDrone.jpg",
      description:
        "Biweekly drone surveys to monitor progress and calculate earthwork volumes for a major highway expansion project.",
      client: "Provincial Department of Transportation",
      location: "British Columbia, Canada",
    },
    {
      id: 2,
      title: "Solar Farm Inspection",
      category: "inspection",
      image: "/images/electrical-power-lines.jpg",
      description:
        "Thermal imaging inspection of a 50MW solar farm to identify faulty panels and optimize energy production.",
      client: "Renewable Energy Partners",
      location: "Alberta, Canada",
    },
    {
      id: 3,
      title: "Forest Health Assessment",
      category: "environmental",
      image: "/images/droneForest.jpg",
      description:
        "Multispectral imaging to assess forest health and identify areas affected by pine beetle infestation.",
      client: "Provincial Forest Service",
      location: "British Columbia, Canada",
    },
    {
      id: 4,
      title: "Quarry Volumetric Analysis",
      category: "mining",
      image: "/images/copperMine.jpg",
      description:
        "Monthly volumetric surveys to track material extraction and inventory management at a limestone quarry.",
      client: "Global Aggregates Inc.",
      location: "Saskatchewan, Canada",
    },
    {
      id: 5,
      title: "Coastal Erosion Monitoring",
      category: "environmental",
      image: "/images/droneForest.jpg",
      description: "Quarterly surveys to monitor coastal erosion and support shoreline management planning.",
      client: "Coastal Conservation Authority",
      location: "British Columbia, Canada",
    },
    {
      id: 6,
      title: "Urban Development Mapping",
      category: "construction",
      image: "/images/constructionDrone.jpg",
      description:
        "Comprehensive mapping of a 200-acre urban development project to support planning and construction.",
      client: "Metropolitan Development Group",
      location: "Manitoba, Canada",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div id="projects" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-white max-w-3xl mx-auto">
            Explore our portfolio of successful drone survey projects across various industries.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="outline"
            onClick={() => setFilter("all")}
            className={`${filter === "all" ? "bg-white/20" : "bg-black/50"} text-white border-white hover:bg-white/20`}
          >
            All Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("construction")}
            className={`${filter === "construction" ? "bg-white/20" : "bg-black/50"} text-white border-white hover:bg-white/20`}
          >
            Construction
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("environmental")}
            className={`${filter === "environmental" ? "bg-white/20" : "bg-black/50"} text-white border-white hover:bg-white/20`}
          >
            Environmental
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("mining")}
            className={`${filter === "mining" ? "bg-white/20" : "bg-black/50"} text-white border-white hover:bg-white/20`}
          >
            Mining
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("inspection")}
            className={`${filter === "inspection" ? "bg-white/20" : "bg-black/50"} text-white border-white hover:bg-white/20`}
          >
            Inspection
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-white/20">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white line-clamp-2">{project.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-slate-900 text-white border border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
                  <DialogDescription className="text-white/70">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project
                  </DialogDescription>
                </DialogHeader>
                <div className="relative h-64 w-full my-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-white">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white">Client</h4>
                      <p className="text-white/70">{project.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-white/70">{project.location}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}
