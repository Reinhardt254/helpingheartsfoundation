
import Link from "next/link"

const Section = () => {
  return (
    <div>
       <section className="flex flex-col items-center justify-center px-8 py-8 ml-2 mr-3 bg-white rounded bg-blend-darken md:items-center md:justify-center">
        <div className="">        
        <div className="flex flex-row flex-wrap">        
        <h1 className="mb-3 text-3xl font-bold text-slate-900 text-start md:mb-5 md:text-6xl">
             YOU HELP 
            </h1>
            <h1 className="pl-2 mb-3 text-3xl font-bold text-red-600 text-start md:mb-5 md:text-6xl">PEOPLE?</h1>
        </div>
        <div className="flex flex-wrap">   
         <p className="pr-2 mb-3 text-2xl font-bold text-black text-start md:mb-5 md:text-4xl">BECOME A </p>
         <p className="mb-3 text-2xl font-bold text-red-600 text-start md:mb-5 md:text-4xl">VOLUNTEER TODAY</p>
        </div>
            <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-700 md:mb-2 text-start md:text-3xl">We are a charity foundation in Kenya</span>
            <span className="font-bold text-gray-700 md:mb-1 text-start md:text-2xl">
            We help young needy children and families.
            </span>
            <span className="text-lg font-bold text-gray-700 text-start md:text-2xl">Join us to make a better society. </span>
            </div>
      <div className="flex mt-5 md:w-1/2">
        <div className="w-full bg-white">
       <Link href="/About"
        className="pt-5"
        >
       <h1 className='p-2 font-bold text-center bg-white border-2 border-black rounded text-slate-900 flex-center w-28 hover:text-white hover:bg-gray-700'>Learn More</h1>
      </Link>
      </div>  
      </div>       
        </div>
    </section>
    </div>
  )
}

export default Section