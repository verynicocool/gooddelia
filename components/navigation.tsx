"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface Section {
  id: string
  title: string
  emoji: string
}

interface NavigationProps {
  sections: Section[]
}

export default function Navigation({ sections }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Find active section
      const sectionElements = sections.map((section) => document.getElementById(section.id)).filter(Boolean)

      const currentSection = sectionElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-pink-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 animate-pulse" />
            <span className="font-bold text-xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Our Album
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg border border-pink-100">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md"
                    : "text-gray-600 hover:text-rose-500 hover:bg-pink-50"
                }`}
              >
                <span className="mr-1">{section.emoji}</span>
                {section.title}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <select
              onChange={(e) => scrollToSection(e.target.value)}
              className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="">Navigate to...</option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.emoji} {section.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}
