import React, { Component } from 'react';
//import {Line} from 'react-chartjs-2';
//import LineChart from './LineChart.js';
import Chart from 'react-apexcharts';

class ChartPlotContainer extends Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            value: [],
            options: {
            chart: {
            id: "basic-bar"
            },
            xaxis: {
            categories: []
            }
        },
        series: [
            {
            name: "time",
            data: []
            }
        ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.setCategorie = this.setCategorie.bind(this);
        this.setData = this.setData.bind(this);
    }
    
    setCategorie(categorie) 
    {
        this.setState({ 
            categorie: categorie
        });
        alert(categorie);
    }
    
    setData(data) 
    {
        this.setState({ 
            data: data
        });

        alert(data);
    }

    setPlot()
    {
        return <div className="donut">
            <Chart options={this.state.options} series={this.state.series} 
            type="line" width="80%" height="300"/>
        </div>;
    }
    
    handleChange(event) 
    {
        this.setState({ 
            value: event.target.value
        });

        alert(this.state.value);
    }

    render()
    { //<LineChart data={this.props.newData} categorie={this.props.newCategorie}/>

        /*

        <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} 
                    type="line" width="80%" height="300"/>
                </div>
        */
        console.log(this.props);
    
        return(
            <div className="chartplot-container" value={this.state.value} onChange={this.onChange}>  
            
            </div>
        )
    }
}

export default ChartPlotContainer;