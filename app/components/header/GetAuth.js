import React, { useEffect, useState } from 'react'
import {RxAvatar} from 'react-icons/rx'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function GetAuth() {
  const [balance, setBalance] = useState(null)
  const userDataSelector = useSelector((state) => state.authReducer.userData);
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch("https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/user-data.json");
        const userData = await response.json();
        const userId = Object.keys(userData).find(
          (key) =>
            userData[key].email === userDataSelector.email 
        );
        if(userId){
          const user = userData[userId];
          setBalance(user.balance)
        }
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };
    fetchBalance();
  }, [userDataSelector.email])
  return (
    <nav className='flex items-center'>
    <div className='mx-3 flex items-center mt-1'>
    <AiOutlineDollarCircle className='text-white text-2xl'/>
    <h1 className='text-white mx-3'>{balance}</h1>
    </div>
    <RxAvatar className='text-white text-4xl' />
    </nav>
  )
}
