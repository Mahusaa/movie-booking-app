import Link from "next/link";
import React from "react";
import ButtonBlue from "../UI/ButtonBlue";
import ButtonGrey from "../UI/ButtonGrey";

export default function Navigation() {
  return (
    <nav className="flex items-center">
      <Link href="/logout">
        <ButtonGrey>Home</ButtonGrey>
      </Link>
      <Link href="/logout">
        <ButtonGrey>About</ButtonGrey>
      </Link>
      <Link href="/logout">
        <ButtonBlue>Logout</ButtonBlue>
      </Link>
    </nav>
  );
}
