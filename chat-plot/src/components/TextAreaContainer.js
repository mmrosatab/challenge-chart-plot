import React, { Component } from 'react';

class TextAreaContainer extends Component
{
  render()
  {
    return(
      <div className="textarea_container">
        <textarea className="textarea" defaultValue="Insert data here"></textarea>
      </div>
    )
  }
}

export default TextAreaContainer;
