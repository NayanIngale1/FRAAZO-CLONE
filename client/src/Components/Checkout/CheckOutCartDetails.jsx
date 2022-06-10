import React from "react";
import AddToCartBtn from "../AddToCart Button/AddToCartBtn";
import { BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";

const CheckOutCartDetails = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
 

  return (
    <div className="checkout_Cart_detail_wrapper">
      <h2 className="chekcout_cart_total_items">
        Cart items : <span className="checkout_cart_total">{cartItems.length}</span>
      </h2>
      {cartItems.map((el) => (
        <div className="checkou_cart_item">
          <div className="checkout_cart_Item_img">
            <img src={el.image} />
          </div>
          <div className="checkout_cart_item_name">
            <h4>{el.name}</h4>
            <div className="checkout_cart_item_weight">{el.weight}</div>
          </div>
          <div className="checkout_cart_Btns">
            <AddToCartBtn prod={el} />
          </div>
          <div className="checkout_cart_item_total">
            <BiRupee />
            {el.cart * el.prize}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CheckOutCartDetails;
