import React, { Component } from 'react';
import '../../styles/app.css';
import NumericInput from 'react-numeric-input';

class ClickableTextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder,
            value: props.value,
            name: props.name,
            type: props.type
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(value) {
        this.setState({
            value: value,
            name: this.state.name
        });

        if (typeof (this.props.onChange) === "function") {
            this.props.onChange(this.state.name, value);
        }
    }

    render() {
        let required = {};
        this.props.required === true ? required['required'] = "required" : "";
        return (
            <NumericInput className="form-control clickcheck"
                precision={2}
                min="0"
                max="2"
                onChange={this.handleInputChange}
                value={this.state.value}
                name={this.state.name}
                type={this.state.type} />
        );
    }
}

export default ClickableTextBox;
