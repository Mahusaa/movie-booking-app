import React from "react";
import ButtonBlue from "./ButtonBlue";

export default function MovieCard(props) {
  const { age, release, title, price, poster } = props;

  const cardStyle = {
    backgroundImage: `url(${poster})`,
  };

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out transition-delay-200">
          <div className="flex items-center justify-center">
            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
              {`${age}+`}
            </span>
            <div className="ml-2 text-white text-xs font-semibold tracking-wider">{`Release: ${release}`}</div>
          </div>
          <h4 className="mt-1 text-lg font-semibold uppercase leading-tight w-full text-white">
            {title}
          </h4>
          <div className="mt-1 font-bold text-xl text-red-600">{`Rp. ${price}`}</div>
          <div className="flex justify-center items-center">
            <ButtonBlue className="text-sm ml-4">Book Now</ButtonBlue>
          </div>
        </div>
        <div
          className="bg-gray-200 bg-opacity-25 group-hover:bg-opacity-0 absolute inset-0 rounded-lg shadow-lg"
          style={cardStyle}
        ></div>
      </div>
    </div>
  );
}
