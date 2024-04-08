import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fs-2 fw-bold mb-4 text-blue">
              Aniwatch
            </h6>
            <p>
              Welcome to AniWatch, your premier destination for all things
              animated on the big screen!
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-blue">Products</h6>
            <ul className="list-unstyled">
              <li>
                <Link to={`/`} className="text-reset text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/search`}
                  className="text-reset text-decoration-none"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-reset text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-blue">
              Useful Links
            </h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to={`/subscriptions`}
                  className="text-reset text-decoration-none"
                >
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  to={`/contact`}
                  className="text-reset text-decoration-none"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-reset text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold mb-4 text-blue">Contact</h6>
            <p>
              <i className="fas fa-home me-3"></i>Maharashtra
            </p>
            <p>
              <i className="fas fa-envelope me-3 text-decoration-none "></i>
              <a href="mailto:Kumarsunny1246@gmail.com" className=" text-decoration-none text-white " >
                Kumarsunny1246@gmail.com
              </a>
            </p>
            <p  >
              <i className="fas fa-phone me-3 "></i>
              <a href="tel:1234569877" className=" text-decoration-none text-white ">1234569877</a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center py-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p className="mb-0">
          © {new Date().getFullYear()} Aniwatch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
