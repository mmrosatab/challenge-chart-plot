import React, { Component } from 'react';

class FooterContainer extends Component
{
  render()
  {
    return (
        <div className="footer-container">
          <button className="generatechart-button" onClick={this.props.buttonClicked}>GENERATE CHART</button>
        </div>            
    ) 
  }
}

export default FooterContainer;
