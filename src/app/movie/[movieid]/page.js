'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GetRecommendation, GetSImilarMovies, GetmovieDetails } from '@/lib/getmovies'
import InfiniteScroll from 'react-infinite-scroll-component'

import MovieDetails from '@/components/MovieDetails'
import MovieCard from '@/components/MovieCard'

const page = () => {
    const [movieDetail , setMovieDetail] = useState()
    const [Recommendation,setRecommendation] = useState([])

    const params = useParams()
    const [page ,setPage] = useState(1)
  const [hasMore,sethasMore] = useState(true)
  const [totalresults , setTotalresults] = useState(0)
  const [isloading,setisloading] = useState(false)
    console.log(params.movieid)

    const fetchMore = async()=>{
        if(Recommendation.length<totalresults){
          setPage(prevpage=>prevpage+1)
        }
        else{
          sethasMore(false)
        }
      }

    const fetchMovieDetails = async()=>{
        const result = await GetmovieDetails(params.movieid)
        // console.log(result)
        setMovieDetail(result)

        const similarMoviveList = await GetSImilarMovies(params.movieid,page)
        const recommendationMovies = await GetRecommendation(params.movieid,page)
        const combinedMovieList = [...recommendationMovies.results,...similarMoviveList.results]
        // remove duplicated
        const NewCombinedMovieList = combinedMovieList.filter((movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id)
        )
        setRecommendation(NewCombinedMovieList)
    }

    useEffect(() => {
        setRecommendation([])
        setPage(1)
        sethasMore(true)
    }, [params.movieid])

    useEffect(()=>{
        fetchMovieDetails()
    },[params.movieid,page])

    console.log("result",movieDetail)
    

  return (
    <section className='px-5 py-4 text-white overflow-hidden'>
        
{movieDetail?(
     <MovieDetails details={movieDetail}/>
):(
    <div>Loading</div>
)
}

{/* Get recommendation */}

<div className='  flex flex-col justify-center   py-10'>
<h2 className='text-2xl  font-semibold px-10  border-b border-spacing-y-96 -mb-3'>More Like This</h2>

    <InfiniteScroll
      dataLength={Recommendation.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={"....loading"}
      >
        
<div className='flex flex-col lg:flex-row flex-shrink flex-wrap gap-4  py-10  my-6  mx-3 px-6    justify-center'>

 
{
  Recommendation.length>0?(
    Recommendation.map((movie)=>(
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
      
  
    </section>
  )
}

export default page
