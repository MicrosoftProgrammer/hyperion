import React, { Component } from 'react';
import '../../styles/app.css';
import ClickableTextBox from '../controls/clickableTextBox';
import TextBox from '../controls/textBox';
class AddNewMemberAggregate extends Component {
    constructor(props) {
        super(props)
        this.deleteme = this.deleteme.bind(this);
        this.state = {
            key: ""
        }
    }

    deleteme(e) {
        if (typeof this.props.onDelete === "function") {
            this.props.onDelete(this.state.key);
        }
    }

    render() {
        this.state.key = this.props.id;

        let works = this.props.months.map((item, index) => {
            return <ClickableTextBox placeholder="Percentage"
                required={true}
                name="billing"
                type="number" />
        });

        return (
            <div>
                <div className="form-group col-md-4">
                    <TextBox placeholder="Name" required={true} name={this.props.member.EmpName} type="text" />
                </div>

                <div className="form-group col-md-7">
                    {works}
                </div>
                <div className="form-group col-md-1">
                    <button onClick={this.deleteme} className="btn btn-danger">
                        <span className="fa fa-remove" ></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default AddNewMemberAggregate;
