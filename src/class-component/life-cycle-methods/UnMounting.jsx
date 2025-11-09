import React, { Component } from 'react'

export default class UnMounting extends Component {
    state = {
        time: 0
    }
    componentDidMount() {
        //start a timer when the component mount
        this.timer = setInterval(() => {
            this.setState(prevstate => ({
                time: prevstate.time + 1
            }))

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Timer cleared Up!");

    }

    render() {
        return (
            <div>
                <h1>Time:{this.state.time} seconds</h1>
            </div>
        )
    }
}