"use client";
import React, { useEffect, useState } from "react";
import { searchMoviesWithKeyword } from "@/lib/getmovies";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
    const [searchParam, setSearchparam] = useState("")
    const router = useRouter()
  

    useEffect(() => {
      const handler = setTimeout(() => {
        if (searchParam.trim() !== "") {
          router.push(`/search/${searchParam}`);
        } else {
          router.push("/");
        }
      }, 500); // 500ms delay
  
      return () => clearTimeout(handler);
    }, [searchParam, router]);

 

  return (
    <form  className="flex items-center ring-1 ring-white bg-[#000000ad]     px-2 focus-within::outline focus-within::outline-1 focus-within::outline-red-500  ">
      <Search height={25} width={25} />
      <input
        type="text"
        placeholder="Title,Shows,Movies"
        className=" px-4  bg-transparent outline-none placeholder:text-sm  text-white py-2"
        value={searchParam}
        onChange={(e)=>setSearchparam(e.target.value)}

      />
      
    </form>
  );
};

export default SearchBox;
