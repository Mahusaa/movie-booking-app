import React from 'react';
import ButtonBlue from './ButtonBlue';

export default function MovieCard(props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-600 bg-opacity-95 rounded-lg shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out transition-delay-200">
      <div className="flex items-center justify-center">
        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">{`${props.age}+`}
        </span>
        <div className="ml-2 text-white text-xs font-semibold tracking-wider">{`Release: ${props.release}`}</div>
      </div>
      <h4 className="mt-1 text-lg font-semibold uppercase leading-tight w-full">{props.title}</h4>
      <div className="mt-1 font-bold text-xl text-red-600">{`Rp. ${props.price}`}</div>
      <div className="flex justify-center items-center">
        <ButtonBlue className="text-sm ml-4">Book Now</ButtonBlue>
      </div>
    </div>
  );
}

