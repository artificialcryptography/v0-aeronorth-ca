"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectsSection() {
  // Track if we're client-side rendered
  const [isMounted, setIsMounted] = useState(false);

  // For the filter state, initialize with "all"
  const [activeFilter, setActiveFilter] = useState("all");

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = {
    // Construction Projects (6)
    construction: [
      {
        id: 1,
        title: "Highway Construction Monitoring",
        image: "/images/construction/constructionThumb1.png",
        description:
          "Biweekly drone surveys to monitor progress and calculate earthwork volumes for a major highway expansion project.",
        client: "Provincial Department of Transportation",
        location: "British Columbia, Canada",
      },
      {
        id: 2,
        title: "Urban Development Mapping",
        image: "/images/construction/constructionThumb2.png",
        description:
          "Comprehensive mapping of a 200-acre urban development project to support planning and construction.",
        client: "Metropolitan Development Group",
        location: "Manitoba, Canada",
      },
      {
        id: 3,
        title: "Commercial Complex Construction",
        image: "/images/construction/constructionThumb3.png",
        description:
          "Weekly progress monitoring and volumetric analysis for a major commercial complex with multiple buildings.",
        client: "Northland Developers",
        location: "Alberta, Canada",
      },
      {
        id: 4,
        title: "Bridge Construction Monitoring",
        image: "/images/construction/constructionThumb4.png",
        description:
          "Detailed monitoring of structural elements and progress tracking for a major river crossing project.",
        client: "National Infrastructure Authority",
        location: "Saskatchewan, Canada",
      },
      {
        id: 5,
        title: "Residential Development",
        image: "/images/construction/constructionThumb5.png",
        description:
          "Comprehensive site surveys and progress documentation for a 150-unit residential development.",
        client: "Horizon Housing",
        location: "British Columbia, Canada",
      },
      {
        id: 6,
        title: "Industrial Park Expansion",
        image: "/images/construction/constructionThumb6.png",
        description:
          "Site preparation monitoring and earthwork calculations for a 50-acre industrial park expansion.",
        client: "Western Industrial Group",
        location: "Manitoba, Canada",
      },
    ],

    // Environmental Projects (6)
    environmental: [
      {
        id: 7,
        title: "Forest Health Assessment",
        image: "/images/environment/environmentThumb1.png",
        description:
          "Multispectral imaging to assess forest health and identify areas affected by pine beetle infestation.",
        client: "Provincial Forest Service",
        location: "British Columbia, Canada",
      },
      {
        id: 8,
        title: "Coastal Erosion Monitoring",
        image: "/images/environment/environmentThumb2.png",
        description:
          "Quarterly surveys to monitor coastal erosion and support shoreline management planning.",
        client: "Coastal Conservation Authority",
        location: "British Columbia, Canada",
      },
      {
        id: 9,
        title: "Wetland Restoration Monitoring",
        image: "/images/environment/environmentThumb3.png",
        description:
          "Multispectral analysis of vegetation health and water levels in a major wetland restoration project.",
        client: "Environmental Restoration Trust",
        location: "Alberta, Canada",
      },
      {
        id: 10,
        title: "Wildlife Habitat Mapping",
        image: "/images/environment/environmentThumb4.png",
        description:
          "Comprehensive mapping of critical wildlife habitats to support conservation planning efforts.",
        client: "Wildlife Conservation Society",
        location: "Yukon Territory, Canada",
      },
      {
        id: 11,
        title: "River Basin Analysis",
        image: "/images/environment/environmentThumb5.png",
        description:
          "Detailed topographic and vegetation mapping of a major river basin for flood management planning.",
        client: "Regional Water Authority",
        location: "Manitoba, Canada",
      },
      {
        id: 12,
        title: "Reforestation Monitoring",
        image: "/images/environment/environmentThumb6.png",
        description:
          "Periodic assessment of tree growth and health in a large-scale reforestation project.",
        client: "Sustainable Forestry Initiative",
        location: "British Columbia, Canada",
      },
    ],

    // Mining Projects (6)
    mining: [
      {
        id: 13,
        title: "Quarry Volumetric Analysis",
        image: "/images/mining/miningThumb1.png",
        description:
          "Monthly volumetric surveys to track material extraction and inventory management at a limestone quarry.",
        client: "Global Aggregates Inc.",
        location: "Saskatchewan, Canada",
      },
      {
        id: 14,
        title: "Open Pit Mine Monitoring",
        image: "/images/mining/miningThumb2.png",
        description:
          "Weekly surveys to track excavation progress and calculate ore extraction volumes.",
        client: "Northern Mining Corporation",
        location: "Northwest Territories, Canada",
      },
      {
        id: 15,
        title: "Tailings Dam Inspection",
        image: "/images/mining/miningThumb3.png",
        description:
          "Regular monitoring of tailings dam integrity and volume calculations for environmental compliance.",
        client: "Pacific Minerals Ltd.",
        location: "British Columbia, Canada",
      },
      {
        id: 16,
        title: "Mine Reclamation Project",
        image: "/images/mining/miningThumb4.png",
        description:
          "Tracking progress of environmental restoration at a former mining site with before/after comparisons.",
        client: "Resource Restoration Group",
        location: "Alberta, Canada",
      },
      {
        id: 17,
        title: "Gravel Pit Inventory",
        image: "/images/mining/miningThumb5.png",
        description:
          "Quarterly volumetric surveys of multiple gravel pits for accurate inventory management.",
        client: "Regional Construction Materials",
        location: "Manitoba, Canada",
      },
      {
        id: 18,
        title: "Gold Mine Expansion",
        image: "/images/mining/miningThumb6.png",
        description:
          "Site preparation monitoring and earthwork calculations for a major gold mine expansion project.",
        client: "Northern Gold Explorations",
        location: "Yukon Territory, Canada",
      },
    ],

    // Inspection Projects (6)
    inspection: [
      {
        id: 19,
        title: "Solar Farm Inspection",
        image: "/images/inspection/inspectionThumb1.png",
        description:
          "Thermal imaging inspection of a 50MW solar farm to identify faulty panels and optimize energy production.",
        client: "Renewable Energy Partners",
        location: "Alberta, Canada",
      },
      {
        id: 20,
        title: "Bridge Infrastructure Assessment",
        image: "/images/inspection/inspectionThumb2.png",
        description:
          "Detailed visual inspection of bridge structures to identify maintenance needs and structural issues.",
        client: "Provincial Transportation Department",
        location: "British Columbia, Canada",
      },
      {
        id: 21,
        title: "Power Line Corridor Inspection",
        image: "/images/inspection/inspectionThumb3.png",
        description:
          "Comprehensive inspection of 200km of power line corridors to identify vegetation encroachment and infrastructure damage.",
        client: "Northern Power Distribution",
        location: "Saskatchewan, Canada",
      },
      {
        id: 22,
        title: "Building Envelope Assessment",
        image: "/images/inspection/inspectionThumb4.png",
        description:
          "Thermal and visual inspection of commercial building envelopes to identify energy loss and maintenance issues.",
        client: "Urban Property Management",
        location: "Manitoba, Canada",
      },
      {
        id: 23,
        title: "Wind Turbine Inspection",
        image: "/images/inspection/inspectionThumb5.png",
        description:
          "Detailed blade and structure inspection of a 25-turbine wind farm to identify maintenance requirements.",
        client: "Prairie Wind Energy",
        location: "Alberta, Canada",
      },
      {
        id: 24,
        title: "Dam Safety Inspection",
        image: "/images/inspection/inspectionThumb6.png",
        description:
          "Comprehensive visual assessment of dam structures and spillways for safety compliance reporting.",
        client: "Regional Water Management Authority",
        location: "British Columbia, Canada",
      },
    ],
  };

  // Select 6 fixed projects for the "all" category to avoid hydration mismatch
  const fixedAllProjects = [
    projects.construction[0],
    projects.environmental[0],
    projects.mining[0],
    projects.inspection[0],
    projects.construction[1],
    projects.environmental[1],
  ];

  // Function to get the projects to display based on current filter
  function getVisibleProjects() {
    if (!isMounted) {
      // During SSR and initial render, use fixed projects to prevent hydration mismatch
      return fixedAllProjects;
    }

    if (activeFilter === "all") {
      return fixedAllProjects;
    }

    return projects[activeFilter] || [];
  }

  // Get the projects to show
  const visibleProjects = getVisibleProjects();

  return (
    <div id="projects" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            Explore our portfolio of successful drone survey projects across
            various industries.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Filter buttons with inline onClick handlers */}
          <Button
            variant="outline"
            onClick={() => setActiveFilter("all")}
            className={`${activeFilter === "all" ? "bg-white/20" : "bg-black/70"} text-white border-white hover:bg-white/20`}
          >
            All Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveFilter("construction")}
            className={`${activeFilter === "construction" ? "bg-white/20" : "bg-black/70"} text-white border-white hover:bg-white/20`}
          >
            Construction
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveFilter("environmental")}
            className={`${activeFilter === "environmental" ? "bg-white/20" : "bg-black/70"} text-white border-white hover:bg-white/20`}
          >
            Environmental
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveFilter("mining")}
            className={`${activeFilter === "mining" ? "bg-white/20" : "bg-black/70"} text-white border-white hover:bg-white/20`}
          >
            Mining
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveFilter("inspection")}
            className={`${activeFilter === "inspection" ? "bg-white/20" : "bg-black/70"} text-white border-white hover:bg-white/20`}
          >
            Inspection
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="bg-black bg-opacity-70 backdrop-blur-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-white/20">
                  <div className="relative h-64 w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                      {activeFilter === "all"
                        ? project.id <= 6
                          ? "Construction"
                          : project.id <= 12
                            ? "Environmental"
                            : project.id <= 18
                              ? "Mining"
                              : "Inspection"
                        : activeFilter.charAt(0).toUpperCase() +
                          activeFilter.slice(1)}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white line-clamp-2">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-slate-900 text-white border border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-white/70">
                    {activeFilter === "all"
                      ? project.id <= 6
                        ? "Construction"
                        : project.id <= 12
                          ? "Environmental"
                          : project.id <= 18
                            ? "Mining"
                            : "Inspection"
                      : activeFilter.charAt(0).toUpperCase() +
                        activeFilter.slice(1)}{" "}
                    Project
                  </DialogDescription>
                </DialogHeader>
                <div className="relative h-64 w-full my-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
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
  );
}
