import React, { Component } from 'react';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class PieChart extends Component {

    componentDidMount() {
        this.updateCharts(this.props);
    }

    componentWillReceiveProps(props) {
        this.updateCharts(props);
    }

    updateCharts(props) {
        Highcharts.chart(props.id, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: props.title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y} USD</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: props.series,
                colorByPoint: true,
                data: props.data
            }],
            exporting: { enabled: false }
        }
        );
    }

    render() {
        return (
            <div id={this.props.id}></div>
        );
    }
}

export default PieChart;
