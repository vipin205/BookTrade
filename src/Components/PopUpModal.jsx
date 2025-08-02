import React from "react";
import { useNavigate } from "react-router-dom";

export default function PopupModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-28"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90vw] max-w-md bg-white/90 rounded-xl shadow-xl p-6 animate-slide-down border border-transparent hover:border-blue-500 border-glow transition"
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Welcome to BookTrade
        </h2>

        {/* Message */}
        <p className="text-center text-gray-600 mb-6">
          Sign up or log in to get started!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              onClose();
              navigate("/signup");
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              onClose();
              navigate("/login");
            }}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-200 transition"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
