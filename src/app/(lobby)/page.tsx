import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Banner } from '@/components/cards/banner-card'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import Video from '@/components/Video'

export default function IndexPage () {
  return (
    <>
      <section className='w-full px pt-6'>
        <div
          className='container h-full flex flex-col md:flex-row items-center justify-start gap-y-12 md:gap-y-0 md::gap-x-4'
        >
          <div className='w-fit space-y-8 md:space-y-12'>
            <div className='space-y-5 md:space-y-6 text-center md:text-left md:pr-4'>
              <h1>
                <Balancer className='text-h1'>
                  {siteConfig.slogan}
                </Balancer>
              </h1>
              <p>
                <Balancer className='text-p1'>
                  {siteConfig.description}
                </Balancer>
              </p>
            </div>
            <div className='flex gap-y-4 md:gap-x-8 items-center flex-col md:flex-row'>
              <Button size='full' asChild>
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
              <Link
                className='group hidden md:flex items-center gap-x-1.5 hover:text-primary transiticon-colors duration-500'
                href='/nosotros'
              >
                Nosotros
                <Icons.Shapes
                  className='w-3.5 sm:w-4 stroke-1 h-auto stroke-foreground group-hover:stroke-primary transiticon-colors duration-500'
                />
              </Link>
            </div>
          </div>
          <Video src='/video/home-hero.mp4' />
        </div>
      </section>
      <section>
        <div className='container space-y-16 md:space-y-20'>
          <div className='max-w-3xl mx-auto text-center space-y-4 px'>
            <h2>
              <Balancer className='text-h2'>
                {services.title}
              </Balancer>
            </h2>
            {services.description && (
              <p>
                <Balancer className='text-p1'>
                  {services.description}
                </Balancer>
              </p>
            )}
          </div>
          <div className='space-y-16 lg:space-y-20'>
            {services.items.map((serviceItem, key) => (
              <article key={key}>
                <div className={cn(
                  'flex flex-col lg:flex-row lg:items-center gap-y-8 lg:gap-x-24 px-8 sm:px-14 lg:px-16',
                  (key + 1) % 2 !== 0 && 'lg:flex-row-reverse')}
                >
                  <div className='lg:w-1/2'>
                    <div className='aspect-[308/173] overflow-hidden rounded-xl bg-secondary relative'>
                      <Image
                        src={serviceItem.image}
                        alt={serviceItem.title}
                        className='object-cover'
                        sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
                        fill
                        loading='lazy'
                      />
                    </div>
                  </div>
                  <div className='space-y-1 md:space-y-2 lg:w-1/2 lg:px-16'>
                    {serviceItem.label && <Badge>{serviceItem.label}</Badge>}
                    <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                      <h3>
                        <Balancer className='text-h3'>
                          {serviceItem.title}
                        </Balancer>
                      </h3>
                      <div>
                        {typeof serviceItem.description === 'object'
                          ? (
                            <ul className='space-y-1 list-disc pl-4'>
                              {serviceItem.description.map((paragraph, key) => (
                                <li key={key}>
                                  <p>
                                    <Balancer className='text-p1'>
                                      {paragraph}
                                    </Balancer>
                                  </p>
                                </li>
                              ))}
                            </ul>
                            )
                          : (
                            <p>
                              <Balancer className='text-p1'>
                                {serviceItem.description}
                              </Balancer>
                            </p>
                            )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className='px'>
        <Banner
          banner={{
            title: 'Somos un aliado confiable',
            description: 'Ponemos a su disposición el abastecimiento comercial que su empresa necesita.',
            href: '/nosotros',
            image: '/images/home-banner.webp',
            label: 'Nosotros'
          }}
        />
      </div>
    </>
  )
}
