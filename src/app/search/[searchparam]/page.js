'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const param = useParams()
    console.log(param)
  return (
    <div>
      
    </div>
  )
}

export default page
