import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav = [
  {
    title: 'Nosotros',
    href: '/nosotros'
  },
  {
    title: 'Contacto',
    href: '/contacto'
  }
]

export const domain = 'dgdbusiness.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'DGD Business',
  description: 'Optimizamos tu proceso de adquisición como un elemento clave de tu destreza competitiva, todo consolidado en un único punto de contacto.',
  slogan: 'Agilidad y éxito a tu alcance',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    ...siteNav
  ]
}
