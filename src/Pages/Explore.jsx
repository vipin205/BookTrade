import React, { useState, useEffect } from "react";
import BookCard from "../Components/Bookcard";

export default function Explore() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const demoBooks = [
      {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Sell",
        location: "Delhi",
        price: 250,
      },
      {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Donate",
        location: "Mumbai",
        price: 0,
      },
      {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Borrow",
        location: "Bangalore",
        price: 0,
      },
      {
        id: 4,
        title: "Ikigai",
        author: "Héctor García",
        category: "Sell",
        location: "Delhi",
        price: 180,
      },
    ];
    setBooks(demoBooks);
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "All" || book.location === selectedLocation;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesLocation && matchesSearch;
  });

  const uniqueLocations = ["All", ...new Set(books.map((book) => book.location))];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Explore Books</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border rounded p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Sell">Sell</option>
          <option value="Donate">Donate</option>
          <option value="Borrow">Borrow</option>
        </select>

        <select
          className="border rounded p-2"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or author"
          className="border rounded p-2 flex-1 min-w-[200px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books match your filters.</p>
        )}
      </div>
    </div>
  );
}
