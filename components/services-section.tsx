"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mountain, Activity, Layers, Camera } from "lucide-react"
import Image from "next/image"
import TopoImageBackground from "./topo-image-background"

export default function ServicesSection() {
  const services = [
    {
      id: "mapping",
      title: "Aerial Mapping",
      icon: <MapPin className="h-10 w-10 text-white" />,
      description:
        "High-precision aerial mapping services for construction, land development, and infrastructure projects. Our drones capture detailed orthomosaic maps and digital elevation models with centimeter-level accuracy.",
      features: ["Orthomosaic Maps", "Digital Elevation Models", "Contour Maps", "GIS Integration"],
    },
    {
      id: "volumetrics",
      title: "Volumetric Analysis",
      icon: <Mountain className="h-10 w-10 text-white" />,
      description:
        "Accurate volume calculations for stockpiles, excavations, and earthworks. Our advanced software processes drone data to provide precise measurements for material management and progress tracking.",
      features: ["Stockpile Measurements", "Cut/Fill Analysis", "Earthwork Calculations", "Progress Monitoring"],
    },
    {
      id: "multispectral",
      title: "Multispectral Imaging",
      icon: <Activity className="h-10 w-10 text-white" />,
      description:
        "Multispectral sensors capture data across multiple bands of the electromagnetic spectrum, revealing insights invisible to the human eye. Ideal for agriculture, forestry, and environmental monitoring.",
      features: [
        "Vegetation Health Analysis",
        "Crop Stress Detection",
        "Water Quality Assessment",
        "Environmental Monitoring",
      ],
    },
    {
      id: "hyperspectral",
      title: "Hyperspectral Analysis",
      icon: <Layers className="h-10 w-10 text-white" />,
      description:
        "Advanced hyperspectral imaging captures hundreds of spectral bands, providing detailed data for scientific research, mineral exploration, and environmental assessment.",
      features: [
        "Mineral Identification",
        "Pollution Detection",
        "Detailed Spectral Analysis",
        "Research Applications",
      ],
    },
    {
      id: "inspection",
      title: "Infrastructure Inspection",
      icon: <Camera className="h-10 w-10 text-white" />,
      description:
        "Comprehensive visual and thermal inspections of buildings, bridges, towers, and other infrastructure. Our drones access hard-to-reach areas safely and efficiently.",
      features: ["Building Inspections", "Solar Panel Assessment", "Thermal Analysis", "Structural Monitoring"],
    },
  ]

  return (
    <TopoImageBackground className="py-24 bg-black" imageType="lidar" overlayOpacity={80}>
      <div id="services" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-white max-w-3xl mx-auto">
            We provide comprehensive drone survey solutions tailored to your specific needs, delivering actionable
            insights for informed decision-making.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <Tabs defaultValue="mapping" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 mb-12 bg-transparent border-0 h-auto">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="bg-transparent border border-white text-white hover:bg-white/20 data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:shadow-none rounded-md px-4 py-2 h-auto"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm overflow-hidden border border-white/20">
                  <div className="relative h-[300px]">
                    <Image
                      src={
                        service.id === "mapping" || service.id === "volumetrics"
                          ? "/images/forest-road.jpg"
                          : "/images/drone-hero.jpg"
                      }
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  </div>
                </Card>

                <CardContent className="flex flex-col justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white mb-6">{service.description}</p>

                  <h4 className="font-semibold text-lg mb-3 text-white">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </TopoImageBackground>
  )
}
