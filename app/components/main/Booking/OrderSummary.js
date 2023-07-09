import React from "react";
import LimeButton from "../../UI/LimeButton";

export default function OrderSummary({
  title,
  seatsByClient,
  ticketPrice,
  handleConfirmBooking,
}) {
  const totalPrice = ticketPrice * seatsByClient.length;

  return (
    <div className="w-1/2 mt-4 text-center">
      <div className=" p-4 rounded-lg shadow border-lime-500 border-4">
        <h2 className="text-xl font-semibold mb-4 text-white">Order Summary</h2>
        <span className="font-semibold  text-white">{`Movie: ${title}`}</span>
        <div className="mb-2 text-white">
          <span className="font-semibold  ">Selected Seats:</span>{" "}
          {seatsByClient.join(", ")}
        </div>
        <div className="mb-4  text-white">
          <span className="font-semibold">Total Price:</span> Rp {totalPrice}
        </div>
        <LimeButton
          onClick={handleConfirmBooking}
          disabled={seatsByClient.length < 1}
        >
          CONFIRM BOOKING
          </LimeButton>
      </div>
    </div>
  );
}
