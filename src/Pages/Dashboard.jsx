// File: src/pages/Dashboard.jsx
import React, { useState } from "react";
import { books as initialBooks } from "../Data/Books";
import BookCard from "../Components/Bookcard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const userId = 1; // simulate logged-in user
  const [myBooks, setMyBooks] = useState(
    initialBooks.filter((book) => book.userId === userId)
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      setMyBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    }
  };
  const Navigate=useNavigate();

  const handleEdit = (book) => {
    Navigate(`/edit-book/${book.id}`)
    // Future: Redirect to edit page or open modal
  };

  return (
    <div className="px-6 py-12 animate-fade-in-down ">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">My Listings</h2>
        {myBooks.length === 0 ? (
          <p className="text-gray-600">You haven't listed any books yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {myBooks.map((book) => (
              <div
                key={book.id}
                className="relative border rounded-xl p-4 shadow-sm"
              >
                <BookCard book={book} />
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(book)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          My Requests (coming soon)
        </h2>
        <p className="text-gray-500">
          You haven’t borrowed or saved any books yet.
        </p>
      </section>
    </div>
  );
}
