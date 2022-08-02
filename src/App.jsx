import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import ProductsDetail from "./components/ProductsDetail";
cart;
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryId" element={<categoryDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/cart" element={`Carrito Vacio`} />
      </Routes>
    </>
  );
}
