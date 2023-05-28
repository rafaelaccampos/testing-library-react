import { calculaNovoSaldo } from './index';

describe('Saldo', () => {
  it('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

    const saldo = 100;

    const novoSaldo = calculaRendimento(saldo);

    expect(novoSaldo).toBe(100.5);
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toBeCalledWith(saldo);
  });

  it('Deve diminuir o saldo quando o tipo de transação for transferência', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(50);
  });

  it('Deve aumentar o saldo quando o tipo de transação for depósito', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 100,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(200);
  });
});
