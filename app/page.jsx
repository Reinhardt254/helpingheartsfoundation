"use client"

import Navbar from "@/components/Navbar"
import Testimonials from "@/components/Testimonials"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="z-0 flex flex-col min-h-screen bg-gray-200">
      <div
        className="bg-slate-900 "
      >
        {/* ============card on home============ */}
      <div className="flex flex-col justify-center my-5 sm:items-center md:flex-row sm:my-32 md:mx-40">    
      <section className="flex flex-col justify-center m-3 sm:w-1/2">
        <h1 className="text-2xl font-bold text-white text-start md:mb-5">
             YOU HELP PEOPLE?
            </h1>
         <h1 className="text-xl font-bold text-white text-start md:mb-5">BECOME A VOLONTEER TODAY</h1>
            <div className="flex flex-col">
            <span className="font-bold text-start text-slate-100">We are a charity foundation in Kenya</span>
            <span className="font-bold text-start text-slate-100">
            we help young needy children and families
            </span>
            <span className="font-bold text-start text-slate-100">join us to make a better society</span>
            </div>
      <div className="flex ">       
       <Link href="/About"
        className="pt-5"
        >
       <h1 className='p-2 font-bold text-center bg-white border-2 text-slate-900 flex-center w-28 hover:text-white hover:bg-black hover:border-hidden'>Learn More</h1>
      </Link>
      
      <Link href="/Contact"
        className="pt-5"
        >
       <h1 className='p-2 ml-5 font-bold text-center text-white border-2 border-white w-28 flex-center hover:text-black hover:bg-white hover:border-hidden'>Join us</h1>
      </Link>
      </div>  
    </section>
    <div className="flex m-3 bg-white rounded">
      <div>
        <Image 
          src="/assets/photos/Donate.jpg"
          alt="donate"
          width={300}
          height={300}
          className="rounded"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-2">
        <p className="text-xl font-bold text-slate-900">Let us make a better today</p>
        <p className="text-lg font-semibold text-slate-900">Donate Today</p>
        <Link href="/Donate"
        className="pt-5"
        >
       <h1 className='p-2 ml-5 font-bold text-center text-white border-2 border-slate-900 w-28 flex-center hover:text-black hover:bg-white hover:border-black bg-slate-900'>Donate</h1>
      </Link>
      </div>
    </div>
    </div>
    </div>
    <div className="flex justify-center pt-5 mx-10 bg-gray-200 border-b-2 border-slate-950"> 
    <p className="text-lg font-bold text-slate-900">WHAT DO WE DO?</p>
    </div>

    {/* ===========What we do========== */}
    <div className='flex-col justify-center mt-3 space-x-0 bg-gray-200 md:flex-row md:space-x-3 md:flex'>
     <div className="flex-col p-8 mb-2 bg-white md:w-1/5 md:p-2 sm:mb-0 "> 
      <div className="w-full ">
        <h1 className="mx-3 mb-2 text-lg font-bold text-center ">Clothing Donations</h1>
      <Image
        src="/assets/photos/clothingm.jpg"
        width={3243}
        height={1826}
        alt="photo"
        className=""
       />
       </div>
        <div className="justify-start">
          <h1 className="font-bold text-md">Donate</h1>
          <p className="font-bold text-gray-600"> 
          Help us make a meaningful impact by donating gently used clothing and contributing financially to our cause. Your clothing donations provide warmth and dignity to those in need, while monetary donations allow us to expand our reach and provide essential services to our community. Together, we can bring comfort and support to those who require it the most. 
          </p>
        </div>   
     </div>
        <div className="flex-col p-8 mb-2 bg-white md:w-1/5 md:p-2 sm:mb-0">
          <div className="w-full"> 
          <h1 className="mx-3 mb-2 text-lg font-bold text-center ">Food Donations</h1>
      <Image
        src="/assets/photos/foods.jpg"
        width={5675}
        height={3192}
        alt="photo"
        className=""
       />
       </div>
        <div className="justify-start">
          <h1 className="font-bold text-md">Donate</h1>
          <p className="font-bold text-gray-600">
             We invite you to join us in the fight against hunger by donating non-perishable food items. Your contribution can make a world of difference in the lives of those struggling to put food on their plates. Every can, every box, and every package counts in helping us ensure that no one in our community goes hungry. Your generosity nourishes the bodies and spirits of those in need.
          </p>
        </div>   
     </div>
     <div className="flex-col p-8 mb-2 bg-white md:w-1/5 md:p-2 sm:mb-0">
      <div className="w-full"> 
      <h1 className="mx-3 mb-2 text-lg font-bold text-center ">Funds Donations</h1>
      <Image
        src="/assets/photos/fundsm.jpg"
        width={3032}
        height={1705}
        alt="photo"
        className=""
       />
      </div>
        <div className="justify-start">
          <h1 className="font-bold text-md">Donate</h1>
          <p className="font-bold text-gray-600">
             Be a part of positive change by giving the gift of clothing and cash donations. Your unwanted clothing can become someone elses treasure, and your monetary contributions enable us to continue our mission of aiding those in need. Your generosity strengthens our community and empowers individuals to overcome challenges. Donate today to make a lasting impact.
         </p>
        </div>   
     </div>
    </div> 

      {/* ============Join us card=============== */}  
        <div className="m-3 border-b-2 border-slate-900">
          <h1 className="text-lg font-bold text-center">Join Us Today</h1>
        </div>
      <div className="flex flex-col justify-center p-8 mx-2 my-3 rounded items-left bg-slate-900 md:mx-20 md:p-14">
        <h1 className="pb-2 text-3xl font-bold text-white ">Become one of  Us Today</h1>
        <p1 className="text-lg text-white">
        We are a passionate charitable foundation based in the heart of Kenya, dedicated to the well-being of our young, underprivileged children and families. Our mission is clear: to forge a path towards a brighter, more equitable society where every child has the opportunity to thrive. In a world where challenges persist, we stand as a beacon of hope, offering access to education, healthcare, and a supportive community. But we cannot do it alone. We need compassionate individuals like you to join us in our journey. Your involvement, whether through volunteering, donations, or advocacy, can be the catalyst for lasting change. Together, we can break down barriers, uplift spirits, and create a stronger, more inclusive society that truly leaves no one behind. Join us today, and let us make a profound impact on the lives of those who need it most.
        </p1>

        <div className="flex items-center justify-center">
        <Link href="/Donate"
        className="pt-5"
        >
       <h1 className='p-2 ml-5 font-bold text-center text-black bg-white hover:text-slate-900 w-28 flex-center hover:border-hidden hover:bg-gray-200'>Join us</h1>
      </Link>
      </div>
      </div>
      
      {/* ==================Testimonials============== */}
      <div className="">
        <h1 className="pt-4 pb-2 mx-5 text-xl font-bold text-center border-b-2 border-slate-900">Testimonials</h1>
        <div className="mb-5">
            <Testimonials />
        </div>
      </div>   
    </main>
  )
}
