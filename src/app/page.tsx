// Components
import LinkToContact from '@/components/navigation/LinkToContact'
import Logo from '@/components/data-display/core/Logo'
import NextLink from 'next/link'
import Showcase from '@/components/data-display/Showcase'
// Config
import { APP_ROUTES, ABOUT_NAV, CONTACT_NAV, SOLUTIONS_NAV } from '@/modules/navigation/config'
import { IMG_EXT, PICTURES_SIZE, LOGO_TYPES } from '@/modules/data-display/config'
import { SOLUTIONS, description, organization } from '@/modules/app/config'
import { SIZES } from '@/modules/sizing/config'
// Types
import type { HeaderProps } from '@/types/data-dislay'

/** The headers configuration for solutions section */
const SOLUTIONS_HEADERS: ReadonlyArray<HeaderProps> = [
  {
    heading: SOLUTIONS[0],
    description: 'Llevaremos a tu empresa a generar un modelo de negocio que vaya más allá de competir por el precio. Si hoy tu empresa compite mayormente por precio, estás en el modelo de negocio equivocado. Vamos a encontrar tu propio océano azul.'
  },
  {
    heading: SOLUTIONS[1],
    description: 'Podemos llevar a tu empresa a su máxima expresión de productividad. Ordenaremos e impulsaremos cada aspecto clave dentro de tu organización. Nuestro principal enfoque es la rentabilidad de cada proceso dentro de tu negocio.'
  },
  {
    heading: SOLUTIONS[2],
    description: 'Generar valor al cliente está en nuestro ADN. Sin embargo, no sólo se trata de generarte valor como cliente final, sino de crear un ciclo virtuoso, sistema o metodología donde todas las áreas de tu organización resulten beneficiadas.'
  },
  {
    heading: SOLUTIONS[3],
    description: 'Nuestras empresas son un reflejo de nosotros mismos. Tener claro en dónde estás parado y a dónde vas como individuo, como parte de una familia, como amigo, como profesionista, son algunos de los aspectos que hay que tener claramente identificados si quieres generar cambios de raíz tu empresa, cambios que perduren a través del tiempo.'
  },
  {
    heading: SOLUTIONS[4],
    description: 'Hoy más que nunca, el recurso humano de calidad y confiable, es una de las variables más críticas para el éxito de las empresas. Como empresarios con visión, debemos de aspirar a crecer de adentro hacia afuera, y qué mejor que empezar con tu propio capital humano.'
  },
  {
    heading: SOLUTIONS[5],
    description: 'El éxito a corto, mediano y largo plazo no sucede por accidente, es el resultado de unir la oportunidad con la estrategia y táctica correctas. En un mundo tan globalizado y competitivo es indispensable el tener claro cuándo y hasta dónde debes comprometerte a un proyecto.'
  }
]

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <section className='h-2xl'>
        <div className='h-full'>
          <div className='w-full h-full md:flex'>
            <div className='w-full h-full px-6 md:pb-12 mx-auto relative grid place-content-center bg-black/20'>
              <div className='text-center text-white space-y-6'>
                <p className='text-xl md:text-2xl text-white'>
                  {organization}
                </p>
                <h1>
                  {description}
                </h1>
                <div className='pt-4 flex justify-center'>
                  <LinkToContact />
                </div>
              </div>
              <div className='absolute inset-0 -z-20 overflow-hidden'>
                <video
                  className='w-full h-full object-cover object-center'
                  width={1920}
                  height={1080}
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList='nodownload noplaybackrate'
                >
                  <source src='/video/hero.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
            <div className='w-32 h-full pb-section hidden md:flex justify-center items-end bg-primary'>
              <NextLink
                className='pb-6 hidden md:flex items-center gap-x-4 rotate-90'
                href={SOLUTIONS_NAV.href}
              >
                {SOLUTIONS_NAV.children} <div className='w-64 h-px bg-black' />
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      <section
        id={APP_ROUTES.solutions}
        className='p-section space-y-24'
      >
        <header className='text-center space-y-6'>
          <p className='text-tagline'>NUESTRAS SOLUCIONES</p>
          <h2>
            Utilizamos enfoques analíticos y creativos para identificar soluciones
            innovadoras que impulsen el crecimiento, mejoren la eficiencia operativa
            y aumenten la rentabilidad de tu empresa.
          </h2>
        </header>

        {SOLUTIONS_HEADERS.map((solution, key) => {
          return (
            <Showcase
              heading={solution.heading}
              description={solution.description}
              image={{
                name: `${APP_ROUTES.solutions}${key}`,
                ext: IMG_EXT.jpg,
                alt: solution.heading,
                ...PICTURES_SIZE
              }}
              href={CONTACT_NAV.href}
              reverse={key % 2 !== 0}
              key={key}
            />
          )
        })}
      </section>

      <section className='p-section space-y-24 bg-stone-50'>
        <header className='flex flex-col items-center gap-y-10'>
          <Logo
            type={LOGO_TYPES.logomark}
            size={SIZES.md}
          />
          <h2 className='text-center'>
            Nos enorgullece ser reconocidos por nuestra ética de trabajo,
            profesionalismo y compromiso con la mejora continua en todos
            los aspectos de nuestra labor.
          </h2>
        </header>
        <Showcase
          heading='Nuesta misión'
          description='Aportarte valor como cliente. Te acompañamos en el mundo de los negocios para que logres el éxito de manera sostenible. Trabajamos de cerca contigo, comprendiendo tus necesidades y metas particulares, y luego creamos estrategias a tu medida para alcanzar al máximo tu potencial.'
          image={{
            name: 'mision',
            ext: IMG_EXT.jpg,
            alt: organization,
            ...PICTURES_SIZE
          }}
          href={ABOUT_NAV.href}
        />
        <Showcase
          heading='Nuesta visión'
          description='Convertirnos en la Consultoría de negocios, reconocida por nuestra dedicación a la calidad, la excelencia y la innovación. Nos esforzamos por mantenernos a la vanguardia de las últimas tendencias del mercado y la tecnología, para así poder ofrecerte alternativas efectivas que te permitan mejorar tu rendimiento empresarial y puedas así, destacarte en la industria.'
          image={{
            name: 'vision',
            ext: IMG_EXT.jpg,
            alt: organization,
            ...PICTURES_SIZE
          }}
          href={ABOUT_NAV.href}
          reverse
        />
      </section>
    </main>
  )
}
