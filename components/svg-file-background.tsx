import type React from "react"

interface SvgFileBackgroundProps {
  children: React.ReactNode
  className?: string
  tintColor: string
  tintOpacity?: number
  id?: string
}

export default function SvgFileBackground({
  children,
  className = "",
  tintColor,
  tintOpacity = 0.7,
  id,
}: SvgFileBackgroundProps) {
  return (
    <div id={id} className={`relative ${className}`}>
      {/* SVG Background */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url("/images/topo-pattern.svg")`,
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
