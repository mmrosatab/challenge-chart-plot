import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Layout extends Component
{
  render()
  {
    return (
      <div>
        <div className="Top">
          <p class="TopText"><b>Mayara's Challenge</b></p>
        </div>
        
        <div>
          
        </div>
        
        <div>

        </div>
        
        <div>
            <BottomRect/>
        </div>
      </div> 
      
    ) 
  }
}

class InputTextBox extends Component
{
  render()
  {
    return <input>Digite seu texto</input>
  }

}

class InputUserArea extends Component
{
  render()
  {
    return (
    <div>
      <InputTextBox/>
    </div>
    )
  }
}

class ChartPlot extends Component
{
  render()
  {
    return
  }
}

class SendButton extends Component
{
  render()
  {
    return <button class="SendButton">GENERATE CHART</button>
  }
}

class BottomRect extends Component
{
  render()
  {
    return (
      <div class="Bottom">
        <SendButton/>
      </div>
    )
  }
}


class App extends Component
{
  constructor(props)
  {
    super(props);
  }

  render(){
    return (
      <div className="App">
      <Layout/>
      </div>
    );
  }
}

export default App;
