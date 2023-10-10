import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Helping hearts foundation',
  description: 'charity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='sticky top-0 bg-white shadow-xl h-14'> 
        <Navbar />
      </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
