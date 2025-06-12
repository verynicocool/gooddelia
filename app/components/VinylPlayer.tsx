'use client'

import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

interface Song {
  title: string
  artist: string
  file: string
  cover: string
}

const SONGS: Song[] = [
  {
    title: "Sober",
    artist: "Fidlar",
    file: "/songs/Sober - Fidlar.mp3",
    cover: "/covers/Sober - Fidlar.jpg"
  },
  {
    title: "Me Gustas Tu",
    artist: "Manu Chao",
    file: "/songs/Me Gustas Tu - Manu Chao.mp3",
    cover: "/covers/Me Gustas Tu - Manu Chao.jpg"
  },
  {
    title: "I Wanna Be Sedated",
    artist: "Ramones",
    file: "/songs/I Wanna Be Sedated - Ramones.mp3",
    cover: "/covers/I Wanna Be Sedated - Ramones.jpg"
  },
  {
    title: "Hybrid Moments",
    artist: "Misfits",
    file: "/songs/Hybrid Moments - Misfits.mp3",
    cover: "/covers/Hybrid Moments - Misfits.jpg"
  },
  {
    title: "Gigantor",
    artist: "The Dickies",
    file: "/songs/Gigantor - The Dickies.mp3",
    cover: "/covers/Gigantor - The Dickies.jpg"
  },
  {
    title: "Easy Easy",
    artist: "King Krule",
    file: "/songs/Easy Easy - King Krule.mp3",
    cover: "/covers/Easy Easy - King Krule.jpg"
  },
  {
    title: "50p",
    artist: "Dirty Revolution",
    file: "/songs/50p - Dirty Revolution.mp3",
    cover: "/covers/50p - Dirty Revolution.jpg"
  },
  {
    title: "About A Girl",
    artist: "Nirvana",
    file: "/songs/About A Girl - Nirvana.mp3",
    cover: "/covers/About A Girl - Nirvana.jpg"
  },
  {
    title: "Amoeba",
    artist: "Adolescents",
    file: "/songs/Amoeba - Adolescents.mp3",
    cover: "/covers/Amoeba - Adolescents.jpg"
  },
  {
    title: "Jigsaw Falling into Place",
    artist: "Radiohead",
    file: "/songs/Jigsaw Falling into Place - Radiohead.mp3",
    cover: "/covers/Jigsaw Falling into Place - Radiohead.png"
  },
  {
    title: "Give Me Back My Man",
    artist: "B52s",
    file: "/songs/Give Me Back My Man - B52s.mp3",
    cover: "/covers/Give Me Back My Man - B52s.jpg"
  },
  {
    title: "Last Caress",
    artist: "Misfits",
    file: "/songs/Last Caress - Misfits.mp3",
    cover: "/covers/Last Caress - Misfits.jpg"
  },
  {
    title: "Married Girl",
    artist: "The Slackers",
    file: "/songs/Married Girl - The Slackers.mp3",
    cover: "/covers/Married Girl - The Slackers.jpg"
  },
  {
    title: "Do You Wanna Dance",
    artist: "Ramones",
    file: "/songs/Do You Wanna Dance - Ramones.mp3",
    cover: "/covers/Do You Wanna Dance - Ramones.jpg"
  },
  {
    title: "Aguas de Março",
    artist: "Elis Regina & Tom Jobim",
    file: "/songs/Aguas de Março - Elis Regina & Tom Jobim.mp3",
    cover: "/covers/Aguas de Março - Elis Regina & Tom Jobim.jpg"
  }
]

const VinylContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 125px;
  height: 125px;
  z-index: 1000;
  transform: scaleX(-1);

  &:hover .vinyl {
    left: 50%;
  }

  &:hover .controls {
    opacity: 1;
  }
`

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 45%) scaleX(-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  z-index: 2;
  padding: 4px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  margin-bottom: 20px;
`

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: opacity 0.2s, transform 0.2s;
  border-radius: 4px;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`

const Album = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Cover = styled.div<{ $coverImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.$coverImage}');
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 4px;
  transform: scaleX(-1);
`

const Vinyl = styled.div`
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  z-index: 0;
  width: 95%;
  height: 95%;
  background-image: url('https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Music-PNG/Gramophone_Vinyl_LP_Record_PNG_Transparent_Clip_Art_Image.png?m=1462983196');
  background-size: 106% 106%;
  background-position: center;
  border-radius: 50%;
  animation: 5s linear spinThat infinite;
  transform: scaleX(-1);
  box-shadow: 0 0 15px rgba(0,0,0,0.6);
  transition: left 0.3s ease-out;
  left: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    border-radius: 50%;
  }
`

const VinylPrint = styled.div<{ $coverImage: string }>`
  position: absolute;
  top: 33%;
  left: 33%;
  height: 34%;
  width: 34%;
  background-image: url('${props => props.$coverImage}');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  transform: scaleX(-1);
`

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(-1);
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: white;
  font-size: 20px;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &::before {
    content: "▶";
    margin-left: 3px;
  }
`

const shuffleArray = <T extends unknown>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const VinylPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [playlist, setPlaylist] = useState<Song[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setPlaylist(shuffleArray(SONGS))
  }, [])

  useEffect(() => {
    if (playlist.length === 0) return

    const audio = new Audio(playlist[currentSongIndex].file)
    audioRef.current = audio

    if (isPlaying) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Playback failed:", error)
        })
      }
    }

    audio.addEventListener('ended', () => {
      setCurrentSongIndex((prev) => (prev + 1) % playlist.length)
    })

    return () => {
      audio.pause()
      audio.remove()
    }
  }, [currentSongIndex, playlist, isPlaying])

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => 
      prev === 0 ? playlist.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentSongIndex((prev) => 
      (prev + 1) % playlist.length
    )
  }

  if (playlist.length === 0) return null

  const currentSong = playlist[currentSongIndex]

  return (
    <VinylContainer>
      <Controls className="controls">
        <ControlButton onClick={handlePrevious} title="Previous">
          <svg viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </ControlButton>
        <ControlButton onClick={handlePlayPause} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </ControlButton>
        <ControlButton onClick={handleNext} title="Next">
          <svg viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </ControlButton>
      </Controls>
      <Album>
        <Cover $coverImage={currentSong.cover} />
        {!isPlaying && <PlayButton onClick={handlePlay} />}
        <Vinyl className="vinyl">
          <VinylPrint $coverImage={currentSong.cover} />
        </Vinyl>
      </Album>
    </VinylContainer>
  )
}

export default VinylPlayer 