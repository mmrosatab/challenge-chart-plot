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
          <p className="TopText"><b>Mayara's Challenge</b></p>
        </div>        
        <div>
            <InputTextArea/>
        </div>
        <div>
          <BottomRect/>
        </div>

      </div> 
      
    ) 
  }
}

class InputTextArea extends Component
{
  render()
  {
    return <textarea>Insert your events</textarea>
  }

}

class InputUserArea extends Component
{
  render()
  {
    return (
    <div>
      <InputTextArea/>
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

class GenerateChartButton extends Component
{
  render()
  {
    return <button className="GenerateChartButton">GENERATE CHART</button>
  }
}

class BottomRect extends Component
{
  render()
  {
    return (
      <div class="Bottom">
        <GenerateChartButton/>
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
