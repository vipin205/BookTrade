import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
    } else {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="animated-gradient min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white bg-opacity-80 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Welcome Back
        </h2>

        {/* Email Input */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <FaLock className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
        >
          Login
        </button>
        {/* Social Login */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-700 mb-4">
            or login with
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition">
              <FaGoogle/>{" "}
              {/* Replace with FaGoogle if you plan to add Google login */}
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition">
              <FaFacebook/> {/* Replace with FaFacebookF if needed */}
            </button>
          </div>
        </div>

        <p className="text-sm text-center mt-6 text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
