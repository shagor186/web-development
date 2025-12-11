import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Buy from "./pages/Buy";

export default function App() {
  return (
    <div>
      <MainNavbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/buy/:id" element={<Buy />} />
        </Routes>
      </div>
    </div>
  );
}
