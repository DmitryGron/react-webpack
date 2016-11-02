import React from 'react';
import Navigation from './../Navigation/Navigation';
import Home from './../Home/Home';

import styles from './../../styles/styles.scss';

export default React.createClass({
    render() {
        return <div>
            <Navigation></Navigation>
            <div className={styles.routerOutlet}>
                {this.props.children || <Home />}
            </div>
        </div>
    }
})