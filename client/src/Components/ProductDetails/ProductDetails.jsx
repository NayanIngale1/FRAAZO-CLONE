import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { FaCartPlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { useParams,Link } from "react-router-dom";
import BestDeals from "../Home/BestDeals/BestDeals";
import AddToCartBtn from "../AddToCart Button/AddToCartBtn";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fraazo-clone.herokuapp.com/fraazo/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
    window.scrollTo(0, 0);
  }, [id]);

  const [show, setShow] = useState({
    des: true,
    benefit: false,
    info: false,
  });
  return (
    <div className="app_container">
      <div className="product_details_page">
        <div className="path_to_product">
          Home/{product.category}/<Link to={`/products/category/${product.sub_category}`} className="linkTag">{product.sub_category}</Link>/<b>{product.name}</b>
        </div>
        <div className="product_details_infoDiv">
          <div className="product_details_imgDiv">
            <img src={product.image} alt="" className="product_img" />
          </div>
          <div className="product_details_info">
            <div className="product_detail_name">{product.name}</div>
            <div className="product_detail_weight">{product.weight}</div>
            <div className="product_details_price_section">
              <div className="product_original_prize">
                <BiRupee />
                {product.prize}
              </div>
              <div className="product_old_prize">
                {product.old_prize && <BiRupee />}
                {product.old_prize}
              </div>
            </div>
            <div className="add_cart_buttonDiv">
              {/* <button className="add_cart_btn">
                <FaCartPlus />
                ADD
              </button> */}
               <AddToCartBtn prod={product} />
            </div>
            <div className="product_details_tabs">
              <div className="details_tabs">
                <div
                  className={show.des ? "detail_tab active" : "detail_tab"}
                  onClick={() =>
                    setShow({ des: true, benefit: false, info: false })
                  }
                >
                  Description
                </div>
                <div
                  className={show.benefit ? "detail_tab active" : "detail_tab"}
                  onClick={() =>
                    setShow({ des: false, benefit: true, info: false })
                  }
                >
                  Benefits
                </div>
                <div
                  className={show.info ? "detail_tab active" : "detail_tab"}
                  onClick={() =>
                    setShow({ des: false, benefit: false, info: true })
                  }
                >
                  Info
                </div>
              </div>
              <div className="product_details_tab_details">
                {show.des && <p>{product.description}</p>}
                {show.benefit && <p>{product.benifit}</p>}
                {show.info && <p>{product.info}</p>}
              </div>
            </div>
          </div>
        </div>
        <BestDeals />
      </div>
    </div>
  );
};

export default ProductDetails;
