import React, { Component } from 'react'

export default class ClassComponent1 extends Component {
    state = {
        name: "akash"
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>to get full name</h2>
        <button onClick={()=>this.setState({name:"uppar akash"})}>click here</button>
      </div>
    )
  }
}