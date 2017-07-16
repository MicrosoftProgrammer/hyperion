import React, { Component } from 'react';
import '../../styles/app.css';
import Modal from '../controls/modal';
import AddNewProjectAggregate from './addNewProjectAggregate'

class AddProjectAggregate extends Component {

    render() {
        let addNew = <AddNewProjectAggregate />
        return (
            <div>
                <Modal title="Add New Project" content={addNew} display={false} />
                <div className="flip">
                    <div className="card1">
                        <div className="face front">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    Add Project
                        </div>
                                <div className="panel-body add-overlay">
                                    <a data-toggle="modal" data-target="#myModal">
                                        <span className="fa fa-plus-circle"></span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProjectAggregate;
