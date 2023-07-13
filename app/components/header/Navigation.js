import Link from "next/link";
import React from "react";
import ButtonBlue from "../UI/ButtonBlue";
import ButtonGrey from "../UI/DarkerButton";
import NewButton from "../UI/LimeButton";
import LimeButton from "../UI/LimeButton";
import DarkerButton from "../UI/DarkerButton";


export default function Navigation() {
  return (
    <nav className="flex items-center">
    <div className="ml-4 py-2 px-6">
      <Link href="/logout">
        <DarkerButton>Home</DarkerButton>
      </Link>
      <Link href="/logout">
        <DarkerButton>About</DarkerButton>
      </Link>
      </div>
      <Link href="/login">
        <LimeButton>LOGIN</LimeButton>
      </Link>
    </nav>
  );
}
