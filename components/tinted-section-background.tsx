import type React from "react"

interface TintedSectionBackgroundProps {
  children: React.ReactNode
  className?: string
  tintColor: string
  tintOpacity?: number
  id?: string
}

export default function TintedSectionBackground({
  children,
  className = "",
  tintColor,
  tintOpacity = 0.7, // Reduced opacity to make background more visible
  id,
}: TintedSectionBackgroundProps) {
  return (
    <div id={id} className={`relative ${className}`}>
      {/* Topographical background image - with explicit dimensions and styling */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url("/images/topo-background.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
          opacity: 1, // Ensure full opacity for the background image
        }}
      ></div>

      {/* Color tint overlay with reduced opacity */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: tintColor,
          opacity: tintOpacity,
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}
