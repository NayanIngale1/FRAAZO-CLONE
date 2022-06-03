import React from "react";
import "./ProductCategories.css";
import mangoes from "../../../Images/mangoes.png";
import fruits from "../../../Images/fruits.png";
import vegetables from "../../../Images/vegetables.png";
import herbs from "../../../Images/herbs.png";
import dry_fruits from "../../../Images/dry-fruits.png";
import kitchen_staples from "../../../Images/kitchen-saples.png";

const ProductCategories = () => {
  return (
    <div className="product_categories">
      <div className="product_categories_imgDiv">
        <img src={mangoes} alt="" className="product_category_img" />
      </div>
      <div className="product_categories_imgDiv">
        <img src={fruits} alt="" className="product_category_img" />
      </div>
      <div className="product_categories_imgDiv">
        <img src={vegetables} alt="" className="product_category_img" />
      </div>
      <div className="product_categories_imgDiv">
        <img src={herbs} alt="" className="product_category_img" />
      </div>
      <div className="product_categories_imgDiv">
        <img src={dry_fruits} alt="" className="product_category_img" />
      </div>
      <div className="product_categories_imgDiv">
        <img src={kitchen_staples} alt="" className="product_category_img" />
      </div>
    </div>
  );
};

export default ProductCategories;
