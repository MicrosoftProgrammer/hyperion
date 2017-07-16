import React, { Component } from 'react';
import '../../styles/app.css';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        let required = {};
        this.props.required === true ? required['required'] = "required" : "";
        return (
            <input className="form-control"
                placeholder={this.props.placeholder}
                onChange={this.handleInputChange}
                {...required}
                name={this.props.name}
                type={this.props.type} />
        );
    }
}

export default TextBox;
