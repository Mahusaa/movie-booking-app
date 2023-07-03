"use client"
import ButtonBlue from '@/app/components/UI/ButtonBlue';
import React, { useEffect, useState } from 'react';

async function getMovie(id) {
  const res = await fetch("https://seleksi-sea-2023.vercel.app/api/movies");

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const movies = await res.json();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    throw new Error('Movie not found');
  }
  console.log(movie)
  return movie;
}

export default function Page({ params }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(params.id)
      .then((result) => {
        setMovie(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);
  console.log(params.id)

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='m-20'>
      <div >
        <div className="flex bg-color-red mx-auto max-w-xl shadow-lg rounded-lg overflow-hidden m-8">
          <div className="w-1/3 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${movie.poster_url})` }}>
          </div>
          <div className="w-2/3 p-4 bg-color-red">
            <h1 className="text-gray-900 font-bold text-2xl">{movie.title}</h1>
            <p className="mt-2 text-gray-600 text-sm">{movie.description}</p>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">${movie.ticket_price}</h1>
              <ButtonBlue>Book Ticket</ButtonBlue>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



