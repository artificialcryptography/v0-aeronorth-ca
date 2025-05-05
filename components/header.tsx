"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform -translate-y-4vh ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      {/* Background that fades in when scrolled */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Add extra padding at the top to accommodate the lower logo */}
      <div className="pt-10 relative z-10">
        <div className="container mx-auto flex items-center justify-between relative">
          {/* Logo positioned absolutely and moved down more */}
          <div className="absolute left-0 top-[100%] transform -translate-y-1/2">
            <Link href="/" className="flex items-center">
              <div className="relative h-48 w-[30rem]">
                <Image
                  src="/images/aeronorth-logo.svg"
                  alt="Aeronorth Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation - moved to the left */}
          <div className="hidden md:flex justify-center w-full">
            <nav className="flex space-x-8 ml-[15%]">
              <Link href="#about" className="text-white hover:text-white/80 font-medium text-shadow">
                About
              </Link>
              <Link href="#services" className="text-white hover:text-white/80 font-medium text-shadow">
                Services
              </Link>
              <Link href="#projects" className="text-white hover:text-white/80 font-medium text-shadow">
                Projects
              </Link>
              <Link href="#regulations" className="text-white hover:text-white/80 font-medium text-shadow">
                Regulations
              </Link>
              <Link href="#contact" className="text-white hover:text-white/80 font-medium text-shadow">
                Contact
              </Link>
            </nav>
          </div>

          {/* Get a Quote Button with updated border */}
          <div className="z-10 mr-[5%]">
            <Button
              variant="outline"
              className="hidden md:block bg-white/10 hover:bg-white/20 text-white border-2 border-white"
            >
              Get a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (unchanged) */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md relative z-20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-white hover:text-white/80 font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-white/80 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-white hover:text-white/80 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#regulations"
              className="text-white hover:text-white/80 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Regulations
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-white/80 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
