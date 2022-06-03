import React from "react";
import "./App.css";
import Banner from "./Components/Home/Banners/Banner";
import BestDeals from "./Components/Home/BestDeals/BestDeals";
import Mangoes from "./Components/Home/Categories/Mangoes";
import ProductCategories from "./Components/Home/ProductCategory/ProductCategories";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_container">
        <Banner />
        <BestDeals />
        <ProductCategories />
        <Mangoes />
      </div>
    </div>
  );
}

export default App;
