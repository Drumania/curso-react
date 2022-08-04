import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import ProductsDetail from "./components/ProductsDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import CartContext from "./context/CartContext";

export default function App() {
  return (
    <>
      {/* <CartContext.Provider value={{ cart }}> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryId" element={<categoryDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
      {/* </CartContext.Provider> */}
    </>
  );
}
