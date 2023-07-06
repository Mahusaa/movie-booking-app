import React from "react";

export default function Seat({ seat, selectedSeats, handleSeatClick }) {
  const isSeatSelected = selectedSeats.includes(seat);
  const isSeatAvailable = !selectedSeats.includes(seat);

  return (
    <div
      onClick={() => handleSeatClick(seat)}
      className={`w-10 h-10 rounded-lg cursor-pointer text-white font-bold flex items-center justify-center ${
        isSeatSelected
          ? "bg-green-500"
          : isSeatAvailable
          ? "bg-gray-500"
          : "bg-red-500"
      }`}
      style={{ margin: "2px" }}
    >
      {seat}
    </div>
  );
}
