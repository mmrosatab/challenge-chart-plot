import React, { Component } from 'react';

class TextAreaContainer extends Component
{

  render()
  {
    console.log(this.props)
    return(
      <div className="textarea-container">
        <textarea className='textarea' on={this.props.value} onChange={this.props.handleChange}/>
      </div>
    )
  }
}

export default TextAreaContainer;
