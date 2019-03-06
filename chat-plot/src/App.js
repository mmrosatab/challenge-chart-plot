import React, { Component } from 'react';
import './App.css';
import LargerContainer from './components/LargerContainer';

class App extends Component
{
  constructor(props)
  {
    super(props);
  }

  render(){
    return (
      <div className="app">
        <LargerContainer/>
      </div>
    )
  }
}

export default App;
