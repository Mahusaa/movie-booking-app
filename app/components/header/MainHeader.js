"use client"
import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import { balancing, logOut, login } from "@/store/auth-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RxAvatar } from 'react-icons/rx'
import GetAuth from "./GetAuth";

export default function MainHeader() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state)=> state.authReducer.value.isAuth);
  const balance = useSelector((state) => state.authReducer.value.balance);


  const addHandler = () => {
    dispatch(balancing(5))
  }
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-gray-900 px-8 z-40">
      {" "}
      <Link href="/" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <h2 className="text-2xl">
            <span className="font-bold bg-blue-700 py-1 px-2 rounded-lg mr-1">
              US 
            </span>
            <span>Lify</span>
          </h2>
        </span>
      </Link>
      {isAuth ? <GetAuth /> : <Navigation />}
    </header>
  );
}
