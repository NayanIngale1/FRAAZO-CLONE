import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { addToCart, descCartProd, incCartProd } from "../../Redux/cart/action";

const AddToCartBtn = ({ prod }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [presentInCart, setPresentInCart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 0; i < cartItems.length; i++) {
         if (cartItems[i]._id === prod._id) {
          setPresentInCart(true);
            return;
          }
      }
      setPresentInCart(false);
  }, [cartItems, prod]);
    
    
  return (
    <div className="addToCart__btn">
      {presentInCart ? (
        <div className="cart_prod_add_reduce">
          <div
            className="cart_prod_reduce"
            onClick={() => dispatch(descCartProd(prod))}
          >
            -
          </div>
          {cartItems.map((el) => (el._id === prod._id ? el.cart : null))}
          <div
            className="cart_prod_add"
            onClick={() => dispatch(incCartProd(prod))}
          >
            +
          </div>
        </div>
      ) : (
        <button
          className="add_cart_btn"
          onClick={() => dispatch(addToCart(prod))}
        >
          <FaCartPlus />
          ADD
        </button>
      )}
    </div>
  );
};

export default AddToCartBtn;
