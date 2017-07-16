import React, { Component } from 'react';
import '../../styles/app.css';
import TextBox from '../controls/textBox';
import AddNewMemberAggregate from './addNewMemberAggregate'
class AddNewProjectAggregate extends Component {

    constructor(props){
        super(props)
        this.addNewTeamMember = this.addNewTeamMember.bind(this);
        this.deleteMember = this.deleteMember.bind(this);

        this.state={
            member : [<AddNewMemberAggregate id={0} key="0" onDelete={this.deleteMember}  />],
            added : false
        }
    }

    addNewTeamMember(e){
        let key = parseInt(this.state.member[this.state.member.length-1].props.id,0) + 1;
        let member= <AddNewMemberAggregate key={key} id={key} 
        onDelete={this.deleteMember}  />;
        this.state.member.push(member);
        this.setState({
            added : true
        });
    }

    deleteMember(id){        
        let newMember= this.state.member.filter((item)=>{
            return item.props.id !== id;
        });
    
        this.setState({
            member : newMember
        });
    }

    render() {

        let newMember= this.state.member.map((item)=>{
            return item;
        });
        return (
            <form>
                <div className="form-group col-md-6">
                    <label htmlFor="projectName">Project Name:</label>
                    <TextBox placeholder="Project Name" required={true} name="projectName" type="text" />
                </div>
                <div className="form-group col-md-6">
                    <label>Budget:</label>
                    <TextBox placeholder="Budget" required={true} name="budget" type="text" />
                </div>
                <div className="form-group col-md-6">
                    <label>From Date:</label>
                    <TextBox placeholder="From Date" required={true} name="fromDate" type="date" />
                </div>
                <div className="form-group col-md-6">
                    <label>To Date:</label>
                    <TextBox placeholder="To Date" required={true} name="toDate" type="date" />
                </div>
                <div className="col-md-12">
                    <div className="panel panel-green">
                        <div className="panel-heading">Add Member</div>
                        <div className="panel-body">
                            {newMember}
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <button type="submit" className="btn btn-primary pull-left">Save</button>
                    <button type="button" onClick={this.addNewTeamMember} className="btn btn-success pull-right">Add New Member</button>
                </div>
            </form>
        );
    }
}

export default AddNewProjectAggregate;
