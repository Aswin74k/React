import React, { Component } from 'react'

export default class ShouldUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Only re-render if count changes
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }


    render() {
        console.log("Rendering...");
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>);



    }
}