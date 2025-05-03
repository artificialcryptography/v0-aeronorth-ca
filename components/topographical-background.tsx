import type React from "react"

interface TopographicalBackgroundProps {
  children: React.ReactNode
  className?: string
  opacity?: number
  density?: "low" | "medium" | "high"
  color?: string
  type?: "contour" | "lidar"
  overlayOpacity?: number
  overlayColor?: string
}

export default function TopographicalBackground({
  children,
  className = "",
  opacity = 0.15,
  density = "medium",
  color = "#ffffff",
  type = "contour",
  overlayOpacity = 50,
  overlayColor = "black",
}: TopographicalBackgroundProps) {
  // Encode the SVG for use in CSS
  const encodeSvg = (svg: string) => {
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
  }

  // Get the topographical SVG pattern based on type and density
  const getTopographicalSvg = () => {
    if (type === "contour") {
      // Contour pattern - curved lines representing elevation contours
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
    } else {
      // LiDAR-style pattern - more technical, grid-like with detailed elevation points
      switch (density) {
        case "low":
          return encodeSvg(`
            <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
              <!-- Grid pattern base -->
              ${Array.from({ length: 12 }, (_, i) => {
                const y = 50 + i * 50
                return `<path d="M0,${y} L800,${y}" stroke="${color}" strokeOpacity="${opacity * 0.7}" strokeWidth="0.3"/>`
              }).join("")}
              
              ${Array.from({ length: 16 }, (_, i) => {
                const x = 50 + i * 50
                return `<path d="M${x},0 L${x},600" stroke="${color}" strokeOpacity="${opacity * 0.7}" strokeWidth="0.3"/>`
              }).join("")}
              
              <!-- Scattered elevation points -->
              ${Array.from({ length: 60 }, () => {
                const x = Math.floor(Math.random() * 800)
                const y = Math.floor(Math.random() * 600)
                const r = Math.random() * 1.5 + 0.5
                return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" fillOpacity="${opacity}"/>`
              }).join("")}
              
              <!-- Terrain feature - varying intensity -->
              ${Array.from({ length: 5 }, (_, i) => {
                const offset = i * 15
                return `<path d="M100,300 Q200,200 300,250 T500,150 T700,250" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5" transform="translate(0,${offset})"/>`
              }).join("")}
            </svg>
          `)
        case "high":
          return encodeSvg(`
            <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
              <!-- Dense grid pattern -->
              ${Array.from({ length: 40 }, (_, i) => {
                const y = 20 + i * 20
                return `<path d="M0,${y} L800,${y}" stroke="${color}" strokeOpacity="${opacity * 0.5}" strokeWidth="0.2"/>`
              }).join("")}
              
              ${Array.from({ length: 40 }, (_, i) => {
                const x = 20 + i * 20
                return `<path d="M${x},0 L${x},800" stroke="${color}" strokeOpacity="${opacity * 0.5}" strokeWidth="0.2"/>`
              }).join("")}
              
              <!-- Many elevation points with varying sizes -->
              ${Array.from({ length: 300 }, () => {
                const x = Math.floor(Math.random() * 800)
                const y = Math.floor(Math.random() * 800)
                const r = Math.random() * 1.2 + 0.3
                const pointOpacity = Math.random() * 0.3 + 0.1
                return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" fillOpacity="${pointOpacity}"/>`
              }).join("")}
              
              <!-- Multiple terrain features -->
              ${Array.from({ length: 8 }, (_, i) => {
                const yOffset = 100 + i * 80
                const xOffset = Math.sin(i * 0.7) * 100
                return `<path d="M0,${yOffset} Q100,${yOffset - 20} 200,${yOffset + 30} T400,${yOffset - 10} T600,${yOffset + 20} T800,${yOffset}" 
                  stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.4" transform="translate(${xOffset},0)"/>`
              }).join("")}
              
              <!-- Detailed terrain models -->
              ${Array.from({ length: 5 }, (_, i) => {
                const centerX = 200 + i * 100
                const centerY = 300 + Math.sin(i) * 100
                return Array.from({ length: 6 }, (_, j) => {
                  const radius = 20 + j * 15
                  return `<circle cx="${centerX}" cy="${centerY}" r="${radius}" stroke="${color}" fill="none" strokeOpacity="${opacity * 0.8}" strokeWidth="0.3"/>`
                }).join("")
              }).join("")}
            </svg>
          `)
        default: // medium
          return encodeSvg(`
            <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
              <!-- Medium density grid -->
              ${Array.from({ length: 20 }, (_, i) => {
                const y = 30 + i * 30
                return `<path d="M0,${y} L800,${y}" stroke="${color}" strokeOpacity="${opacity * 0.6}" strokeWidth="0.25"/>`
              }).join("")}
              
              ${Array.from({ length: 26 }, (_, i) => {
                const x = 30 + i * 30
                return `<path d="M${x},0 L${x},600" stroke="${color}" strokeOpacity="${opacity * 0.6}" strokeWidth="0.25"/>`
              }).join("")}
              
              <!-- Scattered elevation points with more organization -->
              ${Array.from({ length: 120 }, (_, i) => {
                // Create a more organized pattern for points
                const row = Math.floor(i / 12)
                const col = i % 12
                const x = col * 70 + Math.random() * 30
                const y = row * 70 + Math.random() * 30
                const r = Math.random() * 1.3 + 0.4
                return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" fillOpacity="${opacity * 1.2}"/>`
              }).join("")}
              
              <!-- Terrain features with data points -->
              <path d="M50,150 Q200,100 350,200 T650,150" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
              <path d="M50,300 Q200,350 350,250 T650,300" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
              <path d="M50,450 Q200,400 350,500 T650,450" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
              
              <!-- Elevation markers -->
              ${Array.from({ length: 6 }, (_, i) => {
                const x1 = 100 + i * 120
                const y1 = 100 + Math.sin(i) * 50
                return `
                  <circle cx="${x1}" cy="${y1}" r="3" stroke="${color}" fill="none" strokeOpacity="${opacity}" strokeWidth="0.5"/>
                  <text x="${x1 + 5}" y="${y1}" fontFamily="sans-serif" fontSize="8" fill="${color}" fillOpacity="${opacity}">E${Math.floor(Math.random() * 500 + 500)}</text>
                `
              }).join("")}
            </svg>
          `)
      }
    }
  }

  const backgroundStyle = {
    backgroundImage: getTopographicalSvg(),
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
  }

  return (
    <div className={`relative ${className}`} style={backgroundStyle}>
      {/* Overlay */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity / 100,
          }}
        ></div>
      )}

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}
