'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import {  GetSearchMovie } from '@/lib/getmovies'
import { useState,useEffect } from 'react'
import MovieCard from '@/components/MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const page = () => {
  const param = useParams();
  const [movies, setMovies] = useState([]);
  const [page ,setPage] = useState(1)
  const [hasMore,sethasMore] = useState(true)
  const [totalresults , setTotalresults] = useState(0)
  const [isloading,setisloading] = useState(false)

  const fetchMore = async()=>{
    if(movies.length<totalresults){
      setPage(prevpage=>prevpage+1)
    }
    else{
      sethasMore(false)
    }
  }

  const fetchMovies = async () => {
    setisloading(true)
    const movieData = await GetSearchMovie(param.searchparam,page);
    setMovies(prevmovies=>[...prevmovies,...movieData.results]);
    setTotalresults(movieData.total_results)
    setisloading(false)
    console.log(movieData);
    
  };

  useEffect(() => {
    setMovies([])
    setPage(1)
    sethasMore(true)
}, [param.searchparam])

useEffect(() => {
  fetchMovies()
}, [page, param.searchparam])

  console.log(movies)
  
  return (
    <div className='   overflow-hidden  '>

<InfiniteScroll
      dataLength={movies.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={"....loading"}
      >
    <div className='flex flex-col sm:flex-row flex-shrink flex-wrap gap-4 px-10 mx-2 mt-6 py-10 items-center justify-center'>

      {
        movies.length>0?(
          movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))
        ):
        (
          <div>No Data to fetch</div>
        )
      }

    </div>
</InfiniteScroll>
    
    
  </div>
  )
}

export default page
