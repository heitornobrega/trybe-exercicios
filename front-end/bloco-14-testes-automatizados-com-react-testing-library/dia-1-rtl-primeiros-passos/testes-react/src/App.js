import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          poze do rodo
        </a>
        <label htmlFor='id-email'>
        email
                    <input type='email' id='id-email'/>
        </label>
        <button type='submit' value='Enviar' data-testid='enviar-btn'/>
        <button type='submit' value='voltar' />
      </header>
    </div>
  );
}

export default App;
