import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, applyRouterMiddleware, IndexRoute} from 'react-router';
import Home from './Home.js'
import App from './App.js';
import './index.css';



ReactDOM.render(

    <Router history={browserHistory} >

    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
  </Router>,

  document.getElementById('root')
);
