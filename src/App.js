import React, { Component } from 'react';
import Editor from './Editor';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            showEditor: false,
            employees: []
        };

        this.showEditorHandle = this.showEditorHandle.bind(this);
    }

    showEditorHandle() {
        this.setState({
            showEditor: !this.state.showEditor
        });
    }

    render() {
        const btnTitle = this.state.showEditor ? 'Hide editor' : 'Show editor';

        return (
            <div>
                <div className="header">
                    <img src={logo} className="logo" alt="logo"/>
                    <h2>Employee List App</h2>
                </div>
                <div className="content">
                    <div className="editorButton">
                        <button onClick={this.showEditorHandle}>{btnTitle}</button>
                    </div>
                    <div className="list">List</div>
                    <Editor show={this.state.showEditor} />
                </div>
            </div>
        );
    }
}

export default App;
