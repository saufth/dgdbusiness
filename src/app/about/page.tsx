// Components
import Showcase from '@/components/data-display/Showcase'
// Config
import { IMG_EXT, PICTURES_SIZE } from '@/modules/data-display/config'
// Types
import type { HeaderProps } from '@/types/data-dislay'

/** The headers configuration for values section */
const VALUES: ReadonlyArray<HeaderProps> = [
  {
    heading: 'Colaboración',
    description: 'Trabajamos en equipo y fomentamos la cooperación para alcanzar objetivos comunes.'
  },
  {
    heading: 'Responsabilidad',
    description: 'Asumimos la responsabilidad de nuestras acciones y decisiones, y nos comprometemos con tu éxito.'
  },
  {
    heading: 'Adaptabilidad',
    description: 'Nos adaptamos a los cambios y desafíos para poder brindarte soporte y estabilidad.'
  },
  {
    heading: 'Orientación al cliente',
    description: 'Te situamos en el centro de todo lo que hacemos, comprendiendo tus necesidades y ofreciéndote soluciones a la medida.'
  },
  {
    heading: 'Profesionalismo',
    description: 'Mantenemos altos estándares de conducta y nos esforzamos por mantener una imagen profesional en todas nuestras interacciones.'
  },
  {
    heading: 'Sostenibilidad',
    description: 'Nos preocupamos por el impacto ambiental y social de nuestras operaciones y trabajamos contigo para promover prácticas sostenibles en tus sistematizaciones.'
  },
  {
    heading: 'Aprendizaje continuo',
    description: 'Nos esforzamos por mantenernos actualizados y mejorar constantemente para brindarte mejores servicios.'
  }
]

/** The about us page of the application */
export default function AboutPage () {
  return (
    <main>
      <section className='p-section space-y-24'>
        <h1 className='h2 text-center'>
          Creemos firmemente que una base sólida de valores es fundamental
          para construir relaciones mutuamente beneficiosas.
        </h1>

        <video
          className='w-full h-auto'
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
          <source src='/video/about.mp4' type='video/mp4' />
        </video>

        {VALUES.map((value, key) => {
          return (
            <Showcase
              heading={value.heading}
              description={value.description}
              image={{
                name: `values${key}`,
                ext: IMG_EXT.svg,
                alt: value.heading,
                ...PICTURES_SIZE
              }}
              reverse={key % 2 !== 0}
              key={key}
            />
          )
        })}
      </section>

      <section className='px-section md:px-11% py-section space-y-8 text-center bg-stone-50'>
        <header className='space-y-5 md:space-y-8'>
          <h2>
            NUESTRA HISTORIA
          </h2>
        </header>

        <div className='space-y-6 text-xl md:text-4xl'>
          <p>
            Hace 15 años, un grupo de profesionales del mundo de los negocios decidió
            unir fuerzas y fundar DGD Business Group. Desde entonces, la empresa ha
            trabajado incansablemente para aportar valor a sus clientes, siempre
            enfocados en ayudarles a alcanzar el éxito empresarial.
          </p>
          <p>
            DGD Business Group ha experimentado un crecimiento continuo, gracias a su
            compromiso con la entrega de soluciones empresariales. La compañía ha
            ampliado sus áreas de especialización y hoy por hoy se ha expandido en la
            industria con bases sólidas, efectivas y sostenibles.
          </p>
          <p>
            DGD Bussines Group es un referente en el mundo de la Consultoría de negocios
            que trabaja en pro de sus clientes, adaptando sus servicios a las necesidades
            apremiantes de los mismos.
          </p>
        </div>
      </section>
    </main>
  )
}
