import React, { Component } from 'react';

const name = 'Mayara';

class HeaderContainer extends Component
{
  
  render()
  {
    return (
    
      <div className="header-container">
        <div className="headercontainer-text">{name}'s Challenge</div>
      </div>        
    ) 
  }
}
export default HeaderContainer;