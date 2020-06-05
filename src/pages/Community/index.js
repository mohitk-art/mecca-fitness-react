import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CommunityHeader from '../../components/Header/CommunityHeader';

import Userbox from '../../components/Community/Userbox';
import SpaceSlider from '../../components/Community/SpaceSlide';
import '../../scss/community.scss';
import Post from '../../components/Community/Post';

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
            <div className="col-md-2">
              <ul className="nav flex-column leftside-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="fas fa-dumbbell mr-2"></i> Gyms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Massage
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Physical Therapy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Yoga/Barres/Pilates
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Cycling
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    3k/5k/10k run
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Dieting
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
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
                <h3 className="font-weight-bold">
                  What is your question or link
                </h3>
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
                  <a href="" className="view-more">
                    View More Spaces <i className="fa fa-chevron-right"></i>
                  </a>
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
