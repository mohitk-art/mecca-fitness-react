import React from 'react';

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-transparent main-header shadow-none"
      id="myHeader"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="img/logo.png" />
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get Fit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get Trained
              </a>
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
              <a className="nav-link" href="#">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
