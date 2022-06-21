import React from "react";
import "./Categories.css";
import Slider from "react-slick";
import { settings } from "../CommonSlider";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const KitchenStaples = () => {
  const data = useSelector((state) =>
    state.product.data.filter(
      (el) =>
        el.category.trim() === "Kitchen Staples" ||
        el.category.trim() === "kitchenstapels"
    )
  );
  return (
    <div className="category_section">
      <Link to="/products/kitchenstapels/dals-pulses" className="linkTag">
        <h2 className="category_heading">
          KITCHEN STAPLES <span className="view_all">( View All )</span>
        </h2>
      </Link>
      <div className="category_slider">
        <Slider {...settings}>
          {data.map((ele) => (
            <ProductCard prod={ele} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KitchenStaples;
