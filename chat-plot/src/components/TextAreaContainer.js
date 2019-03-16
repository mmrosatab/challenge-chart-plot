import React, { Component } from 'react';
//import {setTimeout} from '../util/desinerTextArea';
//import MonacoEditor from 'react-monaco-editor';
//import DesignerTextArea from '../util/DesignerTextArea';

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
