const { decimalParaHexadecimal, decimalParaOctal } = require('./conversores');

describe('Testes das Funções de Conversão', () => {
  test('converte decimal para hex', () => {
    expect(decimalParaHexadecimal(255)).toBe('FF');
  });

  test('converte decimal para octal', () => {
    expect(decimalParaOctal(10)).toBe('12');
  });
});