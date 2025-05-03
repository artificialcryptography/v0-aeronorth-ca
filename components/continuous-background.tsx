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
          src="/images/topo-dark-purple.jpeg"
          alt="Topographical background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
