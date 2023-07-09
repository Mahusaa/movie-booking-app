import React from "react";

export default function DarkerButton({ children }) {
  return (
    <button className='hover:text-lime-400 text-white mx-4 my-2'>
      {children}
    </button>
  );
}
