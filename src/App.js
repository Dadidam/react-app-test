import React, { Component } from 'react';
import Editor from './Editor';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
	  super();
	  
	  this.state = {
		  showEditor: false
	  };
	  
	  this.showEditorHandle = this.showEditorHandle.bind(this);
  }
  showEditorHandle() {
	  this.setState({
		  showEditor: !this.state.showEditor
	  });
  }
  render() {
	const btnTitle = this.state.showEditor ? 'Show editor' : 'Hide editor';
	
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Employee List App</h2>
        </div>
        <div className="App-content">
		  <button onClick={this.showEditorHandle} title={btnTitle} />
          <div className="App-list">List</div>
          <div className="App-editor"><Editor /></div>
		</div>
      </div>
    );
  }
}

export default App;
