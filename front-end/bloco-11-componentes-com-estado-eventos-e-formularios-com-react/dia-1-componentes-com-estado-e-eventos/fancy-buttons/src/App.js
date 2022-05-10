import logo from './logo.svg';
import React from 'react';
import './App.css';

function printTextA() {
  console.log("Eu fui clicado")
}

function printTextB() {
  console.log("Tu foi clicado")
}

function printTextC() {
  console.log("Ele foi clicado")
}



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
  render() {
    return (
      <>
        <Btn nomeBtn="Eu" evento={printTextA}/>
      <Btn nomeBtn="Tu"  evento={printTextB}/>
      <Btn nomeBtn="Ele"  evento={printTextC}/>
      </>
      );
  }
}

export default App;
