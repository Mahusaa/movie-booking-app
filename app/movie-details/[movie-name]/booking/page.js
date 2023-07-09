"use client";

import BookingForm from "@/app/components/main/Booking/BookingForm";
import React from "react";
import Loading from "@/app/loading";
import { useState, useEffect } from "react";
import getMovies from "../../../api/getMovie";

export default function Seats({ params }) {
  const movieName = Object.values(params)[0];
  console.log(movieName);
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
  const { title, ticket_price } = movie;
  return <BookingForm title={title} ticketPrice={ticket_price} />;
}
