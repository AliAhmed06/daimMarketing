import Searchbar from '../dayim-signature-apartments/components/admin/Searchbar'
import Sidebar from '../dayim-signature-apartments/components/admin/Sidebar'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dayim Marketing Admin',
  description: 'Modern Living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='flex gap-5'>
          <Sidebar />
          <main className='max-w-6xl flex-1 mx-auto py-4 '>
            <Searchbar />
            {children}
          </main>
        </div>        
      </body>
    </html>
  )
}
