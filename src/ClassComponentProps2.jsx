import React, { Component } from 'react';

class ClassComponentProps2 extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default ClassComponentProps2;