'use client'
import Image from 'next/image'

import { getImagePath } from '@/lib/GetImagePath'

import { ChevronDown, PlayIcon, PlusCircle, ThumbsUp } from 'lucide-react'
import React, { useState, useEffect,useRef } from 'react'
import { getMovieGenerList } from '@/lib/getmovies'

const MovieCard = ({movie}) => {
  const [genres, setGenres] = useState([]);
  const hoverTimeoutRef = useRef(null);

  const fetchGenres = async () => {
    const genreList = await getMovieGenerList();
    setGenres(genreList);
  };

  useEffect(() => {
  
    fetchGenres();
  }, []);

  console.log(genres)

  const getGenreNames = (genreIds) => {
    return genreIds.map(id => {
      const genre = genres.find(genre => genre.id === id);
      return genre ? genre: 'Unknown Genre';
    })
  };

  const genreNames = getGenreNames(movie.genre_ids);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={`${isHovered?"z-20   ":"z-10"  }  `}>
      
    <div 
    
    className={` ${isHovered?"w-[250px]  shadow-sm shadow-red-900   scale-x-150 scale-y-150 ":"h-[250px]     w-[170px]" }  transition-transform duration-300 ease-in-out transform    bg-[#040303fa]` }>
        
        <Image src={getImagePath(isHovered?movie.backdrop_path:movie.poster_path,false)} alt='posterpath' width={2000} height={2900} className={ "object-contain cursor-pointer"}/>

        {
          isHovered?(
            <div className='text-white px-3 pb-4 pt-2 flex flex-col gap-1.5'>
              <h2 className='sm:text-lg text-md font-semibold cursor-pointer'>{movie.title}</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                <span className=' border rounded-full bg-white'>
                <PlayIcon size={24} fill='black' className='cursor-pointer' />
                </span>
               
                <PlusCircle size={25} fill='black' className='cursor-pointer' />
             
                <ThumbsUp size={20} fill='black' className='cursor-pointer' />
                

                </div>

                <div>
               
                  <ChevronDown className='cursor-pointer'/>
                </div>
                

              </div>

              <div className='flex flex-wrap  gap-1 flex-shrink space-x-1 mt-2 '>
                {
                  genreNames?.map((genre,index)=>(
                    <h2 className='text-[12px] text-[#fff] flex cursor-pointer'>
                    <span className='text-gray-500'>  {index > 0 && '• '}</span>  
                    <span className='pl-1'>{genre.name}</span>
                 
                    </h2>
                  ))
                }
              </div>
            </div>
          ):
          (
            null
          )

        }

       
       
      
    </div>
    </div>
  )
}

export default MovieCard
