import ContactForm from '@/components/forms/contact-form'
import { type Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: `Contáctanos – ${siteConfig.slogan}.`,
  description: siteConfig.description
}

export default function ContactPage () {
  return (
    <>
      <section className='px pt-8 sm:pt-24 2xl:pb-28'>
        <div className='container sm:px-0 space-y-12 sm:space-y-16'>
          <div className='space-y-10 sm:space-y-12'>
            <h2 className='text-h2 font-primary text-center w-full'>
              Pongámonos en contacto
            </h2>
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-3xl'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
