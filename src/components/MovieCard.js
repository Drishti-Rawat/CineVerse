'use client'
import Image from 'next/image'

import { getImagePath } from '@/lib/GetImagePath'

import { ChevronDown, PlayIcon, PlusCircle, ThumbsUp } from 'lucide-react'
import React, { useState, useEffect,useRef } from 'react'
import { getMovieGenerList } from '@/lib/getmovies'
import { useRouter } from 'next/navigation'
import { useDispatch,useSelector } from 'react-redux'
import { AddToMyList } from '@/Store/MylistSlice'



const MovieCard = ({movie}) => {
  const [genres, setGenres] = useState([]);
  const hoverTimeoutRef = useRef(null);
  const router = useRouter()
  // const Dispatch = useDispatch()

  // const mylist = useSelector((state)=>state.movies)
  // console.log("mylist",mylist)

  const fetchGenres = async () => {
    const genreList = await getMovieGenerList();
    setGenres(genreList);
  };

  useEffect(() => {
  
    fetchGenres();
  }, []);

  // console.log(genres)

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

  const handleOnCLick = (id)=>{
    router.push(`/movie/${id}`)
  }

  const NavigateToGener = (id)=>{
    router.push(`/gener/${id}`)
  }

  // const handleAddToList = (id)=>{
  //   Dispatch(AddToMyList(id))
  // }

  return (
   
    <div 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className= {`${isHovered?"z-20   ":"z-10"  }   relative  bg-blue-500 rounded-lg    `}
  >
  

  
      <div className="rounded-lg relative   bg-[#040303fa] w-[250px] transition-all duration-300">
      <Image 
        src={getImagePath(movie.backdrop_path, false)} 
        alt='posterpath' 
        width={2000} 
        height={1000} 
        className={`object-cover rounded-lg  cursor-pointer opacity-70`}
      />

      <h2 className='absolute text-white bottom-0 left-2 py-2 text-sm font-semibold'>{movie.title}</h2>
    </div>
    

    {isHovered && (
      <div className="absolute -top-10 shadow-rose-700  -left-5 z-50  bg-[#040303fa] rounded-lg shadow-md transform w-[300px]  scale-110 ">
        <Image 
          src={getImagePath(movie.backdrop_path, false)} 
          alt='posterpath' 
          width={2000} 
          height={1000} 
          className="object-contain rounded-t-lg cursor-pointer"
        />
        <div className='text-white px-3 pb-4 pt-2 flex flex-col gap-1.5'>
          <h2 className='sm:text-lg text-md font-semibold cursor-pointer'>{movie.title}</h2>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <span className='border rounded-full bg-white'>
                <PlayIcon size={24} fill='black' className='cursor-pointer' />
              </span>
              <PlusCircle size={25} fill='black' className='cursor-pointer' onClick={()=>handleAddToList(movie.id)} />
              <ThumbsUp size={20} fill='black' className='cursor-pointer' />
            </div>
            <div className='border border-[#393838] bg-[#393838] rounded-full' onClick={() => handleOnCLick(movie.id)}>
              <ChevronDown className='cursor-pointer'/>
            </div>
          </div>
          <div className='flex flex-wrap gap-1 flex-shrink space-x-1 mt-2'>
            {genreNames?.map((genre, index) => (
              <h2 key={index} className='text-[14px] text-[#fff] flex '>
                <span className='text-gray-500'>{index > 0 && '• '}</span>
                <span className='pl-1 cursor-pointer' onClick={()=>NavigateToGener(genre.id)}>{genre.name}</span>
              </h2>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default MovieCard
