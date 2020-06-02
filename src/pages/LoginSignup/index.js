import React, { useState } from 'react';
import LoginSignupHeader from '../../components/Header/loginSignupHeader';
import '../../scss/loginsignup.scss';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [logintap, setLogintap] = useState(false);

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
                {logintap ? (
                  <form>
                    <h2 className="text-white text-center mb-3">Login</h2>

                    <div className="mb-3">
                      <i className="fa fa-user"></i>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <i className="fa fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>

                    <div class="checkbox text-light mb-3">
                      <input type="checkbox" /> Check me out
                    </div>

                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 m-0"
                      >
                        Log in
                      </button>
                    </div>

                    <div className="d-flex justify-content-between font-weight-normal">
                      <Link to="/forgot" className="text-white">
                        Forgot Password
                      </Link>
                      <Link
                        className="text-white"
                        onClick={() => setLogintap(false)}
                      >
                        New User? <span className="text-primary">Register</span>
                      </Link>
                    </div>
                  </form>
                ) : (
                  <form>
                    <h2 className="text-white text-center mb-3">Sign up</h2>

                    <div className="mb-3">
                      <i className="fa fa-envelope"></i>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <i className="fa fa-phone"></i>
                      <input
                        type="number"
                        placeholder="Phone"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <i className="fa fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <i className="fa fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control"
                      />
                    </div>

                    <div class="checkbox text-white font-weight-normal mb-3">
                      <input type="checkbox" /> By Signing up you indicate that
                      you have read and agreed to Quora's{' '}
                      <Link className="text-primary">Terms of Service</Link> and{' '}
                      <Link className="text-primary">Privacy Policy.</Link>
                    </div>
                    <div className="text-center mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 m-0"
                      >
                        Sign up
                      </button>
                      <div className="mt-3 text-light font-weight-normal">
                        Already Have an Account?{' '}
                        <Link
                          className="text-primary"
                          onClick={() => setLogintap(true)}
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
