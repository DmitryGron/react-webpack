import App from './App';
import Counter from './Counter';
import Repos from './Repos';
import Repo from './Repo';
import About from './About';
import Home from './Home';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

require('./img/favicon.ico');

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
        <Route path="/counter" component={Counter}/>
    </Router>
), document.getElementById('root'))