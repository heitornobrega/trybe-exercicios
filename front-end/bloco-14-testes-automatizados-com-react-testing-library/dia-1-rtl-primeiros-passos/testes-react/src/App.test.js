import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/poze do rodo/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderiza input de texto', () => {
  render(<App />);
  const emailInput = screen.getByLabelText('email');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveProperty('type', 'email');
});
//Acessar os elementos da tela;
//Interagir com os elementos (Se necessário);
//Fazer os testes;

test('Testa a presença de dois btns na página', () => {
  render(<App />);
  const sendButton = screen.getAllByRole('button');
  expect(sendButton).toHaveLength(2);
})

test('Testa a presença do btn enviar', () => {
  //renderizar elementos na tela;
  //interagir com os elementos;
  //realizar os testes;
  render(<App />);
  const btnEnviar = screen.getByTestId('enviar-btn');
  expect(btnEnviar).toBeInTheDocument();
  expect(btnEnviar).toHaveValue('Enviar');
  expect(btnEnviar).toHaveProperty('type', 'submit')
})