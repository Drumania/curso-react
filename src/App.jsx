import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Register from "./pages/Register";
import ProductsDetail from "./components/ProductsDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MoviesProvider } from "./context/MoviesProvider";

export default function App() {
  return (
    <>
      <MoviesProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<ProductsDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:filter" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </MoviesProvider>
    </>
  );
}
