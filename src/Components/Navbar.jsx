import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-200 shadow py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        BookTrade
      </Link>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-2xl text-blue-600 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link className="hover:underline text-blue-500" to="/explore">
          Explore
        </Link>
        <Link className="hover:underline text-blue-500" to="/book/:id">
          Book Details
        </Link>
        <Link className="hover:underline text-blue-500" to="/dashboard">
          Dashboard
        </Link>
      </div>

      {/* Navigation Links (Mobile) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center gap-4 py-4 md:hidden">
          <Link
            className="text-blue-500 font-medium"
            to="/explore"
            onClick={() => setMenuOpen(false)}
          >
            Explore
          </Link>
          <Link
            className="text-blue-500 font-medium"
            to="/book/:id"
            onClick={() => setMenuOpen(false)}
          >
            Book Details
          </Link>
          <Link
            className="text-blue-500 font-medium"
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
