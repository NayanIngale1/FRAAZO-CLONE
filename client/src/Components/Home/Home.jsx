import React from "react";
import Banner from "./Banners/Banner";
import BestDeals from "./BestDeals/BestDeals";
import Mangoes from "./Categories/Mangoes";
import Fruits from "./Categories/Fruits";
import Vegetables from "./Categories/Vegetables";
import Herbs from "./Categories/Herbs";
import DryFruits from "./Categories/DryFruits";
import KitchenStaples from "./Categories/KitchenStaples";
import ProductCategories from "./ProductCategory/ProductCategories";
import DownloadApp from "./DownloadApp/DownloadApp";
const Home = () => {
  return (
    <div className="home_section">
      <div className="app_container">
        <Banner />
        <BestDeals />
        <ProductCategories />
        <Mangoes />
        <Fruits />
        <Vegetables />
        <Herbs />
        <DryFruits />
        <KitchenStaples />
      </div>
      <DownloadApp />
    </div>
  );
};

export default Home;
