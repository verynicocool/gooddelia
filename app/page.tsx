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
  { id: "10", title: "final semesters of fun 🎓🏞️🎢"},
  { id: "11", title: "puerto rico! 🏝️🌊🍹"},
  { id: "12", title: "the saddest day of my life" },
  { id: "13", title: "much love. many pics. break time! 👾 " },
  { id: "14", title: "the art you've made me 🎨💖🖼️" },
  { id: "15", title: "beautiful loafs 🐱🐀🍞" },
  { id: "16", title: "the love of my life." },
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
      id: 191,
      image: "/photos/sf17.jpg",
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
      orientation: 'portrait'
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
      orientation: 'portrait'
    },
    {
      id: 88,
      image: "/photos/nv3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 89,
      image: "/photos/nv4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 90,
      image: "/photos/nv_end.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "10": [
    {
      id: 91,
      image: "/photos/final_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 92,
      image: "/photos/final1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 93,
      image: "/photos/final2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 94,
      image: "/photos/final3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 95,
      image: "/photos/final4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 96,
      image: "/photos/final5.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 97,
      image: "/photos/final6.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 98,
      image: "/photos/final7.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 99,
      image: "/photos/final8.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 100,
      image: "/photos/final9.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 101,
      image: "/photos/final10.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 102,
      image: "/photos/final11.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 103,
      image: "/photos/final12.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 104,
      image: "/photos/final13.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 105,
      image: "/photos/final14.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 106,
      image: "/photos/final15.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 107,
      image: "/photos/final16.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 108,
      image: "/photos/final17.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 109,
      image: "/photos/final18.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 110,
      image: "/photos/final19.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 111,
      image: "/photos/final20.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 112,
      image: "/photos/final21.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 113,
      image: "/photos/final22.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 114,
      image: "/photos/final23.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 116,
      image: "/photos/final25.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 117,
      image: "/photos/final26.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 118,
      image: "/photos/final27.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 119,
      image: "/photos/final28.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 120,
      image: "/photos/final29.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 121,
      image: "/photos/final30.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 122,
      image: "/photos/final31.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 123,
      image: "/photos/final32.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 124,
      image: "/photos/final33.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "11": [
    {
      id: 125,
      image: "/photos/pr_start.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 126,
      image: "/photos/pr1.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 127,
      image: "/photos/pr2.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 128,
      image: "/photos/pr3.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 129,
      image: "/photos/pr4.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 130,
      image: "/photos/pr5.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 131,
      image: "/photos/pr6.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 132,
      image: "/photos/pr7.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 133,
      image: "/photos/pr8.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 134,
      image: "/photos/pr9.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 135,
      image: "/photos/pr10.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 136,
      image: "/photos/pr11.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 137,
      image: "/photos/pr12.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 138,
      image: "/photos/pr13.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 139,
      image: "/photos/pr14.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 140,
      image: "/photos/pr15.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 141,
      image: "/photos/pr16.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 142,
      image: "/photos/pr17.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 143,
      image: "/photos/pr18.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 144,
      image: "/photos/pr19.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 145,
      image: "/photos/pr20.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 146,
      image: "/photos/pr21.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 147,
      image: "/photos/pr22.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 148,
      image: "/photos/pr23.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 149,
      image: "/photos/pr24.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 150,
      image: "/photos/pr25.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 151,
      image: "/photos/pr26.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },  
    {
      id: 152,
      image: "/photos/pr27.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 153,
      image: "/photos/pr28.jpg",
      title: "Monument Valley",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'landscape'
    },
  ],
  "12": [
    {
      id: 154,
      image: "/photos/end.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'landscape'
    },
  ],
  "14": [
    {
      id: 155,
      image: "/photos/art_start.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 156,
      image: "/photos/art1.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 157,
      image: "/photos/art2.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 158,
      image: "/photos/art3.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 159,
      image: "/photos/art4.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 160,
      image: "/photos/art5.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "15": [
    {
      id: 161,
      image: "/photos/bc_start.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 162,
      image: "/photos/bc1.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 163,
      image: "/photos/bc2.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 164,
      image: "/photos/bc3.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 165,
      image: "/photos/bc4.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 166,
      image: "/photos/bc5.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 167,
      image: "/photos/bc6.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 168,
      image: "/photos/bc7.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 169,
      image: "/photos/bc8.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 170,
      image: "/photos/bc9.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 171,
      image: "/photos/bc10.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 172,
      image: "/photos/bc11.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 173,
      image: "/photos/bc12.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 174,
      image: "/photos/bc13.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 175,
      image: "/photos/bc14.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 176,
      image: "/photos/bc15.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 177,
      image: "/photos/bc16.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 178,
      image: "/photos/bc17.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 179,
      image: "/photos/bc18.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 180,
      image: "/photos/bc19.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 181,
      image: "/photos/bc20.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 182,
      image: "/photos/bc21.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 183,
      image: "/photos/bc22.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 184,
      image: "/photos/bc23.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 185,
      image: "/photos/bc24.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 186,
      image: "/photos/bc25.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 187,
      image: "/photos/bc26.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 188,
      image: "/photos/bc27.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 189,
      image: "/photos/bc28.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 190,
      image: "/photos/bc29.jpg",
      title: "Beautiful Loafs",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "16": [
    {
      id: 192,
      image: "/photos/e1.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 193,
      image: "/photos/e2.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.", 
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 194,
      image: "/photos/e3.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 195,
      image: "/photos/e4.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 196,
      image: "/photos/e5.jpg",
      title: "The Saddest Day of My Life",    
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 197,                
      image: "/photos/e6.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 198,
      image: "/photos/e7.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 199,
      image: "/photos/e8.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 200,
      image: "/photos/e9.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },  
    {
      id: 201,
      image: "/photos/e10.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 202,
      image: "/photos/e11.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 203,
      image: "/photos/e12.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 204,
      image: "/photos/e13.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 205,
      image: "/photos/e14.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 206,
      image: "/photos/e15.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 207,
      image: "/photos/e16.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 208,
      image: "/photos/e17.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 209,
      image: "/photos/e18.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 210,
      image: "/photos/e19.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 211,
      image: "/photos/e20.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 212,
      image: "/photos/e21.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 213,
      image: "/photos/e22.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 214,
      image: "/photos/e23.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 215,
      image: "/photos/e24.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 216,
      image: "/photos/e25.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 217,
      image: "/photos/e26.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 218,
      image: "/photos/e27.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 219,
      image: "/photos/e28.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 220,
      image: "/photos/e29.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 221,
      image: "/photos/e30.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 222,
      image: "/photos/e31.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 223,
      image: "/photos/e32.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 224,
      image: "/photos/e33.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 225,
      image: "/photos/e34.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 226,
      image: "/photos/e35.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 227,
      image: "/photos/e36.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 228,
      image: "/photos/e37.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 229,
      image: "/photos/e38.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 230,
      image: "/photos/e39.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 231,
      image: "/photos/e40.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 232,
      image: "/photos/e41.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 233,
      image: "/photos/e42.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 234,
      image: "/photos/e43.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 235,
      image: "/photos/e44.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 236,
      image: "/photos/e45.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 237,
      image: "/photos/e46.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 238,
      image: "/photos/e47.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 239,
      image: "/photos/e48.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 240,
      image: "/photos/e49.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 241,
      image: "/photos/e50.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 242,
      image: "/photos/e51.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 243,
      image: "/photos/e52.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 244,
      image: "/photos/e53.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 245,
      image: "/photos/e54.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 246,
      image: "/photos/e55.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 247,
      image: "/photos/e56.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 248,
      image: "/photos/e57.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 249,
      image: "/photos/e58.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 250,
      image: "/photos/e59.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 251,
      image: "/photos/e60.jpg",
      title: "The Saddest Day of My Life",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    }
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
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-6xl font-bold text-[#8b4513] font-serif">
                    {section.title}
                  </h2>
                </div>
              </div>

              {}
              {section.id === "13" ? (
                <div className="flex justify-center items-center">
                  <iframe 
                    src="/trex-game.html" 
                    className="w-[600px] h-[225px] border-4 border-[#8b4513] rounded-lg bg-white"
                    title="T-Rex Game"
                  />
                </div>
              ) : (
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
            )}
            </div>
          </div>
        </section>
      ))}
      
    </div>
  )
}
