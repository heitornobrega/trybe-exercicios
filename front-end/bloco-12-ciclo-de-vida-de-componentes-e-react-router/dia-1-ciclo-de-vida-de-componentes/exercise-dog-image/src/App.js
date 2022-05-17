import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.fetchDogs = this.fetchDogs.bind(this);
    this.renderDogImg = this.renderDogImg.bind(this);
    this.chamaDog = this.chamaDog.bind(this);
    
    this.state = {
      message: '',
      status: undefined,
    }

  }
  async fetchDogs() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestobject = await requestReturn.json();
    this.setState({
      message: requestobject.message,
      status: requestobject.status,
    })
  }

  chamaDog() {
    console.log('hhe dog')
  }
  componentDidMount(){
    this.fetchDogs()
  }

  renderDogImg() {
    const {message} = this.state
    return (
      <div>
        <img src={message} alt='imagem de um dog' />
        <button type='button' onClick={ this.chamaDog }>Mais um dog</button>
      </div>
      
    )
  }
  
  render() {
    const {status} = this.state
    return (
      <div className="App">
        {!status ? <span>Loading....</span> : this.renderDogImg()}
      </div>
    );
  }
}

export default App;
