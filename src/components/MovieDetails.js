'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/GetImagePath'

const MovieDetails = ({details}) => {


  const {title,genres,backdrop_path,vote_average,vote_count,tagline,status,release_date,overview} = details
  console.log(genres)
  // console.log("details",details)

 

  

  return (
  
     <div className='flex  lg:flex-row flex-col py-9 gap-5'> 

     <div className='flex-1.5 w-[100%]  lg:w-[40%]  h-full  '> 
       <Image src={getImagePath(backdrop_path?backdrop_path:null,false)} alt='image' width={4000} height={4000} className='object-cover w-full h-full'/>
     </div>

     <div className='flex-1 py-2  text-[12px] lg:text-[13px] xl:text-[15px] px-5 text-gray-200 flex flex-col gap-1 justify-center items-start'>

      <h2 className='text-3xl text-white font-bold pb-2 underline underline-offset-8 '>{title}</h2>
      <p className='py-2  '>{overview}</p>
      <h2>Rating: <span className='text-white'>{vote_average}</span></h2>
      <h2>Votes: <span className='text-white'>{vote_count}</span></h2>
      <h2>Release Date: <span className='text-white'>{release_date}</span></h2>
      <h2 className='flex space-x-3'>Gener:   {
        genres.map(gener=>(
          <span className='text-white'>{gener.name}</span>
        ))
        }
      </h2>
      <h2>Tagline: <span className='text-white'>{tagline}</span></h2>
      <h2>Status: <span className='text-green-600'>{status}</span> </h2>
    </div>
    </div>
  )
}

export default MovieDetails


