import React from 'react';
import Header from '../../components/Header';
import CustomCard from '../../components/customcard';
import Trainer from '../../components/trainer';
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import '../../scss/style.scss';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const blogsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
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
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      position: 'Leader',
      image: '/img/person.jpg'
    },
    {
      name: 'Patrick Cortez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      position: 'Leader',
      image: '/img/person.jpg'
    },
    {
      name: 'Patrick Cortez',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
      {/* top banner end */}

      {/* Four Boxes start */}
      <div class="container four-boxes">
        <div class="row">
          {fourboxes.map(item => {
            return (
              <div class="col-md-3">
                <CustomCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  link={item.link}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Four Boxes end */}

      {/* About Section start */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-5">
            <div className="about-image animated fadeInLeft">
              <img src="img/aboutimage.jpg" />
            </div>
          </div>

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

            <p>
              At vero eos et accusamus et iusto odio digni goikussimos ducimus
              qui to bonfoe blanditiis praese. Ntium voluum deleniti atque
              corrupti quos. of a page a reload when looking at its layout. The
              point of using Lorem Ipsum is that it has pi motive re-or-less
              normal distribution.
            </p>
          </div>
        </div>
      </div>
      {/* About Section end */}

      {/* Trainers start */}
      <section class="trainers py-5 bg-yellow">
        <div class="container">
          <h2 className="mb-3 text-center">Expert Trainers</h2>
          <div className="text-center mb-4">
            <span class="sub-title1">train with experts</span>
          </div>
          <div className="row">
            {trainers.map(item => {
              return (
                <div className="col-md-3">
                  <Trainer
                    name={item.name}
                    image={item.image}
                    position={item.position}
                    description={item.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Trainers end */}

      {/* testimonials start */}
      <div className="testimonials-section">
        <div className="container">
          <h2 className="mb-3 font-weight-bold text-center text-uppercase">
            Success Stories
          </h2>

          <div className="testimonals-slider">
            <Slider {...settings}>
              {testimonials.map(item => {
                return (
                  <div className="text-center">
                    <p>{item.description}</p>
                    <div className="avatar">
                      <img src="/img/quote-left.png" className="quote" />
                      <img src={item.image} className="img" />
                    </div>
                    <h5>{item.name}</h5>
                    <h6 className="text-primary">{item.position}</h6>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonials end */}

      {/* Traning Programs */}
      <section class="training-programs py-5">
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
                      <a href="">
                        <i class="far fa-plus-square"></i>
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
          <div className="blog-slider">
            <Slider {...blogsettings}>
              {blogs.map(item => {
                return (
                  <div className="p-2">
                    <img src={item.image} className="w-100 mb-2" />
                    <div className="sub-title mb-2">{item.category}</div>
                    <a href="" className="h5 d-block">
                      {item.title}
                    </a>
                    <a href="" className="read-more">
                      Read More
                    </a>
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

export default Home;
