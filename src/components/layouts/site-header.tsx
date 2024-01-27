'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import {
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full fixed z-30 bg-background/80 transition-colors duration-500 backdrop-filter backdrop-blur-xl backdrop-saturate-150 border-b',
          isOnTop && 'border-transparent bg-transparent'
        )}
      >
        <nav
          className='relative px'
          aria-label='Emah Directory'
        >
          <div className='container-lg py-4 sm:py-5'>
            <div
              className='w-full h-full flex justify-between items-center'
            >
              <div className='transitio-[height] duration-300 h-8 lg:h-9'>
                <Link href='/' className='hover:opacity-90'>
                  <Icons.Logotype className='hidden sm:block w-auto h-full fill-primary hover:fill-accent transition-colors duration-500' />
                  <Icons.Logomark className='block sm:hidden w-auto h-full fill-primary hover:fill-accent transition-colors duration-500' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </Link>
              </div>
              <div className='flex items-center gap-x-1 sm:gap-x-6'>
                <Button className='text-xs sm:text-base' variant='link' size='xs' asChild>
                  <Link
                    href='/nosotros'
                  >
                    Nosotros
                  </Link>
                </Button>
                <Button className='hidden sm:flex' size='lg' asChild>
                  <Link
                    className='group flex items-center gap-x-1'
                    href='/contacto'
                  >
                    Contáctanos
                    <Icons.ArrowUpRight
                      className='w-3.5 sm:w-4 h-auto stroke-primary-foreground group-hover:stroke-accent-foreground transition-colors duration-500'
                    />
                  </Link>
                </Button>
                <Button size='sm' className='flex sm:hidden' asChild>
                  <Link
                    className='group flex items-center gap-x-1'
                    href='/contacto'
                  >
                    Contáctanos
                    <Icons.ArrowUpRight
                      className='w-3.5 sm:w-4 h-auto stroke-primary-foreground group-hover:stroke-accent-foreground transition-colors duration-500'
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='h-16 lg:h-[88px] w-full' />
    </>
  )
}
