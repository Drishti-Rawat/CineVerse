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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const onInit = useCallback((embla) => {
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
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
    <div className='flex flex-col text-white pb-4'>

      <div className='mx-10 px-2 flex justify-between items-center py-1 '>
        <h2 className='text-sm tracking-wider py-1 font-semibold  ' >{title}</h2>

        <Link href="/ViewMore">
        {/* <ArrowRight/> */} view more
        </Link>
      </div>


    
<div ref={emblaRef} className=' relative overflow-hidden'>
      <div className='flex space-x-4 flex-nowrap px-5 lg:px-10 py-5 '>
    
      
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div className='w-80 mr-4'>
            <MovieCard key={movie.id} poster_path={movie?.poster_path} />
            </div>
          ))
        ) : (
          <div>
            <h2>no card to show</h2>
          </div>
        )}
        
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2"
        onClick={handlePrevClick}
        disabled={!prevBtnEnabled}
      >
        <ArrowLeft className="w-4 h-4 text-white" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2"
        onClick={handleNextClick}
        disabled={!nextBtnEnabled}
      >
        <ArrowRight className="w-4 h-4 text-white" />
      </button>
      </div>


    </div>
  )
}

export default MovieContainer
