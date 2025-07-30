import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

export default function BookCard({ book }) {
  return (
    <Link
      to={`/book/${book.id}`}
      className="block bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 p-6 space-y-3"
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-blue-700 truncate">{book.title}</h3>

      {/* Author */}
      <p className="text-sm text-gray-600 truncate">by {book.author}</p>

      {/* Category Badge */}
      <div>
        <span className="font-medium text-gray-700">Category:</span>{" "}
        <span
          className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
            book.category === "Donate"
              ? "bg-green-100 text-green-700"
              : book.category === "Borrow"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {book.category}
        </span>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-700 flex items-center gap-1">
        <FaMapMarkerAlt className="text-blue-500" />
        {book.location}
      </p>

      {/* Price (if not Donate) */}
      {book.category !== "Donate" && (
        <p className="text-sm text-gray-700 flex items-center gap-1">
          <FaRupeeSign className="text-green-600" />
          {book.price}
        </p>
      )}

      {/* View Details Button */}
      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
        View Details
      </button>
    </Link>
  );
}
