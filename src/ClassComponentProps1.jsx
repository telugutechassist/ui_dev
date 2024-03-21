import React, { Component } from 'react';

class ClassComponentProps1 extends Component {
  render() {
   
    const { name, age } = this.props;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>You are {age} years old.</p>
      </div>
    );
  }
}

export default ClassComponentProps1; 