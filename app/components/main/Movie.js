import React from "react";
import Card from "../UI/Card";
import Image from "next/image";
import MovieCard from "../UI/MovieCard";

export default function Movie({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {movies.map((movie) => (
        <Card
          className="wrapper bg-gray-400 antialiased text-gray-900 group"
          key={movie.id}
        >
          <div className="relative group overflow-hidden">
            <div className="relative">
              <Image
                className="rounded-lg"
                src={movie.poster_url}
                alt="movie"
                width={500}
                height={800}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
            </div>
            <MovieCard
              title={movie.title}
              price={movie.ticket_price}
              release={movie.release_date}
              age={movie.age_rating}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
