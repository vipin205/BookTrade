// File: src/pages/ClassDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import {
  FaBookOpen,
  FaCalculator,
  FaFlask,
  FaAtom,
  FaLeaf,
} from "react-icons/fa";

const classSubjects = {
  "9th": ["English", "Maths", "Science"],
  "10th": ["English", "Maths", "Science"],
  "11th": ["English", "Physics", "Chemistry", "Biology", "Maths"],
  "12th": ["English", "Physics", "Chemistry", "Biology", "Maths"],
  "mains": ["Maths", "Physics", "Chemistry"],
  "advance": ["Maths", "Physics", "Chemistry"],
};

const displayNames = {
  "9th": "9th",
  "10th": "10th",
  "11th": "11th",
  "12th": "12th",
  "mains": "JEE Mains",
  "advance": "JEE Advanced",
};

const subjectIcons = {
  English: <FaBookOpen className="inline-block mr-2 text-blue-500" />,
  Maths: <FaCalculator className="inline-block mr-2 text-purple-500" />,
  Chemistry: <FaFlask className="inline-block mr-2 text-green-500" />,
  Physics: <FaAtom className="inline-block mr-2 text-red-500" />,
  Biology: <FaLeaf className="inline-block mr-2 text-teal-500" />,
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

  const displayClassName = displayNames[className] || className;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        {displayClassName} Subjects
      </h1>
      <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
        {subjects.map((subject, index) => (
          <li key={index} className="flex items-center">
            {subjectIcons[subject] || <FaBookOpen className="mr-2" />}
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}
