import React from "react";
import LimeButton from "../../UI/LimeButton";

export default function Seat({ seat, selectedSeats, seatsByClient, handleSeatClick }) {
  const isSeatSelectedByClient = seatsByClient.includes(seat);
  const isSeatSelectedByServer = selectedSeats.includes(seat);

  return (
    <div
      onClick={() => handleSeatClick(seat)}
      className={`w-10 h-10 rounded-lg cursor-pointer text-white font-bold flex items-center justify-center ${
        isSeatSelectedByClient ? "bg-lime-500" : isSeatSelectedByServer ? "bg-lime-900" : "bg-gray-500"
      }`}
      style={{ margin: "2px" }}
    >
      {seat}
    </div>
  );
}


