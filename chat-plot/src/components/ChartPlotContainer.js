import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ChartPlotContainer extends Component
{ 
    constructor(props) 
    {
        super(props);

        this.state = {
            options: {
            chart: {
            id: ""
            },
            xaxis: {
                categories: this.props.categories
                }
            },
            series: this.props.series
        };

    }

    render()
    { 
        return(
            <div className="chartplot-container">  
                <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} 
                    type="line" width="80%" height="280px"/> 
                </div>
            </div>
        )
    }
}

export default ChartPlotContainer;