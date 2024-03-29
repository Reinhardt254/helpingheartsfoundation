
import Navbar from "@/components/Navbar"
import Testimonials from "@/components/Testimonials"
import Image from "next/image"
import Link from "next/link"
import Donate from "./Donate/page"
import HelpDonate from "@/components/donate"
import Section from "@/components/section"

export default function Home() {
  return (
    <main className="z-0 flex flex-col min-h-screen bg-gray-200">
      <div
        className="bg-gray-200 "
      >

        {/* ============card on home============ */}
      <div className="">    
      <div className="w-screen md:flex-row">
      <div 
        className="flex items-center justify-center w-screen h-[570px]" 
      style={{
        backgroundImage: `url(/assets/photos/homee.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,     
      }}
      >
     
     <div>
       <Section />
     </div>
    
      <div className="absolute z-50 h-screen">    
        <HelpDonate />
      </div>
      </div>    
    
    </div>
    </div>
    </div>
    
    <div className="flex justify-center pt-5 mt-1 bg-white md:mt-1"> 
    <p className="text-3xl font-bold text-red-600 pt-7">WHAT DO WE DO?</p>
    </div>
    <div className="bg-gray-200">     
    {/* ===========What we do========== */}
    <div className='flex-col justify-center space-x-0 md:bg-white md:flex-row md:space-x-3 md:flex md:py-4 md:pb-14'>
     <div className="flex-col px-8 pt-4 pb-8 mb-2 bg-white md:w-1/5 md:p-2 sm:mb-0"> 
      <div className="w-full ">
        <h1 className="mx-3 mb-2 text-2xl font-bold text-center ">Clothing Donations</h1>
      <Image
        src="/assets/photos/clothingm.jpg"
        width={3243}
        height={1826}
        alt="photo"
        className=""
       />
       </div>
        <div className="justify-start mt-2">
          <p className="font-bold text-gray-600"> 
          Help us make a meaningful impact by donating gently used clothing and contributing financially to our cause. Your clothing donations provide warmth and dignity to those in need, while monetary donations allow us to expand our reach and provide essential services to our community. Together, we can bring comfort and support to those who require it the most. 
          </p>
        </div>   
     </div>
        <div className="flex-col p-8 mb-2 bg-white md:w-1/5 md:p-2 sm:mb-0">
          <div className="w-full"> 
          <h1 className="mx-3 mb-2 text-2xl font-bold text-center ">Food Donations</h1>
      <Image
        src="/assets/photos/foods.jpg"
        width={5675}
        height={3192}
        alt="photo"
        className=""
       />
       </div>
        <div className="justify-start mt-2">
          <p className="font-bold text-gray-600">
             We invite you to join us in the fight against hunger by donating non-perishable food items. Your contribution can make a world of difference in the lives of those struggling to put food on their plates. Every can, every box, and every package counts in helping us ensure that no one in our community goes hungry. Your generosity nourishes the bodies and spirits of those in need.
          </p>
        </div>   
     </div>
     <div className="flex-col p-8 mb-2 bg-white md:w-1/5 md:p-2 sm:mb-0">
      <div className="w-full"> 
      <h1 className="mx-3 mb-2 text-2xl font-bold text-center ">Funds Donations</h1>
      <Image
        src="/assets/photos/fundsm.jpg"
        width={3032}
        height={1705}
        alt="photo"
        className=""
       />
      </div>
        <div className="justify-start mt-2">
          <p className="font-bold text-gray-600">
             Be a part of positive change by giving the gift of clothing and cash donations. Your unwanted clothing can become someone elses treasure, and your monetary contributions enable us to continue our mission of aiding those in need. Your generosity strengthens our community and empowers individuals to overcome challenges. Donate today to make a lasting impact.
         </p>
        </div>   
     </div>
    </div> 
    </div>


      {/* ============Join us card=============== */}  
        {/* <div className="m-3 border-b-2 border-slate-900">
        </div> */}
      <div className="w-screen bg-white md:pt-4 md:pb-4 md:mt-3">      
      <div className="flex flex-col justify-center px-5 pt-5 mx-2 my-3 rounded items-left md:mx-20 md:p-14">
        <h1 className="pb-2 text-3xl font-bold text-red-600 ">Become one of  Us Today</h1>
        <p1 className="text-xl font-semibold text-slate-700">
        We are a passionate charitable foundation based in the heart of Kenya, dedicated to the well-being of our young, underprivileged children and families. Our mission is clear: to forge a path towards a brighter, more equitable society where every child has the opportunity to thrive. In a world where challenges persist, we stand as a beacon of hope, offering access to education, healthcare, and a supportive community. But we cannot do it alone. We need compassionate individuals like you to join us in our journey. Your involvement, whether through volunteering, donations, or advocacy, can be the catalyst for lasting change. Together, we can break down barriers, uplift spirits, and create a stronger, more inclusive society that truly leaves no one behind. Join us today, and let us make a profound impact on the lives of those who need it most.
        </p1>

      <div className="flex items-center justify-center">
        <Link href="/Donate"
        className="pt-5"
        >
       <h1 className='flex items-center justify-center p-2 mt-5 mb-5 ml-5 text-xl font-bold text-center text-white bg-red-600 rounded hover:text-black w-28 hover:border-hidden hover:bg-gray-400 md:w-32 md:h-12'>Join us</h1>
      </Link>
      </div>
      </div>
      </div>
      
      {/* ==================Testimonials============== */}
      <div className="mt-2 bg-">
        <h1 className="pt-4 pb-2 mt-2 text-3xl font-bold text-center text-slate-900">What People say about us</h1>
        <div className="">
            <Testimonials />
        </div>
      </div>   
    </main>
  )
}