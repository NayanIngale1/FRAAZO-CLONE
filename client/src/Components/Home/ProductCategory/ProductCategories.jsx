import React from "react";
import "./ProductCategories.css";
import mangoes from "../../../Images/mangoes.png";
import fruits from "../../../Images/fruits.png";
import vegetables from "../../../Images/vegetables.png";
import herbs from "../../../Images/herbs.png";
import dry_fruits from "../../../Images/dry-fruits.png";
import kitchen_staples from "../../../Images/kitchen-saples.png";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div className="product_categories">
      <Link to="/products/mangoes/mangoes">
        <div className="product_categories_imgDiv">
          <img src={mangoes} alt="" className="product_category_img" />
        </div>
      </Link>{" "}
      <Link to="/products/fruits/apples-pears-plums">
        <div className="product_categories_imgDiv">
          <img src={fruits} alt="" className="product_category_img" />
        </div>{" "}
      </Link>{" "}
      <Link to="/products/vegetables/daily-veggies">
        <div className="product_categories_imgDiv">
          <img src={vegetables} alt="" className="product_category_img" />
        </div>{" "}
      </Link>{" "}
      <Link to="/products/herbs/herbs-and-leafy-products">
        <div className="product_categories_imgDiv">
          <img src={herbs} alt="" className="product_category_img" />
        </div>{" "}
      </Link>{" "}
      <Link to="/products/dryfruits/premium-quality-dryfruits">
        <div className="product_categories_imgDiv">
          <img src={dry_fruits} alt="" className="product_category_img" />
        </div>{" "}
      </Link>{" "}
      <Link to="/products/kitchenstapels/dals-pulses">
        <div className="product_categories_imgDiv">
          <img src={kitchen_staples} alt="" className="product_category_img" />
        </div>{" "}
      </Link>
    </div>
  );
};

export default ProductCategories;
