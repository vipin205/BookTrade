import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        About Us
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Welcome to <strong>BookShelf</strong> 📚 — your go-to platform for buying, selling, donating, and borrowing books.
        We believe in making books accessible to everyone and creating a community where knowledge flows freely.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
          <p className="text-gray-700">
            We aim to build a trusted platform that helps reduce book waste and promote literacy by allowing
            users to exchange books in a meaningful and sustainable way.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Books"
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-600 text-center">Why Choose Us?</h2>
        <ul className="mt-6 space-y-3 text-gray-700 text-center md:text-left">
          <li>✅ Easy-to-use book listing system</li>
          <li>✅ Donate books to help someone in need</li>
          <li>✅ Borrow rare or costly books for free</li>
          <li>✅ Community-driven and eco-friendly initiative</li>
        </ul>
      </div>
    </div>
  );
}
