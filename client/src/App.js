import React, { useState,Children } from "react";
import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Navbar from "./Components/Navbar/Navbar";
import ProductsList from "./Components/ProductsList/ProductsList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from"react-redux"
import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login/Login";

const promise = loadStripe(
  "pk_test_51L97nDSJamWgxW3FAkAQ3D2v127yEvkP8WF8YxSyrp3mGNwOxsSoeIvQNbAAgJatwVDDVLKGxpPMWpBvypXeWVN000GizGQda3"
);
function PrivateRoute({isLogin,children}) {
  if(isLogin){
    return children
  }

  return <Navigate to="/login"></Navigate>

}

function App() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [open, setOpen] = useState(true);

  return (
    <div className="App">


      div.welc

      <Navbar />

      <div className="app_container_margin">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <>
                <h1>Need To Login First..!</h1>
                <Login open={true} setOpen={setOpen} />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <Elements stripe={promise}>
                {/* <PrivateRoute isLogin={isLoggedIn}> */}
                <Checkout />
                {!isLoggedIn && <Login open={true} setOpen={setOpen} />}
                {/* </PrivateRoute> */}
              </Elements>
            }
          />

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
          <Route
            path="/products/herbs/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/dryfruits/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/kitchenstapels/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/category/:subcategory"
            element={<ProductsList />}
          />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
