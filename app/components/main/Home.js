import React from "react";

export default function Home({ children }) {
  return (
    <div className="w-90 mx-auto max-w-40rem px-12 mt-20 text-center">
      {children}
    </div>
  );
}
