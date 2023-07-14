import React, { useEffect, useState } from "react";
import Seat from "./Seat";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";

export default function BookingForm({ title, ticketPrice, posterURL }) {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const userData = useSelector((state) => state.authReducer.userData);
  const movieTitle = title;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsByClient, setSeatsByClient] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await fetch(
          "https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json"
        );
        if (response.ok) {
          const data = await response.json();
          const selectedMovies = Object.values(data);

          let allSelectedSeats = [];
          selectedMovies.forEach((movie) => {
            if (movie.title === movieTitle) {
              setSelectedSeats((prevSeats) =>
                prevSeats.concat(movie.selectedSeats)
              );
            }
            allSelectedSeats = allSelectedSeats.concat(movie.selectedSeats);
          });
        } else {
          console.error("Failed to fetch seat availability:", response.status);
        }
      } catch (error) {
        console.error("Failed by catch to fetch seat availability:", error);
      }
    };

    fetchSeats();
  }, [movieTitle]);

  const handleSeatClick = (seat) => {
    if (seatsByClient.includes(seat)) {
      setSeatsByClient(seatsByClient.filter((s) => s !== seat));
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (!selectedSeats.includes(seat) && seatsByClient.length < 6) {
      setSeatsByClient([...seatsByClient, seat]);
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = ticketPrice * seatsByClient.length;

  const handleConfirmBooking = async () => {
    if (seatsByClient.length < 1 || !isAuth ) {
      return; // Do nothing if no seats are selected and client not auth
    }

    await fetch(
      "https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
      {
        method: "POST",
        body: JSON.stringify({
          title,
          totalPrice,
          selectedSeats: seatsByClient,
          userData
        }),
      }
    );
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center my-20 mx-20">
      <div className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-lime-500 text-center">
          SELECT SEATS:
        </h2>
        <div className="h-4 flex justify-center my-8">
          <span>
            <div className="bg-lime-500 w-4 h-4 mt-1 mr-2" />
          </span>
          <span className="mb-2 text-white mr-8"> Selected </span>
          <span>
            <div className="bg-lime-900 w-4 h-4 mt-1 mr-2" />
          </span>
          <span className="mb-2 text-white mr-8"> Filled </span>
          <span>
            <div className="bg-gray-500 w-4 h-4 mt-1 mr-2" />
          </span>
          <span className="mb-2 text-white mr-8"> Empty</span>
        </div>

        <div className="grid grid-cols-8 gap-2 justify-center mx-auto pl-2">
          {Array.from({ length: 64 }, (_, index) => 64 - index).map((seat) => (
            <Seat
              key={seat}
              seat={seat}
              selectedSeats={selectedSeats}
              seatsByClient={seatsByClient}
              handleSeatClick={handleSeatClick}
            />
          ))}
        </div>
      </div>
      <div className="bg-lime-500  my-10 px-8 md:px-64 ">
        <h1 className="text-white font-bold text-xl">MOVIE SCREEN</h1>
      </div>
      <OrderSummary
        posterURL={posterURL}
        title={title}
        seatsByClient={seatsByClient}
        ticketPrice={ticketPrice}
        handleConfirmBooking={handleConfirmBooking}
      />
    </div>
  );
};
