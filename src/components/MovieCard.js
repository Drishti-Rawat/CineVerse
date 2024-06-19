'use client'
import Image from 'next/image'
import React from 'react'
import { getImagePath } from '@/lib/GetImagePath'

const MovieCard = ({poster_path}) => {
  return (
    <div className=' h-[150px] w-[170px] bg-blue-800'>
        
        <Image src={getImagePath(poster_path,true)} alt='posterpath' width={2000} height={2900} className=' object-contain'/>
       
      
    </div>
  )
}

export default MovieCard
