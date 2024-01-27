import React from 'react'
import SiteFooter from '@/components/layouts/site-footer'
import SiteHeader from '@/components/layouts/site-header'

export default async function LobbyLayout ({ children }: React.PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <div className='space-y-24 relative z-10'>
        <main className='space-y-24'>
          {children}
        </main>
        <SiteFooter />
      </div>
      <div className='w-full h-[100svh] fixed top-0 left-0'>
        <div className='absolute w-sm sm:w-xl md:w-3xl lg:w-6xl xl:w-7xl 2xl:w-8xl h-sm sm:h-xl md:h-3xl lg:h-6xl xl:h-7xl 2xl:h-8xl -top-40 sm:-top-xs md:-top-sm lg:-top-xl xl:-top-[624px] 2xl:-top-[720px] -left-40 sm:-left-xs md:-left-sm lg:-left-xl xl:-left-[624px] 2xl:-left-[720px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-2xl content-[""]' />
        <div className='absolute w-sm sm:w-xl md:w-3xl lg:w-6xl xl:w-7xl 2xl:w-8xl h-sm sm:h-xl md:h-3xl lg:h-6xl xl:h-7xl 2xl:h-8xl -bottom-40 sm:-bottom-xs md:-bottom-sm lg:-bottom-xl xl:-bottom-[624px] 2xl:-bottom-[720px] -right-40 sm:-right-xs md:-right-sm lg:-right-xl xl:-right-[624px] 2xl:-right-[720px] rounded-full bg-gradient-radial from-secondary/10 to-transparent blur-2xl content-[""]' />
      </div>
    </>
  )
}
