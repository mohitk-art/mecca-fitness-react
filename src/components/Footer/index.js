import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark main-footer">
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
                  <img src="/img/partner1.png" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/partner1.png" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/partner1.png" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/partner1.png" />
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Quik Links</h5>
            <div className="bg-primary title-btm mb-3"></div>
            <ul className="footer-links form-row">
              <li className="col-md-6">
                <a href="">About Us</a>
              </li>
              <li className="col-md-6">
                <a href="">Careers</a>
              </li>
              <li className="col-md-6">
                <a href="">Feedback</a>
              </li>
              <li className="col-md-6">
                <a href="">Help and support</a>
              </li>
              <li className="col-md-6">
                <a href="">Contact Us</a>
              </li>
              <li className="col-md-6">
                <a href="">Privacy</a>
              </li>
              <li className="col-md-6">
                <a href="">Partnership</a>
              </li>
              <li className="col-md-6">
                <a href="">Investor Relationships</a>
              </li>
              <li className="col-md-6">
                <a href="">Terms of Service</a>
              </li>
              <li className="col-md-6">
                <a href="">Help and Support</a>
              </li>
              <li className="col-md-6">
                <a href="">Safety and Trust</a>
              </li>
            </ul>
            <h5 className="mt-4">Company Certification brandings</h5>
            <div className="bg-primary title-btm mb-3"></div>

            <ul className="form-row certificate-row">
              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" />
                </div>
              </li>

              <li className="col-4">
                <div>
                  <img src="/img/NASM-PNG.png" />
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Letest Post</h5>
            <div className="bg-primary title-btm mb-3"></div>
            <div className="footer-post">
              <img src="/img/blog2.jpg" />
              <div>
                <a href="" className="h5">
                  Pellentesque convallis, diam et feugiat volutpat
                </a>
                <div className="date">April 19, 2020</div>
              </div>
            </div>

            <div className="footer-post">
              <img src="/img/blog2.jpg" />
              <div>
                <a href="" className="h5">
                  Pellentesque convallis, diam et feugiat volutpat
                </a>
                <div className="date">April 19, 2020</div>
              </div>
            </div>

            <div className="footer-post">
              <img src="/img/blog2.jpg" />
              <div>
                <a href="" className="h5">
                  Pellentesque convallis, diam et feugiat volutpat
                </a>
                <div className="date">April 19, 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="font-weight-normal">
            Mecca Fitness © 2020. All Rights Reserved
          </div>
          <div className="social-links">
            <a href="" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
