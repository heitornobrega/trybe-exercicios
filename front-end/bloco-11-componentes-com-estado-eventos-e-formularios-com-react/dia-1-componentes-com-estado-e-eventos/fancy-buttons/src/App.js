import React from 'react';
import './App.css';

class Btn extends React.Component{
  render() {
    const { nomeBtn, evento} = this.props;
    return (
      <button onClick={evento}>
        {nomeBtn}
    </button>
      );
  }
}


class App extends React.Component{
  constructor() {
    super()
    this.printTextA = this.printTextA.bind(this);
    this.printTextB = this.printTextB.bind(this);
    this.printTextC = this.printTextC.bind(this);
    this.state ={
      numCliquesA: 0,
      numCliquesB: 0,
      numCliquesC: 0
    }
  }
  printTextA() {
    this.setState((estadoAnterior, _props) =>
    ({numCliquesA: estadoAnterior.numCliquesA + 1})
    )
  }
  printTextB() {
    this.setState((estadoAnteriorB, _props) =>
    ({numCliquesB: estadoAnteriorB.numCliquesB + 1})
    )
  }
  
  printTextC() {
    this.setState((estadoAnteriorC, _props) =>
    ({numCliquesC: estadoAnteriorC.numCliquesC + 1})
    )
  }
  render() {
    // console.log(this.state.numCliques);
    return (
      <>
      <Btn nomeBtn={this.state.numCliquesA} evento={this.printTextA}/>
      <Btn nomeBtn={this.state.numCliquesB} evento={this.printTextB}/>
      <Btn nomeBtn={this.state.numCliquesC} evento={this.printTextC}/>
      </>
      );
  }
}

export default App;
