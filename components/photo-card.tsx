"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Heart } from "lucide-react"

interface PhotoCardProps {
  id: number
  image: string
  title: string
  text: string
  date: string
}

export default function PhotoCard({ image, title, text, date }: PhotoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="group perspective-1000 h-96">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
          <div className="relative w-full h-full">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between text-white">
                <h3 className="font-semibold text-lg">{title}</h3>
                <Heart className="w-5 h-5 text-pink-300 animate-pulse" />
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
              <span className="text-white text-xs font-medium">Click to flip</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full h-full bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 p-6 flex flex-col justify-between relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 right-4 w-8 h-8 bg-pink-300 rounded-full animate-pulse" />
              <div className="absolute bottom-8 left-6 w-6 h-6 bg-rose-300 rounded-full animate-pulse animation-delay-300" />
              <div className="absolute top-1/2 left-4 w-4 h-4 bg-red-300 rounded-full animate-pulse animation-delay-600" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-rose-500" />
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              </div>

              <div className="flex-1 mb-6">
                <p className="text-gray-700 leading-relaxed text-sm">{text}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 text-sm text-gray-600 relative z-10">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
