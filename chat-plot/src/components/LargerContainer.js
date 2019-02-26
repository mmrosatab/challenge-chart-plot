import React, { Component } from 'react';
import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import TextAreaContainer from './TextAreaContainer';
import ChartPlotContainer from './ChartPlotContainer';

class LargerContainer extends Component
{
  render()
  {
    return (
      <div className="larger_container">
        <TopContainer/>
        <TextAreaContainer/>
        <ChartPlotContainer/>
        <BottomContainer/>
      </div> 
    ) 
  }
}
export default LargerContainer;