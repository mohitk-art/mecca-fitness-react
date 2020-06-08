import React from 'react';
import { Link } from 'react-router-dom';

export default function Trainer2({ image, name, position }) {
  return (
    <div className="shadow p-3 trainer2 scaleup">
      <img src={image} className="shadow mb-3" />
      <h5>{name}</h5>
      <div className="font-weight-normal text-primary mb-3">{position}</div>
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
  );
}
