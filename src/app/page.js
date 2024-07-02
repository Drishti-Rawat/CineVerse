'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [email,setEmail] = useState("")
  const router = useRouter()

  const handleGetStartButton = (mail)=>{
    router.push(`/signin/${mail}`)

  }

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

        <div className="absolute  top-0 z-20   flex items-center justify-center  min-h-[100vh] w-screen text-white">
          <div className="  flex flex-col  gap-4  ">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-6xl font-bold py-2">
                Welcome To{" "}
                <span className="bg-blue-700/70 px-1">
                  Cine<span className="">Verse</span>
                </span>
              </h2>
              <h2 className="py-3 text-5xl font-extrabold">
                Discover your favorite movies all in one place.
              </h2>
            </div>
            <div className="py-7 flex  gap-3 justify-center  text-white">
              <input
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
                placeholder="Email Address"
                className="w-[35%]  px-3 placeholder:text-slate-300  text-md rounded-lg outline-none ring-1 ring-slate-300 focus:ring-blue-300 bg-[#e7e2e232]"
              />
              <button onClick={()=>handleGetStartButton(email)} class="relative inline-flex items-center justify-center   font-bold   overflow-hidden text-lg text-white rounded-lg group  bg-[#e7e2e232] hover:bg-gradient-to-br  hover:from-cyan-500 px-5  hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-3 transition-all ease-in duration-75   dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black/70 dark:to-[#121212]" />
      </div>
    </section>
  );
};

export default page;
