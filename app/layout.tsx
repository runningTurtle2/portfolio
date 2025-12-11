import {Roboto} from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <body className='bg-bg p-16 '>{children} <Analytics /> <SpeedInsights /></body>
    </html>
  )
}