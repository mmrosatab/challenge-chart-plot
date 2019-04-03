import React, { Component } from 'react';
import './App.css';
import HeaderContainer from '../src/components/HeaderContainer';
import FooterContainer from '../src/components/FooterContainer';
import TextAreaContainer from '../src/components/TextAreaContainer';
import ChartPlotContainer from '../src/components/ChartPlotContainer';
import {preparDataChart} from '../src/util/TreadUserInput';

class App extends Component
{
  constructor(props) 
  {
    super(props);

    this.state = {
      value: '',
      categories: '',
      series: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  handleChange(event) 
  {
    this.setState({ 
      value: event.target.value
    });
  }
  
  buttonClicked()
  {
    let temp = preparDataChart(this.state.value);

    if(temp !== false)
    {
      this.setState({
        categories: temp.categories,
        series: temp.series
      });
    }
  }

  render()
  {
    return (
      <div className="app">
        <HeaderContainer/>
        <TextAreaContainer value={this.value} handleChange={this.handleChange}/>
          {this.state.categories !== '' && this.state.series !== '' ?
            <ChartPlotContainer categories={this.state.categories} series={this.state.series}/> 
            : <div></div>
          }
        <FooterContainer buttonClicked={this.buttonClicked}/>
      </div>
    )
  }
}

export default App;
