import React from "react";
import NewButton from "./LimeButton";
import {RxCalendar} from 'react-icons/rx'
import LimeButton from "./LimeButton";

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
            <span className="text-white text-xs rounded-3xl px-1  border-2 border-lime-500">
              {`${age}+`}
            </span>
            <div className="ml-2 text-white text-xs font-semibold tracking-wider flex"><RxCalendar className="mr-1 text-sm ml-1 text-lime-500"/>{`  ${release}`}</div>
          </div>
          <h4 className="mt-1 text-lg text-white font-semibold uppercase leading-tight w-full">
            {title}
          </h4>
          <div className="mt-1 font-bold text-xl text-lime-500">{`Rp. ${price}`}</div>
          <div className="flex justify-center items-center">
            <LimeButton>Book Now</LimeButton>
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
