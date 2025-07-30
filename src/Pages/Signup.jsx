import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import toast from "react-hot-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
    } else {
      toast.success("Account created successfully.");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="animated-gradient min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white bg-opacity-80 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-full max-w-md "
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Create Your Account
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
        <div className="relative mb-4">
          <FaLock className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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

        {/* Confirm Password Input */}
        <div className="relative mb-6">
          <FaLock className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div
            className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
        >
          Sign Up
        </button>

        {/* Social Signup */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-700 mb-4">
            or sign up with
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition">
              <FaGoogle />
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition">
              <FaFacebookF />
            </button>
          </div>
        </div>

        <p className="text-sm text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
