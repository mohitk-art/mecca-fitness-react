import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import '../../scss/style2.scss';

const Home2 = () => {
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

  const blogs = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: 'img/portfolio1.jpg',
      category: 'GET FIT'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing eli',
      image: 'img/blog3.jpg',
      category: 'GET Trained'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: 'img/blog2.jpg',
      category: 'GET Healthy'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: 'img/blog4.jpg',
      category: 'GET Motivated (member stories)'
    }
  ];

  const testimonials = [
    {
      name: 'Patrick Cortez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      position: 'Leader',
      image: '/img/person.jpg'
    },
    {
      name: 'Patrick Cortez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      position: 'Leader',
      image: '/img/person.jpg'
    },
    {
      name: 'Patrick Cortez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      position: 'Leader',
      image: '/img/person.jpg'
    }
  ];

  const topbanner = [
    {
      title: 'The Journey Begins Here',
      image: 'img/banner1.jpg',
      subtitle: 'Motivational Energy Continuously Creating Achievement'
    },
    {
      title: 'The Journey Begins Here',
      image: 'img/portfolio4.jpg',
      subtitle: 'Motivational Energy Continuously Creating Achievement'
    },
    {
      title: 'The Journey Begins Here',
      image: 'img/portfolio2.jpg',
      subtitle: 'Motivational Energy Continuously Creating Achievement'
    }
  ];

  const fourboxes = [
    {
      title: 'FITNESS CENTERS',
      icon: 'fas fa-dumbbell',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasullamcorper cursus malesuada',
      link: '/',
      image: '/img/aboutimage.jpg'
    },
    {
      title: 'TRAINERS',
      icon: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasullamcorper cursus malesuada',
      link: '/',
      image: 'img/blog3.jpg'
    },
    {
      title: 'NUTRIONISTS',
      icon: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasullamcorper cursus malesuada',
      link: '/',
      image: 'img/blog2.jpg'
    },
    {
      title: 'FITNESS EVENTS',
      icon: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasullamcorper cursus malesuada',
      link: '/',
      image: 'img/blog4.jpg'
    }
  ];

  const trainers = [
    {
      name: 'Patrick Cortez',
      image: '/img/trainer1.jpg',
      position: 'Leader',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      name: 'Patrick Cortez',
      image: '/img/trainer1.jpg',
      position: 'Leader',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      name: 'Patrick Cortez',
      image: '/img/trainer1.jpg',
      position: 'Leader',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      name: 'Patrick Cortez',
      image: '/img/trainer1.jpg',
      position: 'Leader',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ];

  const programs = [
    {
      image: 'img/portfolio4.jpg',
      title: 'Bodybuilding',
      subtitle: 'Bodybuilding Training Session'
    },
    {
      image: 'img/portfolio1.jpg',
      title: 'Boxing',
      subtitle: 'Boxing Training Session'
    },
    {
      image: 'img/portfolio2.jpg',
      title: 'Cardio Training',
      subtitle: 'Cardio Training Session'
    },
    {
      image: 'img/portfolio3.jpg',
      title: 'Yoga',
      subtitle: 'Yoga Training Session'
    }
  ];

  return (
    <>
      <Header />

      {/* Top banner start */}
      <div id="bannerslider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div
            className="carousel-item active text-center bg-cover bg-overlay text-white"
            style={{ backgroundImage: `url(${topbanner[0].image})` }}
          >
            <div>
              <h1 class="mb-4 fadeInLeft animated">{topbanner[0].title}</h1>
              <h3 class="fadeInRight animated">{topbanner[0].subtitle}</h3>
            </div>
          </div>
          {topbanner.map((item, i) => {
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
        <Link
          className="carousel-control-prev"
          to="#bannerslider"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </Link>

        <Link
          className="carousel-control-next"
          to="#bannerslider"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
      <div className="position-absolute">
        <form className="search-form">
          <input
            type="text"
            className="form-control"
            placeholder="Search Here"
          />
          <button className="btn1">Serach</button>
        </form>
      </div>
      {/* top banner end */}

      {/* Four Boxes start */}
      <div class="container four-boxes">
        <div class="row">
          {fourboxes.map(item => {
            return (
              <div class="col-md-3 mb-3">
                <div
                  className="customcard1 animated jackInTheBox"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h5>{item.title}</h5>
                  <p className="desc">{item.description}</p>
                  <Link to="" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Four Boxes end */}

      {/* About Section start */}
      <div className="container mb-5 about-section2">
        <div className="row align-items-center">
          <div className="col-md-7 p-5 animated fadeInRight">
            <h2>We Are Here To Dream! Our Team Is Here Surve You.</h2>
            <div className="sub-title">About us</div>
            <p>
              At vero eos et accusamus et iusto odio digni goikussimos ducimus
              qui to bonfoe blanditiis praese. Ntium voluum deleniti atque
              corrupti quos. of a page a reload when looking at its layout. The
              point of using Lorem Ipsum is that it has pi motive re-or-less
              normal distribution.
            </p>

            <Link to="" className="btn btn-primary">
              Read More
            </Link>
          </div>

          <div className="col-md-5 animated fadeInLeft">
            <div className="two-images">
              <img src="img/portfolio2.jpg" className="w-100 shadow" />
              <img src="img/portfolio4.jpg" className="w-100 shadow" />
            </div>
          </div>
        </div>
      </div>
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
            {trainers.map(item => {
              return (
                <div className="col-md-3 mb-3">
                  <div className="shadow p-3 trainer2 scaleup">
                    <img src={item.image} className="shadow mb-3" />
                    <h5>{item.name}</h5>
                    <div className="font-weight-normal text-primary mb-3">
                      {item.position}
                    </div>
                    <div className="social-links">
                      <Link to="" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>

                      <Link to="" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>

                      <Link to="" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>

                      <Link to="" target="_blank">
                        <i className="fab fa-pinterest"></i>
                      </Link>
                    </div>
                  </div>
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
              {testimonials.map(item => {
                return (
                  <div className="text-center bg-white p-5 shadow scaleup">
                    <div className="avatar">
                      <i className="fa fa-quote-right"></i>
                      <img src={item.image} className="img" />
                    </div>
                    <h5>{item.name}</h5>
                    <h6 className="text-primary">{item.position}</h6>
                    <p>{item.description}</p>

                    <div className="raiting">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
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
              {programs.map(item => {
                return (
                  <div class="position-relative">
                    <img src={item.image} class="w-100" />
                    <div class="position-absolute">
                      <div>
                        <h6>{item.title}</h6>
                        <h5>{item.subtitle}</h5>
                      </div>
                      <Link to="">
                        <i class="far fa-plus-square"></i>
                      </Link>
                    </div>
                  </div>
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
              {blogs.map(item => {
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
