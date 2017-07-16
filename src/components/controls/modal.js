import React, { Component } from 'react';
import '../../styles/app.css';

class Modal extends Component {

    render() {
        return (
            <div id="myModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
