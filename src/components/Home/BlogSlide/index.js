import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogSlide({ image, category, title, href }) {
  return (
    <div className="blog-slide">
      <img src={image} className="w-100 mb-2" />
      <div className="p-3 shadow">
        <span className="badge badge-primary d-inline-block">{category}</span>

        <Link to={href} className="h5 d-block">
          {title}
        </Link>
        <Link to={href} className="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
}
