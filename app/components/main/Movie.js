import React from 'react'
import Card from '../UI/Card'

export default function Movie({movies}) {
  return (
<div className=' mx-10 dark:bg-gray-700 '>
  {movies.map((movie) => (
    <Card key={movie.id} movie={movie} />
  ))}
</div>

  )
}
