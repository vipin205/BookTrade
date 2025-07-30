// File: src/pages/BookDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../Data/Books";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="text-center py-16 text-xl text-red-600">
        Book not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-96 object-cover rounded-xl shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-1">by {book.author}</p>
          <p className="text-green-700 text-xl font-semibold mb-4">
            ₹{book.price}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Condition:</strong> {book.condition || "Like New"}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Location:</strong> {book.location || "N/A"}
          </p>
          <p className="mb-6">{book.description || "No description provided."}</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {book.category === "Donate"
              ? "Contact Donor"
              : book.category === "Borrow"
              ? "Request to Borrow"
              : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
