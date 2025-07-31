// File: src/pages/ClassDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const classSubjects = {
  "9th": ["English", "Maths", "Science"],
  "10th": ["English", "Maths", "Science"],
  "11th": ["English", "Physics", "Chemistry", "Biology"],
  "12th": ["English", "Physics", "Chemistry", "Biology"],
};

export default function ClassDetails() {
  const { className } = useParams();
  const subjects = classSubjects[className];

  if (!subjects) {
    return (
      <div className="text-center py-16 text-xl text-red-600">
        Class not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        {className.toLowerCase()} Class Subjects
      </h1>
      <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}
