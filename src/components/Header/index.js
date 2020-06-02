import React, { useState } from 'react';
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
          <img src="img/logo.png" alt="" />
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
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get Fit
              </Link>
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

                <Link className="dropdown-item" to="/home4">
                  Home 4
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Get Trained
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Get Healthy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Get Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Get Connected
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#latestblog">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Mof Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                MyMoF
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Advertise
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-light" to="/loginsignup">
                Sign up / Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
