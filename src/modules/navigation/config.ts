// Config
import { organization } from '../app/config'
// Types
import type { AppRoute, Navigable } from '@/types/navigation'

/** The application route names configuration */
export const APP_ROUTES: Readonly<Record<AppRoute, AppRoute>> = {
  home: 'home',
  about: 'about',
  solutions: 'solutions',
  contact: 'contact'
}

/** The home navigation configuration */
export const HOME_NAV: Readonly<Navigable> = {
  children: 'Inicio',
  href: '/' // The home reference always is '/'
}

/** The about us page navigation configuration */
export const ABOUT_NAV: Readonly<Navigable> = {
  children: 'Nosotros',
  href: `/${APP_ROUTES.about}`
}

/** The solutions page navigation configuration */
export const SOLUTIONS_NAV: Readonly<Navigable> = {
  children: 'Soluciones',
  href: `/#${APP_ROUTES.solutions}`
}

/** The contact page navigation configuration */
export const CONTACT_NAV: Readonly<Navigable> = {
  children: 'Contáctanos',
  href: `/${APP_ROUTES.contact}`
}

/** The main navigation configuration of the application */
export const NAV_LIST: ReadonlyArray<Readonly<Navigable>> = [
  HOME_NAV,
  ABOUT_NAV,
  SOLUTIONS_NAV,
  CONTACT_NAV
]

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directory`
