import React, { Component } from 'react';
import Editor from './Editor';
import List from './List';
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
        this.toggleItem = this.toggleItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    showEditorHandle() {
        this.setState({
            showEditor: !this.state.showEditor
        });
    }

    addItem() {
        let empl = this.state.employees;
        empl.push({
            id: empl.length + 1,
            disabled: true,
            info: ''
        });

        this.setState({
            employees: empl
        });
    }

    editItem(id, data) {
        this.state.employees.forEach((item) => {
            if (item.id === id) {
                item.info = data;
            }
        });

        this.setState({
            employees: this.state.employees
        })
    }

    toggleItem(id) {
        this.state.employees.forEach((item) => {
            if (item.id === id) {
                item.disabled = !item.disabled;
            }
        });

        this.setState({
            employees: this.state.employees
        })
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
                    <List data={this.state.employees} />
                    <Editor
                        data={this.state.employees}
                        show={this.state.showEditor} 
                        addItemHandler={this.addItem} 
                        editItemHandler={this.editItem}
                        toggleItemHandler={this.toggleItem}
                    />
                </div>
            </div>
        );
    }
}

export default App;
