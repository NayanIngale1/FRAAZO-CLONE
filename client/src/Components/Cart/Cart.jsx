import React, { useEffect, useState } from "react";
import "./Cart.css";
import Box from "@mui/material/Box";
import { Drawer, Button } from "@mui/material";
import { BiRupee } from "react-icons/bi";

export default function Cart({ openCart, setOpenCart }) {
  const [cartItems, setCartItems] = useState([
    {
      _id: "628a99db488855a1a7167082",
      name: "Special Offer Watermelon",
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/004/598/original/data?1647718256",
      weight: "1 pc",
      prize: 9,
      old_prize: 26,
      category: "fruits",
      sub_category: "oranges-mosambi-melons",
      description: "Special Offer Watermelon",
      benifit: "No Details Available",
      info: "No Details Available",
      tag: "best",
      cart: 1,
      createdAt: "2022-05-22T20:15:23.160Z",
      updatedAt: "2022-05-22T20:15:23.160Z",
    },
    {
      _id: "628a9a22488855a1a7167084",
      name: "Rich Candy Cherry",
      image:
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/007/492/original/data?1652237337",
      weight: "200g",
      prize: 99,
      old_prize: null,
      category: "fruits",
      sub_category: "exotic-fruits",
      description: "Rich Candy Cherry",
      benifit:
        "- Cherries are high in antioxidants and provide a variety of health benefits, including vitamin C, potassium, fiber and other elements required for proper bodily function. - Cherries helps to improve athletic performance and reduce exercise-induced muscle damage and soreness. - It contains powerful heart-protective properties.",
      info: "- Natural Fresh Cherry comes from a Himachal Pradesh farm. These cherries have a longer shelf life, lasting up to 6 days from 2-3 days. - Sweet, sour, and duke cherries are among the many sorts of cherry available. - The fresh cherry crop was harvested in the first week of May and will continue until the end of June. - Cherry are popular from Himachal Pradesh, in northern India, as a viable alternative to apple trees.",
      tag: "best",
      cart: 2,
      createdAt: "2022-05-22T20:16:34.724Z",
      updatedAt: "2022-05-22T20:16:34.724Z",
    },
  ]);
  
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
    <Box
      sx={{ width: 450}}
      role="presentation"  
      className="cart_container"
    >
      <div className="cart_container_head">
        <h2>My Cart ({1} items)</h2>
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
                  <div className="cart_prod_reduce">-</div>
                  {ele.cart}
                  <div className="cart_prod_add">+</div>
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
