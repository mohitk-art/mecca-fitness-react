import React from 'react';
import { Link } from 'react-router-dom';

const Trainer = ({ name, image, position, description }) => {
  return (
    <div className="shadow trainer">
      <img src={image} className="w-100" />
      <div className="hover p-3 shadow">
        <h5>{name}</h5>
        <h6 className="text-primary">{position}</h6>
        <div className="desc">
          <p>{description}</p>
          <div className="social-links">
            <Link href="" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link href="" target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>

            <Link href="" target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>

            <Link href="" target="_blank">
              <i className="fab fa-pinterest"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
