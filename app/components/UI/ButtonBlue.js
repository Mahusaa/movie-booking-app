import React from "react";

export default function ButtonBlue({ children }) {
  return (
    <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
      {children}
    </div>
  );
}
