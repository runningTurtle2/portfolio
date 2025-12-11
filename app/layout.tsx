import {Roboto} from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from '../components/Footer'
import Header from '../components/Header'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <body className='bg-bg font-mono antialiased selection:bg-accent selection:text-black min-h-screen flex flex-col '>
        <Header />
        <main>{children}</main>

        <Footer />
        <Analytics /> <SpeedInsights />
      </body>
    </html>
  )
}