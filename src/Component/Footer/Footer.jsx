import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <h3>لینک های مفید</h3>
          <Link className="footer-link" to="/showcase">
            صفحه اصلی
          </Link>
          <Link className="footer-link" to="/men">
            مردانه
          </Link>
          <Link className="footer-link" to="women">
            زنانه
          </Link>
          <Link className="footer-link" to="login">
            ثبت نام در سایت
          </Link>
        </div>
        <div className="footer-contact">
          <h3>ارتباط با ما</h3>
          <p>09357693431</p>
          <p>farshid1.god@gmail.com</p>
        </div>
        <div className="footer-aboutus">
          <h3>درباره ی ما</h3>
        </div>
      </div>
    </div>
  );
}
