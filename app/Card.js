import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Card({movie}) {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-70'><Link href="/details"><Image src={movie.poster_url} alt="movie"
    width="500" 
    height="800">

    </Image></Link></div>
  )
}
