import {

  Elements,  
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "./Checkout.css"
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../Redux/cart/action";


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51L97nDSJamWgxW3FAkAQ3D2v127yEvkP8WF8YxSyrp3mGNwOxsSoeIvQNbAAgJatwVDDVLKGxpPMWpBvypXeWVN000GizGQda3"
);


function CheckOutStripe() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
      
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    var response = fetch("http://localhost:4040/payment/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJson) {
        var clientSecret = responseJson.clientSecret;

        // Call stripe.confirmCardPayment() with the client secret.
        stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          })
          .then(() => {
            alert(`Payment Successfull..! \nThank You..!`);
            dispatch(emptyCart());
            navigate("/");
          })
          .catch((err) => console.warn(err));
        
        
      });

   
  };
  
  

  return (
    <div>
      <form className="Checkout_card_details">
        <CardElement className="Checkout_cardElement" />
        <Button
          onClick={(e) => handleSubmit(e)}
          disabled={!stripe}
          variant="contained"
          color="success"
          sx={{ margin: "20px", width: "90%", backgroundColor: "#47bf9c" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CheckOutStripe;
