import type React from "react"

interface TopographicalBackgroundProps {
  children: React.ReactNode
  className?: string
  opacity?: number
  density?: "low" | "medium" | "high"
  color?: string
}

export default function TopographicalBackground({
  children,
  className = "",
  opacity = 0.15,
  density = "medium",
  color = "#ffffff",
}: TopographicalBackgroundProps) {
  // Determine the SVG pattern based on density
  const getTopographicalSvg = () => {
    // Encode the SVG for use in CSS
    const encodeSvg = (svg: string) => {
      return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
    }

    // More complex detailed topographical pattern with thinner lines
    switch (density) {
      case "low":
        return encodeSvg(`
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <!-- Main contours -->
          <path d="M0,300 Q100,290 200,310 T400,290 T600,310 T800,290" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <path d="M0,250 Q120,270 240,250 T480,270 T720,250 T800,260" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <path d="M0,350 Q150,330 250,350 T500,330 T750,350 T800,340" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          
          <!-- Hill/mountain feature on the left -->
          <ellipse cx="200" cy="200" rx="180" ry="50" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="200" cy="200" rx="150" ry="40" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="200" cy="200" rx="120" ry="30" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          
          <!-- Valley feature on the right -->
          <path d="M500,100 Q550,200 600,100" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <path d="M520,120 Q550,200 580,120" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <path d="M540,140 Q550,200 560,140" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
        </svg>
      `)
      case "high":
        return encodeSvg(`
        <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
          <!-- Base contour lines -->
          ${Array.from({ length: 30 }, (_, i) => {
            const y = 100 + i * 20
            const variance = Math.sin(i * 0.5) * 20
            return `<path d="M0,${y} Q120,${y + variance} 240,${y - variance} T480,${y + variance} T720,${y - variance} T800,${y}" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>`
          }).join("")}
          
          <!-- Mountain feature 1 -->
          ${Array.from({ length: 10 }, (_, i) => {
            const radius = 150 - i * 15
            return `<ellipse cx="250" cy="250" rx="${radius}" ry="${radius / 2.5}" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>`
          }).join("")}
          
          <!-- Mountain feature 2 -->
          ${Array.from({ length: 8 }, (_, i) => {
            const radius = 100 - i * 12
            return `<ellipse cx="600" cy="400" rx="${radius}" ry="${radius / 2}" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>`
          }).join("")}
          
          <!-- Ridge feature -->
          ${Array.from({ length: 5 }, (_, i) => {
            const offset = i * 10
            return `<path d="M400,200 Q500,180 600,250 T700,220" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5" transform="translate(0,${offset})"/>`
          }).join("")}
          
          <!-- Valley feature -->
          ${Array.from({ length: 6 }, (_, i) => {
            const offset = i * 8
            const scale = 1 - i * 0.1
            return `<path d="M100,500 Q200,600 300,500 T500,600 T600,500" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5" transform="translate(${offset},${offset}) scale(${scale})"/>`
          }).join("")}
        </svg>
      `)
      default: // medium
        return encodeSvg(`
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <!-- Base contour lines -->
          ${Array.from({ length: 15 }, (_, i) => {
            const y = 100 + i * 30
            const variance1 = Math.sin(i * 0.8) * 15
            const variance2 = Math.cos(i * 0.4) * 20
            return `<path d="M0,${y} Q100,${y + variance1} 200,${y - variance1} T400,${y + variance2} T600,${y - variance2} T800,${y}" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>`
          }).join("")}
          
          <!-- Plateau feature -->
          <ellipse cx="300" cy="200" rx="180" ry="60" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="300" cy="200" rx="150" ry="50" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="300" cy="200" rx="120" ry="40" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="300" cy="200" rx="90" ry="30" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="300" cy="200" rx="60" ry="20" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          
          <!-- Valley/canyon feature -->
          <path d="M500,250 C550,300 600,200 650,300 S700,250 750,300" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <path d="M500,270 C550,310 600,220 650,310 S700,270 750,310" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <path d="M500,290 C550,320 600,240 650,320 S700,290 750,320" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          
          <!-- Small hill features -->
          <ellipse cx="150" cy="400" rx="50" ry="30" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="150" cy="400" rx="30" ry="20" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="650" cy="150" rx="70" ry="40" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="650" cy="150" rx="40" ry="25" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
          <ellipse cx="650" cy="150" rx="20" ry="10" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
        </svg>
      `)
    }
  }

  const backgroundStyle = {
    backgroundImage: getTopographicalSvg(),
    backgroundRepeat: "repeat-y",
    backgroundSize: "100% auto",
  }

  return (
    <div className={`relative ${className}`} style={backgroundStyle}>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
