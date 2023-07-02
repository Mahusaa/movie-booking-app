import React from 'react'
import Link from 'next/link'
import ButtonBlue from '../UI/ButtonBlue'
import ButtonGrey from '../UI/ButtonGrey'

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">

        <div className="flex items-center md:order-2">
          <Link href="/login" ><ButtonGrey>
            Login</ButtonGrey>
          </Link>
          <Link href="/signup" > <ButtonBlue>
            Sign up</ButtonBlue>
          </Link>
        </div>
        <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Purchase
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <button type="button" className="block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Menu
          </button>
        </div>
      </div>
    </nav>
  )
}
