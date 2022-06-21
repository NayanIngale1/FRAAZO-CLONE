import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../Redux/products/action";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { subcategory } = useParams();

  const data = useSelector((state) => state.product.data);
  const [prodData, setProdData] = useState([]);

  const [openMangoes, setOpenMangoes] = useState(false);
  const [openVegetables, setOpenVegetables] = useState(false);
  const [openFruits, setOpenFruits] = useState(false);
  const [openHerbs, setOpenHerbs] = useState(false);
  const [openDryFruits, setOpenDryFruits] = useState(false);
  const [openKitchenStaples, setOpenKitchenStaples] = useState(false);

  
  useEffect(() => {
    fiterCategory();
    window.scroll(0, 0);
  }, [subcategory]);

  function fiterCategory() {
    const filterData = data.filter((el) => el.sub_category == subcategory);

    setProdData(filterData);
  }

  return (
    <div className="app_container">
      <div className="products_listing">
        <div className="products_listing_acordion">
          <div className="products_filters">
            <div className="prod_accordion">
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenMangoes(!openMangoes)}
                >
                  <div style={{ color: "green", fontSize: "20px" }}>
                    {openMangoes ? "-" : "+"}
                  </div>
                  <div>Mangoes</div>
                </div>
                {openMangoes && (
                  <>
                    <Link to="/products/mangoes/mangoes" className="linkTag">
                      <div className="prod_accordion-content">
                        {">"} {"   "}Mangoes
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenFruits(!openFruits)}
                >
                  <div>{openFruits ? "-" : "+"}</div>
                  <div>Fruits</div>
                </div>
                {openFruits && (
                  <>
                    <Link
                      to="/products/fruits/apples-pears-plums"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "}Apples, Pears, Plums
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/oranges-mosambi-melons"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Oranges, Mosambi & Melons
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/papaya-pineapple-pomegranate"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Papaya, Pineapple, Pomegranate
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/grapes-banana-guava-sapota"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Grapes, Banana, Guava & Sapota
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/exotic-fruits"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Exotic Fruits
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/fruit-combos"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {" "}
                        {">"} {"   "}Fruit Combos
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenVegetables(!openVegetables)}
                >
                  <div>{openVegetables ? "-" : "+"}</div>
                  <div>Vegetables</div>
                </div>
                {openVegetables && (
                  <>
                    <Link
                      to="/products/vegetables/daily-veggies"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Daily Veggies
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/onion-potato-and-tomatoes"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Onion, Potato & Tomatoes
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/root-vegetables"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Root Vegetable
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/exotic-vegetables"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Exotic Vegetables
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/vegetable-combos"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Vegetable Combos
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/cuts-peeled-and-sprouts"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Cuts, Peeled & Sprouts
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenHerbs(!openHerbs)}
                >
                  <div>{openHerbs ? "-" : "+"}</div>
                  <div>Herbs</div>
                </div>
                {openHerbs && (
                  <>
                    <Link
                      to="/products/herbs/herbs-and-leafy-products"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Herbs & Leafy Products
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenDryFruits(!openDryFruits)}
                >
                  <div>{openDryFruits ? "-" : "+"}</div>
                  <div>Dry Fruits</div>
                </div>
                {openDryFruits && (
                  <>
                    <Link
                      to="/products/dryfruits/premium-quality-dryfruits"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Premium Quality Dry Fruits
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenKitchenStaples(!openKitchenStaples)}
                >
                  <div>{openKitchenStaples ? "-" : "+"}</div>
                  <div>Kitchen Staples</div>
                </div>
                {openKitchenStaples && (
                  <>
                    <Link
                      to="/products/kitchenstapels/dals-pulses"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Dals & Pulses
                      </div>
                    </Link>
                    <Link
                      to="/products/kitchenstapels/atta-flour-sooji"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Atta, Flour and Sooji
                      </div>
                    </Link>
                    <Link
                      to="/products/kitchenstapels/rice-produts"
                      className="linkTag"
                    >
                      <div className="prod_accordion-content">
                        {">"} {"   "} Rice and Rice Products
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="products_listing_products">
          <div className="products_listing_path">
            Home/<b>{subcategory}</b>
          </div>
          <div className="products_list">
            {prodData.map((ele) => (
              <ProductCard prod={ele} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
