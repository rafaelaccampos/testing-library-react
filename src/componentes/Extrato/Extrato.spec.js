import { render, screen } from '@testing-library/react';
import Extrato from './index';

describe('Deve renderizar lista de transações no extrato', () => {
  it('Deve ser capaz de validar se as transações estão aparecendo no extrato', () => {
    const transacoes = [
      {
        transacao: 'Depósito',
        valor: 100,
      },
    ];

    render(<Extrato transacoes={transacoes} />);

    const lista = screen.getByRole('listitem');

    expect(lista).toBeInTheDocument();
  });
});
