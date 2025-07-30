import React, { useState } from "react";

export default function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "Sell",
    location: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the data. You can connect to storage/backend later.
    console.log("Book Submitted:", formData);

    alert("Book added successfully!");
    setFormData({
      title: "",
      author: "",
      category: "Sell",
      location: "",
      price: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add a Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="Sell">Sell</option>
          <option value="Donate">Donate</option>
          <option value="Borrow">Borrow</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location (City)"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />

        {formData.category !== "Donate" && (
          <input
            type="number"
            name="price"
            placeholder="Price in ₹"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
