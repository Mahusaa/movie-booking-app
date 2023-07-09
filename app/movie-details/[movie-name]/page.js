"use client";
import React, { useEffect, useState } from "react";
import getMovies from "../../api/getMovie";
import Loading from "../../loading";
import Link from "next/link";
import Image from "next/image";
import LimeButton from "@/app/components/UI/LimeButton";
import { RxCalendar } from "react-icons/rx";

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
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center blur brightness-50  "
        style={{
          backgroundImage: `url(${movie.poster_url})`,
          zIndex: -1,
        }}
      ></div>
      <div className="flex items-center mx-auto">
        <Image
          className="rounded-lg"
          src={movie.poster_url}
          alt="movie"
          width={280}
          height={380}
        />
        <div className="ml-4">
          <h1 className="text-6xl font-serif font-semibold text-lime-500">
            {movie.title}
          </h1>
          <h4 className="flex mt-10">
            <span className="text-black bg-white border-1 px-1 font-semibold rounded-sm">
              Movie
            </span>
            <span className="text-white border-2 border-white ml-2 text-sm px-1 rounded-sm">
              HD
            </span>
            <span className="text-white border-2 border-white ml-2 text-sm px-1 rounded-sm">{`${movie.age_rating}+`}</span>
            <span className="text-lime-500 text-2xl ml-4">
              <RxCalendar />
            </span>
            <span className="text-white  ml-2 font-semibold">
              {movie.release_date}
            </span>
          </h4>
          <div className="bg-neutral-700 bg-opacity-40 rounded-2xl px-10 py-5 my-5 flex">
            <h1 className="text-xl mt-1 mr-4 text-lime-500 font-bold">{`Rp.${movie.ticket_price}`}</h1>
            <Link href={`/movie-details/${movieName}/booking`}>
            <LimeButton>BOOK TICKET</LimeButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
