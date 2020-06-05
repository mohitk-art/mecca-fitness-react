import React from 'react';
import { Link } from 'react-router-dom';

const SpaceSlider = () => {
  return (
    <div className="space-col">
      <i className="fa fa-times"></i>
      <img src="/img/health-coach.jpg" className="w-100" />
      <div className="p-2">
        <img src="/img/partner1.png" className="avatar" />
        <Link className="h5" to="">
          dui aliquet convallis
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          lectus nisi
        </p>
        <a className="btn1">
          <i className="fa fa-address-card"></i> Follow 2.6k
        </a>
      </div>
    </div>
  );
};

export default SpaceSlider;
