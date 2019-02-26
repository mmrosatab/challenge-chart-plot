import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield'],
                datasets:[
                    {
                    label:'Population',
                    data: [
                        12,
                        34,
                        56

                    ],

                    backgroundColor:[
                        'rgba(26, 140, 255,0.6)',
                        'rgba(40, 40, 40,0.6)',
                        'rgba(26, 140, 255,0.6)'
                        ]
                    }
                ]
            }
        }

    }
    render()
    {
        return(
            <div className="ChartPlot">
                <Line
                    data={this.state.chartData}
                    options={{
                        maintainAspectRadio: false
                    }} 
                />
            </div>
        )
    }
}

export default Chart;