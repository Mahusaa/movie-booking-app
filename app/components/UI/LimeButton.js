import React from "react";

export default function LimeButton({children, ...props}) {
  return (
    <button className="border-lime-500 font-bold border-2 rounded-full text-sm text-white px-4 py-2 transition-colors duration-300 hover:bg-lime-500 hover:text-black" {...props}>
      {children}
    </button>
  );
}

