import type React from "react"
import Image from "next/image"

interface ContinuousBackgroundProps {
  children: React.ReactNode
}

export default function ContinuousBackground({ children }: ContinuousBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed position background that spans the entire page */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/aeronorthsitebg.png"
          alt="Topographical background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Semi-transparent overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 bg-black/30"></div>

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
