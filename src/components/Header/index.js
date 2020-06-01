import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-transparent main-header shadow-none"
      id="myHeader"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="img/logo.png" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto align-items-center">
            <li
              className="nav-item dropdown"
              onMouseOver={() => setDropdown(true)}
              onMouseOut={() => setDropdown(false)}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get Fit
              </a>
              <div
                className={
                  dropdown ? 'dropdown-menu show rounded-0' : 'dropdown-menu'
                }
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="/home2">
                  Home 2
                </Link>
                <Link className="dropdown-item" to="/home3">
                  Home 3
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Get Trained
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get Healthy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get Connected
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#latestblog">
                Articles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mof Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MyMoF
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Advertise
              </a>
            </li>

            <li className="nav-item">
              <a className="btn btn-light" href="#">
                Sign up / Log in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
