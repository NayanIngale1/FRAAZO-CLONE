import React, { useState } from "react";
import "./Navbar.css";
import navbarLogo from "../../Images/fraazo-logo.svg";
import { MdLocationOn, MdPerson, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosWallet } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import {removeToken} from "../../Redux/user/action";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const userData = useSelector((state) => state.user);
  const user = userData.user;

  const dispatch = useDispatch();

  return (
    <div className="navbar_wrapper">
      <div className="navbar_logo">
        <Link to="/" className="linkTag">
          <img src={navbarLogo} alt="" className="navbar_logo_img" />
        </Link>
      </div>
      <div className="navbar_location_wrapper">
        <MdLocationOn />
        Pune
      </div>
      <div className="navbar_search_bar">
        <input
          className="navbar_search_input"
          placeholder="Find fresh vegetables, fruits and dairy..."
        />
        <FaSearch className="navbar_search-icon" />
      </div>
      <div className="navbar_cart" onClick={() => setOpenCart(true)}>
        <HiShoppingCart className="navbar_icon" />
        Cart
      </div>
      <div className="navbar_credit">
        <IoIosWallet className="navbar_icon" />
        Credit
      </div>
      {userData.isLoggedIn ? (
        <div className="navbar_logoutWrapper">
          <div
            className="navbar_login"
            onClick={() => setOpenLogout(!openLogout)}
          >
            <MdPerson className="navbar_icon" />
            {user.firstName}
          </div>
          {openLogout && (
            <div className="navbar_logout" onClick={()=>dispatch(removeToken())}>
              <MdLogout className="navbar_icon" />
              <div className="navbar_logout_btn">Logout</div>
            </div>
          )}
        </div>
      ) : (
        <div className="navbar_login" onClick={() => setOpenLogin(true)}>
          <MdPerson className="navbar_icon" />
          Login
        </div>
      )}
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <Login open={openLogin} setOpen={setOpenLogin} />
    </div>
  );
};

export default Navbar;
