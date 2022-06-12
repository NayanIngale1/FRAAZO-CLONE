import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import advertise1 from "../../../Images/advertise1.png";
import advertise2 from "../../../Images/advertise2.png";
import advertise3 from "../../../Images/advertise3.png";
import banner1 from "../../../Images/banner1.png";
import banner2 from "../../../Images/banner2.png";
import banner3 from "../../../Images/banner3.png";
import banner4 from "../../../Images/banner4.png";
import banner5 from "../../../Images/banner5.png";
import banner6 from "../../../Images/banner6.png";
import banner7 from "../../../Images/banner7.png";
import banner8 from "../../../Images/banner8.png";
import banner9 from "../../../Images/banner9.png";
import banner10 from "../../../Images/banner10.png";
import banner11 from "../../../Images/banner11.png";
import banner12 from "../../../Images/banner12.png";

const bannerImgs = [
  banner10,banner11,banner12,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
];
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  let renderBanner = bannerImgs.map((img, idx) => (
    <div className="home_slider_imgDiv" key={idx}>
      <img src={img} alt="" className="home_slider_img" />
    </div>
  ));

  return (
    <div className="home_banner">
      <div className="home_baner_mainSlider">
        <Slider {...settings}>{renderBanner}</Slider>
      </div>
      <div className="home_banner_right">
        <div className="home_banner_advertisement1">
          <img src={advertise1} alt="banner" className="home_banner_images" />
        </div>
        <div className="home_banner_advertisement2">
          <img src={advertise2} alt="banner" className="home_banner_images" />
        </div>
        <div className="home_banner_advertisement3">
          <img src={advertise3} alt="banner" className="home_banner_images" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
