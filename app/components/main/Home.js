import React from "react";

export default function Home({ children }) {
  return (
    <div className="w-90 mx-auto max-w-40rem p-12 my-8 text-center">
      {children}
    </div>
  );
}
