"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { getMovieGenerList } from "@/lib/getmovies";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

import React, { useEffect, useState } from "react";

const GenreDropdown = () => {
  const [genrelist, setgenrelist] = useState([]);

  const router = useRouter()

  const generateList = async () => {
    try {
      const genre = await getMovieGenerList();

      setgenrelist(genre);
    } catch (error) {
      console.log("error fetching gener list ", error);
    }
  };
//   console.log(genrelist);

  useEffect(() => {
    generateList();
  }, []);

  const handleOnclick = (genername)=>{
    router.push(`/gener/${genername}`)
  }

  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger className="text-white flex px-2 py-1.5  items-center text-sm font-medium bg-[#010103f6]">
        Genre <ChevronDown className="ml-1" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#000000c8] mt-5 mr-6   border border-black text-white">
        <DropdownMenuLabel className="px-6">Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {genrelist ? (
          genrelist.map((genre) => (
            <DropdownMenuItem key={genre.id} onClick={() => handleOnclick(genre.id)} >
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {" "}
                {genre.name}{" "}
              </Link>

            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem>Loading...</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
