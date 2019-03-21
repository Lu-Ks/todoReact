import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
    }
    render() {
        return (
            <li className="Todo list-group-item">
                <label className={this.state.checked ? "check" : ""}>
                    <input
                        className="m-1"
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.toggle}
                    />
                    {this.props.todo}
                </label>
            </li>
        );
    }
    toggle = () => {
        const toggle = !this.state.checked;
        this.setState({ checked: toggle });
        console.log("Etat de la checkbox : ", toggle);
    };
}

export default Todo;
