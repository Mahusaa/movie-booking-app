import Link from "next/link";
import React from "react";

export default function Navbar({ title, address }) {
  return (
    <div>
          <div>
          <Link href="/">
          <h2 className="text-2xl"><span className="font-bold bg-red-600 py-1 px-2 rounded-lg mr-1">US</span><span>lify</span></h2>
        </Link>
      </div>
      <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
          <p>{title}</p>
        </Link>
      </div>

    </div>
  );
}
