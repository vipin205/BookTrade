import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  // const navigate = useNavigate();
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-gray-700 text-gray-200  rounded py-10  mt-1">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">📚 BookShelf</h2>
          <p className="text-sm text-gray-400">
            Discover, donate, sell or borrow books easily. Helping every book
            find a new reader.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-white transition"
                onClick={scrollUp}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className="hover:text-white transition"
                onClick={scrollUp}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/add-book"
                className="hover:text-white transition"
                onClick={scrollUp}
              >
                Add Book
              </Link>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold  text-lg mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/login"
                className="hover:text-white transition"
                onClick={scrollUp}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-white transition"
                onClick={scrollUp}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BookShelf. Built with ❤️ for book
        lovers.
      </div>
    </footer>
  );
}
