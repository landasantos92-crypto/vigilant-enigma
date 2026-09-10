const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const app = express();
const port = 3000;

const swaggerDocument = yaml.load('./documentacao.yml');

// Documentação
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Endpoints
app.get('/to-binary/:decimal', (req, res) => {
  const decimal = parseInt(req.params.decimal, 10);
  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Invalid decimal number" });
  }
  const binary = decimal.toString(2);
  res.json({ decimal, binary });
});

app.get('/to-hex/:decimal', (req, res) => {
  const decimal = parseInt(req.params.decimal, 10);
  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Invalid decimal number" });
  }
  const hex = decimal.toString(16).toUpperCase();
  res.json({ decimal, hex });
});

// Inicialização do servidor
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando com sucesso na porta ${port}!`);
  });
}

module.exports = app;