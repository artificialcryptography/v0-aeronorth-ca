"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasAttemptedLoad = useRef(false);

  // Setup smooth looping for the video
  const setupSmoothLooping = (video: HTMLVideoElement) => {
    const handleTimeUpdate = () => {
      // If we're near the end of the video (within 0.2 seconds)
      if (video.duration > 0 && video.currentTime > video.duration - 0.2) {
        // Reset to beginning with a small offset to prevent visible jump
        video.currentTime = 0.01;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  };

  // Initialize video once on component mount
  useEffect(() => {
    if (hasAttemptedLoad.current || !videoRef.current) return;
    hasAttemptedLoad.current = true;

    const video = videoRef.current;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = "auto";

    const cleanup = setupSmoothLooping(video);
    video.play().catch(() => {
      // Silently handle errors - the background image will show
    });

    return cleanup;
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image (fallback) */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroSection1.png"
          alt="Aerial view of mountains"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Video Element */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          poster="/images/heroSection1.png"
          crossOrigin="anonymous"
        >
          {/* Using direct Vercel Blob URL instead of relative path */}
          <source src="/public/droneMountain.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Aerial Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
            Precision drone surveys for construction and resource management
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#services">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 w-full sm:w-auto px-8 py-6 text-lg"
              >
                Our Services
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 w-full sm:w-auto px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
