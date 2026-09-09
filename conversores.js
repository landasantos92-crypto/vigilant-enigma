function decimalParaHex(numero) {
  return numero.toString(16).toUpperCase();
}

function decimalParaOctal(numero) {
  return numero.toString(8);
}

module.exports = { decimalParaHex, decimalParaOctal };