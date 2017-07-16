import React, { Component } from 'react';
import '../../styles/app.css';

class ProjectStatus extends Component {
    render() {
        const css = `
        .progress-bar-success {
            width : 40%;
        }
          .progress-bar-info {
            width : 50%;
        }
          .progress-bar-warning {
            width : 70%;
        }
        
          .progress-bar-danger {
            width : 90%;
        }
`;
        return (
            <div className="col-md-12">
                <style>{css}</style>
                <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                        <span className="sr-only">40% Complete (success)</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectStatus;
