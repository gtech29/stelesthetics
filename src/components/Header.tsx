"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/stelesthetics-logo.png"
              layout="intrinsic"
              width={80}
              height={100}
              alt="StelEsthetics Logo"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#9e4956] transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-[#9e4956] transition">
            Services
          </Link>
          <Link href="/products" className="hover:text-[#9e4956] transition">
            Products
          </Link>
          <Link href="/contact" className="hover:text-[#9e4956] transition">
            Contact
          </Link>
          <Link
            href="/book"
            className="ml-4 bg-[#b75d69] hover:bg-[#9e4956] text-white py-2 px-4 rounded-full transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <nav className="flex flex-col space-y-2 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-center transition"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
