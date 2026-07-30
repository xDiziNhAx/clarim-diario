import {render, screen} from '@testing-library/react';
import {memoryRouter} from 'react-router-dom';
import {AuthProvider} from '../../context/AuthContext';
import Header from './Header';

function renderHeader() {
  render(
    <AuthProvider>
      <MemoryRouter>
        <Header tema="light" aoAlternarTema={() => {}} />
      </MemoryRouter>
    </AuthProvider>
  );    
}

describe('Header', () => {
beforeEach(() => localStorage.clear());
})

it('should render the header with light theme', () => {
  renderHeader();
 expect(screen.getByText('Entrar')).toBeInTheDocument();
})

it('mostra a saudação com o nome do usuário quando ele está logado', () => {
    localStorage.setItem('usuario', JSON.stringify({ nome: 'J. Jonah Jameson' }));   
    renderHeader();
    expect(screen.getByText('Olá, J. Jonah Jameson!')).toBeInTheDocument();
});
