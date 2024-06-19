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

import { ChevronDown } from "lucide-react";

import React, { useEffect, useState } from "react";

const GenreDropdown = () => {
  const [genrelist, setgenrelist] = useState([]);

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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex px-2 py-1.5 items-center text-sm font-medium bg-[#010103f6]">
        Genre <ChevronDown className="ml-1" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#000000f6] border border-black text-white">
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {genrelist ? (
          genrelist.map((genre) => (
            <DropdownMenuItem key={genre.id}>
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
