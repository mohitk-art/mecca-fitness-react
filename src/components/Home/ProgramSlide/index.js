import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramSlide({ image, title, subtitle, href }) {
  return (
    <div class="position-relative">
      <img src={image} class="w-100" />
      <div class="position-absolute">
        <div>
          <h6>{title}</h6>
          <h5>{subtitle}</h5>
        </div>
        <Link to={href}>
          <i class="far fa-plus-square"></i>
        </Link>
      </div>
    </div>
  );
}
