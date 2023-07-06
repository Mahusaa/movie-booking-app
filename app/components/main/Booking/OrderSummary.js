import React from "react";

export default function OrderSummary({
  title,
  seatsByClient,
  ticketPrice,
  handleConfirmBooking,
}) {
  const totalPrice = ticketPrice * seatsByClient.length;

  return (
    <div className="w-1/2 mt-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <span className="font-semibold">{`Movie: ${title}`}</span>
        <div className="mb-2">
          <span className="font-semibold">Selected Seats:</span>{" "}
          {seatsByClient.join(", ")}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Total Price:</span> Rp {totalPrice}
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          onClick={handleConfirmBooking}
          disabled={seatsByClient.length < 1}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
