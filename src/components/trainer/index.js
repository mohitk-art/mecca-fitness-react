import React from 'react';

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
    </div>
  );
};

export default Trainer;
