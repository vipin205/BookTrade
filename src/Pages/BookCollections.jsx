import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaCalculator,
  FaFlask,
  FaAtom,
  FaLeaf,
} from "react-icons/fa";

const bookCollections = [
  {
    class: "9th",
    slug: "9th",
    subjects: ["English", "Maths", "Science"],
  },
  {
    class: "10th",
    slug: "10th",
    subjects: ["English", "Maths", "Science"],
  },
  {
    class: "11th",
    slug: "11th",
    subjects: ["English", "Physics", "Chemistry", "Biology"],
  },
  {
    class: "12th",
    slug: "12th",
    subjects: ["English", "Physics", "Chemistry", "Biology"],
  },
  {
    class: "JEE Mains",
    slug: "mains",
    subjects: ["Maths", "Chemistry", "Physics"],
  },
  {
    class: "JEE Advance",
    slug: "advance",
    subjects: ["Maths", "Chemistry", "Physics"],
  },
];

const subjectIcons = {
  English: <FaBookOpen className="inline-block mr-2 text-blue-500" />,
  Maths: <FaCalculator className="inline-block mr-2 text-purple-500" />,
  Chemistry: <FaFlask className="inline-block mr-2 text-green-500" />,
  Physics: <FaAtom className="inline-block mr-2 text-red-500" />,
  Biology: <FaLeaf className="inline-block mr-2 text-teal-500" />,
};

export default function BookCollections() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in-down">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Book Collections
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {bookCollections.map((section, index) => (
          <Link
            key={index}
            to={`/book-collections/${section.slug}`}
            className="block p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg bg-white transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {section.class}
              {!section.class.toLowerCase().includes("jee") && " Class"}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.subjects.map((subject, idx) => (
                <li key={idx} className="flex items-center">
                  {subjectIcons[subject] || <FaBookOpen className="mr-2" />}
                  {subject}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
