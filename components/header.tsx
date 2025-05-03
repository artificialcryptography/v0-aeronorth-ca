"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">Aeronorth</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-white hover:text-white/80 font-medium">
            About
          </Link>
          <Link href="#services" className="text-white hover:text-white/80 font-medium">
            Services
          </Link>
          <Link href="#projects" className="text-white hover:text-white/80 font-medium">
            Projects
          </Link>
          <Link href="#regulations" className="text-white hover:text-white/80 font-medium">
            Regulations
          </Link>
          <Link href="#contact" className="text-white hover:text-white/80 font-medium">
            Contact
          </Link>
        </nav>

        <Button className="hidden md:block bg-white/10 hover:bg-white/20 text-white border border-white/20">
          Get a Quote
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
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
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
