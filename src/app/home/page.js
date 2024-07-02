'use client'
import Carousel from "@/components/Carousel";
import MovieContainer from "@/components/MovieContainer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { GetPopularMovies,GetTopRatedMovies,GetUpcomingMovies,NowPlayingMovies } from "@/lib/getmovies";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [nowPlaying,setNowPlaying]=useState([])
  const [TopRated,setTopRated]=useState([])
  const [PopularMovie,setPopularMovie]=useState([])
  const [UpcomingMovie,setUpcomingMovie]=useState([])
  const router= useRouter()

  const fetchdata = async()=>{
    const NowPlayingMovie = await NowPlayingMovies(1)
    setNowPlaying(NowPlayingMovie.results)
    const TopRatedMovies =await GetTopRatedMovies(11)
    setTopRated(TopRatedMovies.results)
    const PopularMovies =await GetPopularMovies(1)
    setPopularMovie(PopularMovies.results)
    const UpcomingMovies =await GetUpcomingMovies(1)
    setUpcomingMovie(UpcomingMovies.results)

  }

  useEffect(()=>{
   fetchdata()
  },[])
  

      // console.log(nowPlaying)
      
  return (
   <main className=" ">

   {/* <Navbar/> */}
    <div className="">

    <Carousel/>
    </div>
    <div className="flex flex-col sm:-mt-20 overflow-hidden pt-6  pb-20 space-y-5 ">

    <MovieContainer movies={nowPlaying} title="Now Playing" onclick={()=>router.push("/Discover/NowPlaying")}/>
    <MovieContainer movies={TopRated} title="Top Rated" onclick={()=>router.push("/Discover/Top-Rated")} />
    <MovieContainer movies={PopularMovie} title="Popular Movies" onclick={()=>router.push("/Discover/Popular")} />
    <MovieContainer movies={UpcomingMovie} title="Upcoming Movies" onclick={()=>router.push("/Discover/UpComing")} />
   

    </div>
   
   </main>
  );
}
