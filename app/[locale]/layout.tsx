import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter, } from 'next/font/google'
import Providers from '../Providers'
import Sidebar from '@/components/Sidebar'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import Background from '@/components/Background'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react'
import Loading from './loading'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Benjamin Bastidas | Desarrollador web',
  description: 'Soy benjamín bastidas, este es mi portafolio enfocado en mis desarrollos web y sobre mi.',
  openGraph:{
    type:'website',
    locale:'es_ES',
    url:'https://www.bbastidasdev.tech/',
    title:'Benjamin Bastidas | Desarrollador web',
    description:'Soy benjamín bastidas, este es mi portafolio enfocado en mis desarrollos web y sobre mi.',
    siteName: 'Benjamin Bastidas',
  }
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const messages = useMessages();
  return (
    <html lang={params.locale} className='scroll-smooth scroll-p-40 dark' style={{colorScheme:'dark'}}  >
      <body className={`bg-primary ${inter.className}`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Providers>
            <Suspense fallback={<Loading />} >
              <Background />
              <Sidebar />
              <Navbar />
              <Toaster />
              {children}
              <Footer />
            </Suspense>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
