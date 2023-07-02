import React from 'react'
import Link from 'next/link'
import Navigation from './Navigation'

export default function  MainHeader () {
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-gray-600 px-8'>   <Link href="/" className="flex items-center">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      <h2 className="text-2xl">
        <span className="font-bold bg-blue-700 py-1 px-2 rounded-lg mr-1">US</span>
        <span>lify</span>
      </h2>
    </span>
  </Link>
  <Navigation />
  </header>
  )
}
