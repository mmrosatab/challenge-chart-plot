import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

class DesignerTextArea extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
		position="absolute"
        width="100%"
        height="200"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        //editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default DesignerTextArea;