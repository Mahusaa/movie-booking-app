import React from "react";

export default function BookingCart() {
  const filmName = "Movie Title";
  const totalPrice = "$50";
  const seatsPurchased = 2;
  return (
    <div className="w-1/2 mx-8">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="mb-2">
          <span className="font-semibold">Film:</span> {filmName}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Seats Purchased:</span>{" "}
          {seatsPurchased}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Total Price:</span> {totalPrice}
        </div>
        {/* Checkout button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
}
