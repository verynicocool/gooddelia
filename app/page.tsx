"use client"
import { Heart, Camera } from "lucide-react"
import PhotoCard from "@/components/photo-card"
import { TypeAnimation } from "react-type-animation"

interface Photo {
  id: number
  image: string
  title: string
  text: string
  date: string
  orientation: 'portrait' | 'landscape'
}

const sections = [
  { id: "west-coast", title: "West Coast", emoji: "🌊" },
  { id: "desert-trails", title: "Desert Trails", emoji: "🌵" },
  { id: "mountain-peaks", title: "Mountain Peaks", emoji: "⛰️" },
  { id: "forest-paths", title: "Forest Paths", emoji: "🌲" },
  { id: "city-lights", title: "City Lights", emoji: "🌆" },
  { id: "hidden-gems", title: "Hidden Gems", emoji: "💎" },
]

const photoData: Record<string, Photo[]> = {
  "west-coast": [
    {
      id: 1,
      image: "/photos/Nico_Photo.jpg",
      title: "Pacific Coast Highway",
      text: "The sun setting over the Pacific, painting the sky in hues of gold and purple. The road ahead curves along the coastline like a ribbon of possibilities.",
      date: "Summer 2023",
      orientation: 'landscape'
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=300",
      title: "Big Sur Dreams",
      text: "Misty cliffs and crashing waves create nature's symphony. Every turn reveals another breathtaking vista.",
      date: "June 2023",
      orientation: 'portrait'
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=300",
      title: "Coastal Towns",
      text: "Quaint seaside villages where time seems to slow down. The smell of salt air and sound of seagulls create the perfect backdrop.",
      date: "July 2023",
      orientation: 'landscape'
    },
  ],
  "desert-trails": [
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=300",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=300",
      title: "Desert Night Sky",
      text: "Under a blanket of stars, the desert comes alive. The Milky Way stretches across the sky like a river of light.",
      date: "September 2023",
      orientation: 'portrait'
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=300",
      title: "Canyon Dreams",
      text: "Layer upon layer of colored rock tell stories of ancient times. The silence here speaks volumes.",
      date: "October 2023",
      orientation: 'landscape'
    },
  ],
  "mountain-peaks": [
    {
      id: 7,
      image: "/placeholder.svg?height=400&width=300",
      title: "Rocky Mountain High",
      text: "Snow-capped peaks touch the clouds while mountain goats watch from their lofty perches. The air is thin but the views are worth it.",
      date: "November 2023",
      orientation: 'portrait'
    },
    {
      id: 8,
      image: "/placeholder.svg?height=400&width=300",
      title: "Alpine Lakes",
      text: "Crystal clear waters mirror the surrounding peaks. The stillness here is profound and peaceful.",
      date: "December 2023",
      orientation: 'landscape'
    },
    {
      id: 9,
      image: "/placeholder.svg?height=400&width=300",
      title: "Mountain Sunrise",
      text: "First light paints the peaks in alpenglow. These moments make every early morning worth it.",
      date: "January 2024",
      orientation: 'portrait'
    },
  ],
  "forest-paths": [
    {
      id: 10,
      image: "/placeholder.svg?height=400&width=300",
      title: "Redwood Giants",
      text: "Walking among ancient giants, feeling small yet connected to something greater. The forest holds wisdom in its silence.",
      date: "February 2024",
      orientation: 'portrait'
    },
    {
      id: 11,
      image: "/placeholder.svg?height=400&width=300",
      title: "Mossy Trails",
      text: "Every step cushioned by centuries of forest floor. The air is thick with the scent of earth and growth.",
      date: "March 2024",
      orientation: 'landscape'
    },
    {
      id: 12,
      image: "/placeholder.svg?height=400&width=300",
      title: "Forest Light",
      text: "Sunbeams pierce through the canopy creating natural spotlights on the forest floor. Magic exists in these moments.",
      date: "April 2024",
      orientation: 'portrait'
    },
  ],
  "city-lights": [
    {
      id: 13,
      image: "/placeholder.svg?height=400&width=300",
      title: "Urban Canyons",
      text: "Skyscrapers create valleys of steel and glass. The city pulses with its own unique rhythm.",
      date: "May 2024",
      orientation: 'portrait'
    },
    {
      id: 14,
      image: "/placeholder.svg?height=400&width=300",
      title: "Night Markets",
      text: "The streets come alive at night with the smell of street food and the buzz of conversation.",
      date: "June 2024",
      orientation: 'landscape'
    },
    {
      id: 15,
      image: "/placeholder.svg?height=400&width=300",
      title: "City Sunsets",
      text: "The sun sets behind the skyline, turning buildings into silhouettes against a painted sky.",
      date: "July 2024",
      orientation: 'portrait'
    },
  ],
  "hidden-gems": [
    {
      id: 16,
      image: "/placeholder.svg?height=400&width=300",
      title: "Secret Waterfalls",
      text: "Off the beaten path, nature's hidden treasures await those willing to explore.",
      date: "August 2024",
      orientation: 'landscape'
    },
    {
      id: 17,
      image: "/placeholder.svg?height=400&width=300",
      title: "Ghost Towns",
      text: "Abandoned places tell stories of times gone by. Every creaking floorboard has a tale to tell.",
      date: "September 2024",
      orientation: 'portrait'
    },
    {
      id: 18,
      image: "/placeholder.svg?height=400&width=300",
      title: "Local Secrets",
      text: "The best stories come from the places not found in guidebooks.",
      date: "October 2024",
      orientation: 'landscape'
    },
  ],
}

export default function RoadTripJournal() {
  return (
    <div className="min-h-screen paper-texture">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#8b4513]/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <TypeAnimation
              sequence={[
                'hi emmy.\n',
                1000,
                'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n',
                1000,
                'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n',
                1000,
                'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n',
                1000,
                'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n happy birthday!\n',
                1000,
                'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n happy birthday!\n we hope you like this <3',
                1000,
                'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n happy birthday!\n we hope you like this <3 \n - roaf. groaf. moaf.',

              ]}
              wrapper="div"
              speed={70}
              className="text-2xl md:text-4xl font-bold text-[#8b4513] font-serif whitespace-pre-line text-left inline-block"
            />
          </div>
        </div>
      </section>

      {/* Photo Sections */}
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="relative">
          <div className="absolute inset-0 bg-[#8b4513]/10"></div>
          <div className="relative z-10 py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-4xl">
                    {section.emoji}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold text-[#8b4513] font-serif">
                    {section.title}
                  </h2>
                  <span className="text-4xl">
                    {section.emoji}
                  </span>
                </div>
                <div className="w-24 h-1 bg-[#8b4513] mx-auto rounded-full opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photoData[section.id]?.map((photo, photoIndex) => (
                  <div key={photo.id} className="animate-fade-in-up" style={{ animationDelay: `${photoIndex * 0.1}s` }}>
                    <PhotoCard {...photo} orientation={photo.orientation as 'portrait' | 'landscape'} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-12 text-center vintage-border mt-8 relative">
        <div className="absolute inset-0 bg-[#8b4513]/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 text-[#8b4513] mb-4">
            <span className="font-medium font-mono">The Journey Continues...</span>
          </div>
          <p className="text-[#5c2e0e] font-mono">Adventure awaits around every corner 🗺️</p>
        </div>
      </footer>
    </div>
  )
}
