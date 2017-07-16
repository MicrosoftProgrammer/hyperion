import React, { Component } from 'react';
import '../../styles/app.css';

class MemberInfo extends Component {
    render() {
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Jan 2017</th>
                        <th>Feb 2017</th>
                        <th>Mar 2017</th>
                        <th>Apr 2017</th>
                        <th>May 2017</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Suresh</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0.5</td>
                        <td>0.25</td>
                    </tr>
                    <tr>
                        <td>Raju</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0.5</td>
                        <td>0.25</td>
                    </tr>
                    <tr>
                        <td>Sudha</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0.5</td>
                        <td>0.25</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default MemberInfo;
