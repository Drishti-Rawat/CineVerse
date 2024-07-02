'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams() 
    const [email,setEmail] = useState(params.mail)
  

  return (
   <section className="overflow-hidden relative flex flex-col  ">
      <div>
        <div className="h-screen w-screen bg-blue-400 ">
          <Image
            src="/landing-bg.jpg"
            alt="landign img"
            width={2500}
            height={2500}
            className="object-cover w-full h-full "
          />
        </div>
        <div className="absolute top-0   left-0 inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black/70 dark:to-[#121212]" />

        <div className="absolute  top-0 z-20   py-6  flex   justify-center h-screen   w-screen text-white">
        <div className="text-white w-full  py-10  overflow-hidden  flex justify-center  ">
      <div className=" bg-[#030212b2]  px-10 py-16 flex flex-col gap-4 justify-center i  content-center  ">
        <div className="flex flex-col justify-center items-center gap-2 px-5">
          <h2 className="text-4xl font-bold">Welcome back !</h2>
          <p className="text-[13px] ">
            Enter to get unlimited access to data and information
          </p>
        </div>
        <div className="px-2 mt-3 py-2">
          <form action="">
            <div className="flex flex-col py-3 gap-5">
              <input
                type="email"
                id="name"
                value={email}
                name="name"
                placeholder="Email Address"
                className="bg-transparent border-b py-1.5 px-2 mx-2 outline-none placeholder:text-sm"
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="bg-transparent border-b py-1.5 px-2 mx-2 outline-none placeholder:text-sm"
                required
              />

              <button className="bg-blue-500 rounded-full py-1 mt-2" >
                Log In
              </button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-row items-center justify-center gap-1">
              <span className="bg-[#dbdbdb]  rounded-full px-16 py-[1px]"></span>
              <div className="px-2 text-white font-semibold text-sm">OR</div>
              <span className="bg-[#dbdbdb] px-16 rounded-full py-[1px] "></span>
            </div>

            <div class="mx-10 grid space-y-4">
<button
    class="group h-12 px-6 border-2 border-slate-300 rounded-full transition duration-300 hover:border-purple-950 focus:bg-purple-950 active:bg-purple-800">
    <div class="relative flex items-center space-x-4 justify-center">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg"
            class="absolute left-0 w-5" alt="google logo"/>
        <span
            class="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-pink-600 sm:text-base">Continue
            with Google
        </span>
    </div>
</button>
<button 
    class="group h-12 px-6 border-2 border-slate-300 rounded-full transition duration-300  hover:border-purple-950 focus:bg-purple-950 active:bg-purple-800">
    <div class="relative flex items-center space-x-4 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            class="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
            </path>
        </svg>
        <span
            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition dark:text-white duration-300  group-hover:text-pink-600 sm:text-base">Continue
            with Github
        </span>
    </div>
</button>
</div>
       
      </div>
    </div>
        </div>
      </div>
    </section>
  )
}

export default page
