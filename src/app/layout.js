import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dayim Marketing',
  description: 'Building Your Visions. Creating Reality',
  images: [
    {
      url: '/images/dsa/dayim_sub_logo.PNG',
      width: 800,
      height: 600,
    }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
