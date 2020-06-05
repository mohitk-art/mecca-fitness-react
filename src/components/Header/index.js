import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../../img/logo.jpg';

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg main-header shadow-none"
        id="myHeader"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logoimg} alt="" />
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
              <li className="nav-item">
                <a className="nav-link" href="#latestblog">
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
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
      <div className="top-space"></div>
    </>
  );
};

export default Header;
