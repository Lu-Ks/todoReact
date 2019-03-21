import React, { Component } from "react";
import "./App.css";
import Header from "../Header";
import Form from "../Form";
import List from "../List";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        let todos = [];
        console.log("App monté");
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    data.forEach(e => {
                        todos.push(e.title);
                    });
                    this.setState({ todos: todos });
                }, 2000);
                // console.log(todos);
            });
    }

    addTodo = Todo => {
        this.setState({ todos: [...this.state.todos, Todo] });
        console.log(Todo);
    };
    render() {
        return (
            <div className="App">
                <Header title={this.props.title} />
                {this.state.todos.length ? (
                    <div className="container mt-2">
                        <Form add={this.addTodo} />
                        <List todos={this.state.todos} />
                    </div>
                ) : (
                    <div id="loading1">
                        <div id="circ" />
                        <div id="circ1" />
                        <div id="circ2" />
                        <div id="circ3" />
                        <div id="circ4" />
                    </div>
                )}
            </div>
        );
    }
}
export default App;
