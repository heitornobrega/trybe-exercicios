import React from 'react';
import './App.css';



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
  constructor() {
    super()
    this.printTextA = this.printTextA.bind(this);
  }
  printTextA() {
    console.log(this)
    console.log("Eu fui clicado")
  }
  render() {
    console.log(this);
    return (
      <>
      <Btn nomeBtn="Eu" evento={this.printTextA}/>
      <Btn nomeBtn="Tu"  evento={printTextB}/>
      <Btn nomeBtn="Ele"  evento={printTextC}/>
      </>
      );
  }
}

export default App;
