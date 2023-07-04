"use client"
import React, { useState } from 'react';
import ButtonBlue from '../UI/ButtonBlue';

export default function BookingForm({ movie }) {
  const [name, setName] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

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

  const handleConfirmBooking = () => {
    // Save the form data to the database
    const formData = {
      name,
      selectedSeats,
      movie,
    };

    // Here, you can make an API call to save the formData to the database
    // For example:
    // axios.post('/api/bookings', formData)
    //   .then(response => {
    //     // Handle the response
    //   })
    //   .catch(error => {
    //     // Handle the error
    //   });

    // Reset the form after successful submission
    setName('');
    setSelectedSeats([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Booking Form</h2>
      <div className="flex flex-col items-center mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="mr-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Selected Seats:</label>
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 64 }, (_, index) => index + 1).map((seat) => (
              <div
                key={seat}
                onClick={() => handleSeatClick(seat)}
                className={`w-10 h-10 rounded-lg cursor-pointer text-white font-bold flex items-center justify-center ${
                  isSeatSelected(seat) ? 'bg-green-500' : 'bg-gray-500'
                }`}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
        <ButtonBlue
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </ButtonBlue>
      </div>
    </div>
  );
}
