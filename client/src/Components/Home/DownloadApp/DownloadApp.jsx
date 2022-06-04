import React from "react";
import "./DownloadApp.css";
import mobilesImg from "../../../Images/mobiles.png";
import googleDownload from "../../../Images/google-play.png";
import iosDownload from "../../../Images/apple-store.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="download_app_section">
      <div className="download_app_mobiles">
        <img src={mobilesImg} alt="" className="mobiles_img" />
      </div>
      <div className="download_app_infoDiv">
        <h1>Download The App</h1>
        <h3>
          Enter your phone number to receive a text with a link to download the
          app
        </h3>
        <div className="download_for_section">
          <div className="download_for_android">
            <FaGooglePlay />
            Android
          </div>
          <div className="download_for_ios">
            <FaApple />
            IPhone
          </div>
        </div>
        <div className="download_mobile_number">
          <div className="country_code">+91</div>
          <input
            type="text"
            className="download_input_mobile"
            placeholder="Enter Your Mobile number"
          />
        </div>
        <div>
          <button className="download_submit_btn">SUBMIT</button>
        </div>
        <div className="download_available_on">
          Available on{" "}
          <img src={googleDownload} alt="" className="download_from_google" />
          <img src={iosDownload} alt="" className="download_from_ios" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
