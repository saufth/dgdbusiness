import localFont from 'next/font/local'

export const fontPrimary = localFont({
  src: '../../public/fonts/primary/conneqt-regular.woff2',
  display: 'swap',
  variable: '--font-primary'
})

export const fontSecondary = localFont({
  src: [
    {
      path: '../../public/fonts/secondary/montserrat-extralight.woff2',
      weight: '200'
    },
    {
      path: '../../public/fonts/secondary/montserrat-regular.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/secondary/montserrat-bold.woff2',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-secondary'
})
