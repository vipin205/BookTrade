// File: src/pages/BookCollections.jsx
import React from "react";
import { Link } from "react-router-dom";

const bookCollections = [
  {
    class: "9th",
    subjects: ["English", "Maths", "Science"],
  },
  {
    class: "10th",
    subjects: ["English", "Maths", "Science"],
  },
  {
    class: "11th",
    subjects: ["English", "Physics", "Chemistry", "Biology"],
  },
  {
    class: "12th",
    subjects: ["English", "Physics", "Chemistry", "Biology"],
  },
];

export default function BookCollections() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Book Collections
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {bookCollections.map((section, index) => (
          <Link
            key={index}
            to={`/book-collections/${section.class.toLowerCase()}`}
            className="block p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg bg-white transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {section.class} Class
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.subjects.map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
