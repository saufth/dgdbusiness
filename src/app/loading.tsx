// Components
import Logo from '@/components/data-display/core/Logo'

/** The main loading component of application */
export default function Loading () {
  return (
    <div className='w-screen h-screen px-12 fixed top-0 left-0 z-80 overflow-hidden grid place-content-center gap-y-1 bg-gradient-to-r from-white via-zinc-100 to-zinc-200'>
      <div className='max-w-xs'>
        <Logo
          alt='Loading...'
          priority
        />
      </div>
      <span className='text-right'>
        Cargando...
      </span>
    </div>
  )
}
