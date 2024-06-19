'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MovieCard from './MovieCard'
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { useCallback,useState,useEffect } from 'react'
import { useRef } from 'react'

const MovieContainer = ({movies,title}) => {
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onInit = useCallback((embla) => {
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(true);
  }, []);

  const onSelect = useCallback((embla) => {
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('init', onInit);
    emblaApi.on('select', onSelect);
    onInit(emblaApi);
  }, [emblaApi, onInit, onSelect]);

  const handlePrevClick = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNextClick = () => {
    if (emblaApi) emblaApi.scrollNext();
  };
  

  return (
    <div className='flex flex-col -mt-4 sm:-mt-20 z-30 text-white  overflow-x-hidden '>

      <div className='mx-10 px-2 flex justify-between items-center  '>
        <h2 className='text-lg underline underline-offset-8 decoration-rose-700 tracking-wider py-1 font-semibold  ' >{title}</h2>

        <Link href="/ViewMore">
        {/* <ArrowRight/> */} view more
        </Link>
      </div>


    
<div ref={emblaRef} className=' relative py-20 '>
      <div className='flex  space-x-6 flex-nowrap px-5 lg:px-10 '>
    
      
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
           
            <MovieCard key={movie.id} movie={movie} />
            
          ))
        ) : (
          <div>
            <h2>no card to show</h2>
          </div>
        )}
        
      </div>

      <div className='absolute top-[179.5px] left-0 flex items-center  transform -translate-y-1/2 bg-[#00000098] h-[70%] z-40  px-7  '
      onClick={handlePrevClick}
      disabled={!prevBtnEnabled}
      >
      <button
        className="  "
        
      >
        <ArrowLeft className="w-6 h-7 text-white" />
      </button>
      </div>

      <div className='bg-[#00000098] absolute top-[179.5px] flex items-center transform -translate-y-1/2 h-[70%]  right-0 z-40 px-7   '
          onClick={handleNextClick}
          disabled={!nextBtnEnabled}
      >
      <button
        className="  "
      >
        <ArrowRight className="w-6 h-7 text-white" />
      </button>
      </div>
      </div>


    </div>
  )
}

export default MovieContainer
