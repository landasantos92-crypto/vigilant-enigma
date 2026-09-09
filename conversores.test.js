const { decimalParaHex } = require('./conversores');

test('deve converter o número 255 para FF', () => {
  expect(decimalParaHex(255)).toBe('FF');
});
test('deve converter o número 8 para octal 10', () => {
  const { decimalParaOctal } = require('./conversores');
  expect(decimalParaOctal(8)).toBe('10');
});