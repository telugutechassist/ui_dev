import React, { Component } from 'react';

class ClassComponent extends Component {
 state = {
      yescount: 0,
      nocount:0 
     
      
      
    };
   
  
 

  render() {
    return (
      <center>
        <div>
        <h2>I am availabe for class class component</h2>
        <p>yesCount: {this.state.yescount}</p>
        <p>noCount: {this.state.nocount}</p>
        <button onClick={() => this.setState({ yescount: this.state.yescount + 1 })}>
          yes
        </button>
        <button onClick={() => this.setState({ nocount: this.state.nocount + 1 })}>
          no
        </button>
        
        
      </div>
      </center>
      
    );
  }
}

export default ClassComponent;
