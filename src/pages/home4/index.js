import React from 'react';
import Header from '../../components/Header';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import '../../scss/style4.scss';

const Home4 = () => {
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
    slidesToShow: 2,
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
      image: ''
    },
    {
      title: 'TRAINERS',
      icon: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasullamcorper cursus malesuada',
      link: '/',
      image: 'img/trainners.png'
    },
    {
      title: 'NUTRIONISTS',
      icon: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasullamcorper cursus malesuada',
      link: '/',
      image: 'img/nuteritionist.png'
    },
    {
      title: 'FITNESS EVENTS',
      icon: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasullamcorper cursus malesuada',
      link: '/',
      image: 'img/events.png'
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
      <div id="bannerslider3" className="carousel slide" data-ride="carousel">
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

        <a
          className="carousel-control-prev"
          href="#bannerslider3"
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
          href="#bannerslider3"
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
                <div className="customcard4 animated jackInTheBox shadow-lg">
                  <div className="text-center mb-3">
                    {item.image ? (
                      <img src={item.image} className="icon" />
                    ) : (
                      ''
                    )}
                    {item.icon ? <i className={item.icon}></i> : ''}
                  </div>
                  <h5 className="d-flex">{item.title}</h5>

                  <a href="" className="btn1 fa fa-plus"></a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Four Boxes end */}

      {/* About Section start */}
      <section className="about-section4">
        <div className="container mb-5">
          <div className="row align-items-center">
            <div className="col-md-5 animated fadeInLeft">
              <div className="left-image">
                <img src="img/portfolio2.jpg" className="shadow" />
              </div>
            </div>

            <div className="col-md-7 p-5 animated fadeInRight">
              <h2>We Are Here To Dream! Our Team Is Here Surve You.</h2>
              <div className="sub-title">About us</div>
              <p>
                At vero eos et accusamus et iusto odio digni goikussimos ducimus
                qui to bonfoe blanditiis praese. Ntium voluum deleniti atque
                corrupti quos. of a page a reload when looking at its layout.
                The point of using Lorem Ipsum is that it has pi motive
                re-or-less normal distribution.
              </p>

              <a href="" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About Section end */}

      {/* Trainers start */}
      <section
        class="trainer-section3 bg-cover bg-fixed bg-overlay py-5"
        style={{ backgroundImage: 'url(/img/portfolio4.jpg)' }}
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
                  <div className="shadow trainer4 scaleup">
                    <img src={item.image} />
                    <div className="p-4 hover">
                      <div>
                        <h5>{item.name}</h5>
                        <div className="font-weight-bold mb-3">
                          {item.position}
                        </div>
                        <div className="social-links">
                          <a href="" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>

                          <a href="" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>

                          <a href="" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>

                          <a href="" target="_blank">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </div>
                      </div>
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

          <div className="testimonals-slider4">
            <Slider {...settings}>
              {testimonials.map(item => {
                return (
                  <div className="bg-white p-5 shadow scaleup">
                    <div className="quote-desc">
                      <i className="fa fa-quote-left"></i>
                      {item.description}
                    </div>
                    <div className="avatar">
                      <img src={item.image} className="img" />
                    </div>
                    <div className="raiting mb-3">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <h5 className="text-primary">{item.name}</h5>
                    <h6>{item.position}</h6>
                    <p></p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonials end */}

      {/* Traning Programs */}
      <section class="training-programs3 py-5">
        <h2 class="text-center">Events</h2>
        <div class="text-center mb-4">
          <span class="sub-title1">train with experts</span>
        </div>

        <div className="container-fluid">
          <div class="program-slider4">
            <Slider {...settings1}>
              {programs.map(item => {
                return (
                  <div className="col-md-12 mb-4">
                    <div class="programs3">
                      <img src={item.image} class="w-100" />
                      <a class="position-absolute">
                        <div>
                          <h6>{item.title}</h6>
                          <h5>{item.subtitle}</h5>
                        </div>
                      </a>
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
          <div className="blog-slider4">
            <Slider {...blogsettings}>
              {blogs.map(item => {
                return (
                  <div className="slide shadow">
                    <img src={item.image} />
                    <div className="p-3">
                      <span className="badge badge-primary d-inline-block">
                        {item.category}
                      </span>

                      <a href="" className="h5 d-block">
                        {item.title}
                      </a>
                      <div className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                      </div>
                      <a href="" className="read-more">
                        Read More
                      </a>
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

export default Home4;
