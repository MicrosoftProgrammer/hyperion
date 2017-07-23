import React, { Component } from 'react';
import '../../styles/app.css';
import { getMonths, numberWithCommas } from '../../utils/helper';
import ClickableTextBox from '../controls/clickableTextBox';
import BarChart from '../controls/charts/barchart'
import * as actions from '../../actions/projectActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MemberInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project: this.props.project,
            budgetDetails: [],
            isLoading: false
        }

        let Months = getMonths(this.state.project.FromDate, this.state.project.ToDate);

        let members = this.state.project.Members.map((item, memindex) => {
            let months = Months.map((month, monindex) => {
                let Mont = item.Work.Month.filter((mon) => {
                    return mon.Name === month;
                });

                if (Mont.length > 0) {
                    return {
                        Name: month,
                        Percentage: Mont[0].Percentage
                    }
                }
                else {
                    return {
                        Name: month,
                        Percentage: 0
                    }
                }
            });
            item.Work.Month = months;
            return item;
        });
        let project = this.state.project;
        project.Members = members;

        this.state = {
            project: project
        };

        this.updatePercentage = this.updatePercentage.bind(this);
        this.saveProject = this.saveProject.bind(this);
    }

    updatePercentage(id, value) {

        let project = this.state.project;
        let members = this.state.project.Members.map((item, memindex) => {
            let updated = item.Work.Month.map((month, monindex) => {
                let percentage = 0;
                if ("Text" + memindex + "" + monindex === id) {
                    month.Percentage = value;
                }

                return month;
            });

            item.Work.Month = updated;
            return item;
        });

        project.Members = members;

        this.setState({
            project: project
        });
    }

    saveProject() {
        this.props.actions.updateProject(this.context.token, this.state.project);
    }

    render() {
        let Months = getMonths(this.state.project.FromDate, this.state.project.ToDate);
        let data = [];
        let header = "";
        header = Months.map((item, monindex) => {
            return <th key={monindex}>{item}</th>
        });

        let totalPercent = 0;
        this.state.project.Members.map((item, memindex) => {
            item.Work.Month.map((month, monindex) => {
                totalPercent = totalPercent + parseFloat(month.Percentage, 1);
            });
        });

        let arr = new Array(this.state.project.Members.length);
        let members = this.state.project.Members.map((item, memindex) => {
            let tot = 0;
            arr[memindex] = new Array(Months.length);
            let percent = item.Work.Month.map((month, monindex) => {

                tot = tot + parseFloat(month.Percentage, 1);

                arr[memindex][monindex] = parseFloat(month.Percentage);
                return <th key={monindex}><ClickableTextBox placeholder="0" onChange={this.updatePercentage} required={true} name={"Text" + memindex + "" + monindex} type="number" value={month.Percentage} /></th>

            });

            const css = `
        #mem`+ memindex + ` {
            width :`+ Math.round(tot * 100 / totalPercent) + `% !important;
        }`;
            return <tr key={memindex}>
                <td>{item.EmpName}
                    <style>{css}</style>
                    <div className="progress progress-striped active">
                        <div id={"mem" + memindex} className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                            <span className="sr-only">{Math.round(tot * 100 / totalPercent)}% Complete (success)</span>
                        </div>
                    </div></td>
                {percent}
                <th>{numberWithCommas(Math.round(tot * this.state.project.Budget / totalPercent))}</th>
            </tr>
        });

        let colSum = arr.reduce((a, b) => a.map((x, i) => parseFloat(x) + parseFloat(b[i])));


        colSum = colSum.map((item, monindex) => {

            let css = `
        #mon`+ monindex + ` {
            width :`+ Math.round(item * 100 / totalPercent) + `% !important;
        }`;

            data.push(Math.round(item * this.state.project.Budget / totalPercent));

            return <th key={monindex}>{numberWithCommas(Math.round(item * this.state.project.Budget / totalPercent))}
                <style>{css}</style>
                <div className="progress progress-striped active">
                    <div id={"mon" + monindex} className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                        <span className="sr-only">{item * 100 / totalPercent}% Complete (success)</span>
                    </div>
                </div>
            </th>
        });

        let action = <a onClick={this.saveProject}><i className="fa fa-save fa-2x"></i></a>

        if (this.props.isLoading) {
            action = <a><i className="fa fa-spinner fa-spin fa-2x"></i></a>
        }

        return (
            <div>
                <BarChart id="container" title="Project Efforts By Months" subtitle="Estimates"
                    xAxis={Months} hint="Amount in USD" series={this.state.project.ProjectName}
                    data={data}
                />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr className="success">
                            <th>Name</th>
                            {header}
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members}
                    </tbody>
                    <tfoot>
                        <tr className="warning">
                            <th>Total</th>
                            {colSum}
                            <th>{action}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

MemberInfo.defaultProps = {
    isLoading: false
}

function mapStateToProps(state) {
    return {
        isLoading: state.ProjectReducer.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberInfo);

