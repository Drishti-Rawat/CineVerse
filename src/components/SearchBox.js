"use client";
import React, { useEffect, useState } from "react";
import { searchMoviesWithKeyword } from "@/lib/getmovies";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
    const [searchParam, setSearchparam] = useState("")
    const router = useRouter()
  

  useEffect(()=>{
   const interval = setInterval(()=>{
    if (searchParam.trim() !== "") {
        router.push(`/search/${searchParam}`);
      }
   },500)
   return () => clearTimeout(interval);

  },[searchParam,router])

  return (
    <form  className="flex items-center  px-2 focus-within::outline focus-within::outline-1 focus-within::outline-red-500  ">
      <input
        type="text"
        placeholder="Title,Shows,Movies"
        className=" px-4  bg-transparent outline-none placeholder:text-sm  text-white py-1.5"
        value={searchParam}
        onChange={(e)=>setSearchparam(e.target.value)}

      />
      <Search />
    </form>
  );
};

export default SearchBox;
