import React from "react";

export default function MyCart() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        🛒 My Cart
      </h1>

      <div className="space-y-6">
        {/* Sample cart item */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              The Great Gatsby
            </h2>
            <p className="text-gray-500">by F. Scott Fitzgerald</p>
            <p className="text-green-600 font-medium">₹199</p>
          </div>
          <button className="text-red-500 hover:underline">Remove</button>
        </div>

        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Atomic Habits
            </h2>
            <p className="text-gray-500">by James Clear</p>
            <p className="text-green-600 font-medium">₹299</p>
          </div>
          <button className="text-red-500 hover:underline">Remove</button>
        </div>
      </div>

      {/* Total & Checkout */}
      <div className="text-right mt-10">
        <p className="text-xl font-semibold text-gray-800">Total: ₹498</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
