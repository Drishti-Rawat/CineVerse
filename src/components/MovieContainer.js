'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MovieCard from './MovieCard'
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { useCallback,useState,useEffect } from 'react'
import { useRef } from 'react'

const MovieContainer = ({movies,title,onclick}) => {
  
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
    <div className={`flex flex-col   text-white     `}>

      <div className='mx-10 px-2 flex justify-between items-center   '>
        <h2 className='text-lg underline underline-offset-8 decoration-rose-700 tracking-wider py-1  font-semibold z-0  ' >{title}</h2>

        <h2 className='z-0 cursor-pointer' onClick={onclick} >
        {/* <ArrowRight/> */} view more
        </h2>
      </div>


    
<div ref={emblaRef} className=' relative py-6 '>
      <div className='flex  space-x-3 flex-nowrap px-5 lg:px-10  '>
    
      
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

      <div className='absolute top-28 left-0 flex items-center  transform -translate-y-1/2 bg-[#15131398] h-[81%] z-40  px-7    '
      onClick={handlePrevClick}
      disabled={!prevBtnEnabled}
      >
     
        <ArrowLeft className="w-6 h-7 text-white" />
     
      </div>

      <div className='absolute top-28 right-0 flex items-center  transform -translate-y-1/2 bg-[#15131398] h-[81%] z-40  px-7   '
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
