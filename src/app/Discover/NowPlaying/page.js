'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import { NowPlayingMovies } from '@/lib/getmovies';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '@/components/MovieCard';

const page = () => {
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
      const movieData = await NowPlayingMovies(page);
      setMovies(prevmovies=>[...prevmovies,...movieData.results]);
      setTotalresults(movieData.total_results)
      setisloading(false)
      console.log(movieData);
      
    };
  
  
  
  useEffect(() => {
    fetchMovies()
  }, [page])
  
    
    
    return (
      <div className='   px-4  '>
        <h2>Now Playing</h2>

  
  <InfiniteScroll
        dataLength={movies.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={"....loading"}
        >
      <div className='flex flex-col sm:flex-row flex-shrink flex-wrap gap-4 px-7 my-5 overflow-hidden   py-20 items-center justify-center'>
  
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
