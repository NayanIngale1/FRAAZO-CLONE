import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";

const CheckOutBillDetails = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartTotal = cartItems.reduce((acc,el) =>{ return acc + el.cart * el.prize}, 0);
  const cartAferDisc = cartTotal - ((cartTotal / 100) * 5);
  return (
    <div className="checkout_bill_details_wrapper">
      <h1>Bill Details</h1>
      <div className="checkout_bill_details">
        <div className="checkout_total_items_bill">
          <div>
            <h4>{cartItems.length} x Total Item Price</h4>
            <h3>₹ {cartTotal}</h3>
          </div>
          <div className="checkout_price_saving">
            <h4>Price Saving (5%)</h4>
            <h3>- ₹ {Math.round((cartTotal / 100) * 5)}</h3>
          </div>
        </div>
        <div className="checkout_total_items_bill">
          <div>
            <h4>Cart Amount</h4>
            <h3>₹ {cartAferDisc}</h3>
          </div>
          <div>
            <h4>Delivery Charges</h4>
            <h3>₹ 30</h3>
          </div>
        </div>
        <div className="checkout_total_items_bill">
          <div>
            <h4>
              To Pay <span>(Saved {Math.round((cartTotal / 100) * 5)})</span>
            </h4>
            <h3>
              {" "}
              <span>₹ {cartAferDisc + 30}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="Cart_total_toPay">
        <h4>To Pay</h4>
        <h3>
          {" "}
          <span>₹ {cartAferDisc + 30}</span>
        </h3>
      </div>
    </div>
  );
};

export default CheckOutBillDetails;
