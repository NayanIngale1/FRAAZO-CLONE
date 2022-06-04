import React from "react";
import "./Footer.css";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import footerDesignImg from "../../Images/footer-design.svg";
import footerLogo from "../../Images/fraazo-logo-white.svg";
import google_store_white from "../../Images/google-play-white.png";
import apple_store_white from "../../Images/apple-store-white.png";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_design_imgDiv">
        <img src={footerDesignImg} alt="" className="footer_design_img" />
      </div>

      <div className="footer_info_wrapper">
        <div className="app_container">
          <div className="footer_list_item">
            <div className="footer_list_first">
              <img src={footerLogo} alt="" className="footer_logo_white" />
              <p className="footer_logo_info">
                Order online vegetables & fruits directly from the farm. Fraazo
                is online platform that allows customer to get farm fresh
                produce directly from farmers.
              </p>
            </div>
            <div className="footer_useful_links">
              <h3 className="footer_list_heading">Useful Links</h3>
              <div>Privacy Policy</div>
              <div>FAQ</div>
              <div>Terms & Conditions</div>
            </div>
            <div className="footer_cities_serve">
              <h3 className="footer_list_heading">Cities We Serve</h3>

              <div>Mumbai</div>
              <div>Hyderabad</div>
              <div>Bangalore</div>
              <div>Delhi</div>
              <div>Noida</div>
              <div>Gurugram</div>
              <div>Pune</div>
            </div>
            <div className="footer_connect_us">
              <h3 className="footer_list_heading">Connect with us</h3>

              <div className="footer_connect_us_method">
                {" "}
                <HiOutlineMail className="footer_connect_us_logo" />
                nayanvpingale@gmail.com
              </div>
              <div className="footer_connect_us_method">
                <TbPhoneCall className="footer_connect_us_logo" />
                +91 8411914254
              </div>
              <div>
                102, We Work Vijay Diamond, A3 & B2, Cross Road B, MIDC, Andheri
                (East), Mumbai City MH 400093.
              </div>
              <div>
                <h3 className="footer_list_heading">Download The App</h3>
                <div className="footer_download_from">
                  <img src={google_store_white} alt="" />
                  <img src={apple_store_white} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer_main_info">
            <h1 className="footer_list_heading">
              Fresh Fruits & Vegetables Grocery Shopping Online
            </h1>
            <p>
              The quality of fruits & vegetables is synonymous with its
              freshness, while getting fresh fruits and vegetables is a tedious
              task at times but with Fraazo you can get it delivered at your
              doorstep. Fraazo brings a wide range of farm fresh fruits,
              vegetables and dairy products to you, all in just a click. We
              currently serve about more than 3lacs+ happy customers in Mumbai,
              Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo has made
              online shopping of fresh produce much easier with its hassle-free
              home delivery options. You can choose the delivery slot as per
              your choice and schedule your order accordingly. Or you can simply
              opt for the option of 90 mins Express Delivery and get your order
              delivered in not more than 90 mins. The farm fresh fruits and
              vegetables on Fraazo are available at best prices compared to
              other vendors & supermarkets. Plus with so many exciting offers,
              one can save up to 20% on their Monthly grocery budgets. No need
              to wait in long queues in crowded supermarkets or local mandis for
              getting the best prices on veggies. Kick the stress out & just
              Fraazo your dose of freshness with savings at the comfort of your
              home. Fraazo directly sources fresh fruits and veggies from an
              extensive network of farmers across Maharashtra, hence bringing
              you fresh produce straight from farm to table in less than 12
              hours. With our Safe & Hygienic packaging and minimal multiple
              handling, we ensure you get the best quality fresh produce.
            </p>
            <p>
              The fruits and vegetables are 100% hand-picked fresh from farm,
              while some products are hydroponically-grown. The wide range of
              fruits and veggies on Fraazo include more than 100+ farm fresh
              vegetables and fruits, starting from regular veggies like dudhi,
              cauliflower, beetroot, cabbage, etc. to exotic veggies like
              broccoli, lettuce etc. We also provide the essential vegetable
              combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh
              Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more.
              There are a lot of exciting deals on vegetables & fruits, every
              day of the week, the major highlights being Monday Mandi, Veggie
              Wednesday, Freelivery Thursday & Fruit Friday.For payments, you
              can choose from the multiple payment options as Fraazo accepts
              Debit card, Credit card, UPI options like iMobile, Google Pay, 8+
              e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo,
              NetBanking and Cash on Delivery (COD). If you ever have an issue
              with missing items or any quality issue, you can raise your
              concern with us in 48 hrs & we shall refund/ replace your product
              with “no-questions-asked-policy”. You can simply connect with our
              Customer Support team via Chat Support or Call on 9152291522.
            </p>
          </div>
          <div className="footer_copyright_info">
            © Copyrights 2022. Fraazo-Clone. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
