'use client'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import GenreDropdown from './GenreDropdown'
import SearchBox from './SearchBox'
import { useParams } from 'next/navigation'

const Navbar = () => {

    const user = true
    const pathname = useParams()
    
  return (
    <nav className={`  sticky ${pathname==='/'?"bg-transparent": "bg-black/70"} z-[100] h-14 inset-x-0  text-white top-0 w-full border-b  backdrop-blur-lg transition-all`}>

        <MaxWidthWrapper>
            <div className='flex h-16 items-center justify-between  border-zinc-200'>

                <Link href="/" className='flex text-2xl  z-40 font-semibold'>
                Cine<span className='text-blue-400'>Verse</span>
                </Link>
                

                <div className='h-full flex items-center space-x-4'>
                    {
                        user?(
                            <>

                            <GenreDropdown/>

                            <SearchBox/>
                            
                            </>
                           
                        ):(<>
                        <Link href="/login">Log IN</Link>
                        </>)
                    }

                </div>

            </div>
        </MaxWidthWrapper>
      
    </nav>
  )
}

export default Navbar
