'use client'
import { type MouseEvent } from 'react'

interface VideoProps {
  src: string
}

export default function Video ({ src }: VideoProps) {
  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  return (
    <div className='w-full h-xs md:h-[512px] shadow overflow-hidden rounded-2xl'>
      <video
        className='w-full h-full object-cover relative'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
        onContextMenu={preventContextMenu}
      >
        <source src={src} type='video/mp4' />
      </video>
      {/* <div className='absolute inset-0 bg-black/30 sm:bg-black/10' /> */}
    </div>
  )
}
