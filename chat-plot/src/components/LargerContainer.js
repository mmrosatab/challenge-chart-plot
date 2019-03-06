import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import TextAreaContainer from './TextAreaContainer';
import ChartPlotContainer from './ChartPlotContainer';


class LargerContainer extends Component
{
  constructor(props) 
  {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) 
  {
    this.setState({ 
        text: event.target.value
    });
  }

  render()
  {
    return (
      <div className="larger-container">
        <HeaderContainer/>
        <TextAreaContainer value={this.value} handleChange={this.handleChange}/>
        <ChartPlotContainer newValue={this.state.value}/>
        <FooterContainer/>
      </div> 
    ) 
  }
}
export default LargerContainer;