import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import LoginSignup from './LoginSignup';
import Forgot from './Forgot';
import Community from './Community';
import Spaces from './Spaces';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home2} />
        <Route exact path="/home2" component={Home} />
        <Route exact path="/home3" component={Home3} />
        <Route exact path="/home4" component={Home4} />
        <Route exact path="/loginsignup" component={LoginSignup} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/spaces" component={Spaces} />
      </Switch>
    </Router>
  );
};

export default Pages;
