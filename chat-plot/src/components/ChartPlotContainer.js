import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Donut from './Donut.js';
//import { Button } from 'react-bootstrap';

class ChartPlotContainer extends Component
{
    constructor()
    {
        super();
        
    }

    render()
    {
        return(
            <div className="chartplot-container">
                {this.props.newValue}    
            </div>
        )
    }
}

export default ChartPlotContainer;