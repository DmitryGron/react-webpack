import React from 'react';
import NavLink from './NavLink';
import { IndexLink } from 'react-router';
import styles from './Navigation.scss';

export default React.createClass({
    render() {
        return <div>
            <ul role="nav" className={styles.navigation}>
                <li><NavLink to="/">Start (always active) </NavLink>
                    <ul>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/search">Search</NavLink></li>
                        <li><NavLink to="/repos">Repos</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/" onlyActiveOnIndex={true}>Start (onlyActiveOnIndex) </NavLink></li>
                <li><IndexLink to="/" activeClassName={styles.active}>Start (indexlink) </IndexLink></li>
                <li><NavLink to="/counter">Counter</NavLink></li>
                <li><NavLink to="/reactive">Reactive playground</NavLink></li>
            </ul>
        </div>
    }
})