import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../Images/evangadi-logo-home.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Header({ logout }) {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State variable for the menu

  const goToSignIn = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="header container-fluid">
      <div className="innerContainer container d-flex justify-content-around ">
        <Link to="/" className="header__image">
          <img src={logo} alt="Evangadi logo" />
        </Link>
        <button className="ic d-sm-block d-md-none" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`innerContainer2 ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/">How it Works</Link>
          <button className="btn_header" onClick={goToSignIn}>
            {userData.user ? "LogOut" : "SIGN IN"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
