"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function NavbarUser() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <ShoppingBag className="w-6 h-6 text-indigo-400" />
            <span className="tracking-wide">Ecomm</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-indigo-400 transition duration-200">
              Home
            </Link>
            <Link href="/shop" className="hover:text-indigo-400 transition duration-200">
              Shop
            </Link>
            <Link href="/about" className="hover:text-indigo-400 transition duration-200">
              About
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col space-y-2 py-3 px-5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition duration-200"
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition duration-200"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
