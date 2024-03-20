import React, { Component } from 'react';

class ClassComponentProps4 extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default ClassComponentProps4;