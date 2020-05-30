import React from 'react';

const CustomCard = ({ title, description, link, icon, image }) => {
  return (
    <div className="custom-card-box p-3 shadow animated jackInTheBox">
      {icon ? <i className={`${icon} icon`}></i> : ''}
      {image ? <img src={image} className="icon-img" /> : ''}
      {title ? <h5>{title}</h5> : ''}
      {description ? <p>{description}</p> : ''}

      <a className="hover">
        <div>
          {title ? <h5>{title}</h5> : ''}
          {link ? (
            <a href={link}>
              Read More <i className="fa fa-arrow-right"></i>
            </a>
          ) : (
            ''
          )}
        </div>
      </a>
    </div>
  );
};

export default CustomCard;
