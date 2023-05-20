"use client"

import Navbar from "@/components/Navbar"
import Testimonials from "@/components/Testimonials"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="z-0 flex flex-col min-h-screen bg-gray-200">
      <div className='bg-white h-14'> 
       <Navbar />
      </div>
      <div style={{
        flex:"row",
        position:'relative',
        // backgroundImage: `url("assets/photos/card3.jpg")`,
        backgroundImage: `linear-gradient(to left, rgba(0,0,0,0)10%, rgba(0,0,0,1)), url("assets/photos/card3.jpg")`,
        height:"80vh", 
        width:"100vw",
        // filter: "brightness(50%)",
        backgroundSize:"cover",
      }}>
        {/* ============card on home============ */}
      <div className="flex content-center justify-center pt-40 ml-10 mr-10 pt- lg:ml-14 md:w-2/5 md:pt-32 lg:w-1/4">    
      <section className="flex flex-col justify-center rounded-md items- h-52 md:h-96">
        <h1 className="text-xl font-bold text-white text-start md:mb-5">
             YOU HELP PEOPLE?
            </h1>
         <h1 className="text-xl font-bold text-white text-start md:mb-5">BECOME A VOLONTEER TODAY</h1>
            <p className="text-start desc">
            <span className="font-bold text-center text-slate-100">We are a charity foundation in Kenya, we help young needy children and families, join us to make a better society</span>
            </p>
      <div className="flex ">       
       <Link href=""
        className="pt-5"
        >
       <h1 className='p-2 font-bold text-center bg-white border-2 text-slate-900 flex-center w-28 hover:text-white hover:bg-black hover:border-hidden'>Learn More</h1>
      </Link>
      
      <Link href=""
        className="pt-5"
        >
       <h1 className='p-2 ml-5 font-bold text-center text-white border-2 border-white w-28 flex-center hover:text-black hover:bg-white hover:border-hidden'>Join us</h1>
      </Link>
      </div>  
    </section>
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
          <h1 className="font-bold text-md">Street children</h1>
          <p className="font-bold text-gray-600"> We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ </p>
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
          <h1 className="font-bold text-md">Street children</h1>
          <p className="font-bold text-gray-600"> We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ </p>
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
          <h1 className="font-bold text-md">Street children</h1>
          <p className="font-bold text-gray-600"> We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ </p>
        </div>   
     </div>
    </div> 

      {/* ============Join us card=============== */}  
        <div className="m-3 border-b-2 border-slate-900">
          <h1 className="text-lg font-bold text-center">Join Us Today</h1>
        </div>
      <div className="flex flex-col justify-center p-8 mx-2 my-3 rounded items-left bg-slate-900 md:mx-20 md:p-14">
        <h1 className="pb-2 text-3xl font-bold text-white ">Become one of  Us Today</h1>
        <p1 className="text-lg text-white">We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ</p1>
        <p1 className="text-lg text-white">We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ</p1>
      </div>
      
      {/* ==================Testimonials============== */}
      <div className="">
        <h1 className="pt-4 pb-2 mx-5 text-xl font-bold text-center border-b-2 border-slate-900">Testimonials</h1>
        <div className="">
            <Testimonials />
        </div>
      </div>
      {/* =============Footer============= */}
      <div className="mt-3 bg-slate-900"> 
      <div className="flex-col justify-around pb-3 mx-10 my-3 border-b bg-slate-900 sm:flex-row md:flex">
        <div className="pt-2">
          <h1 className="font-bold text-white">Contact Us</h1>
          <p className="text-white">0797983330</p>
          <p className="text-white">heartsfoundation@gmail.com</p>
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-white">Location</h1>
          <h1 className="text-white">Eldoret Kenya</h1>
          <h1 className="text-white">Uasingishu county</h1>
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-white">Socials</h1>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4 bg-slate-900">
        <h1 className="text-xs text-white ">Made by Reinhardt Lagat</h1>
        <h1 className="ml-5 text-xs text-white">2023</h1>
        <h1 className="ml-5 text-xs text-white">Twitter @_chirchirkip</h1>
      </div>
      </div>
    </main>
  )
}




















