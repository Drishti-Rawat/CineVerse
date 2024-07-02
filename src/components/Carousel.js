'use client'
import React, {  useEffect, useState } from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/GetImagePath'
import { DiscoverMovies } from '@/lib/getmovies'
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";



const Carousel = () => {
    const [DiscoveredMovie,setDiscoverMovies]=useState([])

    const fetchMovies = async () => {
        const movies = await DiscoverMovies()
        setDiscoverMovies(movies)  // Access the results property from the fetched data
    }

    useEffect(()=>{
        fetchMovies()
    },[])

    // console.log(DiscoveredMovie)

  
    const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoPlay()]);
    return (
<div className="overflow-hidden cursor-pointer relative " ref={emblaRef}>
      <div className="flex">
        {DiscoveredMovie.map((movie) => (
          <div key={movie?.id} className="flex-grow-0 flex-shrink-0 basis-full  min-w-0 relative">
            <Image
              src={getImagePath(movie?.backdrop_path, true)}
              alt={movie?.title}
              width={1920}
              height={1080}
            />
            <div className="sm:inline absolute top-0 pt-24 sm:pt-40 xl:pt-72 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-black/50 to-black/45 p-10 space-y-5 text-white">
              <h2 className="text-xl sm:text-6xl font-bold max-w-xl">{movie?.title}</h2>
              <p className="sm:max-w-xl text-sm lg:text-lg line-clamp-3">{movie?.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 dark:to-[#121212]" />
    </div>
    );

}

export default Carousel
