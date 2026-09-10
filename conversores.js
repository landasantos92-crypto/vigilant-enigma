function decimalParaHexadecimal(decimal) {
  return Number(decimal).toString(16).toUpperCase();
}

function decimalParaOctal(decimal) {
  return Number(decimal).toString(8);
}

module.exports = {
  decimalParaHexadecimal,
  decimalParaOctal
};