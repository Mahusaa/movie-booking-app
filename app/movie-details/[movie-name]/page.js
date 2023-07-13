"use client";
import React, { useEffect, useState } from "react";
import getMovies from "../../api/getMovie";
import Loading from "../../loading";
import Link from "next/link";
import Image from "next/image";
import LimeButton from "@/app/components/UI/LimeButton";
import { RxCalendar } from "react-icons/rx";
import { MdEventSeat } from 'react-icons/md'

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
    <div className="min-h-screen flex items-center justify-center md:flex-row">
      <div
        className="absolute inset-0 bg-cover bg-center blur brightness-50  "
        style={{
          backgroundImage: `url(${movie.poster_url})`,
          zIndex: -1,
        }}
      ></div>
      <div className="flex items-center mx-auto ml-12 md:flex-row">
        <Image
          className="rounded-lg mr-12"
          src={movie.poster_url}
          alt="movie"
          width={280}
          height={380}
        />
        <div className="px-20 pt-50 flex-col">
        <div className="pl-15">
          <h1 className="text-5xl font-serif font-semibold text-lime-500">
            {movie.title}
          </h1>
          <h6 className="flex mt-10 text-xs">
            <span className="text-black bg-white border-1 px-1 py-1 font-medium rounded-sm">
              Movie
            </span>
            <span className="text-white border-2 border-white ml-4 text-xs px-1 pt-0.5 rounded-sm">
              HD
            </span>
            <span className="text-white border-2 border-white ml-4 text-xs px-1 pt-0.5 rounded-sm">{`${movie.age_rating}+`}</span>
            <span className="text-lime-500 text-2xl ml-12">
              <RxCalendar />
            </span>
            <span className="text-white  ml-2 font-semibold pt-1">
              {movie.release_date}
            </span>
          </h6>
          <div className="bg-neutral-700 bg-opacity-40 rounded-2xl px-5 py-8 my-5  inline-flex">
            <div className="inline-flex"><span><MdEventSeat className="text-3xl mt-1 ml-6 mr-2 text-lime-500 font-bold" /></span> <span className="text-xl mt-1  text-lime-500 font-bold">x 1 </span></div>
            <h1 className="text-xl mt-1 mx-6  text-lime-500 font-bold">{`Rp.${movie.ticket_price}`}</h1>
            <Link href={`/movie-details/${movieName}/booking`} className="mx-6 md:mx-6">
            <LimeButton>BOOK SEATS</LimeButton>
            </Link>
          </div>
          <div className="text-white text-base font-medium font-serif">
            <h1>{movie.description}</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
