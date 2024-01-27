import NextLink from 'next/link'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import Balancer from 'react-wrap-balancer'
import {
  contactEmail,
  siteConfig,
  siteNav
} from '@/config/site'
import { ModeToggle } from './mode-toggle'

export default function SiteFooter () {
  return (
    <footer className='border-y bg-muted'>
      <div>
        <nav className='container flex flex-col px pb-6 pt-9 sm:py-10 lg:py-16 sm:flex-row justify-between'>
          <div className='flex flex-col sm:flex-row gap-y-2 sm:gap-x-5 lg:items-center'>
            <div>
              <NextLink href='/'>
                <Icons.Logotype className='w-auto h-5 sm:h-7 fill-primary' />
                <span className='sr-only'>{siteConfig.name}</span>
              </NextLink>
            </div>
            <ul className='flex flex-col sm:flex-row sm:gap-x-5'>
              {siteNav.map((navItem, key) => (
                <li key={key}>
                  <Link
                    href={navItem.href}
                    size='xs'
                    className='sm:text-sm px-1 py-2.5 sm:px-0 sm:py-0 text-muted-foreground'
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex justify-start sm:justify-end'>
            <Link
              href={`mailto:${contactEmail}`}
              size='xs'
              className='px-1 py-2.5 sm:px-0 sm:py-0 text-muted-foreground'
            >
              {contactEmail}
            </Link>
          </div>
        </nav>
        <div className='border-t'>
          <div className='container py-4 sm:py-5 px flex justify-between items-center gap-x-2'>
            <p className='pt-1.5 sm:pt-2'>
              <Balancer className='text-xs sm:text-sm text-muted-foreground'>
                {`Copyright ${new Date().getFullYear()} ${siteConfig.name}. Todos los derechos reservados.`}
              </Balancer>
            </p>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
