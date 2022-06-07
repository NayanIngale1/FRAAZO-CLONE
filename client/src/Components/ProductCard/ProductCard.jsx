import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { FaCartPlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cart/action";
import AddToCartBtn from "../AddToCart Button/AddToCartBtn";

const ProductCard = ({ prod }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [presentInCart, setPresentInCart] = useState(false);

  useEffect(() => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]._id === prod._id) {
        setPresentInCart(true);
        break;
      }
    }
  }, [cartItems]);

  return (
    <div className="product_card">
      <div className="product_imgDiv">
        <Link to={`/products/${prod._id}`} style={{ textDecoration: "none" }}>
          <img src={prod.image} alt="" className="product_img" />
        </Link>
      </div>
      <div className="product_infoDiv">
        <div className="product_name">{prod.name}</div>
        <div className="product_more_info">
          <div className="product_weight_price">
            <div className="product_weight">{prod.weight}</div>
            <div className="product_price_section">
              <div className="product_original_price">
                <BiRupee />
                {prod.prize}
              </div>
              <div className="product_old_price">
                {prod.old_prize && <BiRupee />}
                {prod.old_prize}
              </div>
            </div>
          </div>
          <div className="add_cart_buttonDiv">
            {/* {presentInCart ? (
              "Added"
            ) : (
              <button
                className="add_cart_btn"
                onClick={() => dispatch(addToCart(prod))}
              >
                <FaCartPlus />
                ADD
              </button>
            )} */}
            <AddToCartBtn prod={prod} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
