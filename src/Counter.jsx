import React from 'react';
import Navigation from './Navigation';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <p>Count: { this.state.count }</p>
                <button onClick={() => this.increment() }>Increment +1</button>
            </div>
        );
    }
}