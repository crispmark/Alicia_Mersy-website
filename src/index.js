import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, applyRouterMiddleware, IndexRoute} from 'react-router';
import Home from './Home.js'
import App from './App.js';
import './index.css';
import video_component from "./video_component.js"




ReactDOM.render(



    <Router history={browserHistory} >

    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="video" component={video_component} />
    </Route>
  </Router>,

  document.getElementById('root')
);
