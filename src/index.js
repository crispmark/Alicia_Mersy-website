import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, applyRouterMiddleware, IndexRoute} from 'react-router';
import Home from './Home.js'
import App from './App.js';
import './index.css';
import video_component1 from "./video_component1.js"
import video_component2 from "./video_component2.js"





ReactDOM.render(



    <Router history={browserHistory} >

    <Route path="/" component={App}>

        <IndexRoute component={Home} />
        <Route path="iwsiwi_teaser" component={video_component1} />
        <Route path="aman_aman" component={video_component2} />

    </Route>
  </Router>,

  document.getElementById('root')
);
