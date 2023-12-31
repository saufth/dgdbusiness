'use client'
import ButtonMenu from '../input/core/ButtonMenu'
// Components
import Link from './core/Link'
import LinkButton from './core/LinkButton'
import LinkEmail from './LinkEmail'
import LinkLogo from './core/LinkLogo'
// Store
import { useGlobalStore } from '@/modules/app/store'
import { shallow } from 'zustand/shallow'
// Animation
import { motion } from 'framer-motion'
// Config
import { NAV_LIST, navAriaLabel } from '@/modules/navigation/config'
import { OC_STATE } from '@/modules/input/config'
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'
// Tpes
import type { OCVariantsConfig, Transition } from '@/types/animation'

/** The nav animation transitions */
const transition: Transition = {
  damping: 24,
  duration: 0.3,
  ease: 'easeOut'
}

/** Header element animation variants */
const NAV_VARIANTS: OCVariantsConfig = {
  open: {
    height: '100vh',
    top: 0,
    transition
  },
  closed: {
    height: '0vh',
    top: -128,
    transition
  }
}

/**
 * The main navbar component of the application
 * @returns The Navbar component
 */
export default function Navbar () {
  // Animation state
  const [menuState, setMenuState, setButtonMenuState] = useGlobalStore(
    (state) => [state.menuState, state.setMenuState, state.setButtonMenuState],
    shallow
  )
  /** Close the Menu and prevents the open action */
  const closeMenu = () => {
    setMenuState(OC_STATE.closed)
    setButtonMenuState(OC_STATE.closed)
  }

  return (
    <>
      <header className='fixed left-0 right-0 mx-auto z-70'>
        <nav aria-label={navAriaLabel}>
          <div className='w-full h-20 px-3% absolute z-80 flex justify-between items-center bg-primary'>
            <LinkLogo theme={THEMES.secondary} />

            <div className='pr-2 md:pr-2.5'>
              <ButtonMenu />
            </div>
          </div>

          <motion.div
            className='w-full h-full pt-24 md:pt-32 absolute left-0 overflow-hidden bg-primary'
            variants={NAV_VARIANTS}
            animate={menuState}
            initial={false}
          >
            <div className='h-full overflow-y-auto'>
              <div className='w-11/12 px-8 md:px-10 py-6 md:py-9 mx-auto flex flex-col md:flex-row justify-between md:items-center gap-y-8 md:gap-y-10'>
                <ul className='space-y-8 md:space-y-10'>
                  {NAV_LIST.map((option, key) => (
                    <li key={key}>
                      <Link
                        href={option.href}
                        size={SIZES.lg}
                        action={closeMenu}
                      >
                        {option.children}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className='grid gap-y-6'>
                  <LinkLogo theme={THEMES.secondary} />
                  <LinkButton
                    href={NAV_LIST[3].href}
                    action={closeMenu}
                    theme={THEMES.secondary}
                  >
                    {NAV_LIST[3].children}
                  </LinkButton>
                  <LinkEmail />
                </div>
              </div>
            </div>
          </motion.div>
        </nav>
      </header>
      <div className='h-20' />
    </>
  )
}
