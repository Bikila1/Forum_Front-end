import React from "react";
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { instagram } from "react-icons-kit/feather/instagram";
import { youtube } from "react-icons-kit/feather/youtube";
import "./Footer.css";
import logo from "../../Images/logo1.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-warpper">
        <div className="footer-top">
          <div className="container">
            <div className="footer-bottom-content clearfix">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="logo-footer">
                    <Link className="navbar-brand" to="/">
                      <img src={logo} alt="#" />
                    </Link>
                  </div>

                  <div className="footer-social-list list-social list-inline">
                    <Link
                      className="brands"
                      to="https://www.facebook.com/evangaditech"
                      target="_blank"
                    >
                      {/* <span className="fa-brands fa-facebook"></span> */}
                      <Icon icon={facebook} size={25} />
                    </Link>

                    <Link
                      className="brands"
                      to="https://www.instagram.com/evangaditech/"
                      target="_blank"
                    >
                      <span className="fa-brands fa-instagram"></span>
                      {/* <Icon icon={instagram} size={25} /> */}
                    </Link>

                    <Link
                      className="brands"
                      to="https://www.youtube.com/c/weareethiopians"
                      target="_blank"
                    >
                      <span className="fa-brands fa-youtube"></span>
                      {/* <Icon icon={youtube} size={25} /> */}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <h5>Useful Link</h5>
                  <div className="list-menu">
                    <Link
                      className="lists"
                      to="https://www.evangadi.com/explained/"
                    >
                      How it works{" "}
                    </Link>
                    <Link
                      className="lists"
                      to="https://www.evangadi.com/legal/terms/"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      className="lists"
                      to="https://www.evangadi.com/legal/privacy/"
                    >
                      Privacy policy
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <h5>Contact Info</h5>
                  <div className="list-menu contact-list">
                    <span className="lists1">Evangadi Networks</span>
                    <span className="lists1">support@evangadi.com</span>
                    <span className="lists1">+1-202-386-2702</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
