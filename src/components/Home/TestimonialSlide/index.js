import React, { useState } from 'react';

export default function TestimonialSide({
  image,
  name,
  position,
  description,
  raiting
}) {
  return (
    <div className="text-center bg-white p-5 shadow scaleup testimonals-slide">
      <div className="avatar">
        <i className="fa fa-quote-right"></i>
        <img src={image} className="img" />
      </div>
      <h5>{name}</h5>
      <h6 className="text-primary">{position}</h6>
      <p>{description}</p>

      {raiting ? (
        ''
      ) : (
        <div className="raiting">
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      )}

      {raiting === 1 ? (
        <div className="raiting">
          <i className="fa fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ) : (
        ''
      )}

      {raiting === 2 ? (
        <div className="raiting">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ) : (
        ''
      )}

      {raiting === 3 ? (
        <div className="raiting">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ) : (
        ''
      )}

      {raiting === 4 ? (
        <div className="raiting">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      ) : (
        ''
      )}

      {raiting === 5 ? (
        <div className="raiting">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
