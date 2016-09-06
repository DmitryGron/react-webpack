import React from 'react';
import Navigation from './Navigation';
import Home from './Home';

import styles from './styles.scss';

export default React.createClass({
  render() {
    return <div>
        <Navigation></Navigation>
        <div className={styles.routerOutlet}>
          {this.props.children || <Home/>}
        </div>                
    </div>
  }
})