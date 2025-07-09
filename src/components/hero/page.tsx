"use client";

import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#383638] to-black text-white  ">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 container">
        <div className="text-xl font-bold flex items-center gap-2">
          Mohid
        </div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Brands ▾</li>
          <li className="hover:text-white cursor-pointer">Recent Products</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul>
        <div className="flex items-center gap-4 text-lg">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-blue-600 rounded-full text-xs px-1"></span>
          </div>
          <FiMenu className="md:hidden cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between pt-28  container">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-[64px]  font-bold leading-[125%] mb-6">
            Discover <br /> Most Suitable <br /> Watches
          </h1>
          <p className="text-[#8B8E99] text-[16px] font-medium leading-[125%] w-[406px] mb-8">
            Find the best, reliable, and cheap smart watches here.
            We focus on product quality. Here you can find smart watches
            of almost all brands. So why you are waiting? Just order now!
          </p>
          <div className="flex items-center bg-white rounded-[15px] px-4 py-2 w-[443px] max-w-md mx-auto md:mx-0">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Find the best brands"
              className="flex-grow focus:outline-none text-black"
            />
            <button className="bg-[#3858D6] text-white w-[112px] h-[45px] rounded-[10px]">
              Search
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <Image
            src="/assets/images/watch.png"
            alt="Smart Watch"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
