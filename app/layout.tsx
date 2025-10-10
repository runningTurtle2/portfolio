import {Roboto} from 'next/font/google'
import './globals.css'
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
      <body className='bg-gray-100 mt-20 flex items-center justify-center'>{children}</body>
    </html>
  )
}