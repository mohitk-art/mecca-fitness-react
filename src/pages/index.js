import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Home2 from './home2';
import Home3 from './home3';
import Home4 from './home4';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home2" component={Home2} />
        <Route exact path="/home3" component={Home3} />
        <Route exact path="/home4" component={Home4} />
      </Switch>
    </Router>
  );
};

export default Pages;
