import React, { Component } from 'react';
import '../../styles/app.css';
import TextBox from '../controls/textBox';
class AddNewMemberAggregate extends Component {
constructor(props){
    super(props)
    this.deleteme = this.deleteme.bind(this);
    this.state={
        key : ""
    }
}

deleteme(e){
    if(typeof this.props.onDelete ==="function"){
        this.props.onDelete(this.state.key);
    }
}
    render() {
        this.state.key =this.props.id;
        return (
            <div>
                <div className="form-group col-md-4">
                    <TextBox placeholder="Name" required={true} name="name" type="text" />
                </div>
                <div className="form-group col-md-4">
                    <TextBox placeholder="Emp ID" required={true} name="empID" type="text" />
                </div>
                <div className="form-group col-md-3">
                    <TextBox placeholder="Billing Percentage" required={true} name="billing" type="number" />
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
