import React from "react";
import {
  BookOpen,
  Gift,
  GraduationCap,
  Users,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in-down ">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6 ">
        About Us
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center ">
        Welcome to <strong>BookShelf</strong> 📚 — your go-to platform for buying, selling,
        donating, and borrowing books. We believe in making books accessible to
        everyone and creating a community where knowledge flows freely.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center  mt-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600 ">Our Mission</h2>
          <p className="text-gray-700 animate-fade-in-down">
            We aim to build a trusted platform that helps reduce book waste and
            promote literacy by allowing users to exchange books in a meaningful
            and sustainable way.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Books"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 "
        />
      </div>

      <div className="mt-12 ">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">
          Why Choose Us?
        </h2>
        <ul className="space-y-5 text-gray-700 text-lg text-center md:text-left">
          <li className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-600 transition">
            <BookOpen className="w-6 h-6 text-blue-500" />
            Easy-to-use book listing system
          </li>
          <li className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-600 transition">
            <Gift className="w-6 h-6 text-blue-500" />
            Donate books to help someone in need
          </li>
          <li className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-600 transition">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            Borrow rare or costly books for free
          </li>
          <li className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-600 transition">
            <Users className="w-6 h-6 text-blue-500" />
            Community-driven and eco-friendly initiative
          </li>
        </ul>
      </div>
    </div>
  );
}
