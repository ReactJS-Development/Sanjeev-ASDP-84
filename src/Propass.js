import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        	<h1>Props Details from App </h1>
       		<p>{this.props.name}</p> 
       		<p>{this.props.profile}</p> 
      </div>
    );
  }
}

export default App;
