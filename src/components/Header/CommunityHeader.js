import React from 'react';
import logoimg from '../../img/logo.jpg';
import { Link } from 'react-router-dom';

const CommunityHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark communityheader">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logoimg} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="">
                <i className="fa fa-edit"></i> Answers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/spaces">
                <i className="fa fa-users"></i> Spaces
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="">
                <i className="fa fa-bell"></i> Nitifications
              </Link>
            </li>
          </ul>

          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
            <button className="fa fa-search" type="submit"></button>
          </form>

          <div className="dropdown user-dropdown mx-2">
            <a
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user-circle"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Settings
              </a>
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </div>

          <a href="" className="btn btn-primary rounded-pill">
            Add Question
          </a>
        </div>
      </div>
    </nav>
  );
};

export default CommunityHeader;
