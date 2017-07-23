import React, { Component } from 'react';
import '../../styles/app.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppHeaderAggregate from '../appBar/appHeaderAggregate';
import UserMenuAggregate from '../appBar/userMenuAggregate';
import MenuAggregate from '../sideBar/menuAggregate';
import AddProjectAggregate from '../project/addProjectAggregate';
import ViewProjectAggregate from '../project/viewProjectAggregate';
import * as actions from '../../actions/projectActions';

class ProjectContainer extends Component {
    async componentWillMount() {
        await this.props.actions.fetchProjects();
    }
    render() {
        let projectComponents = "";
        if (this.props.projects.length > 0) {
            projectComponents = this.props.projects.map((project, index) => (
                <div key={index} className="col-lg-4">
                    <ViewProjectAggregate project={project} />
                </div>
            ));
        }

        let loading = "";
        if (this.props.isLoading) {
            loading = <div className="col-lg-4">
                <div className="flip">
                    <div className="card1">
                        <div className="face front">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    Loading Projects
                                    </div>
                                <div className="panel-body add-overlay">
                                    <span className="fa fa-spin fa-spinner"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                <h1 className="page-header">Project</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="col-lg-4">
                                    <AddProjectAggregate />
                                </div>
                                {loading}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
