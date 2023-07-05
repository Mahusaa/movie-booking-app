import React, { useEffect, useState } from "react";

export default function BookingForm({ title, ticketPrice }) {
  const movieTitle = title
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsByClient, setSeatsByClient] = useState([]);
  console.log(selectedSeats)

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await fetch("https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
           // Replace with the desired movie title
          const selectedMovie = Object.values(data).find(movie => movie.title === movieTitle);
          console.log(selectedMovie);
          if (selectedMovie) {
            const selectedSeatsByMovie = selectedMovie.selectedSeats;
            setSelectedSeats(selectedSeatsByMovie);
          } else {
            console.log("No data found for movie:", movieTitle);
          }
        } else {
          console.error('Failed to fetch seat availability:', response.status);
        }
      } catch (error) {
        console.error('Failed by catch to fetch seat availability:', error);
      }
    };
  
    fetchSeats();
  }, [movieTitle]);
  

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const isSeatSelected = (seat) => {
    return selectedSeats.includes(seat);
  };

  const totalPrice = ticketPrice * seatsByClient.length;
  console.log(totalPrice);

  const handleConfirmBooking = async () => {
    await fetch(
      "https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
      {
        method: "POST",
        body: JSON.stringify({
          title,
          totalPrice,
          selectedSeats,
        }),
      }
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }, (_, index) => index + 1).map((seat) => (
            <div
              key={seat}
              onClick={() => handleSeatClick(seat)}
              className={`w-10 h-10 rounded-lg cursor-pointer text-white font-bold flex items-center justify-center ${
                isSeatSelected(seat) ? "bg-green-500" : "bg-gray-500"
              }`}
              style={{ margin: "2px" }} // Added margin for spacing
            >
              {seat}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <span className="font-semibold">{`Movie :${title}`}</span>
          <div className="mb-2">
            <span className="font-semibold">Selected Seats:</span>{" "}
            {selectedSeats.join(", ")}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Total Price:</span> Rp {totalPrice}
          </div>
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}
