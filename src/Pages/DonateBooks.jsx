// File: src/pages/DonateBooks.jsx
import React, { useState } from "react";
import { books } from "../Data/Books";
import BookCard from "../Components/Bookcard";

export default function DonateBooks() {
  const allDonatedBooks = books.filter((book) => book.category === "Donate");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredBooks = allDonatedBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCondition =
      selectedCondition === "All" || book.condition === selectedCondition;

    const matchesLocation =
      selectedLocation === "All" || book.location === selectedLocation;

    return matchesSearch && matchesCondition && matchesLocation;
  });

  const uniqueLocations = [...new Set(allDonatedBooks.map((b) => b.location))];

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Free Books for Donation</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 border rounded w-full"
        />

        <select
          value={selectedCondition}
          onChange={(e) => setSelectedCondition(e.target.value)}
          className="p-3 border rounded w-full"
        >
          <option value="All">All Conditions</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Used">Used</option>
          <option value="Damaged">Damaged</option>
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-3 border rounded w-full"
        >
          <option value="All">All Locations</option>
          {uniqueLocations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Book List */}
      {filteredBooks.length === 0 ? (
        <p className="text-gray-600">No donated books match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
