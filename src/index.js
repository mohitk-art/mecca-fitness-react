import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';
import Pages from './pages';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pages />, document.getElementById('root'));

window.onscroll = function() {
  myFunction();
};

const header = document.getElementById('myHeader');
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

registerServiceWorker();
