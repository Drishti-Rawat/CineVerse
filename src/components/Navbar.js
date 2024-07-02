'use client'
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import GenreDropdown from './GenreDropdown'
import SearchBox from './SearchBox'
import {  usePathname } from 'next/navigation'

const Navbar = () => {

    const user = false
    const pathname = usePathname()
    const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
    
  return (
    <nav className={`${(pathname === '/home' || pathname==="/" || pathname.startsWith==='/signin' || pathname==='/signin')  && scrollY === 0 ? 'bg-transparent shadow-navbar fixed ' : '  bg-black '} text-white fixed z-50 w-full transition-colors duration-300`}>
    <div className='flex items-center justify-between w-full px-16 py-5 border-zinc-200'>
      <Link href="/" className='flex text-2xl z-40 font-semibold'>
        Cine<span className='text-blue-400'>Verse</span>
      </Link>
      <div className='h-full flex items-center  space-x-5'>
        {user ? (
          <>
            <GenreDropdown />
            <SearchBox />

          </>
        ) : (
          <div>
          <Link href="/login">Log IN</Link>
          <Link href="/home">Home</Link>
          </div>
          
        )}
      </div>
    </div>
  </nav>
  )
}

export default Navbar
