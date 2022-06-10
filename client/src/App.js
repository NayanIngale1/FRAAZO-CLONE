import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Navbar from "./Components/Navbar/Navbar";
import ProductsList from "./Components/ProductsList/ProductsList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



const promise = loadStripe(
  "pk_test_51L97nDSJamWgxW3FAkAQ3D2v127yEvkP8WF8YxSyrp3mGNwOxsSoeIvQNbAAgJatwVDDVLKGxpPMWpBvypXeWVN000GizGQda3"
);



function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="app_container_margin">
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={
           <Elements stripe={promise}>

          <Checkout />
           </Elements>
        } />

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
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
