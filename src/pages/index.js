import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Home2 from './home2';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home2" component={Home2} />
      </Switch>
    </Router>
  );
};

export default Pages;
