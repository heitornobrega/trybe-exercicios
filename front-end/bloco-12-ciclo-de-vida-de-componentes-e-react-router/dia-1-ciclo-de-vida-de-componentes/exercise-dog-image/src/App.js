import React from 'react';
class App extends React.Component {
state = {
  message: '',
  status: undefined,
}
// fetchDog = async () => {
// const dadosRecebidos = await fetch('https://dog.ceo/api/breeds/image/random');
// const objetoRecebido = await dadosRecebidos.json();
// this.setState(
// {
// message: objetoRecebido.message,
// status: objetoRecebido.status,
// }
// )
// }
componentDidMount() {
  this.fetchDog();
}
shouldComponentUpdate(_a, b) {
  if (b.message.includes('terrier')) {
    return false;
  }
  return true;
}
componentDidUpdate() {
  const { message } = this.state;
  localStorage.setItem('auau', message);
  alert(message.split('/')[4]);
}
fetchDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((dados) => dados.json())
    .then((obj) => this.setState({
      message: obj.message,
      status: obj.status,
    }));
}
render() {
  const { message, status } = this.state;
  return (
    !status ? <p>Loading...</p>
      : <div>
        <img src={ message } alt="Dog aleatório" width="300px" />
        <button type="button" onClick={ this.fetchDog }>Próximo cachorro</button>
      </div>
  );
}
}
export default App;