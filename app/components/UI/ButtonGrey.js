import React from "react";

export default function ButtonGrey({ children }) {
  return (
    <button className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 m-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"'>
      {children}
    </button>
  );
}
