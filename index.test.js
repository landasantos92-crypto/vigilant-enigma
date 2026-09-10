const request = require('supertest');
const app = require('./index');

describe('Testes da API de Conversão Numérica', () => {
  test('GET /to-binary/10 deve retornar o binário 1010', async () => {
    const response = await request(app).get('/to-binary/10');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ decimal: 10, binary: '1010' });
  });

  test('GET /to-hex/255 deve retornar o hexadecimal FF', async () => {
    const response = await request(app).get('/to-hex/255');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ decimal: 255, hex: 'FF' });
  });
});