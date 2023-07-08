import React from "react";

export default function ButtonBlue({ children }) {
  return (
    <button className="text-white border-solid bg-blue-600 rounded-lg px-4 py-2 transition duration-150 ease-in-out hover:bg-blue-700 hover:scale-105 font-bold mx-2">
      {children}
    </button>
  );
}
