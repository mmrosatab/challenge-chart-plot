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
      categorie: [],
      data: [],
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
    
    let newCategorie = this.state.categorie;
    newCategorie.push(temp.categorie);

    let newData = this.state.data;
    newData.push(temp.data);

    this.setState({
      categorie: newCategorie,
      data: newData
    });
  }

  render()
  {
    console.log(this.data);
    console.log(this.categorie);    
    //<ChartPlotContainer newValue={this.state.send}/>
    return (
      <div className="app">
        <HeaderContainer/>
        <TextAreaContainer value={this.value} handleChange={this.handleChange}/>
        <ChartPlotContainer newData={this.state.data} newCategorie={this.state.categorie}/>
        <FooterContainer buttonClicked={this.buttonClicked}/>
      </div>
    )
  }
}

export default App;
