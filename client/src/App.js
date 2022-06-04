import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ProductsList from "./Components/ProductsList/ProductsList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products/mangoes/:subcategory"
          element={<ProductsList />}
        />
        <Route
          path="/products/vegetables/:subcategory"
          element={<ProductsList />}
        />
        <Route
          path="/products/fruits/:subcategory"
          element={<ProductsList />}
        />
        <Route path="/products/herbs/:subcategory" element={<ProductsList />} />
        <Route
          path="/products/dryfruits/:subcategory"
          element={<ProductsList />}
        />
        <Route
          path="/products/kitchenstapels/:subcategory"
          element={<ProductsList />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
