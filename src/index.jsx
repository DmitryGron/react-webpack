import App from './components/App/App';
import Counter from './components/Counter/Counter';
import Repos from './components/Repo/Repos';
import Repo from './components/Repo/Repo';
import About from './components/About/About';
import Search from './components/GifSearch/Search';
import Home from './components/Home/Home';
import React from 'react';
import ReactivePlayground from './components/Reactive/Reactive.playground';
import NoMatch from './components/Navigation/NoMatch';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import styles from './styles/styles.scss';

require('./img/favicon.ico');

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
        </Route>
        <Route path="/counter" component={Counter} />
        <Route path="/reactive" component={ReactivePlayground} />
        <Route path="*" component={NoMatch} />
    </Router>
), document.getElementById('root'));