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

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 mt-16 border-t">
        © 2025 BookTrade — Built with ❤️
      </footer>
    </div>
  );
}
