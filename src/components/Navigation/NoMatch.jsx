import React from 'react';
import Navigation from './Navigation';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <p>This page does not exist!</p>
            </div>
        );
    }
}