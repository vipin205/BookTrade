import React from "react";
import "../App.css";
import BookCard from "../Components/Bookcard";
import { books } from "../Data/Books"; // sample book data
import { Link, Links, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Signup from "./Signup";

export default function Home() {
  const navigate = useNavigate();
  const GettingStarted = () => {
    navigate("/signup");
  };

  const handleClick = (category, id = null) => {
    const routes = {
      Buy: "/buy-book",
      Donate: "/donate-book",
      Borrow: "/borrow-book",
      Add: "/add-book",
    };

    const path = routes[category];
    if (path) {
      navigate(path);
    } else {
      console.warn("No route defined for:", category);
    }
  };

  return (
    <div className="px-6 mt-1.5 md:px-12">
      {/* Hero Section */}
      <div className="animated-gradient flex items-center justify-center px-4 py-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center text-center space-y-12 w-full">
          {/* Welcome Card */}
          <div className="bg-white bg-opacity-70 backdrop-blur section-hover-effect1 p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Welcome to BookTrade 📚
            </h1>
            <p className="text-base sm:text-lg">
              Find your next read or give books a new home!
            </p>
          </div>

          {/* Info Section */}
          <section className=" text-white w-full max-w-xl">
            <h1 className="text-2xl sm:text-3xl text-gray-700 lg:text-4xl font-bold mb-4">
              Buy, Sell, Donate or Borrow Books
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Save money and give books a second life by using our
              student-friendly platform.
            </p>
            <button
              onClick={GettingStarted}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 section-hover-effect1 transition"
            >
              Get Started
            </button>
          </section>

          {/* Categories Section */}
          <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-4xl">
            {["Buy", "Donate", "Borrow", "Add"].map((item) => (
              <div
                key={item}
                onClick={() => handleClick(item)}
                className="bg-gray-100 rounded-xl p-6 text-center 
             hover:bg-blue-100 active:bg-blue-200 focus:bg-blue-200 
             hover:scale-105 transition transform duration-200 
             cursor-pointer section-hover-effect1"
              >
                <h2 className="text-xl font-semibold">{item} Books</h2>
              </div>
            ))}
          </section>
        </div>
      </div>
      {/* Featured Books */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.slice(0, 6).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
      // Our Expertise Section
      <section className="mt-16 bg-gray-50 py-12 px-4 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Expertise 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Book Exchange
            </h3>
            <p className="text-gray-600">
              We make book trading effortless with a user-friendly platform to
              buy, sell, borrow, or donate books.
            </p>
          </div>

          {/* Expertise 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Community Driven
            </h3>
            <p className="text-gray-600">
              Our platform connects readers and learners, encouraging a
              sustainable and cost-effective reading culture.
            </p>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Trusted & Secure
            </h3>
            <p className="text-gray-600">
              Your data and transactions are protected with secure systems,
              ensuring peace of mind while trading.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
