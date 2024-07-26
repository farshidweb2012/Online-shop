import React from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MYNavbar() {
  const [overlayvis, setOverlayvis] = useState(false);

  const showoverlay = () => {
    setOverlayvis(true);
  };
  const closebox=()=>{
    setOverlayvis(false);

  }
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            صفحه اصلی
          </Link>{" "}
        </li>

        <li className="navbar-item">
          <Link className="navbar-link" to="/men">
            مردانه
          </Link>{" "}
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/women">
            زنانه{" "}
          </Link>{" "}
        </li>
        
      </ul>

      <div className="navbar-header">
        <h1>فروشگاه انلاین</h1>
      </div>
      <div className="navbar-login">
        <input
          onClick={showoverlay}
          className="navbar-login-search"
          type="text"
          placeholder="جستجو در سایت..."
        />
        <div
          
          style={
            overlayvis ? { visibility: "visible" } : { visibility: "hidden" }
          }
          className="overlay-search"
        >
          <input
            className="navbar-login-search-overlay"
            type="text"
            placeholder="جستجو در سایت..."
          />

      
            {" "}
            <FontAwesomeIcon
            onClick={closebox}
              className="overlay-search-closeIcon"
              icon={faClose}
            />{" "}
      \
        </div>
        <Link className="navbar-login-link" to="/shop">
          <FontAwesomeIcon className="fa-2x" icon={faCartShopping} />
        </Link>
        <Link className="navbar-login-link" to="/login">
          {" "}
          ثبت نام در سایت
        </Link>
      </div>
    </div>
  );
}
