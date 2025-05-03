import type React from "react"
import Image from "next/image"

interface TopoImageBackgroundProps {
  children: React.ReactNode
  className?: string
  imageType: "contour" | "lidar"
  overlay?: boolean
  overlayOpacity?: number
  overlayColor?: string
  scale?: number
  position?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export default function TopoImageBackground({
  children,
  className = "",
  imageType = "contour",
  overlay = true,
  overlayOpacity = 50,
  overlayColor = "black",
  scale = 125,
  position = "center",
  objectFit = "cover",
}: TopoImageBackgroundProps) {
  const imageSrc = imageType === "contour" ? "/images/topo-contour.jpg" : "/images/lidar-terrain.jpg"

  return (
    <div className={`relative ${className}`}>
      {/* Background Image Container with Overflow Hidden and Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full relative"
          style={{
            transform: `scale(${scale / 100})`,
            transformOrigin: position,
          }}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`Topographical ${imageType} background`}
            fill
            className="object-cover"
            style={{ objectPosition: position }}
            sizes="100vw"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Overlay */}
      {overlay && (
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
