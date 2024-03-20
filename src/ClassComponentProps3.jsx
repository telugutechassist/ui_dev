import React, { Component } from 'react';

class ClassComponentProps3 extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default ClassComponentProps3;