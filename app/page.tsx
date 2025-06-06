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
  { id: "1", title: "the night we met" },
  { id: "2", title: "our first few nights of fun 👠🎸💥" },
  { id: "3", title: "big bear! 🌲🐻🏔️" },
  { id: "4", title: "halloween! 🕸️💀🖤" },
  { id: "5", title: "baby groaf. 🐱🐀💨" },
  { id: "6", title: "sick new world! 🤘🎶🌎" },
  { id: "7", title: "summer in san francisco 🌉💖🏙️" },
  { id: "8", title: "baby moaf 🧡🖤🤍" },
  { id: "9", title: "no values 💀🔥🤡" },
]

const photoData: Record<string, Photo[]> = {
  "1": [
    {
      id: 1,
      image: "/photos/emmy_1.jpg",
      title: "Pacific Coast Highway",
      text: "The sun setting over the Pacific, painting the sky in hues of gold and purple. The road ahead curves along the coastline like a ribbon of possibilities.",
      date: "Summer 2023",
      orientation: 'portrait'
    },
  ],
  "2": [
    {
      id: 2,
      image: "/photos/fun_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 3,
      image: "/photos/fun2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 4,
      image: "/photos/fun3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 5,
      image: "/photos/fun4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 6,
      image: "/photos/fun5.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 7,
      image: "/photos/fun6.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023", 
      orientation: 'landscape'
    },
    {
      id: 8,
      image: "/photos/fun_end.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 9,
      image: "/photos/fun8.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 10,
      image: "/photos/fun7.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 11,
      image: "/photos/fun9.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "3": [
    {
      id: 12,
      image: "/photos/bear_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 13,
      image: "/photos/bear1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 14,
      image: "/photos/bear2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 15,
      image: "/photos/bear3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 16,
      image: "/photos/bear4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 17,
      image: "/photos/bear_end.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "4": [
    {
      id: 18,
      image: "/photos/halloween1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 19,
      image: "/photos/halloween_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 20,
      image: "/photos/halloween_end.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "5": [
    {
      id: 21,
      image: "/photos/groaf_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 22,
      image: "/photos/groaf1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 23,
      image: "/photos/groaf2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 24,
      image: "/photos/groaf3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 25,
      image: "/photos/groaf4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 26,
      image: "/photos/groaf5.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 27,
      image: "/photos/groaf6.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 28,
      image: "/photos/groaf7.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 29,
      image: "/photos/groaf8.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 30,
      image: "/photos/groaf9.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 31,
      image: "/photos/groaf10.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 32,
      image: "/photos/groaf11.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 33,
      image: "/photos/groaf12.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",  
      orientation: 'portrait'
    },
    {
      id: 34,
      image: "/photos/groaf13.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 35,
      image: "/photos/groaf14.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 36,
      image: "/photos/groaf15.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 37,
      image: "/photos/groaf16.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 38,
      image: "/photos/groaf17.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 39,
      image: "/photos/groaf18.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 40,
      image: "/photos/groaf19.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 41,
      image: "/photos/groaf20.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 42,
      image: "/photos/groaf21.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 43,
      image: "/photos/groaf22.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 44,
      image: "/photos/groaf23.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "6": [
    {
      id: 45,
      image: "/photos/snw_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 46,
      image: "/photos/snw1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 47,
      image: "/photos/snw2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 48,
      image: "/photos/snw3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 49,
      image: "/photos/snw4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 50,
      image: "/photos/snw5.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 51,
      image: "/photos/snw6.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 52,
      image: "/photos/snw7.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 53,
      image: "/photos/snw_end.png",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
  ],
  "7": [
    {
      id: 54,
      image: "/photos/sf_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 55,
      image: "/photos/sf1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 56,
      image: "/photos/sf2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 57,
      image: "/photos/sf3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 58,
      image: "/photos/sf4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 59,
      image: "/photos/sf5.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 60,
      image: "/photos/sf6.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 61,
      image: "/photos/sf7.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 62,
      image: "/photos/sf8.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 63,
      image: "/photos/sf9.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 64,
      image: "/photos/sf10.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 65,
      image: "/photos/sf11.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 66,
      image: "/photos/sf12.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 67,
      image: "/photos/sf13.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 68,
      image: "/photos/sf14.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 69,
      image: "/photos/sf15.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 70,
      image: "/photos/sf_end.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "8": [
    {
      id: 71,
      image: "/photos/moaf_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 72,
      image: "/photos/moaf1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 73,
      image: "/photos/moaf2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 74,
      image: "/photos/moaf3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 75,
      image: "/photos/moaf4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 76,
      image: "/photos/moaf5.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 77,
      image: "/photos/moaf6.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 78,
      image: "/photos/moaf7.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 79,
      image: "/photos/moaf8.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 80,
      image: "/photos/moaf9.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 81,
      image: "/photos/moaf10.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 82,
      image: "/photos/moaf11.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 83,
      image: "/photos/moaf12.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 84,
      image: "/photos/moaf_end.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "9": [
    {
      id: 85,
      image: "/photos/nv_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 86,
      image: "/photos/nv1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 87,
      image: "/photos/nv2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 88,
      image: "/photos/nv3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 89,
      image: "/photos/nv4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 90,
      image: "/photos/nv_end.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
  ]
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
                  <h2 className="text-4xl md:text-6xl font-bold text-[#8b4513] font-serif">
                    {section.title}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photoData[section.id]?.map((photo, photoIndex, array) => (
                  <div 
                    key={photo.id} 
                    className={`animate-fade-in-up ${array.length === 1 ? 'md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3' : ''}`} 
                    style={{ animationDelay: `${photoIndex * 0.1}s` }}
                  >
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
