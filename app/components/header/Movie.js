import React from 'react'
import Card from '../../Card'

export default function Movie({movies}) {
  return (
<div className='sm:grid sm:grid-cols-2 lg:grid-cols-4 mx-auto py-4 justify-center items-center'>
  {movies.map((movie) => (
    <Card key={movie.id} movie={movie} />
  ))}
</div>

  )
}
