import React from 'react';
import { Link } from 'react-router-dom';

const CustomCard = ({ title, description, link, icon, image }) => {
  return (
    <div className="custom-card-box p-3 shadow animated jackInTheBox">
      {icon ? <i className={`${icon} icon`}></i> : ''}
      {image ? <img src={image} className="icon-img" /> : ''}
      {title ? <h5>{title}</h5> : ''}
      {description ? <p>{description}</p> : ''}

      <Link className="hover">
        <div>
          {title ? <h5>{title}</h5> : ''}
          {link ? (
            <Link to={link}>
              Read More <i className="fa fa-arrow-right"></i>
            </Link>
          ) : (
            ''
          )}
        </div>
      </Link>
    </div>
  );
};

export default CustomCard;
