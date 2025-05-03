import type React from "react"
import Image from "next/image"

interface ImageBackgroundProps {
  src: string
  alt: string
  overlay?: boolean
  overlayOpacity?: number
  children: React.ReactNode
  className?: string
}

export default function ImageBackground({
  src,
  alt,
  overlay = true,
  overlayOpacity = 50,
  children,
  className = "",
}: ImageBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 z-0">
        <Image src={src || "/placeholder.svg"} alt={alt} fill priority className="object-cover" />
      </div>

      {overlay && <div className={`absolute inset-0 bg-black z-10`} style={{ opacity: overlayOpacity / 100 }}></div>}

      <div className="relative z-20">{children}</div>
    </div>
  )
}
