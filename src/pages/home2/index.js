import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import '../../scss/style2.scss';
import SpaceSlide from '../../components/Community/SpaceSlide';
import {
  BlogsData,
  TestimonialsData,
  TopBannerData,
  TrainersData,
  ProgramsData
} from '../../Data';
import AboutSection from './AboutSection';
import Trainer2 from '../../components/Home/Trainer2';
import TestimonialSlide from '../../components/Home/TestimonialSlide';
import ProgramSlide from '../../components/Home/ProgramSlide';

const Home2 = () => {
  const [searchtap, setSearchtap] = useState('fitness center');

  const SpaceSiderArray = [1, 3, 4, 3, 3];

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const blogsettings = {
    dots: true,
    infinite: true,
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

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      <Header />

      {/* Top banner start */}
      <div id="bannerslider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div
            className="carousel-item active text-center bg-cover bg-overlay text-white"
            style={{ backgroundImage: `url(${TopBannerData[0].image})` }}
          >
            <div>
              <h1 class="mb-4 fadeInLeft animated">{TopBannerData[0].title}</h1>
              <h3 class="fadeInRight animated">{TopBannerData[0].subtitle}</h3>
            </div>
          </div>
          {TopBannerData.map((item, i) => {
            if (i === 0) {
              return null;
            }
            return (
              <div
                className="carousel-item text-center bg-cover bg-overlay text-white"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div>
                  <h1 class="mb-4 fadeInLeft animated">{item.title}</h1>
                  <h3 class="fadeInRight animated">{item.subtitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#bannerslider"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#bannerslider"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="position-absolute">
        <ul className="search-nav">
          <li>
            <a
              className={searchtap === 'fitness center' ? 'active' : ''}
              onClick={() => setSearchtap('fitness center')}
            >
              FITNESS CENTERS
            </a>
          </li>
          <li>
            <a
              className={searchtap === 'trainers' ? 'active' : ''}
              onClick={() => setSearchtap('trainers')}
            >
              TRAINERS
            </a>
          </li>
          <li>
            <a
              className={searchtap === 'nutrionists' ? 'active' : ''}
              onClick={() => setSearchtap('nutrionists')}
            >
              NUTRIONISTS
            </a>
          </li>
          <li>
            <a
              className={searchtap === 'events' ? 'active' : ''}
              onClick={() => setSearchtap('events')}
            >
              FITNESS EVENTS
            </a>
          </li>
        </ul>

        {searchtap === 'fitness center' ? (
          <form className="search-form">
            <input
              type="text"
              className="form-control"
              placeholder="Address, City, Zip, Neighborhood"
            />
            <button className="btn1">Serach</button>
          </form>
        ) : (
          ''
        )}

        {searchtap === 'trainers' ? (
          <form className="search-form">
            <input
              type="text"
              className="form-control"
              placeholder="Address, City, Zip, Neighborhood"
            />
            <button className="btn1">Serach</button>
          </form>
        ) : (
          ''
        )}

        {searchtap === 'nutrionists' ? (
          <form className="search-form">
            <input
              type="text"
              className="form-control"
              placeholder="Address, City, Zip, Neighborhood"
            />
            <button className="btn1">Serach</button>
          </form>
        ) : (
          ''
        )}

        {searchtap === 'events' ? (
          <form className="search-form">
            <input
              type="text"
              className="form-control"
              placeholder="Address, City, Zip, Neighborhood"
            />
            <button className="btn1">Serach</button>
          </form>
        ) : (
          ''
        )}
      </div>
      {/* top banner end */}

      {/* About Section start */}
      <AboutSection />
      {/* About Section end */}

      {/* Trainers start */}
      <section
        class="trainers2 py-5 text-white bg-black"
        style={{ backgroundImage: 'url(/img/portfolio.jpg)' }}
      >
        <div class="container">
          <h2 className="mb-3 text-center">Expert Trainers</h2>
          <div className="text-center mb-4">
            <span class="sub-title1">train with experts</span>
          </div>
          <div className="row">
            {TrainersData.map(item => {
              return (
                <div className="col-md-3 mb-3">
                  <Trainer2
                    image={item.image}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Counter up start */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 text-center mb-3">
              <h3 className="font-weight-bold">
                <CountUp end={100} />
                <span className="text-primary ml-2">+</span>
              </h3>
              <div className="font-weight-normal">GYMS</div>
            </div>

            <div className="col-md-3 text-center mb-3">
              <h3 className="font-weight-bold">
                <CountUp end={200} />
                <span className="text-primary ml-2">+</span>
              </h3>
              <div className="font-weight-normal">TRAINERS</div>
            </div>

            <div className="col-md-3 text-center mb-3">
              <h3 className="font-weight-bold">
                <CountUp end={2200} />
                <span className="text-primary ml-2">+</span>
              </h3>
              <div className="font-weight-normal">EVENTS</div>
            </div>

            <div className="col-md-3 text-center mb-3">
              <h3 className="font-weight-bold">
                <CountUp end={2000} />
                <span className="text-primary ml-2">+</span>
              </h3>
              <div className="font-weight-normal">MoF Members</div>
            </div>
          </div>
        </div>
        {/* Counter up end */}
      </section>
      {/* Trainers end */}

      {/* Community Start */}
      <div
        className="community-section"
        style={{ backgroundImage: 'url(/img/community.jpeg)' }}
      >
        <div className="container">
          <h2>Welcome to Community</h2>

          <div className="spaceslider">
            <Slider {...spacesettings}>
              {SpaceSiderArray.map(item => {
                return <SpaceSlide />;
              })}
            </Slider>
          </div>

          <Link to="/community" className="btn btn-primary mt-3">
            Connect Here
          </Link>
        </div>
      </div>
      {/* Cummunity end */}

      {/* testimonials start */}
      <div className="testimonials-section">
        <div className="container">
          <h2 className="mb-3 font-weight-bold text-center text-uppercase">
            Our Happy Clients
          </h2>

          <div className="text-center mb-4">
            <span class="sub-title1">Testimonials</span>
          </div>

          <div className="testimonals-slider1">
            <Slider {...settings}>
              {TestimonialsData.map(item => {
                return (
                  <TestimonialSlide
                    name={item.name}
                    image={item.image}
                    position={item.position}
                    description={item.description}
                    raiting={4}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonials end */}

      {/* Traning Programs */}
      <section class="training-programs2 py-5">
        <h2 class="text-center">Events</h2>
        <div class="text-center mb-3">
          <span class="sub-title1">train with experts</span>
        </div>
        <div class="programs-slider-wrapper">
          <div class="programs-slider">
            <Slider {...settings1}>
              {ProgramsData.map(item => {
                return (
                  <ProgramSlide
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    href="/"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      {/* Training Programs */}

      {/* Latest Blogs start */}
      <section className="latestblog py-5" id="latestblog">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Latest Blog Posts</h2>
            <span class="sub-title1">Our Blog</span>
          </div>
          <div className="blog-slider1">
            <Slider {...blogsettings}>
              {BlogsData.map(item => {
                return (
                  <div className="slide">
                    <img src={item.image} className="w-100 mb-2" />
                    <div className="p-3 shadow">
                      <span className="badge badge-primary d-inline-block">
                        {item.category}
                      </span>

                      <Link to="" className="h5 d-block">
                        {item.title}
                      </Link>
                      <Link to="" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      {/* Latest Blogs end */}

      <Footer />
    </>
  );
};

export default Home2;
