import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef();
  const profilePic = "https://i.pravatar.cc/40";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logged out successfully.");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

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

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        <Link className="hover:underline text-blue-500" to="/about-us">
          AboutUs
        </Link>
        <Link className="hover:underline text-blue-500" to="/explore">
          Explore
        </Link>
        <Link className="hover:underline text-blue-500" to="/book/:id">
          Book Details
        </Link>
        <Link className="hover:underline text-blue-500" to="/dashboard">
          Dashboard
        </Link>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
            onClick={() => setProfileOpen(!profileOpen)}
          />
          {profileOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 "
              style={{ animation: "fadeIn 0.3s ease-out" }}
            >
              <Link
                to="/personal-info"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Personal Info
              </Link>
              <Link
                to="/cart"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                My Cart
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav with Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30" // Backdrop
          onClick={() => {
            setMenuOpen(false);
            setProfileOpen(false);
          }}
        >
          <div
            className="absolute right-4 top-16 w-56 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-50 animate-fade-in"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
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

            {/* Mobile Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <img
                src={profilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent backdrop click
                  setProfileOpen(!profileOpen);
                }}
              />

              {profileOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 animate-fade-in"
                  style={{ animation: "fadeIn 0.3s ease-out" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    to="/personal-info"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Personal Info
                  </Link>
                  <Link
                    to="/cart"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Cart
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
                    onClick={() => alert("Logged out!")}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
