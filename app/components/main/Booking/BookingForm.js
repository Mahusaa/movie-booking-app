import React, { useEffect, useState } from "react";
import Seat from "./Seat";
import OrderSummary from "./OrderSummary";

export default function BookingForm({ title, ticketPrice }) {
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

          const totalSeats = Array.from(
            { length: 64 },
            (_, index) => index + 1
          );
          const availableSeats = totalSeats.filter(
            (seat) => !allSelectedSeats.includes(seat)
          );
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

  const isSeatSelected = (seat) => {
    return selectedSeats.includes(seat);
  };

  const isSeatAvailable = (seat) => {
    return !selectedSeats.includes(seat);
  };

  const totalPrice = ticketPrice * seatsByClient.length;

  const handleConfirmBooking = async () => {
    if (seatsByClient.length < 1) {
      return; // Do nothing if no seats are selected
    }
    await fetch(
      "https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
      {
        method: "POST",
        body: JSON.stringify({
          title,
          totalPrice,
          selectedSeats: seatsByClient,
        }),
      }
    );
    window.location.reload();
  };

  return (
<div className="flex justify-center">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }, (_, index) => index + 1).map((seat) => (
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
      <OrderSummary
        title={title}
        seatsByClient={seatsByClient}
        ticketPrice={ticketPrice}
        handleConfirmBooking={handleConfirmBooking}
      />
    </div>
  );
}
