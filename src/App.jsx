import React from 'react';
import Navigation from './Navigation';
import Home from './Home';

export default React.createClass({
  render() {
    return <div>
        <Navigation></Navigation>        
        {this.props.children || <Home/>}
    </div>
  }
})