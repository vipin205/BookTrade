import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookDetails from "./Pages/BookDetails";
import BuyBooks from "./Pages/BuyBooks";
import Navbar from "./Components/Navbar";
import DonateBooks from "./Pages/DonateBooks";
import BorrowBooks from "./Pages/BorrowBooks";
import Dashboard from "./Pages/Dashboard";
import Explore from "./Pages/Explore";
import AddBook from "./Pages/AddBook";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import PersonalInfo from "./Pages/PersonalInformation";
import AboutUs from "./Pages/AboutUs";
import MyCart from "./Pages/MyCart";
import Settings from "./Pages/Setting";
import BookCollections from "./Pages/BookCollections";
import ClassDetails from "./Pages/ClassDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/buy-book" element={<BuyBooks />} />
        <Route path="/donate-book" element={<DonateBooks />} />
        <Route path="/borrow-book" element={<BorrowBooks />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/personal-info" element={<PersonalInfo/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/cart" element={<MyCart/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/book-collections" element={<BookCollections/>} />
        <Route path="/book-collections/:className" element={<ClassDetails/>} />
      </Routes>
      <Footer/>
      <BackToTop/>
    </>
  );
}
