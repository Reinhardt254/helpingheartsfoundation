import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Helping hearts foundation',
  description: 'charity',
  icons:{
    icon: "/assets/photos/logo.jpg",
    apple:"/assets/photos/logo.jpg"
  },
  keywords:[
    "charity", 
    "helping hearts",
    "foundation",
    "volonteer",
    "help"
   ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
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
