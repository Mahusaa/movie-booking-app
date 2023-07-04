"use client";
import ButtonBlue from "@/app/components/UI/ButtonBlue";
import React, { useEffect, useState } from "react";
import getMovies from "../../api/getMovie";
import Loading from "../../loading";
import Link from "next/link";

export default function Page({ params }) {
  const movieName = Object.values(params)[0];
  const [movies, setMovies] = useState(null);
  const movie = movies
    ? movies.find(
        (movie) =>
          movie.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w\s]/g, "")
            .replace(/\s+/g, "-") === movieName
      )
    : null;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getMovies();
        setMovies(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  if (!movies) {
    return <Loading />;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="m-20">
      <div>
        <div className="flex bg-color-red mx-auto max-w-xl shadow-lg rounded-lg overflow-hidden m-8">
          <div
            className="w-1/3 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${movie.poster_url})` }}
          ></div>
          <div className="w-2/3 p-4 bg-color-red">
            <h1 className="text-gray-900 font-bold text-2xl">{movie.title}</h1>
            <p className="mt-2 text-gray-600 text-sm">{movie.description}</p>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">
                ${movie.ticket_price}
              </h1>
              <ButtonBlue>
                <Link href={`/movie-details/${movieName}/booking`} >Book Ticket</Link>
              </ButtonBlue>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
