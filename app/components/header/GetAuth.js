import React from 'react'
import {RxAvatar} from 'react-icons/rx'
import { useSelector } from 'react-redux';
import { AiOutlineDollarCircle } from 'react-icons/ai'

export default function GetAuth() {
  const balance = useSelector((state) => state.authReducer.value.balance);
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
