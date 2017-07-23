import React, { Component } from 'react';
import '../../styles/app.css';
import TextBox from '../controls/textBox';
import AddNewMemberAggregate from './addNewMemberAggregate';
import { getMonths, createGuid } from '../../utils/helper';

class AddNewProjectAggregate extends Component {

    constructor(props) {
        super(props)
        this.addNewTeamMember = this.addNewTeamMember.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
        this.saveProject = this.saveProject.bind(this);
        let member = {
            EmpName: "",
            Work: {
                Month: [{
                    Name: "",
                    Percentage: 0
                }]
            }
        };

        this.state = {
            member: [],
            months: [],
            added: false,
            project: {
                ProjectID: createGuid(),
                ProjectName: "",
                Currency: "USD",
                Budget: 0,
                FromDate: "",
                ToDate: "",
                Months: [],
                Members: [member]
            }
        }
    }

    saveProject() {
        console.log(this.state.project);
    }

    addNewTeamMember(e) {
        if (this.state.project.FromDate !== "" && this.state.project.ToDate !== "") {
            let Months = getMonths(this.state.project.FromDate, this.state.project.ToDate);

            this.state = {
                months: Months
            };
        }
        let key = 0

        if (this.state.member.length > 0) {
            key = parseInt(this.state.member[this.state.member.length - 1].props.id, 0) + 1;
        }

        let member = {
            EmpName: "",
            EmpID: "",
            Work: {
                Month: [{
                    Name: "",
                    Percentage: 0
                }]
            }
        };

        this.state.project.Members.push(member);

        member = <AddNewMemberAggregate key={key} id={key}
            member={this.state.project.Members[key]}
            months={this.state.months}
            onDelete={this.deleteMember} />;
        this.state.member.push(member);
        this.setState({
            added: true
        });
    }

    


    deleteMember(id) {
        let newMember = this.state.member.filter((item) => {
            return item.props.id !== id;
        });

        this.setState({
            member: newMember
        });
    }

    render() {

        let newMember = this.state.member.map((item) => {
            return item;
        });

        let members = "";

        if (this.state.member.length > 0) {
            members =
                <div className="col-md-12">
                    <div className="panel panel-green">
                        <div className="panel-heading">Add Member</div>
                        <div className="panel-body">
                            {newMember}
                        </div>
                    </div>
                </div>
        }

        return (
            <form data-abide onSubmit={this.saveProject}>
                <div className="form-group col-md-6">
                    <label htmlFor="projectName">Project Name:</label>
                    <TextBox placeholder="Project Name" required={true} name={this.state.project.EmpIDProjectName} type="text" />
                </div>
                <div className="form-group col-md-4">
                    <label>Budget:</label>
                    <TextBox placeholder="Budget" required={true} name={this.state.project.Budget} type="number" />
                </div>
                <div className="form-group col-md-2">
                    <label>Currency:</label>
                    <TextBox placeholder="Currency" required={true} name={this.state.project.Currency} type="text" />
                </div>
                <div className="form-group col-md-6">
                    <label>From Date:</label>
                    <TextBox placeholder="From Date" required={true} name={this.state.project.FromDate} type="date" />
                </div>
                <div className="form-group col-md-6">
                    <label>To Date:</label>
                    <TextBox placeholder="To Date" required={true} name={this.state.project.ToDate} type="date" />
                </div>
                {members}
                <div className="form-group col-md-12">
                    <button type="submit" className="btn btn-primary pull-left">Save</button>
                    <button type="button" onClick={this.addNewTeamMember} className="btn btn-success pull-right">Add New Member</button>
                </div>
            </form >
        );
    }
}

export default AddNewProjectAggregate;
