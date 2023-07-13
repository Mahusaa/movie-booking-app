import React from "react";
import LimeButton from "../../UI/LimeButton";
import Image from "next/image";

export default function OrderSummary({
  title,
  seatsByClient,
  ticketPrice,
  handleConfirmBooking,
  posterURL,
}) {
  const totalPrice = ticketPrice * seatsByClient.length;

  return (
    <div className="w-full md:w-1/2 mt-4 flex justify-center">
      <div className="p-4 rounded-lg shadow border-lime-500 border-4">
        <div className="flex flex-col md:flex-row md:mb-4">
          <div className="mb-4 md:mr-4 md:flex-shrink-0">
            <Image
              className="rounded-lg"
              src={posterURL}
              alt="movie"
              width={150}
              height={200}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-white">Order Summary</h2>
            <span className="font-semibold text-white mt-5">{`Movie: ${title}`}</span>
            <div className="mb-2 text-white">
              <span className="font-semibold">Selected Seats:</span>{" "}
              {seatsByClient.join(", ")}
            </div>
            <div className="mb-4 text-white">
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
        {/* Other description elements */}
      </div>
    </div>
  );
}


