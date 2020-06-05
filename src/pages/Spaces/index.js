import React from 'react';
import { Link } from 'react-router-dom';
import CommunityHeader from '../../components/Header/CommunityHeader';
import SpaceSlider from '../../components/Community/SpaceSlide';

const Spaces = () => {
  const spaceArray = [1, 1, 3, 5, , 4, 43, 434, 5];
  return (
    <>
      <CommunityHeader />
      <div className="community-wrapper bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pt-3">
              <h4 className="mb-2 font-weight-bold">Discover Spaces</h4>

              <p className="sub-title-s">Gym</p>

              <div className="form-row">
                {spaceArray.map(item => {
                  return (
                    <div className="col-md-3 mb-3">
                      <SpaceSlider />
                    </div>
                  );
                })}
              </div>

              <div className="text-center mb-5">
                <Link className="view-more">
                  View More Spaces <i class="fa fa-chevron-down"></i>
                </Link>
              </div>

              <p className="sub-title-s">Massage</p>

              <div className="form-row">
                {spaceArray.map(item => {
                  return (
                    <div className="col-md-3 mb-3">
                      <SpaceSlider />
                    </div>
                  );
                })}
              </div>

              <div className="text-center mb-5">
                <Link className="view-more">
                  View More Spaces <i class="fa fa-chevron-down"></i>
                </Link>
              </div>

              <p className="sub-title-s">Cycling</p>
              <div className="form-row">
                {spaceArray.map(item => {
                  return (
                    <div className="col-md-3 mb-3">
                      <SpaceSlider />
                    </div>
                  );
                })}
              </div>

              <div className="text-center mb-5">
                <Link className="view-more">
                  View More Spaces <i class="fa fa-chevron-down"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spaces;
