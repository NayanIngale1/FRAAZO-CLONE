import React, { useEffect, useState } from "react";
import "./Cart.css";
import Box from "@mui/material/Box";
import { Drawer, Button } from "@mui/material";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { descCartProd, incCartProd } from "../../Redux/cart/action";

export default function Cart({ openCart, setOpenCart }) {
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenCart(open);
  };

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let res = 0;
    for (let i = 0; i < cartItems.length; i++) {
      res += cartItems[i].prize * cartItems[i].cart;
    }
    setCartTotal(res);
  }, [cartItems]);

  const list = () => (
    <Box sx={{ width: 450 }} role="presentation" className="cart_container">
      <div className="cart_container_head">
        <h2>My Cart ({cartItems.length} items)</h2>
        <Button onClick={toggleDrawer(false)}>X</Button>
      </div>
      <div className="cart_continer_body">
        {cartItems.map((ele) => (
          <div className="cart_container_prod_wrapper">
            <div className="cart_container_prod_img">
              <img src={ele.image} alt="" className="cart_prod_img" />
            </div>
            <div className="cart_prod_info">
              <div className="cart_prod_name_prize">
                <div className="cart_prod_name">{ele.name}</div>
                <div className="cart_prod_weight">{ele.weight}</div>
                <div className="cart_prod_prize">
                  <BiRupee />
                  {ele.prize}
                </div>
              </div>
              <div className="cart_prod_remove_add">
                <div className="cart_prod_remove">Remove</div>
                <div className="cart_prod_add_reduce">
                  <div
                    className="cart_prod_reduce"
                    onClick={() => dispatch(descCartProd(ele))}
                  >
                    -
                  </div>
                  {ele.cart}
                  <div
                    className="cart_prod_add"
                    onClick={() => dispatch(incCartProd(ele))}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart_container_footer">
        <div className="cart_container_footer_total">
          <div className="cart_total_prize">{cartItems.length} Items</div>
          <div className="product_original_prize">
            <BiRupee />
            {cartTotal}
          </div>
        </div>
        <div className="cart_container_footer_total">
          <button className="cart_footer_checkout_btn">CHECKOUT</button>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={openCart} onClose={toggleDrawer(false)} anchor="right">
        {list()}
      </Drawer>
    </div>
  );
}
