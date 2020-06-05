import React, { useState } from 'react';
import LoginSignupHeader from '../../components/Header/loginSignupHeader';
import '../../scss/loginsignup.scss';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <>
      <LoginSignupHeader />
      <div
        className="signupwrapper wrapper  bg-cover bg-overlay"
        style={{ backgroundImage: 'url(/img/health-coach.jpg)' }}
      >
        <div className="container">
          <h2 className="text-center text-white mb-3 col-md-10 p-0 mx-auto">
            A community for fitness, about fitness, and achieving fitness and
            health goals one step at a time. Find Your Fit Today!
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6 text-center loginbtns">
              <Link to="" target="_new" className="btn btn-google mb-3">
                <i className="fab fa-google mr-2"></i>
                Continue with google
              </Link>

              <Link to="" target="_new" className="btn btn-facebook mb-3">
                <i className="fab fa-facebook mr-2"></i>
                Continue with facebook
              </Link>
            </div>

            <div className="col-md-6">
              <div className="shadow-lg p-4 login-box">
                <form>
                  <h2 className="text-white text-center mb-3">
                    Forgot Password
                  </h2>
                  <p className="text-white">
                    Enter the email address you used when you joined and we'll
                    send you instructions to reset your password.
                  </p>
                  <div className="mb-3">
                    <i className="fa fa-envelope"></i>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100 m-0">
                      Send Reset instruction
                    </button>
                    <div className="mt-3 text-light font-weight-normal text-center">
                      Already Have an Account?{' '}
                      <Link className="text-primary" to="/loginsignup">
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
