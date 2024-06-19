'use client'
import Carousel from "@/components/Carousel";
import MovieContainer from "@/components/MovieContainer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { GetPopularMovies,GetTopRatedMovies,GetUpcomingMovies,NowPlayingMovies } from "@/lib/getmovies";
import { useEffect, useState } from "react";


export default function Home() {
  const [nowPlaying,setNowPlaying]=useState([])
  const [TopRated,setTopRated]=useState([])
  const [PopularMovie,setPopularMovie]=useState([])
  const [UpcomingMovie,setUpcomingMovie]=useState([])

  const fetchdata = async()=>{
    const NowPlayingMovie = await NowPlayingMovies()
    setNowPlaying(NowPlayingMovie)
    const TopRatedMovies =await GetTopRatedMovies()
    setTopRated(TopRatedMovies)
    const PopularMovies =await GetPopularMovies()
    setPopularMovie(PopularMovies)
    const UpcomingMovies =await GetUpcomingMovies()
    setUpcomingMovie(UpcomingMovies)

  }

  useEffect(()=>{
   fetchdata()
  },[])
  

      console.log(nowPlaying)
      
  return (
   <main className=" bg-[#090808fe] relative">
    <div>
    <Carousel/>
    </div>
    <div className="flex flex-col   py-7 space-y-5 ">

    <MovieContainer movies={nowPlaying} title="Now Playing"/>
    <MovieContainer movies={TopRated} title="Top Rated"/>
    <MovieContainer movies={PopularMovie} title="Popular Movies"/>
    <MovieContainer movies={UpcomingMovie} title="Upcoming Movies"/>
   

    </div>
   
   </main>
  );
}
