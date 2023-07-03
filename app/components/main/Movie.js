import React from 'react';
import Card from '../UI/Card';
import Image from 'next/image';
import MovieCard from '../UI/MovieCard';

export default function Movie({ movies }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
      {movies.map((movie) => (
        <Card className="wrapper bg-gray-400 antialiased text-gray-900 group" key={movie.id}>
          <div className="relative group overflow-hidden">
            <Image className="rounded-lg" src={movie.poster_url} alt='movie' width={500} height={800} />
            <MovieCard title={movie.title} price={movie.ticket_price}/>
          </div>
        </Card>
      ))}
    </div>
  );
}
