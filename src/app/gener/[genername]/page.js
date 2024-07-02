'use client'
import React, { useEffect, useState } from 'react'
import {GetmoviesforGener } from '@/lib/getmovies'
import { useParams } from 'next/navigation'
import MovieCard from '@/components/MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const page = () => {
    const param = useParams()
    const [page ,setPage] = useState(1)
    const [hasMore,sethasMore] = useState(true)
    const [totalresults , setTotalresults] = useState(0)
    const [isloading,setisloading] = useState(false)
    console.log(param)
    const [genermovies,setGenerMovies]= useState([])

    const fetchMore = async()=>{
      if(genermovies.length<totalresults){
        setPage(prevpage=>prevpage+1)
      }
      else{
        sethasMore(false)
      }
    }

    const fetchMoviesforGener = async()=>{
      setisloading(true)
      const movies = await GetmoviesforGener(param.genername,page)
      setGenerMovies(prevmovies =>[...prevmovies,...movies.results])
      setTotalresults(movies.total_results)
      setisloading(false)
    }

    useEffect(() => {
      setGenerMovies([])
      setPage(1)
      sethasMore(true)
  }, [param.genername])

  useEffect(() => {
    fetchMoviesforGener()
}, [page, param.genername])

   
    

  return (
    <div className='   overflow-hidden   '>

      <InfiniteScroll
      dataLength={genermovies.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={"....loading"}
      >

    <div className='flex flex-col lg:flex-row flex-shrink flex-wrap gap-4 px-11 mx-2.5 mt-6 py-14 items-center justify-center'>

      {
        genermovies.length>0?(
          genermovies.map((movie)=>(
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
