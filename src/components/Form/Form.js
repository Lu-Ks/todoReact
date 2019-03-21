import React, { Component } from "react";
import Input from "../Input";

const defaultInputValue = "";
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: defaultInputValue
        };
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.handleAdd}>
                <Input
                    value={this.state.inputValue}
                    handlerChange={this.handleChange}
                />
                <input
                    className="btn btn-success m-2"
                    type="submit"
                    value="Ajouter"
                />
            </form>
        );
    }
    handleChange = event => {
        this.setState({ inputValue: event.target.value });
        console.log("Value de l'input : " + event.target.value);
    };

    handleAdd = event => {
        event.preventDefault();
        if (this.state.inputValue !== defaultInputValue) {
            this.props.add(this.state.inputValue);
            this.setState({ inputValue: defaultInputValue });
        }
    };
}
export default Form;
