import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark  "
        aria-label="Eleventh navbar example"
      >
        
        <div className="container-fluid text-white ">
          <Link to={`/`} className="navbar-brand text-white">
            Aniwatch
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to={`/search`} className="text-decoration-none ">
                <a className="nav-link text-white text-capitalize" href="#">
                  categories
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-capitalize" href="#">
                  dashboard
                </a>
              </li>
              <li className="nav-item">
                {/* <Link to={`/login`} className="text-decoration-none">
                <a className="nav-link text-white text-capitalize" href="#">
                  sign in
                </a>
                </Link> */}
              </li>
              {/* dropdown */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ....... */}
            </ul>
            <Link to={`/login`}>
            <button className="btn btn-primary text-capitalize "> sign in</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
