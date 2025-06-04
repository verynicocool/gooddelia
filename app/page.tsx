"use client"
import { Heart, Camera } from "lucide-react"
import PhotoCard from "@/components/photo-card"
import Navigation from "@/components/navigation"

const sections = [
  { id: "roaf", title: "roaf", emoji: "💕" },
  { id: "moaf", title: "moaf", emoji: "🌸" },
  { id: "groaf", title: "groaf", emoji: "✨" },
  { id: "groaf-and-moaf", title: "groaf and moaf", emoji: "💖" },
  { id: "emmoaf", title: "emmoaf", emoji: "🦋" },
  { id: "roaf-and-emmoaf", title: "roaf and emmoaf", emoji: "🌹" },
]

const photoData = {
  roaf: [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=300",
      title: "Sweet Moments",
      text: "Every moment with you feels like a dream come true. Your smile lights up my entire world.",
      date: "Feb 14, 2024",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=300",
      title: "Beautiful You",
      text: "In this moment, I realized how lucky I am to have you in my life. You are absolutely radiant.",
      date: "Jan 20, 2024",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=300",
      title: "Pure Joy",
      text: "Your laughter is my favorite sound in the world. This picture captures your beautiful spirit perfectly.",
      date: "Dec 25, 2023",
    },
  ],
  moaf: [
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=300",
      title: "Adventure Together",
      text: "Every adventure is better with you by my side. We make the perfect team in everything we do.",
      date: "Feb 10, 2024",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=300",
      title: "Cozy Moments",
      text: "These quiet moments together are what I treasure most. Just you and me against the world.",
      date: "Jan 15, 2024",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=300",
      title: "Sunset Dreams",
      text: "Watching the sunset with you reminds me that every ending can be beautiful when shared with love.",
      date: "Nov 30, 2023",
    },
  ],
  groaf: [
    {
      id: 7,
      image: "/placeholder.svg?height=400&width=300",
      title: "Silly Us",
      text: "I love how we can be completely ourselves together. Your silly side makes me fall for you even more.",
      date: "Feb 5, 2024",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=400&width=300",
      title: "Dancing Hearts",
      text: "Dancing with you feels like floating on clouds. Every step we take together is magical.",
      date: "Jan 1, 2024",
    },
    {
      id: 9,
      image: "/placeholder.svg?height=400&width=300",
      title: "Morning Coffee",
      text: "Starting my day with you makes everything better. Even coffee tastes sweeter when we share it.",
      date: "Dec 15, 2023",
    },
  ],
  "groaf-and-moaf": [
    {
      id: 10,
      image: "/placeholder.svg?height=400&width=300",
      title: "Perfect Pair",
      text: "We complement each other in the most beautiful way. Together, we create something magical.",
      date: "Feb 12, 2024",
    },
    {
      id: 11,
      image: "/placeholder.svg?height=400&width=300",
      title: "Love Story",
      text: "This is us writing our love story, one beautiful moment at a time. I can't wait for all our chapters ahead.",
      date: "Jan 25, 2024",
    },
    {
      id: 12,
      image: "/placeholder.svg?height=400&width=300",
      title: "Forever Yours",
      text: "In your eyes, I see my future. In your smile, I find my home. You are my always and forever.",
      date: "Dec 31, 2023",
    },
  ],
  emmoaf: [
    {
      id: 13,
      image: "/placeholder.svg?height=400&width=300",
      title: "Gentle Soul",
      text: "Your kindness and gentle nature inspire me every day. You make the world a more beautiful place.",
      date: "Feb 8, 2024",
    },
    {
      id: 14,
      image: "/placeholder.svg?height=400&width=300",
      title: "Dreamy Eyes",
      text: "I could get lost in your eyes for hours. They tell the most beautiful stories without saying a word.",
      date: "Jan 18, 2024",
    },
    {
      id: 15,
      image: "/placeholder.svg?height=400&width=300",
      title: "Peaceful Moments",
      text: "With you, I've found my peace. These quiet moments together are my sanctuary.",
      date: "Dec 20, 2023",
    },
  ],
  "roaf-and-emmoaf": [
    {
      id: 16,
      image: "/placeholder.svg?height=400&width=300",
      title: "Complete",
      text: "You complete me in ways I never knew I needed. Together, we are whole, we are home, we are love.",
      date: "Feb 14, 2024",
    },
    {
      id: 17,
      image: "/placeholder.svg?height=400&width=300",
      title: "Infinite Love",
      text: "My love for you grows stronger with each passing day. You are my infinity, my always, my everything.",
      date: "Feb 1, 2024",
    },
    {
      id: 18,
      image: "/placeholder.svg?height=400&width=300",
      title: "Our Future",
      text: "Looking at this picture, I see our beautiful future together. Every dream I have includes you.",
      date: "Jan 10, 2024",
    },
  ],
}

export default function ValentinesPhotoAlbum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Floating Hearts Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-200 animate-float opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${1 + Math.random()}rem`,
            }}
          />
        ))}
      </div>

      <Navigation sections={sections} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-red-400/20 animate-gradient-shift"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-bounce-slow">
            <Camera className="w-16 h-16 mx-auto text-rose-500 mb-4" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            Our Love Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up animation-delay-300">
            A collection of our most precious moments together
          </p>
          <div className="flex items-center justify-center gap-2 text-rose-500 animate-fade-in-up animation-delay-600">
            <Heart className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-medium">Made with love for you</span>
            <Heart className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Photo Sections */}
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-4xl animate-bounce-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                  {section.emoji}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <span className="text-4xl animate-bounce-slow" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                  {section.emoji}
                </span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoData[section.id as keyof typeof photoData]?.map((photo, photoIndex) => (
                <div key={photo.id} className="animate-fade-in-up" style={{ animationDelay: `${photoIndex * 0.1}s` }}>
                  <PhotoCard {...photo} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-12 text-center bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="flex items-center justify-center gap-2 text-rose-600 mb-4">
          <Heart className="w-5 h-5 animate-pulse" />
          <span className="font-medium">Forever and Always</span>
          <Heart className="w-5 h-5 animate-pulse" />
        </div>
        <p className="text-gray-600">Happy Valentine's Day, my love! 💕</p>
      </footer>
    </div>
  )
}
