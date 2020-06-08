import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <div className="container mb-5 about-section2 pt-5">
      <div className="row align-items-center">
        <div className="col-md-7 p-5 animated fadeInRight">
          <h2>We Are Here To Dream! Our Team Is Here Surve You.</h2>
          <div className="sub-title">About us</div>
          <p>
            At vero eos et accusamus et iusto odio digni goikussimos ducimus qui
            to bonfoe blanditiis praese. Ntium voluum deleniti atque corrupti
            quos. of a page a reload when looking at its layout. The point of
            using Lorem Ipsum is that it has pi motive re-or-less normal
            distribution.
          </p>

          <Link to="" className="btn btn-primary">
            Read More
          </Link>
        </div>

        <div className="col-md-5 animated fadeInLeft">
          <div className="two-images">
            <img src="img/portfolio2.jpg" className="w-100 shadow" />
            <img src="img/portfolio4.jpg" className="w-100 shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
