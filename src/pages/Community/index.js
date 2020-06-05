import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CommunityHeader from '../../components/Header/CommunityHeader';
import SpaceSlider from '../../components/Community/SpaceSlide';
import '../../scss/community.scss';
import Post from '../../components/Community/Post';
import massageimg from '../../img/massage.png';
import pthysicaltherapyimg from '../../img/pthysicaltherapy.png';
import crossfitimg from '../../img/crossfit.png';
import cyclingimg from '../../img/cycling.png';
import dietingimg from '../../img/dieting.png';
import runimg from '../../img/run.png';
import yogaimg from '../../img/yoga.png';

const Community = () => {
  const spacesettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const SpaceSiderArray = [1, 2, 2, 3, 4, 5];

  return (
    <>
      <CommunityHeader />
      <div className="community-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-2 px-0 pt-3">
              <ul className="nav flex-column leftside-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="fas fa-dumbbell mr-2"></i> Gyms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img src={massageimg} className="icon" />
                    Massage
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img src={pthysicaltherapyimg} className="icon" />
                    Physical Therapy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img src={yogaimg} className="icon" />
                    Yoga/Barres/Pilates
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img src={cyclingimg} className="icon" />
                    Cycling
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img src={runimg} className="icon" />
                    3k/5k/10k run
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img src={dietingimg} className="icon" />
                    Dieting
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <img src={crossfitimg} className="icon" />
                    Crossfit
                  </Link>
                </li>
              </ul>
            </div>

            {/* main pannel */}
            <div className="col-md-8 pt-3">
              <div className="bg-white box">
                <div className="mb-3">
                  <img src="/img/person.jpg" className="boxavatar mr-2" />
                  Mohit Kumar
                </div>
                <h5
                  className="font-weight-bold qu-color--gray_light"
                  data-toggle="modal"
                  data-target="#addquestionModal"
                >
                  What is your question ?
                </h5>
              </div>

              <div className="box">
                <div className="text-muted mb-3">Discover New Spaces</div>

                <div className="spaceslider">
                  <Slider {...spacesettings}>
                    {SpaceSiderArray.map(item => {
                      return <SpaceSlider />;
                    })}
                  </Slider>
                </div>

                <div className="text-center mt-3">
                  <Link className="view-more">
                    View More Spaces <i className="fa fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
              {/* Posts */}
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
