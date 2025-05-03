import type React from "react"

interface SvgBackgroundProps {
  children: React.ReactNode
  className?: string
  tintColor: string
  tintOpacity?: number
  id?: string
}

export default function SvgBackground({
  children,
  className = "",
  tintColor,
  tintOpacity = 0.7,
  id,
}: SvgBackgroundProps) {
  return (
    <div id={id} className={`relative ${className}`}>
      {/* SVG Background */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cpath d='M0,300 Q100,290 200,310 T400,290 T600,310 T800,290' stroke='%2314b8a6' fill='none' strokeOpacity='0.3' strokeWidth='1'/%3E%3Cpath d='M0,250 Q120,270 240,250 T480,270 T720,250 T800,260' stroke='%2314b8a6' fill='none' strokeOpacity='0.3' strokeWidth='1'/%3E%3Cpath d='M0,350 Q150,330 250,350 T500,330 T750,350 T800,340' stroke='%2314b8a6' fill='none' strokeOpacity='0.3' strokeWidth='1'/%3E%3Cpath d='M0,200 Q100,220 200,180 T400,220 T600,180 T800,220' stroke='%2314b8a6' fill='none' strokeOpacity='0.3' strokeWidth='1'/%3E%3Cpath d='M0,400 Q120,380 240,420 T480,380 T720,420 T800,380' stroke='%2314b8a6' fill='none' strokeOpacity='0.3' strokeWidth='1'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      ></div>

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
