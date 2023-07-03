import React from 'react';
import ButtonBlue from './ButtonBlue';

export default function MovieCard(props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-white rounded-lg shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out transition-delay-200">
      <div className="flex items-baseline">
        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
          New
        </span>
        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
          2 baths &bull; 3 rooms
        </div>
      </div>
      <h4 className="mt-1 text-lg font-semibold uppercase leading-tight w-full group-hover:text-gray-800">{props.title}</h4>
      <div className="mt-1">
        {`Rp.${props.price}`}
        <span className="text-gray-600 text-sm">   /wk</span>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <span className="text-teal-600 text-md font-semibold">4/5 ratings</span>
        <ButtonBlue className="text-sm ml-4">Buy Ticket</ButtonBlue>
      </div>
    </div>
  );
}


