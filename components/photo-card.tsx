"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

interface PhotoCardProps {
  id: number
  image: string
  title: string
  text: string
  date: string
  orientation?: 'portrait' | 'landscape'
}

export default function PhotoCard({ image, title, text, date, orientation = 'portrait' }: PhotoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const maskStyles = {
    maskImage: 'url(/photos/photo_card.png)',
    WebkitMaskImage: 'url(/photos/photo_card.png)',
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskPosition: 'center',
  }

  const containerStyles = {
    portrait: "h-[28rem] w-full",
    landscape: "h-[28rem] w-full flex items-center"
  }

  return (
    <div className={`group perspective-1000 ${containerStyles[orientation]}`}>
      <div
        className={`relative ${orientation === 'landscape' ? 'h-[20rem]' : 'h-full'} w-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden transition-all duration-300 group-hover:scale-105">
          <div className="relative w-full h-full" style={maskStyles}>
            <Image 
              src={image || "/placeholder.svg"} 
              alt={title} 
              fill 
              className={`object-cover ${orientation === 'landscape' ? 'object-center' : 'object-center'}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center justify-between text-white">
                {date != "groaf" ? (
                  <h3 className="font-semibold text-lg">{title}</h3>
                ) : (
                  <h3></h3>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-[#e4d5b7] p-6 flex flex-col justify-between" style={maskStyles}>
            <div className="relative z-10">
              {date != "groaf" ? (
                <div className="flex items-center gap-2 mb-4 border-b border-[#8b4513]/20 pb-3 pl-6">
                  <h3 className="text-xl font-bold text-[#8b4513] font-serif">{title}</h3>
                </div>
              ) : (
                <div></div>
              )}
              <div className="flex-1 mb-6 pl-6">
                <p className="text-[#5c2e0e] leading-relaxed text-sm font-mono italic">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
