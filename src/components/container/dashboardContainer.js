import React, { Component } from 'react';
import '../../styles/app.css';
import AppHeaderAggregate from '../appBar/appHeaderAggregate';
import UserMenuAggregate from '../appBar/userMenuAggregate';
import MenuAggregate from '../sideBar/menuAggregate';
import PieChart from '../controls/charts/piechart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';

class DashboardContainer extends Component {

    async componentWillMount() {
        await this.props.actions.fetchProjects();
    }
    render() {

        let projectComponents = "";

        let data = [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
        }];
        if (this.props.projects.length > 0) {
            projectComponents = this.props.projects.map((project, index) => {

                let totalPercent = 0;
                project.Members.map((item, memindex) => {
                    item.Work.Month.map((month, monindex) => {
                        totalPercent = totalPercent + parseFloat(month.Percentage, 1);
                    });
                });

                let data = [];
                project.Members.map((member, memindex) => {
                    let tot = 0;
                    member.Work.Month.map((month, monindex) => {
                        tot = tot + parseFloat(month.Percentage, 1);
                    });

                    data.push({
                        name: member.EmpName,
                        y: Math.round(tot * project.Budget / totalPercent)
                    });
                });

                return <div className="col-md-6">
                    <PieChart key={index} id={project.ProjectID} title={project.ProjectName}
                        series={project.ProjectName}
                        data={data}
                    />
                </div>
            });
        }

        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <AppHeaderAggregate />
                    <UserMenuAggregate />
                    <MenuAggregate />
                </nav>
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Dashboard</h1>
                            </div>
                            <div className="col-md-12">
                                {projectComponents}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    if (state.ProjectReducer.projects) {
        return {
            projects: state.ProjectReducer.projects,
            isLoading: state.ProjectReducer.isLoading
        };
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
