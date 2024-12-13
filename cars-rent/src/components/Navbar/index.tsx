import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white shadow">
      <Link href={'/'} className="text-3xl font-bold text-blue-600">MORENT</Link>
      <div className="flex items-center flex-1 mx-6">
        <CiSearch className="text-gray-500 text-2xl" />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-1 p-3 border border-realcyan rounded-full ml-2 text-lg"
        />
      </div>
      <div className="flex space-x-6">
        <div className="cursor-pointer text-2xl">
          <AiOutlineHeart className="text-gray-500" />
        </div>
        <div className="cursor-pointer relative text-2xl">
          <AiOutlineBell className="text-gray-500" />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
        </div>
        <div className="cursor-pointer text-2xl">
          <AiOutlineSetting className="text-gray-500" />
        </div>
        <div className="cursor-pointer text-2xl">
          <FaUserCircle className="text-gray-500" />
        </div>
      </div>
    </div>
  )
}
