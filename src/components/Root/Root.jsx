import App from './../App/App';
import Counter from './../Counter/Counter';
import Repos from './../Repo/Repos';
import Repo from './../Repo/Repo';
import About from './../About/About';
import Search from './../GifSearch/Search';
import Home from './../Home/Home';
import React from 'react';
import ReactivePlayground from './../Reactive/Reactive.playground';
import NoMatch from './../Navigation/NoMatch';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import styles from './../../styles/styles.scss';

require('./../../img/favicon.ico');


const Root = () => (
    <MuiThemeProvider>
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
    </MuiThemeProvider>
);

export default Root;