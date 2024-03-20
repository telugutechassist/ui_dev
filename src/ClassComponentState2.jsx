import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      name: "akash"
      
      
    };
    this.updateDate = this.updateDate.bind(this);
  }
  updateDate() {
    this.setState(prevState => ({
      name: prevState.name + "uppar"
    }));
  }

  render() {
    return (
      <center>
        <div>
       
        
        <h1>Name: {this.state.name} </h1>
     
        <button onClick={this.updateDate}>Update</button>
      
        
      </div>
      </center>
      
    );
  }
}

export default ClassComponent;
