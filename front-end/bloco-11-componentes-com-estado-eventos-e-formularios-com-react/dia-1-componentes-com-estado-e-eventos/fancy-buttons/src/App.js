import React from 'react';
import './App.css';

class Btn extends React.Component{
  render() {
    const { nomeBtn, evento, classe} = this.props;
    return (
      <button onClick={evento} className={classe}>
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
    this.corBtnA = this.corBtnA.bind(this);
    this.corBtnB = this.corBtnB.bind(this);
    this.corBtnC = this.corBtnC.bind(this);
    this.state ={
      numCliquesA: 0,
      numCliquesB: 0,
      numCliquesC: 0,
      corAtualA: 'blue',
      corAtualB: 'blue',
      corAtualC: 'blue',
    }
  }
  printTextA() {
    this.setState((estadoAnterior, _props) =>
    ({numCliquesA: estadoAnterior.numCliquesA + 1})
    )
    this.corBtnA();
  }
  printTextB() {
    this.setState((estadoAnteriorB, _props) =>
    ({numCliquesB: estadoAnteriorB.numCliquesB + 1})
    )
    this.corBtnB();
  }
  
  printTextC() {
    this.setState((estadoAnteriorC, _props) =>
    ({numCliquesC: estadoAnteriorC.numCliquesC + 1})
    )
    this.corBtnC();
  }
  corBtnA() {
    this.setState((estadoCor, _props) => {
      if (this.state.numCliquesA % 2 !== 0) {
        return {corAtualA: estadoCor.corAtualA = 'red'}
      } else {
        return {corAtualA: estadoCor.corAtualA = 'blue'}
      }
    }
    )
  }

  corBtnB() {
    this.setState((estadoCor, _props) => {
      if (this.state.numCliquesA % 2 !== 0) {
        return {corAtualB: estadoCor.corAtualB = 'red'}
      } else {
        return {corAtualB: estadoCor.corAtualB = 'blue'}
      }
    }
    )
  }

  corBtnC() {
    this.setState((estadoCor, _props) => {
      if (this.state.numCliquesC % 2 !== 0) {
        return {corAtualC: estadoCor.corAtualC = 'red'}
      } else {
        return {corAtualC: estadoCor.corAtualC = 'blue'}
      }
    }
    )
  }
  render() {
    // console.log(this.state.numCliques);
    return (
      <>
        <Btn
          nomeBtn={this.state.numCliquesA}
          evento={this.printTextA}
          classe={this.state.corAtualA}
        />
        <Btn
          nomeBtn={this.state.numCliquesB}
          evento={this.printTextB}
          classe={this.state.corAtualB}

        />
        <Btn
          nomeBtn={this.state.numCliquesC}
          evento={this.printTextC}
          classe={this.state.corAtualC}
        />
      </>
      );
  }
}

export default App;
