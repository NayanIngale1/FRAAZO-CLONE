import React from "react";
import "./ProductCard.css";
import { FaCartPlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductCard = ({ prod }) => {
  // const prod = {
  //   _id: "628a9949488855a1a7167080",
  //   name: "Onion",
  //   image:
  //     "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BONI11.png",
  //   weight: "1 kg",
  //   prize: 16,
  //   old_prize: 19,
  //   category: "Vegetables",
  //   sub_category: "Onion, Potato & Tomatoes",
  //   description: "Onion",
  //   benifit:
  //     "- Onions are low in fat and calories, but rich in soluble dietary fibers. - The chemicals in onions are good for helping with swelling, lowering cholesterol and blood sugars. - Onions are rich in antioxidants which helps in lowering the risk of several types of cancer. - The fibre in onion helps in improving the gut health & managing the blood pressure. - Onion Nutritions also include Vitamin B6, C & other compounds which help in improving skin & hair.",
  //   info: "- Onions are usually stored in a dry place. - Ever wondered why cutting onions makes you cry, well it is because of the lachrymatory compound in onions which causes irritation to the eyes. - To avoid the irritation to eyes while cutting onions, one can simply chill the onions in the refrigerator for 30 mins or run the half-cut onions under the water and then chop them. - You can try some Quick Onion Recipes like Onion Rings, Pyaaz ke Pakode/ Kanda Bhajji or some Traditional Indian Recipes like Paneer Do Pyaaza or Pyaaz Kachori are also very famous.",
  //   tag: "best",
  //   createdAt: "2022-05-22T20:12:57.703Z",
  //   updatedAt: "2022-05-22T20:12:57.703Z",
  // };
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
            <button className="add_cart_btn">
              <FaCartPlus />
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
