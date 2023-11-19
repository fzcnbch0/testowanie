const request = require('supertest');
const express = require('express');
const { router: contactRouter } = require('../routes/kontakt.mjs');


const app = express();
app.use(express.json());
app.use('/', contactRouter);

describe('Contact Route Tests', () => {
  test('GET / should return the kontakt.html file', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toEqual('text/html; charset=UTF-8');

  });

  test('POST / should return "wyslano"', async () => {
    const response = await request(app).post('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('wyslano');
  });

  test('POST / should log the request body', async () => {
    const requestBody = { key: 'value' };
    const response = await request(app)
      .post('/')
      .send(requestBody);
    expect(response.status).toBe(200);

  });
});
