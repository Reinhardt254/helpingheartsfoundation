import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex-col sm:flex-row md:flex'>
        <div className='flex flex-col items-center justify-center p-4 mx-2 mt-3 bg-white rounded md:w-1/4 justify-items-center'>
            <div className='flex justify-center'> 
            <Image 
             src={"/assets/photos/pic1.jpg"}
             width={150}
             height={150}
             alt="profile"
             className='rounded-full'
            />
            </div>
            <h1>''</h1>
            <p>We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ</p>
            <h1>''</h1>
        </div>

        <div className='flex flex-col items-center justify-center p-4 mx-2 mt-3 bg-white rounded md:w-1/4 justify-items-center'>
        <div className='flex justify-center'> 
            <Image 
             src={"/assets/photos/pic1.jpg"}
             width={150}
             height={150}
             alt="profile"
             className='rounded-full'
            />
            </div>
            <h1>..</h1>
            <p>We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ</p>
            <h1>..</h1>
        </div>

        <div className='flex flex-col items-center justify-center p-4 mx-2 mt-3 bg-white rounded md:w-1/4 justify-items-center'>
        <div className='flex justify-center'> 
            <Image 
             src={"/assets/photos/pic1.jpg"}
             width={150}
             height={150}
             alt="profile"
             className='rounded-full'
            />
            </div>
            <h1>''</h1>
            <p>We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ</p>
            <h1>''</h1>
        </div>  
          
        <div className='flex flex-col items-center justify-center p-4 mx-2 mt-3 bg-white rounded md:w-1/4 justify-items-center'>
        <div className='flex justify-center'> 
            <Image 
             src={"/assets/photos/pic1.jpg"}
             width={150}
             height={150}
             alt="profile"
             className='rounded-full'
            />
            </div>
            <h1>''</h1>
            <p>We are a charity foundation in Kenya, we help young needy children and families, join us to make a better societ</p>
            <h1>''</h1>
        </div>
    </div>
  )
}

export default Testimonials









// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import {signIn, signOut, useSession, getProviders} from "next-auth/react";

// const Nav = () => {
  
//   const isUserLoggedIn = true;
  
//   const [providers, setProviders] = useState(null)
//   const [toggleDropDown, setToggleDropDown] = useState(false)
  
//   useEffect(() => {
//     const setProviders = async () => {
//       const response = await getProviders() 

//       setProviders(response)
//     }
//     setProviders()
//   }, [])
   
//   return (
//     <nav className="w-full pt-3 mb-16 flex-between" >
//       <Link href="/" className="gap-2 flex-center">
//         <Image 
//           src="/assets/images/logo.svg"
//           alt="premptopia"
//           width={30}
//           height={30}
//           className="object-contain"
//         />
//         <p className="logo_text">Promptopia</p>
//       </Link>
      
//       {/* {Mobile Navigation} */}
//       <div className="hidden sm:flex">
//         {isUserLoggedIn ? (
//           <div className="flex gap-3 md:gap-5">
//             <Link href="/create-prompt"
//              className="black_btn"
//             >
//               Create Post
//             </Link>

//             <button 
//             type="button"
//             onClick={signOut}
//             className="outline_btn"
//             >
//               Sign Out
//             </button>
//             <Image
//               src="/assets/images/logo.svg"
//               width={37}
//               height={37}
//               className="rounded-full"
//               alt="profile"
//             />
//           </div>
//         ) : (
//           <>
//           {providers && object.values(providers).map((provider)=>(
//             <button
//              type="button"
//              key={provider.name}
//              onClick={()=> signIn(provider.id)}
//              className="black_btn"
//             >
//             </button>
//           ))}
//           </>
//         )}
//       </div>
//       {/* Mobile Navigation */}
//       <div className="relative flex sm:hidden">
//         {isUserLoggedIn ? (
//           <div className="flex">
//             <Image
//               src="/assets/images/logo.svg"
//               width={37}
//               height={37}
//               className="rounded-full"
//               alt="profile"
//               onClick={()=> setToggleDropDown((prev)=>!prev)}
//               />
//               {toggleDropDown && (
//                 <div className="dropdown">
//                   <Link
//                    href="/profile"
//                    className="dropdown_link"
//                    onClick={() => setToggleDropDown(false)}
//                   >
//                     my profile
//                   </Link>
//                   <Link
//                    href="/profile"
//                    className="dropdown_link"
//                    onClick={() => setToggleDropDown(false)}
//                   >
//                     Create Prompt
//                   </Link>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setToggleDropDown(false);
//                       signOut();
//                     }}
//                     className="w-full mt-5 black_btn"
//                   >
//                     Sign Out
//                   </button>
//                 </div>
//               )}
//           </div>         
//         ) : 
//         (
//           <>
//           {providers && object.values(providers).map((provider)=>(
//             <button
//              type="button"
//              key={provider.name}
//              onClick={()=> signIn(provider.id)}
//              className="black_btn"
//             >
//             </button>
//           ))}
//           </>
//         )
//         }
//       </div>
//     </nav>
//   )
// }

// export default Nav































