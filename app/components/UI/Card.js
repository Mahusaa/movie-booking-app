import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Card({movie}) {
  return (
<div className="rounded-lg shadow-md bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-700 w-20 h-30">
  <a href="#">
    <Image src={movie.poster_url} alt="movie" width={400} height={600} className='m-1 mx-1'/>
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
    </a>
    <div className="flex items-center justify-between">
      <span className=" font-bold text-gray-900 dark:text-white">$599</span>
      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Ticket</a>
    </div>
  </div>
</div>

  )
};

