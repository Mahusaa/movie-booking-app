import React from 'react'
import Card from '../UI/Card'

export default function Home({children}) {
  return (
    <div className='w-90 mx-auto max-w-40rem p-12 my-8 text-center'>Movie {children}</div>
  )
}
