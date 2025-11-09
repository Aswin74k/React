import React, { Component } from 'react'

export default class Update extends Component {

    constructor(props){
        super(props);
        this.state={count: 0};
    }

    increment=()=>{
        this.setState({count:this.state.count+1});
    }

    componentDidUpdate(prevstate){
        if (prevstate.count !== this.state.count) {
            console.log(`component updated !!  new count ${this.state.count}`);
            
            
        }
    }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1><br /><br />
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}