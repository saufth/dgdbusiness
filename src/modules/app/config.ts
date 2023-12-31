// Types
import type { Author } from 'next/dist/lib/metadata/types/metadata-types'

/** The application domain name */
export const domain = process.env.NEXT_PUBLIC_DOMAIN

/** The base URL of the aplication */
export const baseUrl: URL = new URL(`https://${domain}`)

/** The contact email of the organization */
export const contactEmail = `contacto@${domain}`

/** The project author */
export const authors: Author = {
  name: 'Sauftdev',
  url: baseUrl
}

/** The name of the organization */
export const organization = 'DGD Business Group'

/** The organization description */
export const description = 'Tu empresa a su máxima expresión de productividad'

/** Organization solutions */
export const SOLUTIONS: ReadonlyArray<string> = [
  'Desarrollo de modelos de negocio',
  'Optimización de cadenas de suministro',
  'Consultoría empresarial especializada',
  'Coaching directivo',
  'Gestión del talento',
  'Planeación y desarrollo de proyectos'
]

/** The keyword list of the application */
export const keywords = [
  organization.toLowerCase(),
  ...SOLUTIONS.map((service) => service.toLowerCase())
]

/** Theme color of the application */
export const themeColor = '#FF6700'
