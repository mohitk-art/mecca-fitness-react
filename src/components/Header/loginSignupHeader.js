import React from 'react';
import logoimage from '../../img/logo.png';
import { Link } from 'react-router-dom';

const LoginSignupHeader = () => {
  return (
    <header className="signupheader text-center" id="myHeader">
      <Link to="/">
        <img src={logoimage} className="logoimg" alt="" />
      </Link>
    </header>
  );
};

export default LoginSignupHeader;
