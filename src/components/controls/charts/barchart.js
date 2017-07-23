import React, { Component } from 'react';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class BarChart extends Component {

    componentDidMount() {
        this.updateCharts(this.props);
    }

    componentWillReceiveProps(props) {
        this.updateCharts(props);
    }

    updateCharts(props) {
        Highcharts.chart(props.id, {
            chart: {
                type: 'column'
            },
            title: {
                text: props.title
            },
            subtitle: {
                text: props.subtitle
            },
            xAxis: {
                categories: props.xAxis,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: props.hint
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: props.series,
                data: props.data
            }]
        });
    }

    render() {
        return (
            <div id={this.props.id}></div>
        );
    }
}

export default BarChart;
