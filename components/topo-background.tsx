import type React from "react"

interface TopoBackgroundProps {
  children: React.ReactNode
  className?: string
  tintColor: string
  tintOpacity?: number
  id?: string
  lineColor?: string
  lineOpacity?: number
}

export default function TopoBackground({
  children,
  className = "",
  tintColor,
  tintOpacity = 0.7,
  id,
  lineColor = "#14b8a6", // Default to a teal color
  lineOpacity = 0.3, // Higher opacity for better visibility
}: TopoBackgroundProps) {
  return (
    <div id={id} className={`relative ${className}`}>
      {/* SVG Background Pattern */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id={`topo-${id}`}
              patternUnits="userSpaceOnUse"
              width="700"
              height="700"
              patternTransform="scale(1) rotate(0)"
            >
              {/* Contour lines */}
              <path
                d="M0,300 Q100,290 200,310 T400,290 T600,310 T700,290"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,250 Q120,270 240,250 T480,270 T700,250"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,350 Q150,330 250,350 T500,330 T700,350"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,200 Q100,220 200,180 T400,220 T600,180 T700,220"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,400 Q120,380 240,420 T480,380 T700,420"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,150 Q150,170 250,130 T500,170 T700,130"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,450 Q100,430 200,470 T400,430 T600,470 T700,430"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,100 Q120,120 240,80 T480,120 T700,80"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,500 Q150,480 250,520 T500,480 T700,520"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,50 Q100,70 200,30 T400,70 T600,30 T700,70"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,550 Q120,530 240,570 T480,530 T700,570"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,600 Q150,620 250,580 T500,620 T700,580"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,650 Q100,630 200,670 T400,630 T600,670 T700,630"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
              <path
                d="M0,700 Q120,680 240,720 T480,680 T700,720"
                stroke={lineColor}
                fill="none"
                strokeOpacity={lineOpacity}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#topo-${id})`} />
        </svg>
      </div>

      {/* Color tint overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: tintColor,
          opacity: tintOpacity,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}
