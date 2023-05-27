import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Renderização input', () => {
  it('Deve ser capaz de renderizar o input de valor', () => {
    render(<Formulario />);

    const inputValor = screen.getByPlaceholderText('Digite um valor');

    expect(inputValor).toBeInTheDocument();
  });

  it('Deve ser capaz de renderizar o input de valor com o tipo number', () => {
    render(<Formulario />);

    const inputValor = screen.getByPlaceholderText('Digite um valor');

    expect(inputValor).toHaveAttribute('type', 'number');
  });

  it('Deve ser capaz de preencher o input de valor', () => {
    render(<Formulario />);

    const inputValor = screen.getByPlaceholderText('Digite um valor');

    userEvent.type(inputValor, '50');

    expect(inputValor).toHaveValue(50);
  });
});

describe('onSubmit', () => {
  it('Deve ser capaz de chamar o evento onSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);

    const botaoRealizarTransacao = screen.getByText('Realizar transação');

    userEvent.click(botaoRealizarTransacao);

    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
