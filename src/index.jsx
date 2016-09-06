import App from './App';
import Counter from './Counter';
import Repos from './Repos';
import Repo from './Repo';
import About from './About';
import Search from './GifSearch/Search';
import Home from './Home';
import React from 'react';
import NoMatch from './NoMatch';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import styles from './styles.scss';

require('./img/favicon.ico');

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/search" component={Search}/>
        </Route>
        <Route path="/counter" component={Counter}/>
        <Route path="*" component={NoMatch}/>
    </Router>
), document.getElementById('root'));