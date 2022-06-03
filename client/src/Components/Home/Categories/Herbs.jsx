import React from "react";
import "./Categories.css";
import Slider from "react-slick";
import { settings } from "../CommonSlider";
import { data } from "../../../data";
import ProductCard from "../../ProductCard/ProductCard";

const Herbs = () => {
  return (
    <div className="category_section">
      <h2 className="category_heading">
        HERBS <span className="view_all">( View All )</span>
      </h2>
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

export default Herbs;
