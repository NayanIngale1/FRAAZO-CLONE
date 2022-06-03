import React from "react";
import "./BestDeals.css";
import Slider from "react-slick";
import { settings } from "../CommonSlider";
import { data } from "../../../data";
import ProductCard from "../../ProductCard/ProductCard";

const BestDeals = () => {
  return (
    <div className="best_deals">
      <h2 className="best_deals_heading">BEST DEALS</h2>
      <div className="best_deals_slider">
        <Slider {...settings}>
          {data.map((ele) => (
            <ProductCard prod={ele} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestDeals;
