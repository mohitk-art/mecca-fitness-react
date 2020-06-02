import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer text-center text-sm-left">
      <div className="container py-5 text-white">
        <div className="row">
          <div className="col-md-4">
            <img src="/img/logo.png" className="footer-logo mb-3" />
            <p className="font-weight-normal">
              Pellentesque convallis, diam et feugiat volutpat, tellus ligula
              consequat augue, quis malesuada nisi ante nec metus. Sed id
              pretium nunc. Mauris vitae porttitor tortor. Fusce aliquet ac
              metus eget egestas.
            </p>

            <h5 className="mt-4">Corporate Partners</h5>
            <div className="bg-primary title-btm mb-3"></div>

            <ul className="form-row certificate-row">
              <li className="col-4">
                <div>
                  <img src="/img/partner1.png" alt="" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/partner1.png" alt="" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/partner1.png" alt="" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/partner1.png" alt="" />
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Quik Links</h5>
            <div className="bg-primary title-btm mb-3"></div>
            <ul className="footer-links form-row">
              <li className="col-md-6">
                <Link to="">About Us</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Careers</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Feedback</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Help and support</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Contact Us</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Privacy</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Partnership</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Investor Relationships</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Terms of Service</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Help and Support</Link>
              </li>
              <li className="col-md-6">
                <Link to="">Safety and Trust</Link>
              </li>
            </ul>
            <h5 className="mt-4">Company Certification brandings</h5>
            <div className="bg-primary title-btm mb-3"></div>

            <ul className="form-row certificate-row">
              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" alt="" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" alt="" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" alt="" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" alt="" />
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Letest Post</h5>
            <div className="bg-primary title-btm mb-3"></div>
            <div className="footer-post">
              <img src="/img/blog2.jpg" alt="" />
              <div>
                <Link to="" className="h5">
                  Pellentesque convallis, diam et feugiat volutpat
                </Link>
                <div className="date">April 19, 2020</div>
              </div>
            </div>

            <div className="footer-post">
              <img src="/img/blog2.jpg" alt="" />
              <div>
                <Link to="" className="h5">
                  Pellentesque convallis, diam et feugiat volutpat
                </Link>
                <div className="date">April 19, 2020</div>
              </div>
            </div>

            <div className="footer-post">
              <img src="/img/blog2.jpg" alt="" />
              <div>
                <Link to="" className="h5">
                  Pellentesque convallis, diam et feugiat volutpat
                </Link>
                <div className="date">April 19, 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-sm-between justify-content-center align-items-center flex-wrap">
          <div className="font-weight-normal mt-2 mt-sm-0">
            Mecca Fitness © 2020. All Rights Reserved
          </div>
          <div className="social-links">
            <Link to="" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" target="_blank">
              <i className="fab fa-pinterest"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
