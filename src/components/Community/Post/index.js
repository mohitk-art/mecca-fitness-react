import React from 'react';
import Userbox from '../Userbox';

const Post = () => {
  return (
    <div className="box">
      <div className="d-flex justify-content-between">
        <div className="text-muted">Answer : Gym</div>

        <i className="fa fa-times"></i>
      </div>

      <Userbox />

      <h4 className="font-weight-bold box-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        lectus nisi
      </h4>

      <p className="desc">
        Pellentesque nec sem ac dui aliquet convallis. Nulla et accumsan mi.
        Curabitur at blandit magna. Aenean tempus quis turpis a tincidunt. In
        lobortis nibh nec nulla dignissim, a pellentesque tellus fringilla.
        Vivamus venenatis ante ut massa faucibus, sollicitudin dictum ante
        consequat.
      </p>

      <img src="/img/health-coach.jpg" className="w-100 mb-3" />
      <div className="d-flex justify-content-between">
        <div className="bottom-nav">
          <a>
            <i className="fa fa-arrow-alt-circle-up"></i> 1
          </a>

          <a>
            <i className="fa fa-retweet"></i> 3
          </a>

          <a>
            <i className="fa fa-comment"></i> 3
          </a>
        </div>

        <a className="share">
          <i className="fa fa-share"></i>
        </a>
      </div>
    </div>
  );
};

export default Post;
