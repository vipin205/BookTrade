// File: src/pages/AddBookForm.jsx
import React, { useState } from "react";

export default function AddBookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    condition: "New",
    category: "Sell", // Sell, Donate, Borrow
    image: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Book:", formData);
    // In real app: send to backend
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">List a Book</h2>

      <form onSubmit={handleSubmit} className="space-y-6 ">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />
        <input
          type="text"
          name="location"
          placeholder="Your City / Location"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        />
        <select
          name="condition"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        >
          <option>New</option>
          <option>Like New</option>
          <option>Used</option>
          <option>Damaged</option>
        </select>
        <select
          name="category"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        >
          <option value="Sell">Sell</option>
          <option value="Donate">Donate</option>
          <option value="Borrow">Borrow</option>
        </select>
        {formData.category === "Sell" && (
          <input
            type="number"
            name="price"
            placeholder="Price (in ₹)"
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
        )}
        <textarea
          name="description"
          placeholder="Short Description"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          rows={4}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Submit Book
        </button>
      </form>
    </div>
  );
}
